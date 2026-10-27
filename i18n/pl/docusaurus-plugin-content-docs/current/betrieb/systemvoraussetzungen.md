---
sidebar_position: 1
---
# Wymagania systemowe i architektura

Klacks działa jako stos Docker na Państwa własnym serwerze. Ta strona opisuje, które usługi się uruchamiają i jak dobrać zasoby hosta — wraz z wartościami pomiarowymi, na których opiera się zalecenie.

## Architektura: pięć usług

Pakiet On-Premise uruchamia wyłącznie to, co jest potrzebne do działania:

| Usługa | Obraz | Zadanie |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Baza danych; rozszerzenie wektorowe jest już wbudowane |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; przy starcie migruje i wypełnia bazę danych |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interfejs Angular, udostępniany przez nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | instaluje podpisane aktualizacje (api i ui razem) |
| `klacks-proxy` | `nginx:alpine` | Zakończenie TLS i reverse proxy |

Wewnętrzne usługi producenta (rozwojowa baza wiedzy, marketing, marketplace, pgAdmin, certbot, interfejs Blazor) celowo **nie** są dołączone. Jako operator widzą Państwo więc tylko własny stos.

## Czego wymaga host

- **8 GB RAM i 4 vCPU** jako minimum (zob. wyliczenie poniżej).
- Docker Desktop (Windows/macOS) lub Docker Engine z Compose v2 (Linux), **amd64 lub arm64**.
- Wolne porty **80 i 443** — można je zmienić za pomocą `HTTP_PORT` i `HTTPS_PORT`.
- **Wychodzący** dostęp HTTPS do `ghcr.io` (obrazy) i `github.com` (podpisany manifest aktualizacji).
- Opcjonalnie: dostęp do `klacks-software.ch:7553` dla pakietów krajowych i wtyczek językowych z marketplace.

## Pamięć: dlaczego 8 GB i co dzieje się na mniejszych hostach

Klacks uruchamia swoje dwa modele wyszukiwania (embedder i reranker) **lokalnie w procesie** `klacks-api`. Obie sesje ONNX pozostają w pamięci na stałe — nie są zwalniane po każdym pytaniu.

Zmierzono na hoście produkcyjnym producenta 12.09.2026:

- Obciążenie bazowe procesu: ok. 1'017 MB
- Embedder: ok. 1'171 MB
- Reranker: ok. 116 MB
- Suma: plateau na poziomie około **2'304 MB**
- Przy limicie 2'560 MB jądro zakończyło kontener przy 2'471 MB (OOM).

Dlatego dołączony Compose ustawia dla `klacks-api` **3'584M** i 3,0 CPU, przy wyłączonym zwalnianiu w stanie bezczynności. Dla całego stosu: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; reszta z 8 GB pozostaje dla systemu operacyjnego i pamięci podręcznej plików.

**Mniejszy host, około 3 GB dla `klacks-api`:** Proszę ustawić w `.env` **obie** poniższe linie — nigdy samej linii z pamięcią:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

Zwalnianie w stanie bezczynności zwalnia sesję po 30 minutach bez dostępu. Cena: następne pytanie po tym czasie ładuje ją ponownie (około 2,2–2,9 s dla embeddera, około 1,1 s dla rerankera). Wartości od 1 do 5 są podnoszone do 5, `0` oznacza: nigdy nie zwalniaj.

## CPU: mniej rdzeni tylko spowalnia, niczego nie psuje

Wyszukiwanie działa także z mniejszą liczbą rdzeni, ale wolniej — reranker jest krokiem najbardziej wymagającym obliczeniowo. Zmierzono: 2'994–3'163 ms dla 25 kandydatów przy 3,0 CPU wobec 4'339–4'860 ms przy 1,5 CPU, gdzie usługa dodatkowo spędziła 7,15 s w stanie ograniczenia. Dla mniejszego hosta:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Przydziały CPU stosu sumują się celowo do 4,75 przy 4 vCPU: przydział jest górną granicą, a nie rezerwacją, a usługi nigdy nie osiągają szczytu jednocześnie.

## Warto wiedzieć

- **Hasła i klucze pozostają stałe.** `POSTGRES_PASSWORD` jest wtopione w wolumin danych przy pierwszym uruchomieniu — późniejsza zmiana osieroci bazę danych. `JWT_SECRET` podpisuje sesje; zmiana wylogowuje wszystkich użytkowników. Instalator zachowuje oba przy każdym ponownym uruchomieniu.
- **`COMPOSE_PROJECT_NAME=klacks`** jest na stałe zdefiniowane, aby host i usługa aktualizacji niezależnie od nazwy folderu wskazywały ten sam projekt Compose. Po instalacji nie należy tego zmieniać.
- **`KnowledgeIndex__WarmupEnabled=false` nie jest opcją oszczędzania pamięci.** Przesuwa tylko budowę wyszukiwania ze startu do pierwszego zapytania czatu; w trybie ciągłym sesje są obecne tak samo. Przydatne tylko wtedy, gdy host przy starcie zawodzi z powodu pamięci.
- **Więcej niż jedna instancja API?** Wtedy potrzebny jest backplane SignalR. Klacks go nie dostarcza: należy samodzielnie przygotować usługę zgodną z RESP (na przykład Valkey — od wersji 7.4 na licencji BSD-3, w przeciwieństwie do Redis) i włączyć przygotowany w szablonie nginx sticky upstream (`ip_hash`). Bez backplane działa dokładnie jedna instancja `klacks-api`, jak w każdej dzisiejszej instalacji.
- **Profile krajów:** Instalator zna 30 profili: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Profil ustawia przy pierwszym uruchomieniu język, kraj/region i strefę czasową, kalendarz świąt, weekend i początek tygodnia, limity czasu pracy, wymiar urlopu, dodatki, domyślny system docelowy eksportu płacowego (dla Szwajcarii na przykład `abaconnect-ch`) oraz szablony branżowe — dla Spitex na przykład szablon reguł planowania „CH Spitex Standard". Bez profilu Klacks startuje neutralnie, a wszystko konfigurują Państwo ręcznie.

---

*Pytania dotyczące eksploatacji? [Społeczność Klacks na Discordzie](https://discord.gg/YRP8p2abVC).*

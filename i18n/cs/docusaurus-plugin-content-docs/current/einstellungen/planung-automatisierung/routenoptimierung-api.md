---
sidebar_position: 4
---

V nastavení Nastavení > OpenRoute zadáváte API klíč pro externí službu openrouteservice.org, kterou Klacks využívá pro optimalizaci tras.

## Jak to funguje

OpenRouteService počítá dobu jízdy a vzdálenosti — pro jízdu autem, na kole a pěšky — a tím poskytuje základ pro optimalizaci tras v Klacks. Do jediného pole na této stránce zadáte svůj osobní API klíč. Bezplatný klíč získáte přes registrační odkaz na openrouteservice.org, který je na stránce uveden.

## Dobré vědět

- Klíč se odesílá přímo z prohlížeče na openrouteservice.org, a proto je záměrně zobrazen **v čitelné podobě** namísto maskování (`***`) — na rozdíl například od e-mailových hesel. Je to tak zamýšleno, abyste rozpoznali případný překlep nebo prošlý klíč, nejde o chybu zobrazení.
- V databázi je klíč přesto uložen zašifrovaně.
- Bez platného klíče optimalizace tras nefunguje — doby jízdy a vzdálenosti pak nelze vypočítat.
- Pro samotný převod adres na souřadnice (geokódování) používá Klacks jinou, samostatnou službu — tento klíč slouží výhradně pro výpočet tras.

---
*Vyzkoušejte si to přímo: [Klacks Playground](https://klacks-software.ch:7643) — přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*

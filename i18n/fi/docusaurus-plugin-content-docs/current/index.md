---
sidebar_position: 1
slug: /
---

# Tervetuloa Klacks-dokumentaatioon

**Klacks** on avoimen lähdekoodin alusta henkilöstön työvuorosuunnitteluun vuoro- ja käyntipohjaisille toimialoille: suunnittele palvelut automaattisesti, optimoi reitit, ohjaa tekoälyavustajan avulla — On-Premise, valitsemallasi tekoälymallilla. Kotihoidolle, sairaaloille, turvallisuus-, siivous- ja logistiikkayrityksille.

Tämä wiki selittää pienin palasin, miten Klacks toimii. Jokainen sivu on luettu muutamassa minuutissa — ja kaiken voi kokeilla heti julkisessa Playgroundissa.

## Aloita heti

| | |
|---|---|
| 🎮 **Kokeile** | [Klacks Playground](https://klacks-software.ch:7643) — kirjautuminen `admin@test.com` / `P@ssw0rt1` (julkinen testi-instanssi, tiedot nollataan päivittäin) |
| 📦 **Asenna** | [Lataa On-Premise-paketti](https://github.com/HeribertG/Klacks.Api/releases/latest/download/klacks-onprem.zip) — yksi komento, ja Klacks on käynnissä |
| 💬 **Kysymykset ja keskustelu** | [Klacks-yhteisö Discordissa](https://discord.gg/YRP8p2abVC) |
| 🌐 **Verkkosivusto** | [klacks-software.ch](https://klacks-software.ch) |

## Palaset

**Tietoa Klacksista**
- [Klacksin taustalla oleva filosofia](./ueber-klacks/philosophie.md) — tietosuvereniteetti, vapaus valita tekoäly, avoin lähdekoodi

**Ensiaskeleet**
- [Asennus ja Playground](./erste-schritte/installation-und-playground.md) — Muutamassa minuutissa käynnissä olevaan Klacksiin
- [Ohjattu käyttöönottokierros](./erste-schritte/gefuehrte-einrichtungs-tour.md) — Klacksy opastaa sinut perusasetusten läpi
- [Henkilöstö ja perustiedot](./erste-schritte/mitarbeiter-und-stammdaten.md) — Kaiken suunnittelun perusta
- [Roolit ja käyttöoikeudet](./erste-schritte/rollen-und-rechte.md) — Supervisor ja Admin, selkeästi eroteltuna

**Suunnittelu**
- [Automaattinen suunnittelu: suunnitelma sekunneissa](./planen/auto-planung.md) — Suunnitelma sekunneissa, yhdellä klikkauksella
- [Suunnitteluruudukko: interaktiivinen aikamatriisisi](./planen/plan-raster.md) — Interaktiivinen aikamatriisi vedä ja pudota -toiminnolla
- [Modulaarinen suunnittelu: hajota ja hallitse](./planen/modulare-planung.md) — Suurten suunnitelmien jakaminen ilman päällekkäisyyksiä
- [Hyväksymisprosessi: luonnoksesta sitovaan suunnitelmaan](./planen/freigabe-workflow.md) — Luonnoksesta sinetöityyn suunnitelmaan
- [Suunnittelusäännöt](./planen/planungsregeln.md) — Lepoajat, rajat ja työpäivät
- [Jakson päättäminen](./planen/periodenabschluss.md) — Kuukausien sitova päättäminen

**Optimointi ja seuranta**
- [Tour- ja reittioptimointi](./optimieren/touren-und-routenoptimierung.md) — Paras reitti, automaattisesti
- [Poissaolot silmällä pidettynä](./optimieren/absenzen-im-blick.md) — Lomat ja sairauspoissaolot Gantt-yleiskuvana
- [Resurssimonitori](./optimieren/ressourcen-monitor.md) — Käyttöaste yhdellä silmäyksellä
- [Pyhäpäivät ja kalenteri](./optimieren/feiertage-und-kalender.md) — Tarkkuudella kuntaa myöten
- [Taitojen väliset suhteet](./optimieren/skill-beziehungen.md) — Klacksy oppii itse, mitkä sen kyvyistä kuuluvat yhteen
- [Raporttisuunnittelija](./optimieren/report-designer.md) — Rakenna omia raportteja

**Tekoälyavustaja**
- [Klacksy: tekoälyavustajasi suunnitteluun](./ki/klacksy-ki-assistent.md) — Suunnittelu puheella, vapaalla mallivalinnalla

**Asetukset**

*Perustiedot ja organisaatio*
- [Toimipisteet](./einstellungen/stammdaten-organisation/branches.md), [Maat](./einstellungen/stammdaten-organisation/laender.md), [Ylläpitäjän osoite](./einstellungen/stammdaten-organisation/owner-address.md), [Työn perusasetukset](./einstellungen/stammdaten-organisation/work-setting.md), [Pätevyysluettelo](./einstellungen/stammdaten-organisation/qualifikationen.md), [Sopimusmallit](./einstellungen/stammdaten-organisation/vertragsvorlagen.md)

*Suunnittelu ja automaatio*
- [Suunnittelusääntöjen oletusarvot](./einstellungen/planung-automatisierung/planungsregeln-standardwerte.md), [Kalenterin valinta](./einstellungen/planung-automatisierung/kalenderauswahl.md), [Ohjatun toiminnon asetukset](./einstellungen/planung-automatisierung/wizard-einstellungen.md), [Reittioptimoinnin API](./einstellungen/planung-automatisierung/routenoptimierung-api.md), [Ryhmien näkyvyys](./einstellungen/planung-automatisierung/gruppen-sichtbarkeit.md)

*Klacksy-asetukset*
- [LLM-tarjoajat ja mallit](./einstellungen/klacksy-konfiguration/llm-provider-und-modelle.md), [Persoonallisuus](./einstellungen/klacksy-konfiguration/persoenlichkeit.md), [Puheen syöttö/tuotto](./einstellungen/klacksy-konfiguration/sprachein-ausgabe.md), [Autonomia-tasot](./einstellungen/klacksy-konfiguration/autonomie-stufen.md), [Mallin yhteystesti](./einstellungen/klacksy-konfiguration/modell-verbindungstest.md), [Taitoehdotukset](./einstellungen/klacksy-konfiguration/skill-vorschlaege.md), [Makrot](./einstellungen/klacksy-konfiguration/makros.md)

*Viestintä ja integraatio*
- [Sähköpostin lähetys](./einstellungen/kommunikation-integration/email-versand.md), [Sähköpostin vastaanotto](./einstellungen/kommunikation-integration/email-empfang.md), [DeepL-käännös](./einstellungen/kommunikation-integration/deepl-uebersetzung.md), [Identiteetintarjoaja](./einstellungen/kommunikation-integration/identity-provider.md), [ERP-siirtopisteet](./einstellungen/kommunikation-integration/erp-uebernahmepunkte.md), [Viestintäkanavat](./einstellungen/kommunikation-integration/messaging-kanaele.md)

*Järjestelmä ja tietoturva*
- [Käyttäjähallinta](./einstellungen/system-sicherheit/benutzerverwaltung.md), [Henkilökohtaiset käyttöoikeustunnukset](./einstellungen/system-sicherheit/personal-access-tokens.md), [Tietojen säilytys](./einstellungen/system-sicherheit/datenaufbewahrung.md), [Päivitykset](./einstellungen/system-sicherheit/updates.md), [Ominaisuuslaajennukset](./einstellungen/system-sicherheit/feature-plugins.md), [Kielilaajennukset](./einstellungen/system-sicherheit/sprach-plugins.md), [Roskapostisäännöt](./einstellungen/system-sicherheit/spam-regeln.md), [Yleiset asetukset](./einstellungen/system-sicherheit/allgemeine-einstellungen.md)

---
*Klacks on avointa lähdekoodia MIT-lisenssillä — [lähdekoodi GitHubissa](https://github.com/HeribertG/Klacks.Api).*

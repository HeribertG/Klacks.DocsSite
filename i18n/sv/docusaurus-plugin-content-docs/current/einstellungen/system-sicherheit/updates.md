---
sidebar_position: 4
---

# Uppdateringar

Under Inställningar > Uppdateringar ser du den för närvarande installerade och den senaste tillgängliga Klacks-versionen, styr det automatiska uppdateringsbeteendet och startar vid behov manuellt en uppdatering eller en rollback.

## Så fungerar det

**Status:** Kortet visar den aktuella versionen, om en nyare version är tillgänglig, samt den pågående eller senast utförda uppdateringsåtgärden med status.

**Starta uppdatering eller rulla tillbaka:** Via "Installera nu" startar du manuellt en tillgänglig uppdatering; "Ångra" ångrar den senaste lyckade uppdateringsåtgärden. Båda åtgärderna är spärrade så länge en åtgärd redan pågår.

**Konfigurera automatik:**
- **Aktivera automatiska uppdateringar** slår på eller av den automatiska uppdateringskontrollen och genomförandet.
- **Endast meddela** utlöser ingen automatisk uppdatering, men meddelar när en ny version är tillgänglig.
- **Kanal** väljer mellan `Stable` och `Beta` som uppdateringskälla.
- **Kontrollintervall** (timmar) och ett **underhållsfönster** (start-/sluttid) anger hur ofta och inom vilket tidsfönster kontroll respektive installation sker.
- **Antal sparade säkerhetskopior** avgör hur många säkerhetskopior som behålls före en migrering, innan äldre tas bort automatiskt.

**Historik:** En tabell listar de senaste uppdateringsåtgärderna med typ, målversion, status och tidpunkt för begäran.

## Bra att veta

- Före varje migrering skapar Klacks automatiskt en säkerhetskopia — utan säkerhetskopia genomförs ingen migrering.
- Om hälsokontrollen misslyckas efter en uppdatering rullar Klacks automatiskt tillbaka till föregående version (återställ säkerhetskopia → aktivera gammal version → kontrollera igen); bara om denna rollback i sig misslyckas krävs manuellt ingripande.
- En manuell rollback återställer specifikt den säkerhetskopia som hör till den senaste lyckade åtgärden och aktiverar dess utgångsversion — inte helt enkelt "en version tillbaka".
- Uppdatering och rollback är åtgärder som endast Admin kan utföra.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

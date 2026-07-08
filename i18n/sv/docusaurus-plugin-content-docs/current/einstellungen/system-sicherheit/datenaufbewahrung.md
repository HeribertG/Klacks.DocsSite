---
sidebar_position: 3
---

# Dataretention

Under Inställningar > Dataretention anger du hur länge borttagna poster — Medarbetare, adresser, grupper, arbetspass, arbetstider, frånvaro, raster med mera — sparas i systemet innan de tas bort permanent.

## Så fungerar det

**Tvåstegsborttagning:** När du tar bort en post i Klacks markeras den till en början bara med en soft-delete-markering (markerad som borttagen, men fortfarande fysiskt kvar). Först när den här konfigurerade fristen har löpt ut tar en dagligen körande bakgrundstjänst bort de markerade raderna **fysiskt och permanent** från databasen — över samtliga berörda tabeller, inte bara för ett enskilt område.

**Ställa in retentionsfrist:** Inmatningsfältet accepterar värden mellan 30 och 36 500 dagar (ungefär 1 månad till 100 år); Klacks visar dessutom fristen i år/månader. Standardvärdet är 3 650 dagar (10 år).

## Bra att veta

- En förkortning av fristen påverkar även redan befintliga, sedan länge borttagna poster: Allt som är äldre än den nya fristen tas bort vid nästa körning av bakgrundstjänsten — kontrollera innan en förkortning om detta är önskvärt.
- Den fysiska borttagningen är slutgiltig — därefter finns ingen återställning, inte ens via supporten.
- Denna inställning är den tekniska grunden för de raderingsfrister som beskrivs i integritetspolicyn; den gäller globalt för alla datatyper som stödjer soft delete och kan inte konfigureras per modul.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

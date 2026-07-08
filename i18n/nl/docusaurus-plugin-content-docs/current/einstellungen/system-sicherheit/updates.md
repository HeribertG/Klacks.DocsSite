---
sidebar_position: 4
---

# Updates

Onder Instellingen > Updates ziet u de momenteel geïnstalleerde en de nieuwste beschikbare Klacks-versie, stuurt u het automatische updategedrag aan en start u indien nodig handmatig een update of een rollback.

## Zo werkt het

**Status:** de kaart toont de huidige versie, of er een nieuwere versie beschikbaar is, en de lopende of laatst uitgevoerde update-operatie met status.

**Update starten of terugdraaien:** via "Nu installeren" start u handmatig een beschikbare update; "Ongedaan maken" draait de laatst geslaagde update-operatie terug. Beide acties zijn geblokkeerd zolang er al een operatie loopt.

**Automatisering configureren:**
- **Automatische updates activeren** schakelt de automatische update-check en -uitvoering in of uit.
- **Alleen melden** start geen automatische update, maar meldt wel wanneer een nieuwe versie beschikbaar is.
- **Kanaal** kiest tussen `Stable` en `Beta` als updatebron.
- **Controle-interval** (uren) en een **onderhoudsvenster** (start-/eindtijd) bepalen hoe vaak en binnen welk tijdvenster er gecontroleerd respectievelijk geïnstalleerd wordt.
- **Aantal bewaarde back-ups** bepaalt hoeveel back-ups vóór een migratie worden bewaard, voordat oudere automatisch worden verwijderd.

**Geschiedenis:** een tabel toont de laatste update-operaties met soort, doelversie, status en tijdstip van de aanvraag.

## Goed om te weten

- Vóór elke migratie maakt Klacks automatisch een back-up — zonder back-up wordt geen migratie toegepast.
- Als de gezondheidscontrole na een update mislukt, draait Klacks automatisch terug naar de vorige versie (back-up herstellen → oude versie activeren → opnieuw controleren); alleen wanneer deze rollback zelf mislukt, blijft handmatig ingrijpen nodig.
- Een handmatige rollback herstelt gericht de back-up die bij de laatst geslaagde operatie hoort en activeert de bijbehorende uitgangsversie — niet zomaar "één versie terug".
- Update en rollback zijn acties die alleen voor admins beschikbaar zijn.

---
*Direct uitproberen: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, gegevens worden dagelijks teruggezet.*

---
sidebar_position: 5
---

Under Inställningar > Synlighet av grupper per användare bestämmer du vilka grupper — och därmed vilken tillhörande data — en enskild användare får se.

## Så fungerar det

Listan visar alla användare med namn och antalet root-grupper som tilldelats (synliga) för dem. Ett klick på siffran öppnar ett formulär med en kryssrutelista över alla root-grupper; här markerar du vilka grupper denna användare får se. Om en root-grupp godkänns gäller det automatiskt även för alla dess undergrupper.

Administratörer är undantagna från denna begränsning: för dem är knappen inaktiverad, och den visade siffran motsvarar alltid det totala antalet root-grupper — Admin ser i grunden allt.

## Bra att veta

- För en vanlig (icke-admin) användare utan någon tilldelning betyder "0 tilldelade grupper": denna användare ser för närvarande **ingenting** i gruppavgränsade områden (t.ex. Dashboard, kundlista) — det är inget fel, utan en direkt följd av den saknade tilldelningen.
- Undantag: finns det för närvarande **inga** grupper alls i systemet ser alla användare allt — installationer utan gruppstruktur behöver alltså inte underhålla denna inställning.
- Skapa gruppstrukturen under stamdata först, innan du gör tilldelningar här — utan befintliga grupper finns det inget att kryssa i här.
- Denna inställning styr **synligheten** av data, inte en rolls grundläggande **rättigheter** — roller/rättigheter hanteras oberoende av detta.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

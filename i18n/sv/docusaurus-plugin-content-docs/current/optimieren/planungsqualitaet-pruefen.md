---
sidebar_position: 7
---

# Kontrollera planeringskvaliteten: överträdelser, luckor och överhoppat

Efter en körning av planeringsassistenterna lägger Klacks tre diagnostabeller bredvid resultatet: var planen stöter på en regel, var en kvalifikation saknas och vad som inte planerades in alls.

## Så fungerar det

De tre rapporterna visas i dialogen för respektive planeringsassistent — inte i planeringsrutnätet. De hör till resultatet av en assistentkörning och är endast synliga för administratörer, eftersom den automatiska planeringen som helhet kräver adminrollen. Varje rapport anger antalet poster i titeln och **visas inte alls om den inte hittat något** — en saknad ruta är alltså goda nyheter.

**Så når du dialogerna:** Trollstavsknappen i schemat startar i standardläget direkt en planeringskörning, utan att visa någon dialog. Med **Ctrl+Skift+H** växlar administratörer knappen till en rullgardinsmeny med de enskilda planeringsassistenterna (Plan, Fuzzy Harmonizer, Holistic Harmonizer, Background Optimizer, Recovery) — först via den menyn öppnas dialogerna med diagnostabellerna.

**Kvalifikationsluckor** visas tillsammans med resultatet, alltså *innan* du tar över det. Kolumner: Allvarlighetsgrad, Skift, Datum, Nödvändig kvalifikation, Orsak — plus en kolumn "Medarbetare", så snart minst en rad anger en person. Som orsak anges *Saknas*, *Utgången* eller *Nivå för låg*. Bakom detta ligger två olika fall: Antingen förblev en skiftplats tom, eftersom ingen tillgänglig person hade den nödvändiga kvalifikationen — då anger raden ingen person. Eller så fanns en person kvar på ett skift som personen inte är kvalificerad för — då står namnet med. Saknas kvalifikationen bara i systemet registrerar du den hos personen; [Kvalifikationskatalogen](../einstellungen/stammdaten-organisation/qualifikationen.md) beskriver hur kvalifikationer underhålls. I annat fall schemalägger du någon annan eller anpassar skiftets krav.

**Compliance-överträdelser** visas *efter* att du har tagit över resultatet. Kolumner: Datum, Medarbetare, Kommentar; kommentaren anger den överträdda regeln i klartext tillsammans med de konkreta värdena. Röda rader är fel, gula varningar och anmärkningar. Hos de båda harmoniseringsassistenterna visar rapporten uteslutande vad det nya scenariot **ytterligare** tillför jämfört med det verkliga schemat — och därutöver hur många av dessa överträdelser som förs i blockläge. Dessa förhindrar att scenariot tas över förrän de är åtgärdade eller uttryckligen överskrivna av en behörig person.

**Överhoppade placeringar** finns bara hos assistenten för skiftplaneringen, likaså efter övertagandet — och genomgående röda. Kolumner: Datum, Medarbetare, Skift, Orsak. Här står inte vad som planerades, utan vad Klacks medvetet **inte** skrivit: tilldelningar som skulle ha brutit mot en regel som förs i blockläge. Orsaken visas som en kort kategori ("Vilotid för kort", "För många sammanhängande arbetsdagar", "Tidskollision" …). Beroende på situationen erbjuder Klacks behöriga personer att ändå ta över körningen med override; alla andra får hänvisningen att upprepa assistenten med aktiverad override eller be en behörig person om det. Varje override loggas.

Vilka regler som kontrolleras och hur strikt de gäller bestämmer du i [Planeringsreglerna](../planen/planungsregeln.md); hur planen egentligen uppstår beskrivs i [Autoplanering: schemat på sekunder](../planen/auto-planung.md).

## Bra att veta

- En blockerad post förkastar inte hela planen: Bara de berörda tilldelningarna faller bort, de rena posterna för samma person skrivs ändå.
- För allvarlighetsgraden hos kvalifikationsluckor gäller en enkel regel: **Fel** endast när en kvalifikation markerad som obligatorisk helt saknas. En utgången kvalifikation, en för låg nivå och varje valfritt krav visas som **Varning**.
- En tom skiftplats dyker bara upp i kvalifikationsluckorna om verkligen ingen tillgänglig person kom i fråga. Förblev den tom av andra skäl är det vanlig underbemanning och rapporteras inte här.
- Körs den automatiska planeringen som en helhetskörning meddelar Klacks resultatet bara som en kort infälld notis med antalet kvalifikationsluckor — de utförliga tabellerna hör till dialogerna för de enskilda assistenterna.
- Rapporterna är rena vyer: De går inte att redigera och ändrar ingenting. Korrigeringar görs i [Planeringsrutnätet: din interaktiva tidsmatris](../planen/plan-raster.md) eller genom en ny körning.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

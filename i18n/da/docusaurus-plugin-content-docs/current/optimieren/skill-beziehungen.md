---
sidebar_position: 5
---

KI-assistenten Klacksy lærer af den daglige brug, hvilke af dens færdigheder (skills) der hører sammen — og vælger derved de rette skills mere målrettet næste gang.

## Sådan fungerer det

Klacksy observerer i baggrunden, hvilke skills der ofte bruges sammen eller efter hinanden i en session, og udleder heraf **relationer**. Læringsprocessen kører automatisk hver 6. time. Siden Skill-relationer viser alle registrerede relationer; administratorer beslutter, om de skal overtages eller kasseres.

**Relationstyper**
- *Rækkefølge:* Skill A bruges regelmæssigt før skill B.
- *Fælles nødvendige:* Begge skills optræder ofte i samme session, uden fast rækkefølge.

**Kilde**
- *Lært:* Beregnet ud fra reelle brugsdata — høj pålidelighed.
- *Afledt:* Logisk udledt fra skillenes struktur, endnu ikke bekræftet af brugsdata.

**Status**
- *Kandidat:* Nyligt registreret, venter på din beslutning.
- *Aktiv:* Overtaget — påvirker Klacksy aktivt.
- *Udfaset:* Kasseret — ignoreres.

**Konfidensen** (0–100 %) viser, hvor sikker Klacksy er på en relation. Den stiger med hver session, der bekræfter mønsteret (**bekræftelser**), og falder ved sessioner, der taler imod (**modsigelser**).

## Godt at vide

- Overtag en relation, når den giver indholdsmæssig mening — begge skills hører faktisk sammen, og mønsteret svarer til dit ønskede arbejdsforløb.
- Kassér relationer, der er opstået tilfældigt eller ikke hører sammen i din kontekst (f.eks. pga. test-sessioner).
- Tommelfingerregel: Kun *lærte* relationer med høj konfidens er typisk værd at overtage. Afledte kandidater med lidt understøttelse bør du hellere kassere, indtil der foreligger flere brugsdata.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*

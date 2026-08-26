---
sidebar_position: 7
---

# Overarbejde

Under Indstillinger > Compliance & tillægsregler (eksperttilstand) > Overarbejde fastlægger du, fra hvor mange akkumulerede timer merarbejde bliver tillægspligtigt, og hvor højt tillægget er pr. trin.

## Sådan fungerer det

**Beregningsgrundlag:** Dagligt eller ugentligt — mere findes der ikke. Et månedligt eller årligt grundlag er ikke understøttet. Ved "Ugentligt" begynder ugen på den konfigurerede første ugedag.

**Op til tre trin:** Hvert trin består af to felter — "Trin X fra timer" (det akkumulerede antal timer på dagen hhv. i ugen, hvorfra dette trin gælder) og "Trin X tillæg" i procent. Det til enhver tid højeste konfigurerede trin er åbent opad.

**Hvert trin tæller kun timerne inden for sit eget spænd**, ikke alle timer fra nul. Begynder trin 1 ved 8 timer og trin 2 ved 10 timer, betaler en dag på 10,5 timer trin-1-satsen for de to timer mellem 8 og 10 og trin-2-satsen kun for den halve time derover — aldrig trin-2-satsen for alle 10,5 timer. En enkelt arbejdsblok kan således udløse flere tillægsposter, én pr. nået trin.

**Et ufuldstændigt trin springes stiltiende over:** Mangler timeangivelsen, eller er tillægget nul eller negativt, tæller dette trin ikke med. Der kan altså reelt være aktive nul til tre trin.

**Tillægget er tillægget, ikke det samlede beløb:** 25 % betyder en kvart time ekstra pr. time arbejdet i dette trin — ikke, at timen betales med faktor 1,25. Tillægstilstanden ved siden af (multiplikator eller fast beløb pr. time) bestemmer kun enheden; regnestykket bag den forbliver det samme.

**Hvad der tæller som allerede arbejdede timer:** Trinene fyldes ud ud fra de timer, der tidligere er ydet samme dag hhv. i samme uge — sorteret først efter dato, derefter efter starttidspunkt. Sådan indtager hver arbejdsblok sin egen position i spændet, og ingen time tælles dobbelt til et højere trin. Ændres en tidligere post, genberegnes de senere.

**Hvor værdierne stammer fra:** Dette kort leverer de virksomhedsomfattende værdier — de gælder kun, hvis ingen anden kilde går forud. Er personens kontrakt tilknyttet en [planlægningsregel](../../planen/planungsregeln.md) med egne overarbejdstrin, har den forrang; en senere udgave af denne regel, der er gyldig for den pågældende dato, erstatter om nødvendigt hele sættet, men falder uden egen overarbejdsblok tilbage til virksomhedsindstillingerne vist her, ikke til planlægningsreglen. Er der ingen steder konfigureret et trin, tjener kun **overtidsgrænsen** fra planlægningsreglen som sidste reserve — og udelukkende som startværdi for det første trin, aldrig som tillægssats. Kilderne blandes aldrig: Den, der leverer det første trin, leverer også alle de øvrige.

**To betingelser, uden hvilke der ikke opstår noget tillæg:**

- Vagten skal have en beregningsmakro. Arbejde på en vagt uden makro kontrolleres aldrig for merarbejde.
- Mindst ét fuldstændigt trin skal være konfigureret. Uden et sådant trin er resultatet ikke "nul overarbejde" — der finder slet ingen kontrol sted.

**Undtaget:** Korrektioner og vikarer kontrolleres aldrig for overarbejde — kun regulært arbejde indgår.

**Sammenfald med andre tillæg:** Den samme time kan samtidig kvalificere til merarbejde og til et omstændighedsbestemt tillæg, f.eks. natte- eller weekendarbejde. Om begge lægges sammen, eller kun det højeste gælder, afgøres ikke af dette kort, men af den pågældende vagts beregningsmakro.

**Lagring:** Kortet ligger i afsnittet Compliance & tillægsregler på indstillingssiden (sammen med erstatningshvile, tillægstilstand og Compliance-håndhævelse), kun synligt i eksperttilstand. Ændringer samles og gemmes eller kasseres via indstillingssidens fælles gem-bjælke — der findes ingen egen gem-knap på dette kort.

## Godt at vide

- Dette kort dækker udelukkende den automatiske overarbejdstrappe efter dags- eller ugetærskel. Tillæg for natte-, søn- eller helligdagsarbejde beregnes derimod generisk via script — se [Makroer](../klacksy-konfiguration/makros.md).
- Et trin uden "fra timer"-værdi eller med et tillæg på 0 % eller derunder ignoreres — sådan kan enkelte trin deaktiveres uden at blive slettet.
- Uden mindst ét fuldstændigt trin og uden beregningsmakro på vagten opstår der principielt ingen overarbejdstillæg, heller ikke ved meget lange vagter.
- En planlægningsregel med egne overarbejdstrin overskriver disse virksomhedsomfattende værdier fuldstændigt, ikke kun enkelte trin.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*

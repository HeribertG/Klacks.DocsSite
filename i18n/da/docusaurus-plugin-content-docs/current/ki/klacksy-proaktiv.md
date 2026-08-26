---
sidebar_position: 8
---

# Klacksy som et proaktivt teammedlem

Klacksy venter ikke på at blive spurgt. Én gang i timen ser han i baggrunden på driften og melder, hvad han bemærker: ubesatte vagter, udløbende kontrakter, forfaldne perioder, manglende stamdata. Hvor langt han må gå, fastlægger administratorer for hver fundtype for sig — som standard melder han udelukkende og handler aldrig af sig selv.

Ikke at forveksle med [Autonominiveauer](../einstellungen/klacksy-konfiguration/autonomie-stufen.md): Der handler det om, hvor meget bekræftelse Klacksy skal bruge, når **du** beder ham om noget i chatten. Her handler det om det modsatte — om det, han gør **uopfordret**.

## Sådan fungerer det

**Hvad et fund er:** Et fund er en konstatering, som Klacksy selv har gjort — for eksempel "denne vagt er stadig ubesat om tre dage" eller "denne afregningsperiode har været forfalden i en uge". Til det kører der hver time et baggrundsforløb over omkring et dusin kontrolregler. Selve genkendelsen er fast programmeret: Ingen sprogmodel afgør, om noget er et fund — den samme regel giver det samme resultat, uanset hvilken AI-udbyder du bruger.

**Fjorten fundtyper kan styres,** deriblandt Ubesat vagt, Hul i tilgængeligheden, Udløbende kontrakt, Manglende stamdata, Åben ordre, Forestående periodeafslutning, Forfalden periode, Afvigelse fra måltimer, Tom container, Spærrekonflikt og Åbent scenarie. To af dem opstår ikke i det timevise forløb, men ved ERP-ordreimport.

**De tre niveauer — separat pr. fundtype:** Under Indstillinger > Klacksy > "Handlerum for Klacksy" (eksperttilstand, kun administratorer) står hver fundtype i sin egen række med kolonnen "Højeste niveau":

- **Kun rapportere** — Klacksy siger til, mere ikke. Det er standardindstillingen for hver fundtype.
- **Klargøre scenarie** — Klacksy lægger derudover en færdig løsning klar som et scenarie, som et menneske blot skal godkende.
- **Udføre** — Klacksy retter fundet selv og rapporterer bagefter om det.

Fra "Klargøre scenarie" skal en ansvarlig person være udpeget: Handlingen udføres under vedkommendes rettigheder, og vedkommende får rapporten. Dertil kommer pr. række budgetter, der begrænser, hvor ofte Klacksy må handle (som standard højst 5 handlinger pr. dag og 3 inden for 60 minutter), samt en switch "Aktiv". Denne styrer udelukkende den selvstændige handling — om og hvordan en melding når dig, forbliver din personlige meldingsindstilling.

**Den hårde grænse i programmet:** Et højere niveau virker kun der, hvor der overhovedet er registreret en automatisk løsning for fundtypen. Mangler den, forbliver det ved at melde — uanset indstillingen og også selv om nogen i enkelttilfælde delegerer fundet til Klacksy. Denne grænse ligger i programkoden og kan ikke åbnes via brugerfladen. Aktuelt er præcis én løsning registreret: Ved fundtypen "Tom container" kan Klacksy selv oprette den manglende slot-skabelon.

**Hvor fundene havner:** På Klacksy-knappen i headeren viser en tæller de ulæste meldinger. Et klik åbner sidepanelet, hvor fundene samles under overskriften "Mens du var væk…". Pr. melding findes "Vis mig det" (springer til det berørte sted), "Nyttig" og "Skjul" — sidstnævnte valgfrit med en årsag ("Jeg vil aldrig have noter som denne", "Denne note var forkert denne gang", "Er allerede klaret") eller uden. Hvor det er tilladt, findes desuden "Gør du det": en enkelttilfælde-godkendelse, der løfter netop dette ene fund til "Klargøre scenarie". Du kan også spørge Klacksy direkte i chatten, hvilke fund der aktuelt er åbne.

**Når et fund er rettet:** Den berørte række bærer i container-visningen af vagtlisten markeringen "Rettet af Klacksy den …" — og det både når Klacksy selv har udført rettelsen, og når et menneske har godkendt et scenarie forberedt af Klacksy. Udfører Klacksy selv, går der desuden en rapport til den ansvarlige person.

**Nødstoppet:** Over chatten ser administratorer switchen "Klacksy handler autonomt: TIL/FRA". At slå fra nulstiller øjeblikkeligt hver fundtype til "kun rapportere" — også allerede givne enkelttilfælde-godkendelser. Meldingerne stopper ikke dermed: Nødstoppet stopper handlingen, ikke meldingen. Den samme switch findes også i indstillingskortet.

## Godt at vide

- Som standard står hver fundtype på "Kun rapportere" — Klacksy handler først, når en administrator bevidst sætter et niveau op. Nødstoppet er ikke nødvendigt til det: Det er som standard ikke sat og forbliver som øjeblikkelig bremse i reserve.
- Meldinger går kun til administratorer og berettigede planlæggere. Den, der kun må se bestemte grupper, får også kun fund fra disse grupper; administratorer ser alt. Planlæggere modtager fundene, men ser ikke niveau-indstillingen.
- Niveauet "Klargøre scenarie" gælder kun for løsninger, der kan afbildes som et scenarie. Den i dag registrerede løsning hører ikke til dem — for den virker udelukkende "Udføre".
- Indstillingskortet og autonomi-switchen kræver administrator-rettigheder; uden dem kan autonomi-tilstanden ikke ses.
- Den timevise rytme er fast indbygget og kan ikke indstilles via brugerfladen; det første forløb starter to minutter efter programstart.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*

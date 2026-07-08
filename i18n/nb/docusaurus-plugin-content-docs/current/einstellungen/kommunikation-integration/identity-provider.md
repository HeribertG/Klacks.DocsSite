---
sidebar_position: 4
---

Under Innstillinger > Identitetsleverandør kobler du Klacks til en ekstern katalogtjeneste — LDAP/Active Directory eller OAuth2/OpenID Connect — for å importere medarbeidere automatisk og/eller håndtere innlogging via denne.

## Slik fungerer det

**LDAP/Active Directory:** Du legger inn vert, port (389/636), SSL, Base DN, Bind DN, Bind-passord og et brukerfilter. En bryter "Bruk for kundeimport" aktiverer den automatiske importen: navn, fornavn, tittel, firma og adresse hentes fra katalogattributtene — hos OpenLDAP og Active Directory dels under ulike attributnavn (f.eks. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Disse felttilordningene er fast lagret i backend og kan ikke redigeres via grensesnittet.

**OAuth2/OpenID Connect:** Klient-ID, klienthemmelighet, valgfritt Tenant-ID (Azure), autorisasjons-, token- og UserInfo-URL samt scopes — for innlogging via Google, Microsoft eller GitHub.

**Teste tilkobling og synkronisere:** Hos LDAP/AD-leverandører viser "Test tilkobling" antall funnet brukere inkl. eksempel-brukernavn. Er kundeimporten aktivert, utløser "Synkroniser nå" en manuell avstemming; resultatet (behandlet/nye/oppdatert/deaktivert) vises rett etterpå som en melding på siden.

## Greit å vite

- Denne siden er **kun tilgjengelig for administratorer**, ikke for supervisor-rollen.
- Bind-passord og klienthemmelighet lagres kryptert og vises bare maskert (`***`) i grensesnittet; ved lagring uten endring beholdes den eksisterende verdien.
- En permanent synkroniseringslogg (historikk, feilhistorikk) vises for øyeblikket **ikke** i grensesnittet — bare resultatet av den sist utførte manuelle kjøringen.
- Personer som ikke lenger finnes i katalogen, slettes ikke ved synkronisering, men deaktiveres via utmeldingsdatoen for medlemskapet deres; dukker de opp igjen senere, reaktiveres de automatisk.
- En ekstern kjenning fra katalogen (LDAP ObjectGUID, eller alternativt Distinguished Name) forhindrer duplikater: finnes samme kjenning ved en ny synkronisering, oppdateres den eksisterende personen i stedet for at en ny opprettes.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — Logg inn med `admin@test.com` / `P@ssw0rt1`, data tilbakestilles daglig.*

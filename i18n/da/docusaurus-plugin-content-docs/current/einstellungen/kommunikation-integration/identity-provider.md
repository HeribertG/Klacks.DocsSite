---
sidebar_position: 4
---

Under Indstillinger > Identity Provider forbinder du Klacks med en ekstern katalogtjeneste — LDAP/Active Directory eller OAuth2/OpenID Connect — for automatisk at importere medarbejdere og/eller håndtere login via den.

## Sådan fungerer det

**LDAP/Active Directory:** Du angiver host, port (389/636), SSL, Base DN, Bind DN, bind-adgangskode og et brugerfilter. En kontakt "Brug til klientimport" aktiverer den automatiske import: Navn, fornavn, titel, firma og adresse hentes fra katalogattributterne — hos OpenLDAP og Active Directory til dels under forskellige attributnavne (f.eks. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Disse felt-tilknytninger er fast defineret i backend og kan ikke redigeres via brugerfladen.

**OAuth2/OpenID Connect:** Klient-ID, klienthemmelighed, valgfrit tenant-ID (Azure), autorisations-, token- og UserInfo-URL samt scopes — til login via Google, Microsoft eller GitHub.

**Test forbindelse og synkroniser:** Ved LDAP/AD-udbydere viser "Test forbindelse" antallet af fundne brugere inkl. eksempel-brugernavne. Hvis klientimport er aktiveret, udløser "Synkroniser nu" en manuel synkronisering; resultatet (behandlet/nye/opdateret/deaktiveret) vises direkte bagefter som en meddelelse på siden.

## Godt at vide

- Denne side er **kun tilgængelig for administratorer**, ikke for supervisor-rollen.
- Bind-adgangskode og klienthemmelighed gemmes krypteret og vises kun maskeret (`***`) i brugerfladen; ved gemning uden ændring bevares den eksisterende værdi.
- Et permanent synkroniseringslog (historik, fejlhistorik) vises i øjeblikket **ikke** i brugerfladen — kun resultatet af den seneste manuelle kørsel.
- Personer, der ikke længere findes i kataloget, slettes ikke ved synkronisering, men deaktiveres via deres medlemskabs udmeldelsesdato; dukker de op igen senere, reaktiveres de automatisk.
- En ekstern identifikator fra kataloget (LDAP ObjectGUID eller alternativt Distinguished Name) forhindrer dubletter: Findes samme identifikator ved en fornyet synkronisering, opdateres den eksisterende person i stedet for at blive oprettet på ny.

---
*Prøv det direkte: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, data nulstilles dagligt.*

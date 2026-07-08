---
sidebar_position: 4
---

Under Inställningar > Identity Provider ansluter du Klacks till en extern katalogtjänst — LDAP/Active Directory eller OAuth2/OpenID Connect — för att automatiskt importera Medarbetare och/eller hantera inloggningen via den.

## Så fungerar det

**LDAP/Active Directory:** Du anger host, port (389/636), SSL, Base DN, Bind DN, Bind-lösenord och ett användarfilter. En växlingsknapp "Använd för klient-import" aktiverar den automatiska importen: namn, förnamn, titel, firma och adress hämtas från katalogattributen — hos OpenLDAP och Active Directory delvis under olika attributnamn (t.ex. `uid` mot `sAMAccountName`, `street` mot `streetAddress`). Dessa fältmappningar är fast lagrade i backend och inte redigerbara via gränssnittet.

**OAuth2/OpenID Connect:** Klient-ID, klienthemlighet, valfritt Tenant-ID (Azure), auktoriserings-, token- och UserInfo-URL samt scopes — för inloggning via Google, Microsoft eller GitHub.

**Testa anslutning och synkronisera:** Hos LDAP/AD-leverantörer visar "Testa anslutning" antalet hittade Användare inkl. exempel-användarnamn. Är klient-importen aktiverad utlöser "Synkronisera nu" en manuell avstämning; resultatet (bearbetade/nya/uppdaterade/inaktiverade) visas direkt därefter som ett meddelande på sidan.

## Bra att veta

- Denna sida är **endast tillgänglig för administratörer**, inte för rollen Supervisor.
- Bind-lösenord och klienthemlighet lagras krypterade och visas i gränssnittet endast maskerade (`***`); sparas utan ändring behålls det befintliga värdet.
- Ett permanent synkroniseringsprotokoll (historik, felhistorik) visas för närvarande **inte** i gränssnittet — bara resultatet av senaste manuella körningen.
- Personer som inte längre hittas i katalogen tas inte bort vid synkroniseringen, utan inaktiveras via sitt Medlemskaps utträdesdatum; dyker de senare upp igen återaktiveras de automatiskt.
- En extern identifierare från katalogen (LDAP ObjectGUID resp. i andra hand Distinguished Name) förhindrar dubbletter: hittas samma identifierare vid en förnyad synkronisering uppdateras den befintliga personen istället för att en ny skapas.

---
*Prova direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

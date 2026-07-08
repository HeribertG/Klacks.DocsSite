---
sidebar_position: 4
---

V nastavení Nastavení > Identity Provider propojujete Klacks s externí adresářovou službou — LDAP/Active Directory nebo OAuth2/OpenID Connect — pro automatický import zaměstnanců a/nebo zajištění přihlašování přes ni.

## Jak to funguje

**LDAP/Active Directory:** Zadáváte hostitele, port (389/636), SSL, Base DN, Bind DN, Bind heslo a uživatelský filtr. Přepínač „Použít pro import klientů" aktivuje automatický import: jméno, příjmení, titul, firma a adresa se přebírají z atributů adresáře — u OpenLDAP a Active Directory částečně pod odlišnými názvy atributů (např. `uid` vs. `sAMAccountName`, `street` vs. `streetAddress`). Tato mapování polí jsou pevně zakotvena v backendu a přes rozhraní je nelze upravovat.

**OAuth2/OpenID Connect:** Client ID, Client Secret, volitelně Tenant ID (Azure), URL pro autorizaci, token a UserInfo a scopes — pro přihlašování přes Google, Microsoft nebo GitHub.

**Test připojení a synchronizace:** U poskytovatelů LDAP/AD zobrazuje „Otestovat připojení" počet nalezených uživatelů včetně ukázkových uživatelských jmen. Je-li aktivován import klientů, „Synchronizovat nyní" spustí ruční sesouhlasení; výsledek (zpracováno/nové/aktualizováno/deaktivováno) se poté zobrazí přímo jako zpráva na stránce.

## Dobré vědět

- Tato stránka je přístupná **pouze administrátorům a administrátorkám**, ne roli supervizora.
- Bind heslo a Client Secret se ukládají zašifrovaně a v rozhraní se zobrazují pouze maskovaně (`***`); při uložení bez změny zůstává zachována stávající hodnota.
- Trvalý protokol synchronizace (historie, historie chyb) se v rozhraní aktuálně **nezobrazuje** — pouze výsledek posledního ručního běhu.
- Osoby, které již nejsou v adresáři nalezeny, se při synchronizaci nemažou, ale deaktivují se prostřednictvím data ukončení jejich členství; pokud se později znovu objeví, jsou automaticky reaktivovány.
- Externí identifikátor z adresáře (LDAP ObjectGUID, případně náhradou Distinguished Name) zabraňuje duplicitám: pokud se při opakované synchronizaci najde stejný identifikátor, existující osoba se aktualizuje místo nového založení.

---
*Vyzkoušejte přímo: [Klacks Playground](https://klacks-software.ch:7643) — Přihlášení `admin@test.com` / `P@ssw0rt1`, data se denně resetují.*

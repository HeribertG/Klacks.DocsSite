---
sidebar_position: 4
---

W obszarze Ustawienia > Identity Provider łączysz Klacks z zewnętrzną usługą katalogową — LDAP/Active Directory lub OAuth2/OpenID Connect — aby automatycznie importować pracowników i/lub obsługiwać przez nią logowanie.

## Jak to działa

**LDAP/Active Directory:** Zapisujesz host, port (389/636), SSL, Base DN, Bind DN, hasło Bind oraz filtr użytkowników. Przełącznik „Użyj do importu klientów" aktywuje automatyczny import: nazwisko, imię, tytuł, firma i adres są przejmowane z atrybutów katalogu — w przypadku OpenLDAP i Active Directory częściowo pod różnymi nazwami atrybutów (np. `uid` w porównaniu z `sAMAccountName`, `street` w porównaniu z `streetAddress`). Te przypisania pól są na stałe zapisane w backendzie i nie można ich edytować przez interfejs użytkownika.

**OAuth2/OpenID Connect:** Client-ID, Client-Secret, opcjonalnie Tenant-ID (Azure), adres URL autoryzacji, tokenu i UserInfo oraz zakresy (scopes) — do logowania przez Google, Microsoft lub GitHub.

**Test połączenia i synchronizacja:** W przypadku dostawców LDAP/AD przycisk „Testuj połączenie" pokazuje liczbę znalezionych użytkowników wraz z przykładową nazwą użytkownika. Jeśli import klientów jest aktywny, „Synchronizuj teraz" uruchamia ręczną synchronizację; wynik (przetworzono/nowe/zaktualizowane/dezaktywowane) pojawia się bezpośrednio po tym jako komunikat na stronie.

## Warto wiedzieć

- Ta strona jest dostępna **wyłącznie dla administratorek i administratorów**, a nie dla roli supervisora.
- Hasło Bind i Client-Secret są przechowywane w postaci zaszyfrowanej i wyświetlane w interfejsie tylko zamaskowane (`***`); przy zapisie bez zmiany istniejąca wartość zostaje zachowana.
- Trwały dziennik synchronizacji (historia, historia błędów) nie jest obecnie wyświetlany w interfejsie — pokazywany jest tylko wynik ostatniego ręcznego przebiegu.
- Osoby, których nie znaleziono już w katalogu, nie są usuwane podczas synchronizacji, lecz dezaktywowane poprzez datę zakończenia ich członkostwa; jeśli pojawią się ponownie później, są automatycznie reaktywowane.
- Zewnętrzny identyfikator z katalogu (LDAP ObjectGUID lub zastępczo Distinguished Name) zapobiega duplikatom: jeśli przy kolejnej synchronizacji zostanie znaleziony ten sam identyfikator, istniejąca osoba jest aktualizowana zamiast tworzona od nowa.

---
*Wypróbuj bezpośrednio: [Klacks Playground](https://klacks-software.ch:7643) — login `admin@test.com` / `P@ssw0rt1`, dane są codziennie resetowane.*

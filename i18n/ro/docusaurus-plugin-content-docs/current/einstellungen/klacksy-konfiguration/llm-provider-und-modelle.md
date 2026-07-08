---
sidebar_position: 1
---

# Furnizori LLM și modele

Klacksy are nevoie de un model de limbaj pentru a înțelege și a acționa. În Setări > Furnizori LLM, Modele LLM și Jurnal de sincronizare LLM stabiliți ce furnizori și ce modele concrete poate folosi Klacks în acest scop.

## Cum funcționează

**Adăugarea unui furnizor:** Un furnizor grupează adresa URL de bază, versiunea API și cheia API a unui furnizor. Șase furnizori (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) sunt integrați ferm în cod; orice alt furnizor funcționează printr-o conexiune generică, compatibilă OpenAI — astfel se pot integra de exemplu Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity sau un model găzduit propriu. Prin „Căutare furnizori", Klacks propune suplimentar furnizori pe care încă nu i-ați configurat: dintr-un catalog curatoriat de adrese verificate sau — dacă este configurată o căutare web — prin cercetare pe internet. Fiecare sugestie este verificată live pentru accesibilitate înainte de afișare; furnizorii selectați sunt creați dezactivați și fără cheie API, pe care o completați ulterior dvs. înșivă.

**Cheia API și prioritatea:** După salvare, cheia nu mai este afișată niciodată în text simplu în interfață — se arată doar dacă una este configurată („Configurat"). Prioritatea determină ordinea în care sunt utilizați furnizorii activați.

**Gestionarea modelelor:** În Modele LLM creați modele individuale pentru fiecare furnizor (nume afișat, ID-ul tehnic al modelului la furnizor, fereastra de context, numărul maxim de tokeni, costul per 1000 de tokeni de intrare/ieșire). Un model poate fi marcat ca model implicit; un furnizor nu poate fi șters atât timp cât unul dintre modelele sale este actualul model implicit.

**Jurnalul de sincronizare LLM:** Un serviciu de fundal verifică automat, implicit la fiecare 24 de ore, ce modele au devenit noi disponibile sau au dispărut la furnizorii activați. Modelele noi sunt verificate în prealabil printr-o cerere de test reală și sunt adăugate activate doar în caz de succes; modelele care nu mai sunt oferite sunt dezactivate automat. Jurnalul de sincronizare arată istoricul complet pentru fiecare furnizor, cu data, numărul de modele noi/dezactivate/eșuate și rezultate de test extensibile. Administratorii primesc, după următoarea autentificare, o notificare toast suplimentară despre evenimentele de sincronizare necitite.

## Bine de știut

- Doar șase furnizori (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) au o implementare dedicată — toți ceilalți furnizori funcționează printr-o conexiune generică, compatibilă OpenAI.
- Catalogul pentru „Căutare furnizori" conține în prezent doisprezece furnizori verificați; sugestiile web apar doar dacă în Setări este configurată o căutare web.
- Serviciul de jurnal de sincronizare rulează în fundal independent de sesiunea dvs. — nu trebuie să țineți pagina deschisă pentru asta.

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*

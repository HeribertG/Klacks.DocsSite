---
sidebar_position: 3
---

# Intrare și ieșire vocală

Klacksy poate fi utilizat și prin voce — în Setări > Voce Klacksy stabiliți cu ce serviciu vocea dvs. este transformată în text (Speech-to-Text) și cu ce voce răspunde Klacksy (Text-to-Speech).

## Cum funcționează

**Recunoașterea vocală (STT):** Sunt disponibile patru motoare — browserul gratuit (Web Speech API), Deepgram (streaming în timp real), Groq Whisper (rapid și ieftin) și AssemblyAI (streaming). Pentru toate, cu excepția browserului, introduceți propria cheie API și puteți testa direct conexiunea.

**Sinteza vocală (TTS):** De asemenea patru furnizori — Edge TTS (gratuit), OpenAI TTS, ElevenLabs și Google Cloud TTS. În funcție de furnizorul ales, Klacks încarcă automat vocile disponibile; și aici conexiunea poate fi testată.

**Modul de ieșire:** Stabilește dacă răspunsurile apar doar ca text, doar ca audio, ca text cu redare vocală declanșată manual sau ca text cu redare vocală automată. Detectarea liniștii (500–3000 ms, implicit 1500 ms) determină cât timp se așteaptă după ce ați vorbit, înainte ca înregistrarea să fie trimisă automat.

**Curățarea transcrierii:** Dacă opțiunea este activă, textul brut STT trece suplimentar printr-un LLM, care elimină cuvintele de umplutură, rezolvă autocorectările și netezește gramatica/numerele. Modelul folosit în acest scop îl alegeți dvs.; prin „Găsește cel mai bun model", Klacks testează toate modelele activate cu o fereastră de context de la 16.000 de tokeni în sus și propune cei mai ieftini și mai rapizi candidați (timeout 30 s per model). Promptul de curățare este editabil și poate fi resetat la setarea din fabrică.

**Dicționar:** Pentru termenii pe care recunoașterea vocală îi înțelege greșit în mod repetat (de exemplu, nume proprii sau termeni de specialitate), creați intrări cu termenul corect, categoria, variantele de pronunție și o asociere de limbă opțională — Klacksy corectează apoi acești termeni în mod specific.

## Bine de știut

- Modul browser nu necesită o cheie API, dar depinde de recunoașterea vocală a browserului respectiv și, ca și calitate, nu este comparabil cu serviciile plătite.
- Cheile API sunt afișate după salvare doar ca „Configurat", niciodată în text simplu.
- Verificarea modelului de aici testează exclusiv potrivirea pentru curățarea transcrierii (fereastră de context ≥ 16.000 de tokeni) — pentru potrivirea generală ca model principal Klacksy există un test propriu, mai strict (vezi Testul de conectivitate a modelului).

---
*Încercați direct: [Klacks Playground](https://klacks-software.ch:7643) — Autentificare `admin@test.com` / `P@ssw0rt1`, datele sunt resetate zilnic.*

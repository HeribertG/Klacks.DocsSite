---
sidebar_position: 7
---

# Spamregler

Under Inställningar > Spamregler definierar du filterregler som automatiskt klassificerar inkommande e-post i Inkorg-modulen som spam — reglerna gäller både vid den löpande hämtningen av ny e-post (IMAP-polling) och vid en efterföljande omvärdering av redan mottagen e-post.

## Så fungerar det

**Skapa regel:** Välj en regeltyp — Avsändare innehåller, Avsändardomän, Ämne innehåller eller Innehåll innehåller — ange mönstret som ska kontrolleras och klicka på Lägg till.

**Hantera regler:** Varje regel kan aktiveras eller inaktiveras via en kryssruta utan att tas bort, samt tas bort permanent via papperskorgs-knappen.

## Bra att veta

- Inaktiverade regler finns kvar sparade, men påverkar inte längre ny eller omvärderad e-post — praktiskt för att tillfälligt pausa en regel istället för att ta bort den.
- Klacks använder samma inkorg för ERP-orderimport som den vanliga e-postinkorgsmodulen (arkitektur med en brevlåda). En för brett utformad regel (t.ex. en hel avsändardomän) kan därför teoretiskt även klassificera inkommande ERP-order-e-post som spam — granska nya regler noggrant innan du aktiverar dem.
- Använd avsändardomän-regler för att spärra hela oönskade avsändarorganisationer, istället för att registrera varje enskild adress som en avsändare-innehåller-regel.

---
*Testa direkt: [Klacks Playground](https://klacks-software.ch:7643) — Login `admin@test.com` / `P@ssw0rt1`, data återställs dagligen.*

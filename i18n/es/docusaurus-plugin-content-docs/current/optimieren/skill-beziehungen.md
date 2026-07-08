---
sidebar_position: 5
---

El asistente de IA Klacksy aprende del uso diario qué habilidades (skills) suyas van juntas — y así, la próxima vez, selecciona las habilidades adecuadas de forma más precisa.

## Cómo funciona

Klacksy observa en segundo plano qué habilidades se utilizan con frecuencia juntas o de forma consecutiva en una sesión, y de ahí deriva **relaciones**. El proceso de aprendizaje se ejecuta automáticamente cada 6 horas. La página de relaciones entre habilidades muestra todas las relaciones detectadas; los administradores deciden si se aceptan o se descartan.

**Tipos de relación**
- *Consecutiva:* la habilidad A se utiliza regularmente antes que la habilidad B.
- *Necesarias en conjunto:* ambas habilidades aparecen con frecuencia en la misma sesión, sin un orden fijo.

**Origen**
- *Aprendida:* calculada a partir de datos de uso reales — alta fiabilidad.
- *Derivada:* deducida lógicamente a partir de la estructura de las habilidades, todavía no confirmada por datos de uso.

**Estado**
- *Candidata:* recién detectada, a la espera de su decisión.
- *Activa:* aceptada — influye activamente en Klacksy.
- *Descartada:* rechazada — se ignora.

La **confianza** (0–100 %) muestra la seguridad que tiene Klacksy respecto a una relación. Aumenta con cada sesión que confirma el patrón (**confirmaciones**) y disminuye con las sesiones que lo contradicen (**contradicciones**).

## Bueno saberlo

- Acepte una relación cuando tenga sentido desde el punto de vista del contenido — ambas habilidades realmente van juntas y el patrón corresponde al flujo de trabajo deseado.
- Descarte las relaciones que hayan surgido de forma casual o que no vayan juntas en su contexto (por ejemplo, debido a sesiones de prueba).
- Regla general: normalmente solo merece la pena aceptar las relaciones *aprendidas* con alta confianza. Descarte más bien las candidatas derivadas con poco respaldo, hasta que haya más datos de uso disponibles.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

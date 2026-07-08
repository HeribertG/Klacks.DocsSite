---
sidebar_position: 3
---

# Entrada y salida de voz

Klacksy también se puede manejar por voz — en Configuración > Voz de Klacksy define con qué servicio se convierte su voz en texto (speech-to-text) y con qué voz responde Klacksy (text-to-speech).

## Cómo funciona

**Reconocimiento de voz (STT):** Hay cuatro motores para elegir — el navegador gratuito (Web Speech API), Deepgram (streaming en tiempo real), Groq Whisper (rápido y económico) y AssemblyAI (streaming). Para todos excepto el navegador, se introduce una clave de API propia y se puede probar la conexión directamente.

**Salida de voz (TTS):** También cuatro proveedores — Edge TTS (gratuito), OpenAI TTS, ElevenLabs y Google Cloud TTS. Según el proveedor elegido, Klacks carga automáticamente las voces disponibles; aquí también se puede probar la conexión.

**Modo de salida:** Determina si las respuestas aparecen solo como texto, solo como audio, como texto con salida de voz activable manualmente, o como texto con salida de voz automática. La detección de silencio (500–3000 ms, por defecto 1500 ms) determina cuánto tiempo se espera después de hablar antes de que la grabación se envíe automáticamente.

**Limpieza de transcripción:** Si la opción está activa, el texto STT en bruto pasa además por un LLM que elimina muletillas, resuelve autocorrecciones y suaviza gramática/números. Usted elige el modelo utilizado para ello; a través de "Encontrar mejor modelo", Klacks prueba todos los modelos activados con una ventana de contexto de al menos 16 000 tokens y propone los candidatos más económicos y rápidos (tiempo de espera de 30 s por modelo). El prompt de limpieza es editable y se puede restablecer a los valores de fábrica.

**Diccionario:** Para términos que el reconocimiento de voz interpreta mal con regularidad (p. ej., nombres propios o términos técnicos), se crean entradas con el término correcto, categoría, variantes de pronunciación y una asignación de idioma opcional — Klacksy corrige entonces estos términos de forma específica.

## Bueno saberlo

- El modo navegador no necesita clave de API, pero depende del reconocimiento de voz del navegador respectivo y no es comparable en calidad con los servicios de pago.
- Las claves de API, tras guardarse, solo se muestran como "Configurado", nunca más en texto plano.
- La comprobación de modelo aquí verifica exclusivamente la aptitud para la limpieza de transcripciones (ventana de contexto ≥ 16 000 tokens) — para la aptitud general como modelo principal de Klacksy existe una prueba propia y más estricta (véase Prueba de conexión de modelo).

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

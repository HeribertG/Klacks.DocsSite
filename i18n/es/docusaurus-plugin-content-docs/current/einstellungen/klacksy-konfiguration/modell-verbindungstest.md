---
sidebar_position: 5
---

# Prueba de conexión de modelo

No todos los modelos de lenguaje son adecuados para Klacksy — debe entregar de forma fiable llamadas a funciones estructuradas en lugar de responder en prosa. En Configuración > Comprobación de modelo de Klacksy, Klacks comprueba esto automáticamente para todos los modelos configurados.

## Cómo funciona

**La prueba:** Al hacer clic en "Encontrar los mejores modelos" se envía a cada modelo configurado (también a los desactivados) la misma tarea de prueba pequeña: "Crea un nuevo empleado llamado Anna Müller." El modelo debe responder con la llamada a función estructurada adecuada y los parámetros de nombre correctos — no con una respuesta de texto. Además, la ventana de contexto debe abarcar como mínimo 32 000 tokens, para que quepan el system prompt y las habilidades de Klacksy. Cada prueba se ejecuta con un límite de tiempo de 30 segundos.

**Resultado:** Los modelos que cumplen ambos criterios se consideran "aptos" y se activan automáticamente; los modelos no aptos se desactivan. La lista de resultados está ordenada por aptitud, luego por capacidad de llamada a funciones, coste, latencia y ventana de contexto.

**Establecer modelo predeterminado:** A través de "Establecer como predeterminado" elige directamente en la lista de resultados qué modelo utilizará Klacksy de forma predeterminada en adelante. Sin una selección propia, Klacks establece automáticamente como predeterminado el modelo más apto.

## Bueno saberlo

- La prueba comprueba todos los modelos registrados, no solo los activados — incluso los modelos desactivados hasta ahora pueden activarse de este modo si superan la prueba.
- Una prueba superada no es una protección de costes: los modelos caros pero aptos también se activan. Los costes por 1000 tokens son visibles en la lista de resultados.
- Esta prueba está diseñada específicamente para llamadas a funciones orientadas a la capacidad de acción y es independiente de la comprobación de modelo en los ajustes de voz, que se conforma con una ventana de contexto menor para la mera limpieza de transcripciones.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

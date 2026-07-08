---
sidebar_position: 3
---

En Configuración > Configuración del asistente elige el modelo de lenguaje de IA que el "Holistic Harmonizer" — uno de los asistentes de planificación de Klacks — utiliza para su evaluación.

## Cómo funciona

En el menú desplegable elige, entre los modelos de LLM activados en Klacks, el que el Holistic Harmonizer debe utilizar de forma global (o "(ninguno)", para no utilizar ninguno). A través del botón "Comprobar todos los modelos", Klacks envía una pequeña imagen de prueba a cada modelo activado y comprueba si responde y puede leer la imagen — con un tiempo de espera de hasta 90 segundos por modelo. El resultado aparece como una tabla con modelo, proveedor, estado (OK/Error), tiempo de respuesta y un botón para adoptar directamente un modelo probado con éxito.

El procesamiento de imágenes no es aquí un asunto secundario, sino un requisito: según el texto informativo de la página, este asistente ("Asistente 3") necesita modelos con procesamiento de imágenes para funcionar.

## Es bueno saberlo

- Esta página **no** afecta a la planificación automática de un clic, que distribuye turnos automáticamente entre empleados — esta funciona mediante un algoritmo genético, sin ningún LLM, y no tiene configuraciones aquí.
- Si el modelo indicado es "(ninguno)", el Holistic Harmonizer está de hecho desactivado.
- Qué modelos de LLM están disponibles en principio para seleccionar (activados/desactivados) se define en otro lugar, en la configuración de IA — aquí solo se elige entre los modelos ya activados.
- El botón de comprobación es una autoprueba pura (accesibilidad + comprensión de imágenes + tiempo de respuesta) y en sí mismo no modifica ningún dato de planificación.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

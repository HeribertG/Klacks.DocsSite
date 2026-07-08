---
sidebar_position: 1
---

# Proveedor de LLM y modelos

Klacksy necesita un modelo de lenguaje para comprender y actuar. En Configuración > Proveedor de LLM, Modelos de LLM y Registro de sincronización LLM define qué proveedores y qué modelos concretos puede utilizar Klacks para ello.

## Cómo funciona

**Añadir proveedor:** Un proveedor agrupa la URL base, la versión de la API y la clave de API de un proveedor. Seis proveedores (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) están integrados de forma fija en el código; cualquier otro proveedor funciona mediante una conexión genérica compatible con OpenAI — así se pueden integrar, por ejemplo, Groq, Together AI, Fireworks, OpenRouter, xAI, Cerebras, Perplexity o un modelo alojado por usted mismo. A través de "Buscar proveedor", Klacks además sugiere proveedores que aún no ha creado: a partir de un catálogo curado de direcciones verificadas o — si hay una búsqueda web configurada — mediante investigación en internet. Cada sugerencia se comprueba en tiempo real en cuanto a su disponibilidad antes de mostrarse; los proveedores seleccionados se crean desactivados y sin clave de API, que usted debe añadir posteriormente.

**Clave de API y prioridad:** Después de guardarla, la clave nunca se vuelve a mostrar en texto plano en la interfaz — solo si hay una configurada ("Configurado"). La prioridad determina el orden en el que se consultan los proveedores activados.

**Gestionar modelos:** En Modelos de LLM crea modelos individuales por proveedor (nombre visible, ID técnico del modelo en el proveedor, ventana de contexto, tokens máximos, coste por 1000 tokens de entrada/salida). Un modelo puede marcarse como modelo predeterminado; un proveedor no se puede eliminar mientras uno de sus modelos sea el predeterminado actual.

**Registro de sincronización LLM:** Un servicio en segundo plano comprueba automáticamente, por defecto cada 24 horas, qué modelos de los proveedores activados son nuevos o han dejado de estar disponibles. Los modelos nuevos se comprueban previamente con una solicitud de prueba real y solo se insertan activados si tienen éxito; los modelos que ya no se ofrecen se desactivan automáticamente. El registro de sincronización muestra el historial completo por proveedor con fecha, número de modelos nuevos/desactivados/fallidos y resultados de prueba desplegables. Los administradores reciben además, tras el siguiente inicio de sesión, una notificación emergente sobre eventos de sincronización no leídos.

## Bueno saberlo

- Solo seis proveedores (OpenAI, Anthropic, Google, Azure, Mistral, DeepSeek) tienen una implementación dedicada — todos los demás proveedores funcionan mediante una conexión genérica compatible con OpenAI.
- El catálogo para "Buscar proveedor" contiene actualmente doce proveedores verificados; las sugerencias web solo aparecen si en Configuración hay una búsqueda web configurada.
- El servicio de registro de sincronización se ejecuta en segundo plano independientemente de su sesión — no es necesario mantener la página abierta para ello.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

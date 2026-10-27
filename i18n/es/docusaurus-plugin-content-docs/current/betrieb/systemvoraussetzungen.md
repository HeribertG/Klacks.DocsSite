---
sidebar_position: 1
---
# Requisitos del sistema y arquitectura

Klacks se ejecuta como stack de Docker en su propio servidor. Esta página describe qué servicios se inician y cómo dimensionar el host — incluidos los valores medidos en los que se basa la recomendación.

## La arquitectura: cinco servicios

El paquete On-Premise inicia exclusivamente lo que es necesario para la operación:

| Servicio | Imagen | Función |
|---|---|---|
| `klacks-postgres` | `pgvector/pgvector:pg17` | Base de datos; la extensión vectorial ya está incluida |
| `klacks-api` | `ghcr.io/heribertg/klacks-api` | Backend; migra y rellena la base de datos al arrancar |
| `klacks-ui` | `ghcr.io/heribertg/klacks-ui` | Interfaz Angular, servida mediante nginx |
| `klacks-updater` | `ghcr.io/heribertg/klacks-updater` | aplica actualizaciones firmadas (api y ui conjuntamente) |
| `klacks-proxy` | `nginx:alpine` | terminación TLS y proxy inverso |

Los servicios internos del fabricante (base de conocimiento de desarrollo, marketing, marketplace, pgAdmin, certbot, interfaz Blazor) **no** están incluidos de forma deliberada. Usted, como operador, solo ve su propio stack.

## Qué debe aportar el host

- **8 GB de RAM y 4 vCPU** como mínimo (véase el cálculo más abajo).
- Docker Desktop (Windows/macOS) o Docker Engine con Compose v2 (Linux), **amd64 o arm64**.
- Puertos libres **80 y 443** — se pueden sobrescribir mediante `HTTP_PORT` y `HTTPS_PORT`.
- Acceso HTTPS **saliente** a `ghcr.io` (imágenes) y `github.com` (manifiesto de actualización firmado).
- Opcional: acceso a `klacks-software.ch:7553` para paquetes de país y plugins de idioma del marketplace.

## Memoria: por qué 8 GB y qué ocurre con hosts más pequeños

Klacks ejecuta sus dos modelos de búsqueda (embedder y reranker) **localmente dentro del proceso** `klacks-api`. Ambas sesiones ONNX permanecen de forma permanente en memoria — no se descargan después de cada pregunta.

Medido en el host de producción del fabricante el 12.09.2026:

- Carga base del proceso: aprox. 1'017 MB
- Embedder: aprox. 1'171 MB
- Reranker: aprox. 116 MB
- Suma: una meseta de unos **2'304 MB**
- Con un límite de 2'560 MB, el kernel finalizó el contenedor a 2'471 MB (OOM).

Por eso el Compose incluido fija **3'584M** y 3,0 CPU para `klacks-api`, con la descarga por inactividad desactivada. Calculado para todo el stack: 3'584M (api) + 2'048M (postgres) + 3 × 256M (ui, updater, proxy) = **6'400 MiB**; el resto de los 8 GB queda para el sistema operativo y la caché de archivos.

**Host más pequeño, por ejemplo con 3 GB para `klacks-api`:** establezca en el `.env` **ambas** líneas siguientes — nunca la línea de memoria sola:

```bash
KLACKS_API_MEMORY_LIMIT=2560M
KLACKS_API_IDLE_UNLOAD_MINUTES=30
```

La descarga por inactividad libera una sesión tras 30 minutos sin acceso. El precio: la siguiente pregunta posterior la vuelve a cargar (aprox. 2,2–2,9 s para el embedder, aprox. 1,1 s para el reranker). Los valores entre 1 y 5 se elevan a 5; `0` significa: no descargar nunca.

## CPU: menos núcleos solo frenan, no rompen nada

La búsqueda también funciona con menos núcleos, pero es más lenta — el reranker es el paso que más cálculo requiere. Medido: 2'994–3'163 ms para 25 candidatos con 3,0 CPU frente a 4'339–4'860 ms con 1,5 CPU, donde el servicio pasó además 7,15 s limitado. Para un host más pequeño:

```bash
KLACKS_API_CPU_LIMIT=1.5
```

Las cuotas de CPU del stack suman a propósito 4,75 con 4 vCPU: una cuota es un límite superior, no una reserva, y los servicios nunca alcanzan su pico al mismo tiempo.

## Bueno saberlo

- **Las contraseñas y las claves permanecen estables.** `POSTGRES_PASSWORD` queda grabada en el volumen de datos en el primer inicio — un cambio posterior deja huérfana la base de datos. `JWT_SECRET` firma las sesiones; un cambio cierra la sesión de todos los usuarios. El instalador conserva ambas en cada ejecución posterior.
- **`COMPOSE_PROJECT_NAME=klacks`** está fijado de forma rígida para que el host y el servicio de actualización apunten al mismo proyecto de Compose independientemente del nombre de la carpeta. No lo cambie después de la instalación.
- **`KnowledgeIndex__WarmupEnabled=false` no es una opción de memoria.** Solo traslada la construcción de la búsqueda del inicio a la primera consulta de chat; en funcionamiento continuo las sesiones están igual de presentes. Solo es útil si el host falla por memoria al arrancar.
- **¿Más de una instancia de API?** Entonces necesita un backplane de SignalR. Klacks no incluye ninguno: despliegue usted mismo un servicio compatible con RESP (por ejemplo Valkey — con licencia BSD-3 desde la 7.4, a diferencia de Redis) y active el upstream sticky (`ip_hash`) preparado en la plantilla de nginx. Sin backplane se ejecuta exactamente una instancia de `klacks-api`, como en cualquier instalación actual.
- **Perfiles de país:** el instalador conoce 30 perfiles: `ae`, `at`, `ch`, `cn`, `cz`, `de`, `dk`, `es`, `fi`, `fr`, `gb`, `gr`, `id`, `il`, `it`, `jp`, `kr`, `li`, `my`, `nl`, `no`, `pl`, `pt`, `ro`, `sa`, `se`, `th`, `tw`, `us`, `vn`. Un perfil establece en el primer inicio el idioma, el país/región y la zona horaria, el calendario de festivos, el fin de semana y el inicio de semana, los límites de jornada, el derecho a vacaciones, los recargos, el sistema de destino de exportación de nómina predeterminado (para Suiza, por ejemplo, `abaconnect-ch`) así como plantillas sectoriales — para la atención domiciliaria (Spitex), por ejemplo, la plantilla de reglas de planificación «CH Spitex Standard». Sin perfil, Klacks arranca de forma neutra y usted configura todo a mano.

---

*¿Preguntas sobre la operación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*

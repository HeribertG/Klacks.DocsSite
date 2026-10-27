---
sidebar_position: 4
---
# Solución de problemas

Cuando Klacks no hace lo que debe, el camino pasa casi siempre por los registros de los dos servicios sospechosos — y por la pregunta de si el proceso realmente sigue en ejecución.

## Primero: ver qué se está ejecutando

```bash
docker compose ps
docker compose logs klacks-api
docker compose logs klacks-updater
```

`docker compose ps` muestra qué servicios se están ejecutando y si están en buen estado. `klacks-api` registra el arranque, la migración y el llenado de la base de datos; `klacks-updater` registra la detección, la copia de seguridad, la conmutación y el camino de vuelta de una actualización.

## Un registro antiguo no es una prueba

Una trampa que ya ha costado tiempo: el archivo de registro puede proceder de un inicio **anterior**. Quien encuentra en él un error y lo toma por el actual, busca en el lugar equivocado.

Compruebe por eso si el registro **sigue creciendo**:

```bash
wc -c klacks-api.log; sleep 10; wc -c klacks-api.log
```

Si el tamaño permanece igual (crecimiento de 0 bytes), el proceso ya no escribe — no se está ejecutando, con independencia de lo que diga el registro. Solo una repetición reciente del error con un registro que demuestra que avanza es una base fiable.

## Mensajes frecuentes y qué significan

| Mensaje | Significado | Qué hacer |
|---|---|---|
| `no matching manifest for linux/amd64` | La imagen no existe para su arquitectura | El fabricante debe publicar la imagen para varias arquitecturas (amd64 **y** arm64) |
| `pull access denied` | El paquete del repositorio de paquetes es privado | Repetir la instalación con credenciales: `-GhcrUser`/`-GhcrToken` en Windows, `GHCR_USER`/`GHCR_TOKEN` en Linux |
| `errorCode: SETUP_REQUIRED`, HTTP `403` | La puerta de configuración de administrador está activa | Iniciar sesión con `admin@test.com` y crear la propia cuenta de administrador — véase [Instalación y Playground](../../erste-schritte/installation-und-playground/) |
| El contenedor termina sin stacktrace gestionado con el código de salida `-1` (`0xffffffff`) | Un fallo **nativo** en una biblioteca de C/C++ que ningún `try/catch` de C# puede capturar | Mirar la salida del contenedor en **stderr** — ahí está la causa real, no en el registro de la aplicación |
| El contenedor se termina aunque no haya ningún error de aplicación en el registro | El kernel finalizó el proceso por falta de memoria (OOM) | Comprobar los límites de memoria — véase [Requisitos del sistema](../systemvoraussetzungen/) |
| `42P07: relation "…" already exists` tras una actualización fallida | Una migración creó tablas que la restauración no eliminó | Véase el escollo en [Copia de seguridad y restauración](../backup-und-wiederherstellung/) |
| La API muere segundos después de `Application started` | El arranque tiene éxito, el fallo llega después — típico de una biblioteca nativa | La misma pista que con el código de salida `-1`: comprobar stderr, no el registro de la aplicación |

En un **equipo con Windows en ARM** (Snapdragon X), la búsqueda que se ejecuta localmente ha fallado en el pasado precisamente por una biblioteca nativa de este tipo: la API informaba `Application started`, pero segundos después ya no era accesible para la interfaz. Si ve este patrón en un host con Windows ARM, la primera mirada va a la salida de la consola (no al registro en archivo) — ahí apareció el mensaje de la detección de CPU afectada.

## Cómo acotar un error

1. **¿Qué hizo exactamente?** ¿Y qué esperaba? El último paso antes del error es la mitad de la respuesta.
2. **¿Qué servicios se están ejecutando?** `docker compose ps`.
3. **¿Sigue creciendo el registro?** Véase más arriba.
4. **¿Qué había en stderr al final?** En fallos nativos, la única fuente.
5. **¿Qué ha cambiado últimamente?** Una actualización, un ajuste, un certificado nuevo.

## Bueno saberlo

- **Un servicio recién iniciado y uno en buen estado se ven igual en el registro.** Si en la interfaz no llega nada, compruebe si el proceso sigue en ejecución en absoluto — no solo qué escribió por última vez.
- **Ante un fallo sin error de aplicación, la memoria es la primera sospecha**, sobre todo tras una actualización con nuevos modelos de búsqueda.
- **Datos útiles para un aviso:** la versión afectada (`KLACKS_API_TAG`/`KLACKS_UI_TAG` del `.env`), la salida de `docker compose ps`, las últimas líneas de ambos registros y el último paso antes del error. Por favor, **sin** contraseñas ni claves del `.env`.
- Ante la duda, pregunte a la comunidad: [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).

---

*¿Preguntas sobre la operación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*

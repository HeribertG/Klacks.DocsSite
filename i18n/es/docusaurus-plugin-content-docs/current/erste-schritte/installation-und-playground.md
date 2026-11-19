---
sidebar_position: 1
---

# Instalación y Playground

Puede probar Klacks en un minuto — e instalarlo en pocos minutos. Sin registro, sin conversaciones comerciales.

## Playground: la zona de pruebas para conocer Klacks

El Playground no es una variante de instalación, sino una instancia pública de Klacks con datos de ejemplo para jugar sin compromiso — de ahí el nombre. Está disponible en **[play.klacks-software.ch](https://play.klacks-software.ch)**:

- **Inicio de sesión:** `admin@test.com` · **Contraseña:** `P@ssw0rt1`
- Dispone de derechos de administrador completos — pruebe todo lo que quiera.
- Los datos de ejemplo incluyen unos 5000 clientes y son datos de demostración puros.
- **No introduzca datos personales reales.** La base de datos se restablece a un estado fijo todos los días a las 04:00 (hora suiza; 02:00 UTC).

## Instalación: En su propio servidor (On-Premise)

El paquete On-Premise lo incluye todo: imágenes Docker, instalador, base de datos, HTTPS y actualizaciones automáticas. Lo descarga exclusivamente en el [Klacks Store](https://klacks-software.ch/store/?culture=es).

En el Klacks Store, elija su sector si lo desea y descargue el ZIP de su país. El instalador genera por sí mismo las contraseñas y los certificados, descarga las imágenes Docker actuales y espera hasta que todo esté en funcionamiento.

### Linux: paso a paso

Necesita un equipo con al menos 8 GB de RAM, los puertos 80 y 443 libres, acceso a Internet y una cuenta con permisos de `sudo`. No es necesario que Docker ya esté instalado (véase el paso 4).

1. **Descargar el ZIP en el Klacks Store.** En la página de su país en el [Klacks Store](https://klacks-software.ch/store/?culture=es), si lo desea con su sector.
2. **Descomprimirlo en una carpeta fija**, por ejemplo `~/klacks`, no en `Downloads` ni en `/tmp`. Las actualizaciones automáticas trabajarán más adelante con exactamente esta carpeta; si se elimina o se mueve, dejan de funcionar. El instalador avisa si se ejecuta desde `Downloads` o `/tmp`.

   ```bash
   unzip 'klacks-onprem-*.zip' -d ~/klacks
   ```

3. **Abrir un terminal en la carpeta.** En el gestor de archivos suele hacerse con clic derecho dentro de la carpeta (el nombre de la opción depende del entorno de escritorio), o bien escriba `cd ~/klacks`.
4. **Iniciar el instalador:**

   ```bash
   sudo bash ./install-de.sh
   ```

   En el paquete para Alemania el script se llama `install-de.sh`; en otros paquetes de país el código del país correspondiente forma parte del nombre, es decir, en general `sudo bash ./install-*.sh`. El instalador necesita `sudo` para poder comunicarse con Docker e instalarlo si hace falta. Sin `sudo` solo funciona si Docker ya está instalado y su usuario pertenece al grupo `docker`.

   **Si falta Docker**, el instalador ofrece instalar Docker Engine con el script oficial de `get.docker.com`. Esto solo ocurre tras su confirmación (`[y/N]`, por defecto es No) y únicamente en Ubuntu, Debian, Fedora, CentOS y RHEL; para ello el equipo necesita `curl` o `wget` y acceso a Internet. En otras distribuciones, instale usted mismo Docker Engine con el plugin Compose siguiendo las [instrucciones de Docker](https://docs.docker.com/engine/install/). Si el instalador se ejecuta sin terminal, `INSTALL_DOCKER=yes` responde Sí a la pregunta. El propio Docker no recomienda este script para el uso en producción; para un servidor de producción es mejor instalar Docker usted mismo. El antiguo `docker-compose` (versión 1) no es compatible; se necesita el plugin `docker compose`.
5. **Esperar.** El instalador genera contraseñas y un certificado autofirmado, descarga las imágenes e inicia el stack. En el primer arranque la API migra la base de datos; el instalador espera para ello hasta diez minutos. Al final aparece `Klacks is up at https://…` y debajo **su código de configuración** (`Your setup code`, doce caracteres en tres grupos de cuatro). Anótelo; también figura en el archivo `.env` de la carpeta de instalación como `KLACKS_SETUP_CODE`.
6. **Abrir Klacks:** `https://localhost` (con otro nombre de servidor o puerto HTTPS, la dirección del mensaje del instalador). El navegador advierte del certificado autofirmado; confirme la advertencia. A continuación crea con el código de configuración su propia cuenta de administrador, véase [El primer inicio de sesión](#first-login).
7. **Las actualizaciones** se realizan después automáticamente mediante el servicio de actualización incluido. No tiene que volver a iniciar el instalador para ello.

Si Docker dispone de menos de 7 GiB de memoria, una primera instalación se cancela. Cómo configurar un host más pequeño se explica en [Requisitos del sistema](../betrieb/systemvoraussetzungen.md).

### Windows

En Windows se inicia `install-*.ps1` en lugar de `install-*.sh`.

### Opciones: nombre del servidor y perfil de país

Con un perfil de país opcional, el instalador configura en el primer arranque el idioma, los festivos, los límites de jornada, los recargos y las plantillas sectoriales:

```bash
sudo SERVER_NAME=klacks.example.com REGION=de bash ./install.sh
```

```powershell
powershell -ExecutionPolicy Bypass -File .\install.ps1 -ServerName klacks.example.com -Region de
```

En Linux las variables van **después** de `sudo`: por regla general, `sudo` no transmite al instalador las variables que van antes. Con el script del paquete de país, la llamada es así: `sudo SERVER_NAME=klacks.example.com bash ./install-de.sh`.

El paquete de país del Klacks Store contiene el perfil de su país. Los scripts incluidos `install-*.sh` e `install-*.ps1` ya establecen `REGION` o `-Region` con su código de país — en el paquete para Alemania, por ejemplo, `install-de.sh` e `install-de.ps1`. Si llama directamente a `install.sh` o `install.ps1`, `REGION` o `-Region` debe ser ese código de país; sin él, el instalador no configura ningún perfil de país.

## PC de oficina con Windows: también en Microsoft Store

Para un único PC de oficina con Windows existe un instalador propio que funciona sin Docker. Se obtiene en el [Klacks Store](https://klacks-software.ch/store/?culture=es), en la página de su país, y también en [Microsoft Store](https://apps.microsoft.com/store/detail/XPFFW8HDX0KX26) (entrada «Klacks»). En ambas tiendas es el mismo instalador. Desde Microsoft Store aplica el país configurado en Windows; allí no se elige un sector y, si no existe un perfil para ese país, el instalador no configura ninguno. Las instalaciones en servidor, Docker y Linux, así como los paquetes por país y por sector, solo están disponibles en el Klacks Store.

En el PC de oficina, las nuevas versiones llegan a través de Configuración > [Actualizaciones de software](../einstellungen/system-sicherheit/updates.md) en Klacks, también cuando Klacks se instaló desde Microsoft Store. Un instalador más reciente no se puede instalar sobre una instalación existente.

## El primer inicio de sesión: su propia cuenta de administrador {#first-login}

Un Klacks recién instalado todavía no tiene ninguna cuenta suya. Por eso, al abrirlo por primera vez en el navegador aparece enseguida la página «Configurar su propia cuenta de administrador», antes de cualquier inicio de sesión: nombre y apellidos, dirección de correo electrónico (será su nombre de usuario) y una contraseña introducida dos veces; las reglas de contraseña se muestran en directo al lado.

En un servidor (Docker), la página solicita además el **código de configuración**, incluso si abre Klacks en el navegador del propio servidor. El instalador mostró el código al final de la instalación; también figura en el archivo `.env` de la carpeta de instalación como `KLACKS_SETUP_CODE`. Solo es válido para esta única configuración. Un código incorrecto se rechaza («El código de configuración no coincide. Compruébelo e inténtelo de nuevo.»).

En cuanto guarda, su cuenta recibe el rol de administrador y la cuenta de prueba incluida se desactiva de forma definitiva en el mismo paso; después, Klacks inicia sesión automáticamente con su propia cuenta; si eso falla, inicie sesión con las nuevas credenciales. Mientras haya un código de configuración establecido, la cuenta de prueba incluida no se puede usar de todos modos para iniciar sesión en el navegador. A continuación sigue la página «País y sector».

Hasta que se haya creado su propia cuenta, el servidor bloquea cualquier otra petición con el código de error `SETUP_REQUIRED` (HTTP 403). No se trata de una avería: solo falta la configuración.

- En el PC de oficina con Windows no necesita ningún código de configuración si abre Klacks en el navegador del mismo PC. Desde otro equipo solo aparece la página de inicio de sesión.
- Si Klacks muestra en su lugar la página de inicio de sesión, por ejemplo en una instalación sin código de configuración, la salida del instalador indica la cuenta incluida; incluso entonces Klacks le lleva directamente a crear su propia cuenta de administrador.
- Si dos personas envían el formulario a la vez, solo la primera se convierte en administradora; la segunda acaba en la página de inicio de sesión.

Solo en el Playground y en un entorno de desarrollo local esta puerta está desactivada de forma deliberada; allí la cuenta incluida se mantiene.

## Bueno saberlo

- **Requisitos:** al menos 8 GB de RAM y 4 vCPU, Docker con Compose v2 (en Linux el instalador instala Docker si se lo pide), puertos 80 y 443 libres, así como acceso HTTPS saliente a `ghcr.io` y `github.com`. Los detalles y los ejemplos de cálculo para hosts más pequeños se encuentran en [Requisitos del sistema](../betrieb/systemvoraussetzungen.md).
- Un servicio de actualización incluido mantiene su instalación siempre al día — con copia de seguridad antes de cada actualización y reversión automática en caso de problemas. Cómo funciona en detalle se explica en [Actualizaciones y rollback](../betrieb/updates-und-rollback.md).
- Sus datos se encuentran en su propia base de datos, en su propia infraestructura. Algunas funciones llaman para ello a servicios externos — cuáles, se indica en la sección siguiente.
- Volver a ejecutar el instalador es inofensivo, pero no es una actualización: conserva las contraseñas, el certificado y la versión fijada en la primera instalación, y reinicia el stack (en Linux de nuevo con `sudo`, si instaló primero con `sudo`). Así se repara un stack que ya no funciona. Las nuevas versiones las instala el servicio de actualización, no el instalador.
- Si aporta un certificado propio, coloque `server.crt` y `server.key` en `nginx/certs/` dentro de la carpeta de instalación antes de la instalación; de lo contrario, el instalador genera un certificado autofirmado.
- La copia de seguridad de su base de datos la realiza usted mismo con regularidad — cómo hacerlo se explica en [Copia de seguridad y restauración](../betrieb/backup-und-wiederherstellung.md).

## Qué servicios externos llama Klacks

Sus datos se encuentran en sus servidores. Para algunas funciones, Klacks llama sin embargo, en el funcionamiento estándar, a servicios públicos de Internet. Las direcciones de estos servicios están integradas de forma fija; actualmente no puede indicar un servidor propio de geocodificación, de rutas ni de mapas.

| Servicio | Para qué | Qué se envía | Por defecto | Desactivar |
|---|---|---|---|---|
| Nominatim de OpenStreetMap (`nominatim.openstreetmap.org`) | Convertir direcciones en coordenadas: al guardar una dirección, para la ubicación de la empresa, en la planificación de rutas y en servicios en segundo plano para direcciones y ubicaciones de grupos | Calle, código postal, localidad y país, sin nombres de personas; en las ubicaciones de grupos, el nombre de la localidad o del grupo | activado | `BackgroundServices__AddressGeocoding=false` y `BackgroundServices__GroupGeocoding=false` solo desactivan los servicios en segundo plano. Al guardar una dirección se sigue geocodificando. |
| Servidor OSRM público (`router.project-osrm.org`) | Tiempos de trayecto, distancias y rutas en el mapa | Coordenadas de los lugares de servicio, sin nombres | activado mientras no haya una clave de OpenRouteService; además, el navegador consulta OSRM directamente si el servidor de Klacks no devuelve ninguna ruta | no previsto |
| OpenRouteService (`api.heigit.org`) | como OSRM, además bicicleta y a pie | Coordenadas de los lugares de servicio, sin nombres | solo con una clave de API guardada | eliminar la clave en Configuración > OpenRoute |
| Teselas de mapa (OpenStreetMap, OpenStreetMap.de o CARTO) | Visualización del mapa en el panel | desde el navegador: dirección IP y la zona del mapa mostrada | activado en cuanto se muestra el mapa | proveedor seleccionable en el mapa, un servidor de teselas propio no |
| GitHub (`github.com`) y GitHub Container Registry (`ghcr.io`) | Instalación y actualizaciones automáticas: manifiesto de versión e imágenes Docker | peticiones de descarga normales, sin datos de planificación | activado | — |
| Klacks Marketplace (`klacks-software.ch/store`) | Paquetes de idioma y de país | Código de país, código de paquete o término de búsqueda | al buscar paquetes y al cargar un perfil de país | dirección configurable mediante `LanguagePlugins__MarketplaceUrl` |
| Hugging Face (`huggingface.co`) | descarga única de los modelos de búsqueda para Klacksy | ningún dato de clientes (descarga de archivos) | en la primera necesidad | — |
| Open-Meteo (`api.open-meteo.com`, `air-quality-api.open-meteo.com`) | Aviso de tiempo y calidad del aire en el widget de bienvenida, consulta del tiempo mediante Klacksy | Coordenadas del navegador (si se ha autorizado) o de la ubicación de la empresa | activado | `Assistant__Ambient__Enabled=false` solo desactiva el aviso de calidad del aire y de festivos, no la consulta del tiempo del saludo |
| Nager.Date (`date.nager.at`) | Aviso de festivos en el widget de bienvenida | Código de país | activado | `Assistant__Ambient__Enabled=false` |
| Proveedores de IA en la nube (p. ej. OpenAI, Anthropic, Google, DeepSeek) | Klacksy y funciones en segundo plano con IA (p. ej. clasificación de ubicaciones de grupos) | Solicitudes con el contexto necesario de sus datos | solo si hay un modelo en la nube configurado | usar un modelo local |
| Servicios de voz, búsqueda y traducción (p. ej. Deepgram, Groq, AssemblyAI, Edge TTS, OpenAI TTS, ElevenLabs, Google Cloud TTS, DeepL, búsqueda web) | Entrada y salida de voz, búsqueda web, traducción | Audio o texto | solo si se usan o están configurados; el reconocimiento de voz del navegador funciona, según el navegador, a través de su servicio en línea | no usar la función |

Los interruptores de la columna «Desactivar» son variables de entorno del contenedor `klacks-api`; introdúzcalas en `docker-compose.yml` bajo `environment:` de este servicio. Una entrada solo en el archivo `.env` no basta, porque el servicio no lo lee como `env_file`.

Con un modelo de IA local, ninguna solicitud al modelo de lenguaje llega a un proveedor de IA externo. Para los demás servicios de esta tabla, esto no cambia nada.

---

*¿Preguntas sobre la instalación? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*

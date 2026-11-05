---
sidebar_position: 5
---

# Puntos de traspaso ERP

En Configuración > Importación (visible solo en el modo experto), tarjeta «ERP Drop Points», configura cómo los pedidos de un sistema ERP externo se traspasan automáticamente a Klacks como archivos XML.

## Cómo funciona

**Tres vías de entrega:** El sistema ERP puede depositar archivos XML en una carpeta del servidor de Klacks (Klacks los recoge automáticamente según un plan horario en cuanto un archivo lleva 10 segundos sin cambios), enviarlos directamente mediante HTTPS-POST a un endpoint de importación (autenticado con un token de acceso), o una administradora puede subir el archivo XML manualmente en esta página mediante arrastrar y soltar (la importación se inicia de inmediato). No hay SFTP; solo se importan archivos XML con el formato `ErpOrderImport`.

**El punto de traspaso** es el buzón central, gestionado por el propio Klacks, para todos los archivos de importación — muestra tres áreas: Entrada (recibido o en importación en este momento), Procesado (con un resumen por archivo) y Errores (archivos ilegibles o inválidos junto con el motivo del error, con posibilidad de reimportar o eliminar). Un plan horario (expresión cron, por defecto cada hora) y un interruptor de activación para pausar controlan la recogida automática.

**¿Qué vía encaja con qué instalación?** En un PC de oficina (instalación en Windows), la vía más evidente es la carpeta; la carpeta estándar es `C:\ProgramData\Klacks\ErpImport\erp\orders`. Está protegida: solo SYSTEM y los administradores pueden escribir en ella. Un administrador debe conceder a la cuenta con la que se ejecuta la exportación del ERP el permiso «Modificar» exactamente sobre la carpeta `erp\orders`, no sobre toda la carpeta `ProgramData\Klacks`. En un servidor Docker propio, la carpeta (`/app/ErpImport/erp/orders`) está dentro del contenedor, en un volumen con nombre (named volume); un ERP situado en el equipo del servidor solo la alcanza si el administrador monta una carpeta del servidor en `/app/ErpImport`; de lo contrario quedan el push con token de acceso o la subida manual. En una instalación alojada por nosotros no hay acceso a las carpetas del servidor: push con token de acceso o subida manual.

**Los tokens de acceso** solo son necesarios cuando un sistema ERP entrega archivos mediante push. Cada token comienza con `klacks_erp_`, es válido de 1 a 730 días (por defecto 365) y se muestra en texto plano **solo una vez, en el momento de la creación**. Un token de este tipo es válido exclusivamente para el endpoint de importación, no para el resto del acceso a la API, y puede revocarse en cualquier momento.

**Procesamiento:** Los pedidos se asignan a un cliente existente o recién creado mediante el ID del sistema de origen y la referencia externa del cliente (o, en su defecto, empresa/código postal/calle) y se crean inicialmente como borrador, que los planificadores deben revisar y sellar. Una nueva entrega modificada de un pedido ya sellado cierra automáticamente el antiguo y crea una nueva versión vinculada; las entregas repetidas sin cambios no desencadenan nada.

## Es bueno saberlo

- Los pedidos individuales incorrectos (p. ej., sin día de la semana o con referencia duplicada) se rechazan sin bloquear los demás pedidos válidos del mismo archivo; aun así, el archivo aparece en Procesado, marcado con un símbolo de advertencia, y los pedidos rechazados pueden desplegarse con su motivo.
- Los archivos no se mueven ni se archivan: permanecen en la carpeta y su estado figura en la base de datos. Los archivos procesados correctamente se eliminan automáticamente a los 90 días; los archivos de Errores permanecen hasta que se reimportan o se eliminan.
- El formato XML exacto (campos obligatorios, formatos de fecha, lógica de días de la semana) está documentado en el manual, directamente en la página de configuración, así como mediante un archivo de ejemplo descargable.
- Esta configuración se encuentra en el área de Configuración y, por tanto, está reservada a roles administrativos.

---
*Pruébalo directamente: [Klacks Playground](https://play.klacks-software.ch) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

---
sidebar_position: 7
---

# Entrega de la exportación de nómina

Al sellar un periodo delimitado por grupo, Klacks puede entregar automáticamente sus datos de nómina a un sistema de nómina externo. Esta página explica qué se requiere para ello y por qué la entrega a veces aparentemente no entrega nada — el caso de soporte más frecuente en torno a esta función.

## Cómo funciona

**Requisito: paquete adicional para la exportación de nómina.** La entrega automática a un sistema de nómina no es una función principal, sino que requiere un paquete adicional propio que debe estar instalado **y** activo en Configuración > Plugins de funciones. Si falta el paquete adicional o solo está desactivado, la entrega no produce absolutamente nada — ningún archivo, ningún aviso, ninguna entrada visible para usted. Esto es más estricto que un formato de exportación desactivado en los ajustes de exportación: eso al menos deja una entrada en el registro del servidor; aquí no hay ni siquiera eso.

**Entrega única (idempotencia).** La entrega automática se ejecuta exactamente una sola vez por combinación de grupo, sistema de destino e intervalo de fechas exacto — esto evita que los mismos datos de nómina lleguen por error dos veces al sistema de nómina. Si reabre un periodo ya sellado, corrige algo y vuelve a sellar, la segunda entrega se omite sin comentarios: para exactamente esa combinación ya existe una entrada de entrega, y la reapertura no la elimina.

**Una descarga manual cuenta igual.** Una descarga manual de nómina, realizada según necesidad, para el mismo grupo/el mismo sistema de destino/el mismo periodo genera la misma entrada que una entrega automática. Una descarga manual ejecutada antes de la entrega automática la «consume» para el periodo afectado, exactamente igual que si ya se hubiera ejecutado automáticamente.

| ¿Por qué no llegó nada (nuevo)? | ¿Existe una entrada? | ¿Bloquea una descarga manual posterior? |
|---|---|---|
| Paquete adicional no instalado/activo | no | no |
| Ya se entregó para exactamente esta combinación | sí (visible en la pestaña «Registro» del cierre de periodo) | no |

**Dos puntualizaciones:**

- Una descarga manual **no** aplica ninguna corrección de formato de exportación que Soporte pudiera haber configurado — siempre utiliza los valores estándar, incluso si para el sistema de destino existe una corrección activa que se aplicaría en la vía automática.
- El bloqueo de entrega única es exacto: solo se aplica con un grupo idéntico, un sistema de destino idéntico y una fecha de inicio/fin idéntica. Un periodo distinto o un sistema de destino distinto no queda bloqueado por una entrega anterior.

**Si tras el sellado no llega nada o hay que reenviar cifras corregidas:** compruebe primero si el paquete adicional correspondiente está instalado y activo en Configuración > Plugins de funciones. Tras una reapertura y una corrección, la vía fiable para llevar cifras corregidas al sistema de nómina es la **exportación manual** en el área de cierre de periodo (pestaña «Exportaciones») — esta no está sujeta ni al bloqueo del paquete adicional ni al bloqueo de entrega única de la entrega automática. Dado que ella tampoco aplica ninguna corrección de formato de exportación, en este caso compare a mano las cifras exportadas con una eventual corrección activa.

## Bueno saberlo

- La base de toda entrega es un periodo sellado y delimitado por grupo — cómo se sella un periodo está descrito en la página [Cierre de periodo](../../planen/periodenabschluss.md). Sellar y reabrir están reservados allí a los roles administrativos.
- Esta página describe la **exportación** de datos de nómina desde Klacks hacia un sistema de nómina. El flujo inverso — la **importación** de pedidos desde un sistema ERP hacia Klacks — lo describen los [Puntos de traspaso ERP](./erp-uebernahmepunkte.md).
- Los paquetes adicionales se gestionan de forma centralizada en Configuración > Plugins de funciones: instalar, activar/desactivar o eliminar por completo.
- Un paquete adicional desactivado permanece instalado, pero bloquea la entrega automática de forma igual de completa que uno no instalado.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

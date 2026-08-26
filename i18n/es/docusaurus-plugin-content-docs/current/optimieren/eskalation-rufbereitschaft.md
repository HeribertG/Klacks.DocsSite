---
sidebar_position: 8
---

# Escalado y guardia localizada

Alguien falta y el turno empieza en unas pocas horas. Klacks no avisa entonces a todo el equipo al azar, sino que recorre una lista de llamadas guardada — una persona tras otra, hasta que alguien se hace cargo.

## Cómo funciona

- **La cadena se activa al cubrir una ausencia**: para cada día afectado en el que la persona ausente tenía un turno, Klacks crea un escalado propio — referido exactamente a ese turno (véase [Control de ausencias](./absenzen-im-blick.md)).
- **La lista de llamadas se configura una sola vez**: en Configuración > Lista de llamadas de escalado figuran todos los usuarios con visibilidad de grupo y un número de teléfono registrado. El orden se determina mediante arrastrar y soltar y se guarda de inmediato — un solo orden para toda la empresa.
- **A quién se llama realmente se decide en el caso concreto**: de su orden, Klacks toma a las personas con visibilidad sobre el grupo superior, omite a todas las que están registradas como ausentes en ese momento y añade a los administradores al final como red de seguridad.
- **La notificación se realiza por varias vías**: la solicitud llega siempre a la bandeja de entrada de Klacks, aparece de inmediato en la aplicación para las personas conectadas y, además, se envía a través del servicio de mensajería conectado — porque a las 3 de la madrugada nadie está sentado frente a un navegador abierto. La conexión de mensajería y el avance automático de la cadena se habilitan por instalación.
- **Se acepta con una palabra**: quien esté siendo solicitado en ese momento responde brevemente en el servicio de mensajería («Me hago cargo»); los administradores pueden usar en su lugar *Asumir* en la página *Escalados en curso*. Después, la persona que acepta recibe una confirmación, y todas las personas solicitadas anteriormente reciben un aviso silencioso — a nadie se le vuelve a avisar una segunda vez.

## Bueno saberlo

- El plazo no es el inicio del turno en sí, sino un margen previo (por defecto, dos horas) — así la persona que se hace cargo todavía tiene tiempo de ponerse en camino.
- Cuánto tiempo tiene un nivel lo calcula Klacks a partir del plazo restante: cuanto más se acerca el turno, más cortas son las rondas. Si el tiempo resulta demasiado ajustado para un proceso secuencial, Klacks pregunta a todos los restantes al mismo tiempo.
- En la página *Escalados en curso* ve el estado de cada nivel — en espera, solicitado, asumido, sin respuesta, omitido o cancelado. Si hay un escalado en curso, además aparece un icono de aviso en la cabecera.
- La lista de llamadas y la vista general están reservadas a los administradores (véase [Roles y permisos](../erste-schritte/rollen-und-rechte.md)). Los administradores pueden cancelar un escalado en curso — con justificación, para que después se pueda saber por qué se detuvo la cadena.
- Quien no tenga un número de teléfono en la cuenta de usuario ni siquiera aparece en la lista de llamadas. Para la solicitud a través del servicio de mensajería se necesita además un contacto de mensajería vinculado. Las ausencias de la guardia localizada se gestionan directamente en la misma lista: desde–hasta, con motivo opcional, de forma permanente si se desea.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

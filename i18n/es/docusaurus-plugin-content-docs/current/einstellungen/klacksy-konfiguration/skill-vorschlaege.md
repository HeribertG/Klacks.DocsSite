---
sidebar_position: 6
---

# Sugerencias de habilidades de Klacksy

Klacksy aprende de sus propios errores: si usted corrige en el chat que Klacksy eligió la habilidad equivocada, el sistema guarda esa corrección. En Configuración > Sugerencias de habilidades de Klacksy, los administradores ven qué mejoras se proponen para las descripciones de habilidades a partir de ello, y deciden sobre su adopción.

## Cómo funciona

**De dónde vienen las sugerencias:** Si Klacksy elige en el chat la habilidad (skill) equivocada para una solicitud y el usuario la corrige, esa secuencia de chat se marca como "corregida". Un optimizador interno evalúa esas secuencias corregidas y deriva de ellas cambios de texto concretos para las descripciones de habilidades — con el objetivo de que Klacksy asigne correctamente la habilidad afectada la próxima vez.

**Generar sugerencias:** El botón "Generar sugerencias" inicia la evaluación de las últimas 30 secuencias de chat corregidas y genera nuevas sugerencias a partir de ellas, si se encuentran patrones.

**Una tarjeta de sugerencia muestra:** la habilidad afectada y el campo modificado, el cambio en una comparación antes/después, una justificación de por qué el cambio tiene sentido, así como — de forma desplegable — las solicitudes exactas del usuario que originaron la sugerencia.

**Decidir:** Cada sugerencia pendiente se **adopta** individualmente (la descripción de la habilidad se cambia de inmediato) o se **descarta** (la sugerencia se descarta sin que se cambie nada). No hay adopción automática — siempre decide una persona.

## Bueno saberlo

- Sin correcciones en el chat no surgen sugerencias — el sistema necesita correcciones de errores reales como base de entrenamiento, no solo el uso.
- Esta función solo modifica los textos descriptivos de las habilidades para que Klacksy las seleccione correctamente — no cambia lo que una habilidad realmente hace.
- Esta función requiere permisos de administrador.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

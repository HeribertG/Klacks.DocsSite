---
sidebar_position: 3
---

# Retención de datos

En Configuración > Retención de datos se define durante cuánto tiempo permanecen en el sistema los registros eliminados — empleados, direcciones, grupos, servicios, horas de trabajo, ausencias, pausas y otros — antes de eliminarse de forma irrevocable.

## Cómo funciona

**Eliminación en dos fases:** Cuando se elimina un registro en Klacks, este se marca inicialmente solo con una marca de eliminación lógica (soft delete) (marcado como eliminado, pero todavía físicamente presente). Solo una vez transcurrido el plazo configurado aquí, un servicio en segundo plano que se ejecuta diariamente elimina las filas marcadas como eliminadas **física e irrevocablemente** de la base de datos — en todas las tablas afectadas, no solo en un área concreta.

**Configurar el plazo de retención:** El campo de entrada acepta valores entre 30 y 36.500 días (aproximadamente de 1 mes a 100 años); junto a él, Klacks muestra además el plazo en años/meses. El valor predeterminado es 3.650 días (10 años).

## Bueno saber

- Una reducción del plazo también afecta a los registros ya existentes, eliminados hace tiempo: todo lo que sea más antiguo que el nuevo plazo se eliminará en la siguiente ejecución del servicio en segundo plano — antes de reducir el plazo, compruebe si esto es lo deseado.
- La eliminación física es definitiva — después no existe posibilidad de recuperación, ni siquiera por parte del soporte.
- Esta configuración es la base técnica de los plazos de eliminación descritos en la declaración de protección de datos; se aplica globalmente a todos los tipos de datos con eliminación lógica, y no es configurable por módulo.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

---
sidebar_position: 3
---

La gestión de direcciones y personas es el corazón de sus datos maestros: empleados, clientes y personas externas con direcciones, datos de contacto, contratos, pertenencia a grupos y calificaciones — accesible mediante el icono de personas en la navegación.

## Cómo funciona

**Crear empleados:** Los campos obligatorios son nombre, apellido y sexo (mujer/hombre/intersexualidad/persona jurídica). Opcionalmente se registran fecha de nacimiento, correo electrónico, teléfono, dirección (calle, código postal, localidad, cantón, país) así como grupo/departamento. Alternativamente, también puede dejar la creación en manos del asistente Klacksy («crea un empleado…»).

**Estado:** El estado se deriva automáticamente de la fecha de alta y de baja de la pertenencia — no existe un campo de estado manual. Se distingue entre *Activos* (la pertenencia está vigente actualmente), *Antiguos* (la fecha de baja está en el pasado) y *Futuros* (la fecha de alta aún no ha llegado).

**Grupos y departamentos:** A los empleados se les pueden asignar grupos. La estructura es jerárquica (p. ej. `Klacks AG > IT > Desarrollo`), se permite la asignación múltiple y los permisos se pueden controlar a nivel de grupo.

**Contratos:** Cada persona puede tener varios contratos, por ejemplo en caso de un cambio de porcentaje de jornada. Las plantillas de contrato en sí se pueden definir libremente: en Configuración > Contratos se crean contratos propios con nombre, porcentaje de jornada, horas objetivo/máximas/mínimas, recargos (nocturno, domingo y festivo) e intervalo de pago; a cada contrato se le puede asignar además un calendario de días festivos propio, lo que permite reflejar, por ejemplo, días festivos que varían según el cantón. Cada contrato es válido por tiempo limitado o indefinido.

**Importación:** No existe una importación CSV para datos maestros. Los directorios existentes se incorporan automáticamente mediante sincronización LDAP/Active Directory a través de un proveedor de identidad; las personas individuales se crean manualmente o mediante Klacksy.

**Buscar y filtrar:** La búsqueda de texto libre encuentra personas por nombre, apellido, empresa o número de personal, así como por número de teléfono/código postal; adicionalmente se puede filtrar por cantón, estado (Activos/Antiguos/Futuros) y grupo.

## Bueno saberlo

- Solo los *Activos* se pueden planificar — compruebe la fecha de alta/baja de la pertenencia si alguien no aparece en el plan de turnos.
- Tener varios contratos por persona es normal, por ejemplo en caso de un cambio de porcentaje de jornada — no es necesario crear una segunda persona para ello. Las nuevas plantillas de contrato (porcentaje de jornada, recargos, calendario) se crean usted mismo en Configuración > Contratos.
- Cree primero la estructura de grupos y asigne después las personas — así los permisos a nivel de grupo funcionan desde el principio.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

---
sidebar_position: 4
---

# Roles y permisos

Klacks conoce exactamente dos niveles de permisos asignables para las cuentas de acceso: **Supervisor** y **Admin**. No existe un tercer rol técnicamente independiente — términos como "planificador" describen más abajo una **función en el trabajo diario**, no un nivel de permiso adicional.

## Los dos roles reales

**Supervisor** puede crear, editar y eliminar direcciones, grupos, contratos, ausencias y turnos, así como aprobar un día o un grupo en el plan de turnos y retirar esa aprobación de nuevo. En cambio, la simple confirmación de horas de trabajo individuales no requiere ningún rol especial — eso lo puede hacer cualquier cuenta de acceso.

**Admin** puede hacer, además, todo lo que puede hacer Supervisor, más: acceso a todos los ajustes (incluida la propia administración de usuarios), cerrar y reabrir periodos, así como gestionar áreas especialmente protegidas como el proveedor de identidad, los informes y las reglas de calendario.

La asignación se realiza mediante un menú desplegable en la administración de usuarios (icono de engranaje) y surte efecto de inmediato, sin necesidad de un clic de guardado independiente.

## "Planificador" como función, no como rol

En el día a día, normalmente es una cuenta de Supervisor la que se encarga del trabajo de planificación propiamente dicho — iniciar la planificación automática, ajustar mediante arrastrar y soltar en la cuadrícula del plan, enviar días o grupos para su aprobación. Eso no es un nivel de permiso propio, sino simplemente los derechos que ya tiene de por sí una cuenta de Supervisor.

## Bueno saberlo

- El último usuario que ha iniciado sesión también se muestra en la administración de usuarios, pero no puede editarse a sí mismo, cambiar sus propios permisos ni eliminarse allí.
- Cerrar o reabrir periodos de forma definitiva sigue estando reservado exclusivamente a Admin — incluso si un Supervisor ya ha aprobado días o grupos.
- Una cuenta de acceso no tiene por qué estar vinculada obligatoriamente a una ficha de datos maestros de empleado — la administración de usuarios y la gestión de personas son áreas separadas.

---
*Pruébelo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen diariamente.*

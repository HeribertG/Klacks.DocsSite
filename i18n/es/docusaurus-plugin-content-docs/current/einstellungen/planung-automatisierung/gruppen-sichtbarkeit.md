---
sidebar_position: 5
---

En Configuración > Visibilidad de grupos por usuario define qué grupos — y con ello qué datos asociados — puede ver un usuario individual.

## Cómo funciona

La lista muestra todos los usuarios con su nombre y el número de grupos raíz asignados (visibles) para ellos. Al hacer clic en el número se abre un formulario con una lista de casillas de todos los grupos raíz; aquí marca qué grupos puede ver este usuario. Si se habilita un grupo raíz, esto se aplica automáticamente también a todos sus subgrupos.

Los administradores están exentos de esta restricción: en su caso el botón está desactivado, el número mostrado corresponde siempre al total de todos los grupos raíz — los administradores, por principio, ven todo.

## Es bueno saberlo

- En un usuario normal (que no sea administrador) sin ninguna asignación, "0 grupos asignados" significa: este usuario actualmente **no ve nada** en las áreas con alcance de grupo (p. ej., panel de control, lista de clientes) — esto no es un fallo, sino la consecuencia directa de la falta de asignación.
- Excepción: si actualmente **no existe ningún** grupo en el sistema, todos los usuarios ven todo — las instalaciones sin estructura de grupos no necesitan así mantener esta configuración.
- Cree primero la estructura de grupos en los datos maestros antes de realizar aquí las asignaciones — sin grupos existentes no hay nada que marcar aquí.
- Esta configuración controla la **visibilidad** de los datos, no los **permisos** fundamentales de un rol — los roles/permisos se gestionan de forma independiente de esto.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

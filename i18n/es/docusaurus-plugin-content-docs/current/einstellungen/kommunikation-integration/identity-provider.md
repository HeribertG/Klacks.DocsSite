---
sidebar_position: 4
---

En Configuración > Proveedor de identidad conecta Klacks con un servicio de directorio externo — LDAP/Active Directory u OAuth2/OpenID Connect — para importar empleados automáticamente y/o gestionar el inicio de sesión a través de él.

## Cómo funciona

**LDAP/Active Directory:** Debe indicar host, puerto (389/636), SSL, Base DN, Bind DN, contraseña de Bind y un filtro de usuarios. Un interruptor "Usar para importación de clientes" activa la importación automática: nombre, apellido, título, empresa y dirección se toman de los atributos del directorio — en OpenLDAP y Active Directory, en parte con nombres de atributo distintos (p. ej., `uid` frente a `sAMAccountName`, `street` frente a `streetAddress`). Estas asignaciones de campos están fijadas en el backend y no se pueden editar desde la interfaz.

**OAuth2/OpenID Connect:** ID de cliente, secreto de cliente, ID de inquilino opcional (Azure), URL de autorización, de token y de UserInfo, así como los scopes — para el inicio de sesión mediante Google, Microsoft o GitHub.

**Probar conexión y sincronizar:** En los proveedores LDAP/AD, "Probar conexión" muestra el número de usuarios encontrados, incluyendo nombres de usuario de ejemplo. Si la importación de clientes está activada, "Sincronizar ahora" desencadena una sincronización manual; el resultado (procesados/nuevos/actualizados/desactivados) aparece inmediatamente después como mensaje en la página.

## Es bueno saberlo

- Esta página es accesible **únicamente para administradoras y administradores**, no para el rol de supervisor.
- La contraseña de Bind y el secreto de cliente se almacenan cifrados y en la interfaz solo se muestran enmascarados (`***`); al guardar sin modificarlos, se conserva el valor existente.
- Actualmente **no** se muestra en la interfaz un registro permanente de sincronización (historial, historial de errores) — solo el resultado de la última ejecución manual.
- Las personas que ya no se encuentran en el directorio no se eliminan durante la sincronización, sino que se desactivan mediante la fecha de baja de su membresía; si reaparecen más adelante, se reactivan automáticamente.
- Un identificador externo del directorio (ObjectGUID de LDAP o, en su defecto, el Distinguished Name) evita duplicados: si en una nueva sincronización se encuentra el mismo identificador, la persona existente se actualiza en lugar de crearse de nuevo.

---
*Pruébalo directamente: [Klacks Playground](https://klacks-software.ch:7643) — inicio de sesión `admin@test.com` / `P@ssw0rt1`, los datos se restablecen a diario.*

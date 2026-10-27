---
sidebar_position: 9
---
# Preguntas frecuentes

Las preguntas que más se plantean antes del primer uso — con respuestas sinceras, incluso cuando la respuesta es «todavía no».

## Probar y empezar

**¿Tengo que instalar Klacks para verlo?**
No. El [Playground](https://play.klacks-software.ch) es una instancia pública con datos de demostración; usted inicia sesión con `admin@test.com` / `P@ssw0rt1` y dispone de todos los derechos de administrador. La base de datos se restablece cada día a las 04:00 (hora suiza) — no registre allí datos personales reales.

**¿Cuánto dura una instalación?**
El instalador es un único comando. Genera las contraseñas y el certificado, fija la versión actual, arranca el stack y espera hasta que todo esté en buen estado. La mayor parte del tiempo se va en la descarga de las imágenes. Los requisitos están en [Requisitos del sistema](../betrieb/systemvoraussetzungen/).

**¿Por qué tengo que crear una cuenta de administrador propia?**
Porque la cuenta incluida tiene una contraseña públicamente conocida. Klacks le deja iniciar sesión con ella exactamente una vez y a continuación exige su propia cuenta; después, la cuenta predeterminada se desactiva. Es intencionado, no un error.

## Operación

**¿Dónde están mis datos?**
En su infraestructura. Klacks no envía sus datos de vuelta al fabricante. Si integra un modelo de IA como servicio externo, para **ese** servicio rigen, como es natural, sus condiciones — la elección del modelo es suya.

**¿Necesito obligatoriamente un proveedor de nube?**
No, ese es el núcleo de On-Premise: el stack se ejecuta en su servidor. Solo necesita acceso **saliente** a las fuentes de paquetes y de actualizaciones (`ghcr.io`, `github.com`). Una operación completamente sin acceso a Internet **no** existe actualmente — las instalaciones en redes aisladas son una fase de desarrollo todavía no realizada.

**¿Cómo protejo mis datos con copias de seguridad?**
Usted mismo — la copia de seguridad corre de su cuenta. Cómo hacerlo y qué volumen no debe olvidar en ningún caso se explica en [Copia de seguridad y restauración](../betrieb/backup-und-wiederherstellung/).

**¿Qué pasa si una actualización sale mal?**
El servicio de actualización hace antes una copia de seguridad de la base de datos, conmuta las nuevas versiones conjuntamente y comprueba después el estado de salud. Si la nueva versión no está en buen estado, revierte automáticamente. Detalles en [Actualizaciones y rollback](../betrieb/updates-und-rollback/).

**¿Funciona Klacks con mi hardware actual?**
Como referencia: **8 GB de RAM y 4 vCPU**. Para hosts más pequeños hay ajustes documentados que liberan memoria — con el precio de que la siguiente pregunta a Klacksy tarda algo más.

**¿Es compatible Klacks con mi proveedor de identidad?**
Sí. Klacks se puede conectar a un proveedor de identidad existente en lugar de gestionar cuentas propias — véase [Proveedor de identidad](../einstellungen/kommunikation-integration/identity-provider/).

## Funciones

**¿Para qué sectores es adecuado Klacks?**
Está pensado para empresas con turnos y servicios: atención domiciliaria y Spitex, hospitales, servicios de seguridad, empresas de limpieza y servicios domésticos, así como logística.

**¿Qué idiomas habla la interfaz?**
La documentación está disponible en 25 idiomas, entre ellos alemán, inglés, francés, italiano, español, polaco, japonés, chino (simplificado y tradicional), árabe y hebreo — el árabe y el hebreo también con sentido de lectura de derecha a izquierda.

**¿Tengo que decidirme por un modelo de IA?**
Usted elige el proveedor y el modelo y puede cambiarlos. Cómo configurarlo y comprobarlo se explica en [Proveedor de LLM y modelos](../einstellungen/klacksy-konfiguration/llm-provider-und-modelle/) y [Prueba de conexión del modelo](../einstellungen/klacksy-konfiguration/modell-verbindungstest/).

**¿Cuánto cuesta Klacks?**
El código fuente está bajo la GNU Affero General Public License v3 (AGPL-3.0) — puede leerlo, modificarlo y operarlo usted mismo. Si ofrece una versión modificada a otras personas a través de una red, debe poner también a disposición de esos usuarios el código fuente modificado bajo la AGPL-3.0. Todo lo que vaya más allá (preguntas, intercambio, desarrollo posterior) se gestiona a través de la [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC) y el [repositorio público del código fuente](https://github.com/HeribertG/Klacks.Api).

**¿Está terminado Klacks?**
No, y no lo afirma en ninguna parte. Klacks está en construcción, pero se desarrolla públicamente y se utiliza de verdad — en el Playground puede comprobar usted mismo en cualquier momento el estado actual, en lugar de creer una descripción.

## Colaborar

**He encontrado un error o tengo una pregunta.**
Lo más rápido es la [comunidad en Discord](https://discord.gg/YRP8p2abVC). Para errores del software, el aviso va al [repositorio](https://github.com/HeribertG/Klacks.Api). Siempre ayudan: la versión, el último paso antes del error y las últimas líneas de los registros — véase [Solución de problemas](../betrieb/fehlerbehebung/).

**¿Puedo contribuir yo mismo?**
El código fuente es abierto y la documentación está en la misma casa. Las indicaciones sobre pasajes poco claros son tan bienvenidas como el código.

---

*¿Falta su pregunta? [Comunidad de Klacks en Discord](https://discord.gg/YRP8p2abVC).*

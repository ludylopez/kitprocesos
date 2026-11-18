# Guía: Google Sheets + Forms + Apps Script

Son reglas y pasos que suelen romperse, no una plantilla.

## Estructura
- **Hoja principal** con pestañas separadas para:
  - Registros (lo que entra, una fila por evento).
  - Catálogos (productos, categorías, personas).
  - Resumen (fórmulas, lo que mira el dueño).
  - `Config` (parámetros como correo de alertas o mínimos).
- **Una fila por evento** y nunca celdas combinadas en las pestañas de datos. Encabezados en la fila 1.
- Las fórmulas van en la pestaña de resumen, no mezcladas con los registros.
- Protege las pestañas de catálogos y de resumen (Datos → Proteger hojas y rangos) para que nadie las borre sin querer.
- El código vive en `proyecto/apps-script/` (archivos `.gs` y `.html`). Es la copia de respaldo con historial.

## Etapa A: pantallas primero
- Si la captura es con **Google Forms**: diseña las preguntas con la persona: pocas, con opciones en lugar de texto libre y con foto si aplica.
  - Puedes crear el formulario por código (`FormApp`) o guiarla para hacerlo a mano.
  - Llena la hoja con 10 a 20 filas de ejemplo que se parezcan a su negocio.
- Si hace falta una pantalla propia (botones grandes, búsqueda de productos, lógica que Forms no permite): haz primero un boceto en `proyecto/pantallas/*.html` con datos de ejemplo. Ábrelo en el navegador y en el celular, y cuando esté aprobado conviértelo en una app web de Apps Script (`HtmlService`, `doGet`).
- La persona aprueba viendo la hoja y el formulario con datos de ejemplo antes de programar automatizaciones.

## Cómo subir el código
**Opción 1, con clasp** (Claude lo sube solo):
1. La persona entra a https://script.google.com/home/usersettings y activa "Google Apps Script API".
2. `npx @google/clasp login` (abre el navegador para iniciar sesión).
3. `npx @google/clasp create --type sheets --title "<nombre>" --rootDir proyecto/apps-script` crea una hoja nueva con su script.
4. `npx @google/clasp push` (con confirmación) para cada cambio.

**Opción 2, copiar y pegar** (si clasp se complica):
1. En la hoja: Extensiones → Apps Script.
2. Claude da el código completo de un archivo a la vez, y la persona lo pega y guarda.
3. Pasos numerados y cortos; confirma cada uno antes de seguir.

## Automatizaciones
- **Al enviar el formulario:** activador `onFormSubmit` instalable (Activadores → Agregar), no el simple.
- **Programadas:** activadores por tiempo, como el resumen diario a las 7 p. m. o los recordatorios de cobro.
- **Mensajes:** `MailApp` para correo. Para WhatsApp, lo gratuito es generar un enlace `https://wa.me/<número>?text=...` que la persona toca para enviar; el envío totalmente automático requiere la API de pago.
- **IA para leer fotos o texto:** `UrlFetchApp` a la API de Claude, con la llave en Propiedades del script (Configuración del proyecto → Propiedades del script), nunca en el código. El resultado se escribe como "propuesto" y una persona lo confirma.
- **Cuotas:** cada ejecución dura máximo 6 minutos. Procesa por lotes y lee o escribe rangos completos (`getValues`/`setValues`), no celda por celda.
- La primera ejecución pide permisos. Avísale a la persona que verá un aviso de "app no verificada", que es normal porque el script es suyo, y cómo continuar: "Configuración avanzada → Ir a…".

## Antes de entregar
- Prueba cada criterio con un caso real.
- Deja una pestaña `Cómo usar` con 3 a 5 pasos y capturas si ayudan.
- Comparte la hoja solo con quien la necesite, con el permiso mínimo: el empleado usa el formulario y no edita la hoja.

# Guía: página HTML simple (sin compilar)

Sirve para calculadoras, catálogos, formatos imprimibles, listas de verificación, tableros sencillos y bocetos de pantallas.

## Reglas
- Una carpeta en `proyecto/<nombre>/` con `index.html` y, si hace falta, `estilos.css`, `app.js` y `datos.js`.
- Debe funcionar con doble clic (`file://`). Para eso, los datos se cargan con `<script src="datos.js">` y no con `fetch` de archivos locales.
- Si usas librerías externas, cárgalas desde cdn.jsdelivr.net o cdnjs con **versión exacta** (por ejemplo `chart.js@4.4.1`), nunca "latest".
- Primero el celular: `<meta name="viewport" content="width=device-width, initial-scale=1">`, botones de 44 px de alto como mínimo, texto de 16 px o más.
- Modo claro y oscuro con variables CSS y `prefers-color-scheme`.
- Si se va a imprimir, agrega `@media print` (sin fondos ni botones, márgenes A4 o carta).

## Dónde guardar datos
Una página sola no guarda datos para varias personas. Hay tres opciones:
- **Solo para esa persona y ese dispositivo:** `localStorage`. Avisa que se pierde si borra el navegador y agrega un botón de "Descargar respaldo" (JSON o CSV).
- **Leer de una hoja de Google:** publica la hoja como CSV (Archivo → Compartir → Publicar en la web) y léela con `fetch`. Esto funciona solo si la página está publicada, no con `file://`. Ojo: cualquiera con el enlace ve esos datos.
- **Leer y escribir en una hoja de Google:** una app web de Apps Script (`doGet`/`doPost`) como intermediaria. Ver `sheets-apps-script.md`.

## Publicar
Ver `publicar-vercel.md`. Una carpeta estática se publica tal cual, sin configuración.

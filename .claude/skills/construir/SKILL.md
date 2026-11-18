---
name: construir
description: Planifica y construye la solución aprobada en proyecto/propuesta/datos.js, empezando por las pantallas con datos de ejemplo. Úsala solo cuando estado.md diga "plan" o "construir".
---

# Construir

Solo se usa con la propuesta aprobada (`estado.md` en `etapa: plan` o `construir`). Si no lo está, vuelve a la skill `descubrir`.

## 1. Plan

1. Lee `proyecto/propuesta/datos.js`: la herramienta, los momentos de uso, los criterios, las pantallas y los supuestos.
2. Lee **solo** la guía de la herramienta elegida en `guias/`. Si la herramienta no tiene guía, por ejemplo una aplicación existente o AppSheet, usa los principios generales de este archivo.
3. Haz únicamente las preguntas que falten para construir. Normalmente son pocas: confirmar los supuestos, nombres de productos o categorías reales, y quién tendrá acceso. Usa el mismo estilo: una por mensaje y con opciones.
4. Escribe el plan en `proyecto/plan.md` (es interno, puede ser técnico). Ordénalo por las etapas de abajo e incluye en qué paso se pide cada acceso.
5. Explícale el plan a la persona en 4 a 6 líneas sencillas: qué va a ver primero, qué cuentas va a necesitar y cuándo. Espera su "sí".
6. Cambia `estado.md` a `etapa: construir` y haz commit.

## 2. Orden de construcción

### Etapa A · Pantallas con datos de ejemplo
- Construye primero lo que la persona va a ver y tocar: pantallas, formulario u hoja, con **datos de ejemplo inventados que se parezcan a su negocio** (sus productos, sus nombres de rol).
- Guarda los datos de ejemplo en **un solo archivo o una sola pestaña**, con la misma forma que tendrán los datos reales. Así, conectar después solo significa cambiar de dónde vienen.
- Recorre con la persona cada momento de uso de la propuesta, de punta a punta: "Imagina que acabas de cerrar el turno. Abre esta pantalla…".
- Haz que la revise **en su celular** si así la va a usar: con la red local, o publicándola en una vista previa siguiendo `guias/publicar-vercel.md`.
- Itera aquí todo lo necesario. Cambiar ahora cuesta poco; después cuesta mucho.
- **Punto de control:** la persona aprueba cada vista. Commit con el mensaje "Pantallas aprobadas".

### Etapa B · Estructura de datos
- Saca de las pantallas aprobadas qué datos se guardan (tablas, columnas o pestañas), las relaciones entre ellos y quién puede ver o cambiar cada cosa.
- Muéstraselo a la persona como una lista simple ("Vamos a guardar: productos, con nombre, precio y mínimo…"). Si hay un facilitador acompañando, sugiere que lo revise antes de seguir.
- Commit.

### Etapa C · Datos reales y lógica
- Crea el almacenamiento, conecta las pantallas y programa las reglas, los cálculos, las alertas y los mensajes automáticos.
- Pide cada acceso **en el momento en que lo necesitas**, con pasos numerados y cortos para la persona. Por ejemplo: "1. Abre este enlace. 2. Inicia sesión con tu cuenta de Google. 3. Toca 'Permitir'. 4. Dime cuando esté listo."
- Nunca le pidas que pegue contraseñas en el chat. Las llaves secretas van en archivos `.env` que no se suben a ningún lado; explica dónde quedan.

### Etapa D · Prueba con un caso real
- Recorre cada criterio de la propuesta ("cuando pasa X, debe pasar Y") con un caso real del negocio. Si es posible, que la persona lo haga ella misma mientras tú observas.
- Anota el resultado de cada criterio en `proyecto/pruebas.md`: ✔ o ✘, con una línea de explicación.
- Corrige lo que falle. No declares terminado nada que no hayas comprobado.

### Etapa E · Entrega
- Publica la versión real, siempre con confirmación.
- En `datos.js`, llena la sección `entrega`: cómo se usa en 3 a 5 pasos, el enlace, el costo mensual, cómo pedir cambios ("abre esta carpeta en Claude y escribe lo que quieres cambiar") y qué hacer si algo falla.
- Vuelve a abrir el visor para que la persona tenga todo en una sola página.
- Cambia `estado.md` a `etapa: entregado` y haz commit.

## Principios de construcción

- **Lo más simple que resuelva el problema.** Nada de funciones "por si acaso". Si aparece una idea nueva, anótala en `proyecto/ideas.md` para después.
- **Diseñado para el celular primero:** botones grandes, poco texto y, en lo posible, una acción principal por pantalla.
- **Textos de la interfaz en el idioma de la persona,** con las palabras que usa ella ("cierre de turno", no "conciliación").
- **Que se vea bien sin ser recargado:** pocos colores, buena tipografía, espacio en blanco. Se aceptan herramientas de diseño de interfaz si ayudan.
- **Cada etapa termina con algo que la persona puede ver o probar.** Después de cada cambio importante, di en una frase qué cambió y dónde verlo.
- **Errores:** si algo falla, investiga la causa antes de cambiar cosas al azar. Explica en una frase qué pasó.

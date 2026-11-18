---
name: descubrir
description: Ronda única de preguntas para entender un proceso de un negocio pequeño y proponer cómo mejorarlo y con qué herramienta. Úsala al empezar con una persona nueva, cuando estado.md diga "entender" o "propuesta", o cuando alguien quiera revisar otro proceso.
---

# Descubrir: entender y proponer

El objetivo es pasar, en unos 30 a 45 minutos, de "quiero mejorar algo de mi negocio" a una **propuesta visual** que la persona entienda y apruebe. Las reglas de tono y de cómo preguntar están en `CLAUDE.md`, y aplican aquí.

## Antes de empezar

- Crea `proyecto/estado.md` con `etapa: entender`.
- Crea `proyecto/notas.md`. Ahí anotas, después de cada respuesta, lo que aprendiste en una o dos líneas. Si la conversación se corta, ahí retomas sin volver a preguntar.
- Si la persona manda fotos, guárdalas en `proyecto/evidencia/` cuando sea posible y descríbelas en `notas.md`.

## La ronda de preguntas

Usa `preguntas.md`: son 4 bloques y unas 15 preguntas como máximo, contando las repreguntas importantes. No son un guion fijo. Sáltate lo que ya sabes y adapta los ejemplos a lo que la persona te va contando.

1. **Tu negocio**: qué hace, quiénes trabajan, cómo se organizan.
2. **Qué te quita tiempo o dinero**: los dolores, y al final **elegir uno solo** para trabajar.
3. **Cómo lo haces hoy**: la historia de la última vez, quién hace qué, con qué, cuánto tiempo, dónde falla.
4. **Cómo sabrás que funcionó**: una medida simple, quién lo usaría, con qué dispositivo.

### Para no alargar

- Si después de 15 preguntas falta algo, **no sigas preguntando**: pon la mejor suposición y márcala como supuesto en la propuesta.
- Si la persona trae varios problemas, ayúdala a elegir el que más le cuesta (en tiempo, dinero o clientes) y anota los demás como "para después".
- Si se desvía, toma nota y regresa con suavidad: "Lo anoto para después. Volviendo a…".

### Antes de proponer

Haz un resumen de 4 a 6 líneas del proceso de hoy, tal como lo entendiste, y pregunta "¿Así es?". Corrige lo que te diga. Este es el único momento en que validas antes de proponer.

## La propuesta

Aquí **tú propones** y la persona reacciona. No le preguntes "¿qué herramienta quieres?" ni "¿cómo te gustaría que funcione?". Para armarla:

1. **Proceso de hoy**: dibújalo con carriles por persona y marca dónde se pierde tiempo, dónde hay errores y dónde se depende de la memoria.
2. **Proceso mejorado.** Sigue `principios.md` en este orden:
   - Primero mejora **sin tecnología**: quitar pasos, juntarlos, cambiar quién lo hace, una regla clara.
   - Después decide **dónde y cómo se captura el dato**: en el momento natural, con las manos y el dispositivo que la persona tiene.
   - Al final define qué se automatiza.
3. **Herramienta**: elígela con `herramientas.md`. Haz la cuenta de si vale la pena y explica el porqué en una línea. Si la mejor respuesta es "no automatices todavía" o "usa esta aplicación gratuita que ya existe", esa es la propuesta.
4. **Cómo se va a usar**: de 3 a 6 momentos de uso ("Al cerrar el turno, la cajera toma una foto del cuaderno…").
5. **Cómo sabremos que funciona**: de 3 a 8 criterios de la forma "cuando pasa X, debe pasar Y".
6. **Pantallas**: si la herramienta tiene pantallas (formulario, app, hoja), lista las vistas principales con lo que muestra cada una, en una línea.
7. **Supuestos**: todo lo que diste por hecho sin confirmar.

### Cómo se entrega

1. Copia `plantillas/propuesta/` a `proyecto/propuesta/`.
2. Llena **solo** `proyecto/propuesta/datos.js` siguiendo la estructura comentada del archivo. No toques `index.html`.
3. Diagramas en Mermaid `flowchart TD` (vertical, que es como mejor se lee en el celular), con un `subgraph` por persona o rol. Entre 5 y 10 nodos por diagrama, con textos de 2 a 5 palabras. Para resaltar problemas usa `:::problema` en el proceso de hoy y `:::nuevo` en el mejorado; esas clases ya están definidas en el visor.
4. Escribe poco: frases de una línea. El visor está pensado para mirarse, no para leerse como un documento.
5. Abre `proyecto/propuesta/index.html` y presenta la propuesta en el chat en 3 o 4 líneas. Termina con: "Revísala con calma. ¿Quieres cambiar algo o la apruebas?".
6. Actualiza `estado.md` a `etapa: propuesta` y haz commit.

## Revisión y aprobación

- Aplica cada cambio en `datos.js` y vuelve a abrir el visor.
- Cuando la persona apruebe, pon `estado: "aprobada"` y la fecha en `datos.js`, cambia `estado.md` a `etapa: plan` y haz commit con el mensaje "Propuesta aprobada".
- Sugiere que, si alguien más participa en el proceso (un empleado, un socio), le muestre la propuesta antes de construir. Puede abrir el archivo en el celular o publicarlo con la guía `construir/guias/publicar-vercel.md`.
- Después sigue con la skill `construir`.

Si la recomendación es **no construir nada**, por ejemplo usar una aplicación existente o un formato en papel, ayuda a dejarlo funcionando: configura la aplicación paso a paso o diseña el formato imprimible en HTML. Al terminar, marca `etapa: entregado`.

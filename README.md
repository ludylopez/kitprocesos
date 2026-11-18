# Kit de procesos

Un kit para que dueños y colaboradores de pequeñas empresas, sin conocimientos técnicos, mejoren y automaticen procesos de su negocio con [Claude Code](https://claude.com/claude-code).

Claude hace las preguntas, dibuja cómo funciona el proceso hoy y cómo podría funcionar, propone la herramienta más sencilla y barata que lo resuelva (a veces la respuesta es "no hace falta automatizar") y, una vez aprobada la propuesta, la construye, empezando por las pantallas.

## Cómo se usa

1. Descarga el ZIP: **Code → Download ZIP** (o [este enlace](https://github.com/ludylopez/kitprocesos/archive/refs/heads/main.zip)).
2. Descomprímelo. No lo abras desde adentro del ZIP.
3. Abre la app de escritorio de Claude, entra a **Code** y elige la carpeta. Si pregunta si confías en ella, acepta. Sin ese paso, Claude no lee las instrucciones del kit.
4. Escribe **hola**.

Para retomar otro día, abre la misma carpeta y escribe "hola". Claude sigue donde se quedó.

## Qué hay adentro

| Ruta | Para qué |
|---|---|
| `CLAUDE.md` | Cómo conversa Claude, el orden de trabajo y las reglas que no cambian |
| `.claude/skills/descubrir/` | La ronda de preguntas, los principios para mejorar procesos y el catálogo de herramientas |
| `.claude/skills/construir/` | El orden de construcción y guías para Google Sheets + Apps Script, HTML simple, Next.js + Supabase y la publicación en Vercel |
| `plantillas/propuesta/` | El visor de la propuesta (se abre en cualquier navegador o celular) |
| `proyecto/` | Aquí queda el trabajo de cada persona |

## El camino

**Entender** (unas 15 preguntas) → **Propuesta visual** → **Aprobación** → **Plan** → **Construir** (pantallas → datos → lógica → prueba) → **Entrega**

## Requisitos

- Un plan de Claude que incluya Claude Code, y la app de escritorio instalada.
- Para construir, según la herramienta elegida: cuenta de Google, de Vercel o de Supabase. Claude las pide solo cuando hacen falta.

## Licencia

MIT

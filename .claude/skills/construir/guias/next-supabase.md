# Guía: app a la medida con Next.js + Supabase + Vercel

Son reglas y pasos que suelen romperse, no una plantilla. Genera el proyecto desde cero y adáptalo al caso.

## Estructura del proyecto
- Crea la app en `proyecto/app/` con `npx create-next-app@latest app --ts --tailwind --eslint --app --use-npm` (sin `src/`).
- Pantallas en `app/`, componentes en `components/`, acceso a datos en `lib/datos.ts`.
- Mientras se construyen las pantallas (etapa A), `lib/datos.ts` lee de `lib/datos-ejemplo.ts`. En la etapa C se cambia solo `lib/datos.ts` para leer de Supabase, sin tocar las pantallas.
- La app debe poder instalarse en el celular: agrega `app/manifest.ts` con nombre, colores e ícono.

## Etapa A: sin cuentas
- No hacen falta Supabase ni Vercel para empezar. Corre `npm run dev` y abre la app en el navegador de la computadora.
- Para verla en el celular conectado al mismo wifi: `npm run dev -- -H 0.0.0.0` y abre `http://<IP de la compu>:3000`. Si no funciona, publica una vista previa con la guía `publicar-vercel.md`.

## Etapa C: Supabase

### Cuentas y proyectos
1. La persona crea su cuenta en supabase.com (con GitHub o con correo). La cuenta es suya y los datos son de su negocio.
2. Crea **dos proyectos**: `<negocio>-pruebas` y `<negocio>-real`. El plan gratuito permite justo 2. Guarda las contraseñas de la base en un lugar seguro: no se necesitan en el chat.
3. Pídele el **Project ref** de cada uno (Project Settings → General) y la URL y la publishable key del proyecto de pruebas (Project Settings → API).

### Conexión de Claude (MCP) solo al proyecto de pruebas
Crea `proyecto/app/.mcp.json`:
```json
{
  "mcpServers": {
    "supabase": {
      "type": "http",
      "url": "https://mcp.supabase.com/mcp?project_ref=<REF_PRUEBAS>&features=database,docs,development,debugging,storage"
    }
  }
}
```
- **Nunca** pongas el ref del proyecto real en el MCP.
- La primera vez pedirá iniciar sesión en el navegador. Después hay que abrir una conversación nueva en esa carpeta para que cargue.
- Si no puede usarse el MCP, usa la CLI: `npx supabase login`, `npx supabase link --project-ref <REF_PRUEBAS>`, `npx supabase db push`.

### Base de datos
- Todo cambio de estructura va como migración en `proyecto/app/supabase/migrations/<timestamp>_<nombre>.sql`, para poder repetirlo en el proyecto real.
- En pruebas se aplica con el MCP (`apply_migration`) o con `npx supabase db push`.
- **RLS activado en todas las tablas**, con políticas explícitas. Patrón para roles:
  - Tabla `perfiles` (id = auth.users.id, nombre, rol `dueño`|`empleado`, sucursal opcional).
  - Una función `es_dueño()` `security definer` para usar en las políticas.
  - Empleado: crea registros y ve los suyos o los de su sucursal. Dueño: ve y corrige todo.
- Guarda **quién y cuándo** en cada registro de movimiento (`creado_por`, `created_at`).
- No borres movimientos de dinero o de inventario: se anulan con un registro contrario. Así siempre hay historial.
- Después de cada migración, revisa los avisos de seguridad (`get_advisors`) y corrige los críticos.

### Acceso (login)
- Correo + contraseña. El dueño crea a sus empleados desde la app o desde el panel de Supabase (Authentication → Users → Add user), así nadie depende de recibir correos.
- Desactiva el registro público si solo entra personal del negocio (Authentication → Sign In / Providers → "Allow new users to sign up").
- En Authentication → URL Configuration: Site URL = el dominio de Vercel; agrega `http://localhost:3000/**` y `https://*-<equipo>.vercel.app/**` como Redirect URLs.
- Usa `@supabase/ssr`: un cliente para el navegador, uno para el servidor (con cookies) y `middleware.ts` que refresque la sesión y redirija a `/login` si no hay usuario. Sigue la documentación vigente de Supabase para Next.js (búscala con el MCP `search_docs` si tienes dudas).

### Fotos
- Bucket privado en Storage (`fotos`), con políticas que permitan subir a usuarios autenticados y leer según el rol.
- Reduce la foto en el navegador antes de subirla (máx. ~1600 px, JPEG 0.8). Ahorra datos móviles y espacio.
- Si la IA lee la foto, hazlo en una ruta del servidor (`app/api/...`), con la llave en una variable de entorno de servidor (`ANTHROPIC_API_KEY`). El resultado se muestra como propuesta editable y la persona confirma.

### Variables de entorno
- `.env.local` (nunca se sube): `NEXT_PUBLIC_SUPABASE_URL`, `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY` y las llaves de servidor que hagan falta.
- Crea `.env.example` con los nombres, pero sin los valores.
- Las mismas variables, con los valores del proyecto **real**, se cargan en Vercel (Project → Settings → Environment Variables) solo para Production. Para Preview van las de pruebas.

### Evitar que el proyecto gratuito se pause
Supabase pausa los proyectos gratuitos que pasan 7 días sin actividad. Agrega una ruta `app/api/ping/route.ts` que haga una consulta mínima, y un cron diario de Vercel en `vercel.json`:
```json
{ "crons": [{ "path": "/api/ping", "schedule": "0 12 * * *" }] }
```
Explícale a la persona qué hacer si le llega el correo de aviso de pausa: entrar a Supabase y tocar "Restore".

## Pasar al proyecto real (con confirmación)
1. Muestra en palabras qué va a cambiar ("Se van a crear las tablas de productos y movimientos").
2. Espera el "sí".
3. `npx supabase link --project-ref <REF_REAL>` y luego `npx supabase db push`.
4. Vuelve a enlazar con pruebas: `npx supabase link --project-ref <REF_PRUEBAS>`.
5. Publica con `publicar-vercel.md`.

## Antes de entregar
- `npm run build` sin errores.
- Prueba con dos usuarios, uno dueño y otro empleado, que cada uno vea solo lo que le corresponde.
- Prueba en el celular de la persona.

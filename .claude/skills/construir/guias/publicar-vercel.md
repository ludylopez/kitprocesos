# Guía: publicar en Vercel

Sirve para cualquier carpeta: la propuesta (`proyecto/propuesta/`), una página HTML o una app Next.js.

## La primera vez
1. La persona crea su cuenta en vercel.com (lo más fácil es "Continue with Google" o con correo).
2. `npx vercel login` abre el navegador para que inicie sesión. Dile que avise cuando termine.

## Publicar
- Desde la carpeta que se va a publicar: `npx vercel --yes`. Esto crea el proyecto la primera vez y genera un enlace de vista previa.
- **Ojo:** Vercel protege las vistas previas por defecto, y solo se ven con la sesión de Vercel iniciada. Para verla en el celular, inicia sesión ahí. Para compartirla con otra persona, publica en producción.
- **Producción, siempre con confirmación:** `npx vercel --prod`. Da un enlace fijo del tipo `<nombre>.vercel.app`.
- Las variables de entorno se agregan con `npx vercel env add <NOMBRE> production` o desde el panel. Nunca las pongas en el código.

## Condiciones que la persona debe saber
- El plan gratuito (Hobby) es **solo para uso personal no comercial**. Para un negocio corresponde el plan Pro (USD 20 al mes). Para probar en el taller sirve el gratuito; antes de usarlo en el negocio, explícalo y ofrece alternativas (Netlify o Cloudflare Pages para páginas estáticas, revisando sus condiciones).
- En el plan Hobby, el proyecto solo tiene un usuario: el dueño de la cuenta.

## Si se conecta GitHub (opcional)
Solo si la persona quiere respaldo en la nube o publicación automática con cada cambio:
1. Cuenta en github.com.
2. `gh auth login` (o guía para instalar GitHub Desktop).
3. Crea un repositorio privado y súbelo (con confirmación).
4. En Vercel, conecta el repositorio (Project → Settings → Git).

Desde ese momento, cada cambio subido se publica solo. Para la mayoría no hace falta: `npx vercel --prod` alcanza.

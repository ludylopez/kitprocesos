# Catálogo de herramientas y cómo elegir

Los precios son de referencia (finales de 2026) y pueden cambiar. Si la decisión depende del precio, verifícalo en el sitio oficial antes de proponer.

## Los escalones

Empieza siempre desde abajo y sube solo si el escalón anterior no alcanza.

| Escalón | Qué es | Cuándo |
|---|---|---|
| **0 · Sin tecnología** | Una regla, un formato en papel bien diseñado, una rutina de cierre | Pasa pocas veces, lo hace una sola persona, o el problema es de orden y no de herramienta |
| **1 · Aplicación que ya existe** | WhatsApp Business (catálogo, respuestas rápidas, etiquetas), Meta Business Suite, Google Calendar, apps gratuitas de punto de venta o inventario, la banca en línea | Ya existe algo gratis o barato que hace justo eso. **Siempre revisa esta opción antes de construir.** |
| **2 · Hoja + formulario + automatización simple** | Google Forms + Sheets + Apps Script; Excel; una página HTML simple; AppSheet o Glide | Hace falta algo a la medida, con pocos usuarios y volumen bajo o medio |
| **3 · App a la medida** | Next.js + Supabase, publicada en Vercel | Varias personas o sucursales, permisos por rol, fotos, mucho volumen, o lógica que una hoja no aguanta |

## Opciones

### Google Forms + Sheets + Apps Script
- **Costo:** gratis con una cuenta de Google.
- **Bueno para:** registros desde el celular sin instalar nada, reportes automáticos, correos o recordatorios programados y lectura de fotos con IA a través de un script.
- **Límites:** cada ejecución del script dura máximo 6 minutos y hay cuotas diarias de correos y llamadas. Con decenas de miles de filas se pone lento, y los permisos por persona son básicos.
- **Lo mantiene:** el dueño puede ver y corregir la hoja sin ayuda.

### Página HTML simple
- **Costo:** gratis (se abre como archivo, o se publica gratis en Vercel o Netlify).
- **Bueno para:** calculadoras, catálogos, formatos imprimibles, listas de verificación y tableros que leen una hoja de Google publicada.
- **Límites:** no guarda datos por sí sola; necesita una hoja o un servicio detrás.

### Excel
- **Costo:** el que ya tengan.
- **Bueno para:** quien ya vive en Excel y trabaja en una sola computadora.
- **Límites:** difícil de usar desde el celular y entre varias personas; las macros no funcionan en el celular ni en la web.

### AppSheet / Glide (apps sin programar sobre una hoja)
- **Costo:** gratis para probar; con usuarios reales cuesta por usuario al mes.
- **Bueno para:** una app sencilla sobre una hoja de Google, con escaneo de códigos y fotos.
- **Límites:** el costo crece con cada usuario y se depende de la plataforma.

### App a la medida: Next.js + Supabase + Vercel
- **Costo:**
  - Supabase gratis: 2 proyectos, y se pausa tras 7 días sin actividad. El plan Pro cuesta USD 25 al mes.
  - Vercel Hobby es gratis, pero **solo para uso personal no comercial**. Para un negocio corresponde el plan Pro, de USD 20 al mes. Alternativas: Netlify o Cloudflare Pages (revisa sus condiciones).
- **Bueno para:** varios usuarios con roles, fotos, sucursales, reglas complejas y una buena experiencia en el celular.
- **Límites:** alguien tiene que mantenerla. Para la persona de este taller, ese alguien será Claude con su ayuda; no es tan sencillo como una hoja.

### Herramientas para comunicar y vender
- **Meta Business Suite:** programa publicaciones de Facebook e Instagram gratis.
- **Canva:** plantillas de diseño; versión gratuita.
- **WhatsApp Business:** catálogo, respuestas rápidas, mensajes de ausencia y etiquetas; gratis. La API de WhatsApp para enviar mensajes automáticos tiene costo por conversación y requiere verificación del negocio, así que solo vale la pena con volumen.

### IA para leer fotos, voz y documentos
- **Claude u otro modelo, llamado desde Apps Script o desde la app:** lee facturas, recibos o cuadernos y propone los datos. Cuesta centavos por imagen, pero requiere una llave de API con un método de pago.
- **Regla:** la IA propone y una persona confirma.

## ¿Vale la pena?

Haz esta cuenta y muéstrala en la propuesta en una línea:

```
Horas ahorradas al mes × valor de la hora  vs  costo mensual + horas para aprenderlo y mantenerlo
```

Ejemplo: "Se ahorran unas 12 horas al mes (≈ Q600). La herramienta cuesta Q0 y toma 2 horas aprender a usarla. Vale la pena."

Señales de que **no** conviene automatizar todavía:
- Pasa menos de 3 veces por semana y toma pocos minutos.
- El proceso cambia cada mes y todavía no está claro.
- Nadie va a usarla con constancia: el problema es de hábito, no de herramienta.
- Ya existe una aplicación gratuita que lo resuelve en un 80 %.

## Cómo elegir entre varias opciones

Puntúa mentalmente cada opción en: costo mensual, facilidad para quien la usa todos los días, quién la mantiene, si funciona en el celular, cuántos usuarios necesita y si hace falta que funcione sin internet. Propón **una sola herramienta** y, si aplica, menciona en una línea la alternativa ("si en el futuro tienes 3 sucursales, conviene pasar a…").

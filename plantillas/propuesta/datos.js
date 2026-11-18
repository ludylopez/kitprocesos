/*
  Datos de la propuesta. Es lo ÚNICO que se llena: index.html lo muestra.
  - Frases cortas (una línea). El visor está pensado para mirarse, no para leerse.
  - Cualquier sección vacía ("" o []) simplemente no se muestra.
  - Diagramas: Mermaid "flowchart TD" (vertical: se lee bien en el celular), un subgraph por persona/rol,
    5 a 10 nodos, textos de 2 a 5 palabras. Clases disponibles:
      :::problema  → resalta un paso con problema (usar en "hoy")
      :::nuevo     → resalta un paso nuevo o mejorado (usar en "propuesta")
  - Íconos disponibles para "momentos": camara, voz, celular, computadora, formulario,
    mensaje, reloj, alerta, documento, codigo, persona, caja, dinero, grafica.
*/
window.PROPUESTA = {
  negocio: "",            // "Ferretería El Martillo"
  proceso: "",            // "Control de caja chica"
  fecha: "",              // "2026-11-18"
  estado: "pendiente",    // "pendiente" | "aprobada"
  aprobada_el: "",        // fecha cuando se aprueba

  objetivo: {
    meta: "",             // "Saber cada día en qué se fue el dinero de caja chica"
    medida: ""            // "Cuadrar caja chica en 5 minutos, sin faltantes sin explicar"
  },

  hoy: {
    resumen: "",          // una línea: cómo se hace hoy
    tiempo: "",           // "≈ 4 horas por semana"
    diagrama: ``,         // Mermaid
    problemas: []         // ["Los recibos se pierden", "Se anota días después"]
  },

  propuesta: {
    resumen: "",          // una línea: la idea central
    diagrama: ``,         // Mermaid
    sin_tecnologia: [],   // mejoras de orden/reglas: ["Un solo responsable por turno"]
    automatizado: []      // lo que hace la herramienta: ["Foto del recibo llena el gasto"]
  },

  herramienta: {
    nombre: "",           // "Formulario de Google + hoja de cálculo"
    escalon: 2,           // 0 sin tecnología · 1 app existente · 2 hoja/formulario/página · 3 app a la medida
    por_que: "",          // una línea
    costo_mensual: "",    // "Q0" / "USD 20"
    vale_la_pena: "",     // "Ahorra ≈ 12 h/mes (≈ Q600) · cuesta Q0 y 2 h aprenderlo"
    alternativa: ""       // opcional: "Si abres otra sucursal, conviene pasar a…"
  },

  momentos: [
    // { icono: "camara", quien: "Cajera", cuando: "Al pagar un gasto", que: "Toma foto del recibo" }
  ],

  criterios: [
    // { cuando: "Se registra un gasto sin recibo", entonces: "Queda marcado para revisar" }
  ],

  pantallas: [
    // { nombre: "Registrar gasto", muestra: "Foto, monto, categoría y botón Guardar" }
  ],

  supuestos: [
    // "Hay un solo fondo de caja chica de Q1,000"
  ],

  para_despues: [
    // Otros procesos que salieron en la conversación: "Pedidos a proveedores"
  ],

  // Se llena al terminar de construir (skill construir, etapa E). Déjalo en null antes.
  entrega: null
  /* entrega: {
       enlace: "https://…",
       pasos: ["Abre el enlace en tu celular", "…"],
       costo: "Q0 al mes",
       cambios: "Abre esta carpeta en Claude y escribe qué quieres cambiar.",
       si_falla: "Toma una captura y pégala en Claude."
     } */
};

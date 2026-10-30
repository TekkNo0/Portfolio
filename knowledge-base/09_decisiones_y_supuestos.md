# Decisiones y Supuestos

## Decisiones documentadas

### DD-01 — Stack tecnológico: Next.js + Tailwind CSS + Framer Motion
- **Decisión**: Implementar Next.js (App Router) en lugar de HTML plano o Astro.
- **Contexto**: Se busca una solución con máxima interactividad en el cliente (Framer Motion, Canvas interactivo) y capacidad de ejecutar endpoints serverless seguros sin configurar servidores adicionales.
- **Alternativas consideradas**: Astro (más ligero pero con menor soporte nativo out-of-the-box para estados complejos de React en cliente), Vite SPA clásico (requiere backend separado para el formulario).
- **Justificación**: Next.js ofrece el balance ideal entre performance, SSR, soporte de TypeScript y API routes nativas.
- **Trade-offs**: Mayor tamaño inicial de bundle que un sitio puramente estático de Astro, compensado con optimizaciones de carga dinámica.

### DD-02 — Postergación de la sección completa de Proyectos para v2.0
- **Decisión**: No bloquear el lanzamiento del portfolio inicial por la falta de proyectos finalizados.
- **Contexto**: Máximo está actualmente desarrollando sus proyectos troncales.
- **Alternativas consideradas**: Crear proyectos ficticios genéricos.
- **Justificación**: Máximo prefiere no mostrar proyectos ficticios y concentrarse en la solidez del Hero, la identidad visual y su sección "Sobre Mí".

### DD-03 — Soporte bilingüe in-app sin rutas anidadas
- **Decisión**: Manejar la traducción ES / EN a través de un `LanguageContext` reactivo en lugar de subrutas `/es` y `/en`.
- **Contexto**: El sitio es una SPA de una sola página y se busca una transición instantánea entre idiomas sin recargas ni complejidades de enrutamiento múltiple.

## Supuestos inferidos

### SU-01 — Disponibilidad futura de la fotografía
- **Supuesto**: Se añadirá una fotografía profesional o render 3D de Máximo en el contenedor HUD en una fase posterior.
- **Origen**: Instrucción del usuario ("Todavia no tengo la fotografia, arrancá con la estructura").
- **Riesgo si es falso**: El marco HUD quedaría con un placeholder interactivo vacío.
- **Cómo validar**: Crear un componente HUD autosuficiente con escáner holográfico animado que funcione de manera estética tanto con foto como sin ella.

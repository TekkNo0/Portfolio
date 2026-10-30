# Proposal: i18n and Content Layer

## Why
El portfolio requiere un mecanismo de internacionalización ágil (Español / Inglés) que no requiera recarga de página ni subrutas complejas, junto con una estructura de datos fuertemente tipada en `src/data/content.ts`. Esto permite a Máximo personalizar su biografía y detalles técnicos de forma sencilla respetando la regla dura de desacoplamiento de contenido.

## What Changes
- Creación de interfaces y tipos TypeScript en `src/types/index.ts`.
- Implementación de `src/context/LanguageContext.tsx` con soporte de persistencia en `localStorage`.
- Creación de `src/data/content.ts` conteniendo los textos bilingües del Hero, About, Navegación y Contacto.
- Exposición del hook `useLanguage` para consumo fluido en componentes de cliente.

## Capabilities

### New Capabilities
- `i18n-and-content`: Manejo de estado de idioma en cliente y repositorio centralizado de contenidos tipados.

### Modified Capabilities
*Ninguna.*

## Impact
- Establece los contratos de datos y contexto que consumirán todos los componentes de interfaz en los changes posteriores (C-03 a C-07).

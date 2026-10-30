# Proposal: Interactive Hero Section

## Why
El Hero es la sección insignia del portfolio solicitada por Máximo Monárdez en su boceto. Debe reflejar fielmente la composición asimétrica con un corte diagonal pronunciado, la tipografía exacta indicada ("Hola! Me llamo Maximo Monardez", "Soy Programador y Experto en ciberseguridad") y una experiencia visual inmersiva mediante un canvas de partículas interactivo.

## What Changes
- Creación de `src/components/ui/TechBackground.tsx`: Canvas interactivo con cuadrícula cibernética y partículas flotantes reactivas al puntero del mouse.
- Creación de `src/components/sections/Hero.tsx`: Implementación del corte diagonal visual (con línea divisoria iluminada en cian), títulos tipográficos animados con `framer-motion`, integración de textos bilingües y botones de acción rápida.
- Integración del Hero en la página de inicio `src/app/page.tsx`.

## Capabilities

### New Capabilities
- `interactive-hero`: Portada asimétrica de alto impacto con corte diagonal estilizado, micro-interacciones de puntero y animaciones escalonadas.

### Modified Capabilities
*Ninguna.*

## Impact
- Define la identidad visual y el impacto en los primeros 3 segundos de visita al portfolio.

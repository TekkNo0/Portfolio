# Proposal: Navbar and Navigation

## Why
El diseño del portfolio exige una barra de navegación superior (Header/Navbar) estilizada e interactiva tal como se especifica en el boceto, permitiendo al usuario navegar con scroll suave entre secciones y conmutar el idioma entre Español e Inglés en cualquier momento.

## What Changes
- Creación de `src/components/layout/Navbar.tsx` con diseño *floating glass pill* y efecto `backdrop-blur`.
- Enlaces de navegación con micro-interacciones hover estilo cyberpunk a `#home`, `#about`, `#contact`.
- Switch/selector interactivo de idioma (ES | EN) consumiendo `useLanguage`.
- Menú responsivo animado con `framer-motion` para dispositivos móviles.

## Capabilities

### New Capabilities
- `navigation-bar`: Navegación flotante accesible, bilingüe y adaptable con feedback visual de sección activa.

### Modified Capabilities
*Ninguna.*

## Impact
- Componente visual global presente en toda la experiencia de usuario.

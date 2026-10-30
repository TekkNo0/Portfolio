# Proposal: Foundation Setup

## Why
El proyecto del portfolio de Máximo Monárdez necesita una infraestructura web base moderna, modular y fuertemente tipada. Es necesario inicializar la aplicación con Next.js 15 (App Router), TypeScript estricto, Tailwind CSS (con tokens de color Cyber/Dark) y Framer Motion para soportar la interactividad visual y los componentes del roadmap.

## What Changes
- Inicialización de Next.js 15 (App Router) y TypeScript en la raíz del proyecto.
- Configuración de Tailwind CSS con paleta temática Cyberpunk (`slate-950`, `cyan-400`, `cyan-500`, etc.).
- Instalación y configuración de dependencias de animación y estilos (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).
- Creación de la estructura de carpetas en `src/` (`components/`, `context/`, `data/`, `types/`, `styles/`).
- Configuración base de `layout.tsx` y `globals.css` con soporte de tema oscuro tecnológico.

## Capabilities

### New Capabilities
- `core-infrastructure`: Configuración del entorno base, motor de compilación, estilos globales y dependencias de UI/animación para la aplicación.

### Modified Capabilities
*Ninguna (proyecto inicial).*

## Impact
- Base de código limpia y ejecutable lista para soportar los componentes de navegación, Hero interactivo y formulario de contacto.
- Scripts de desarrollo (`npm run dev`, `npm run build`, `npm run lint`) disponibles.

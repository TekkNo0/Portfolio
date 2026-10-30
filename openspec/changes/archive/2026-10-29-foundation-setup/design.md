# Design: Foundation Setup

## Context
El directorio actual `C:\Users\maxim\Desktop\portfolio` contiene los artefactos de la fundación OpenSpec y la Knowledge Base. Debemos configurar el entorno de desarrollo con Next.js 15, TypeScript y Tailwind CSS sin sobreescribir la configuración de OpenSpec ni la Knowledge Base.

## Goals / Non-Goals

**Goals:**
- Configurar un package.json limpio con Next.js 15, React 19, TypeScript y Tailwind CSS.
- Instalar `framer-motion`, `lucide-react`, `clsx` y `tailwind-merge`.
- Estructurar el directorio `src/` respetando la arquitectura canónica de `knowledge-base/08_arquitectura_propuesta.md`.
- Asegurar que `npm run build` ejecute limpiamente.

**Non-Goals:**
- No incluye componentes específicos de negocio (Navbar, Hero, About, Contact se implementan en changes C-02 a C-07).
- No incluye configuración de base de datos ni autenticación.

## Decisions

### D-01: Estructura de carpetas bajo `src/`
- **Decisión**: Utilizar `src/app`, `src/components`, `src/context`, `src/data`, `src/types`.
- **Razón**: Aísla el código de la aplicación de la configuración raíz (`openspec/`, `knowledge-base/`, `.atl/`).

### D-02: Tailwind CSS v3/v4 con directivas modernas
- **Decisión**: Configurar `tailwind.config.ts` y `src/app/globals.css` con variables CSS para el tema oscuro y efectos cyber.
- **Razón**: Permite componer el diseño de corte diagonal y marcos HUD con total fidelidad al boceto.

## Risks / Trade-offs

- **[Riesgo: Conflictos de archivos raíz al inicializar Next.js]** → Mitigación: Generar la estructura de forma controlada o inicializar y preservar carpetas `openspec/`, `knowledge-base/`, `.atl/` y archivos Markdown.
- **[Riesgo: Compatibilidad React 19 con Framer Motion]** → Mitigación: Instalar versiones compatibles estables (`framer-motion@latest` / `--legacy-peer-deps` si fuera necesario).

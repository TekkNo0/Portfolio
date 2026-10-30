# CHANGES — Secuencia de Implementación

> Índice canónico de todos los changes del proyecto Portfolio Máximo Monárdez.
> Cada change es atómico: un agente puede implementarlo en una sesión (~2-4 horas).
> **Leer este archivo antes de ejecutar cualquier `/opsx:propose`.**

---

## Cómo usar este documento

1. **Identificar el change** correspondiente según el camino crítico y dependencias.
2. **Leer la Knowledge Base** en las secciones referenciadas en "Leer antes".
3. **Proponer el change** ejecutando `/opsx:propose <id-change>`.
4. **Implementar y verificar** siguiendo el flujo de OpenSpec.
5. **Marcar el change** como completado `[x]` en este documento tras archivar.

---

## Árbol de dependencias

```
C-01 foundation-setup
 ├── C-02 i18n-and-content-layer
 │    ├── C-03 navbar-and-navigation
 │    └── C-06 about-me-section
 └── C-04 interactive-hero-section
      └── C-05 tactical-hud-container
C-07 contact-section-and-api (depende de C-01 y C-02)
```

### Paralelismo por fase

```
GATE 0: Foundation Setup
  → C-01 foundation-setup                      [Agente A]

GATE 1: Core Layers (desbloqueado por C-01 ✓)  ← FORK
  → C-02 i18n-and-content-layer                [Agente A]
  → C-04 interactive-hero-section              [Agente B]

GATE 2: Visual & Structural Components (desbloqueado por C-02 y C-04 ✓)
  → C-03 navbar-and-navigation                 [Agente A]
  → C-05 tactical-hud-container                [Agente B]
  → C-06 about-me-section                      [Agente C]

GATE 3: Lead Generation & Full Assembly
  → C-07 contact-section-and-api               [Agente A]
```

### Camino crítico (4 changes — mínimo irreducible)

```
C-01 foundation-setup ──> C-04 interactive-hero-section ──> C-05 tactical-hud-container ──> C-07 contact-section-and-api
```

### Plan óptimo con 3 agentes

| Paso | Agente A (Core & Navigation) | Agente B (Interactive Hero & HUD) | Agente C (Content & Sections) |
| :--- | :--- | :--- | :--- |
| **Paso 1** | `C-01 foundation-setup` | — | — |
| **Paso 2** | `C-02 i18n-and-content-layer` | `C-04 interactive-hero-section` | — |
| **Paso 3** | `C-03 navbar-and-navigation` | `C-05 tactical-hud-container` | `C-06 about-me-section` |
| **Paso 4** | `C-07 contact-section-and-api` | Ensamble final e integración | Pruebas de usabilidad y responsive |

---

## FASE 1 — Infraestructura y Fundación Base

### [C-01] `foundation-setup`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Inicialización de Next.js 15 (App Router) con TypeScript estricto en el directorio raíz.
  - Configuración de Tailwind CSS con paleta temática Cyber/Dark (`slate-950`, `cyan-400`, `emerald-400`, etc.).
  - Instalación de dependencias clave (`framer-motion`, `lucide-react`, `clsx`, `tailwind-merge`).
  - Scaffolding de estructura de directorios en `src/` (`components/`, `context/`, `data/`, `types/`).
  - Configuración base de `layout.tsx` y `globals.css` con tipografía tecnológica.
- **Dependencias**: ninguna
- **Governance**: BAJO
- **Leer antes**:
  - `knowledge-base/02_descripcion_general.md` §Stack tecnológico
  - `knowledge-base/08_arquitectura_propuesta.md` §Estructura de directorios

### [C-02] `i18n-and-content-layer`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Creación de `src/context/LanguageContext.tsx` para manejo reactivo de idiomas ES y EN con persistencia en `localStorage`.
  - Creación de `src/types/index.ts` con interfaces completas de contenido, redes, navegación y formulario.
  - Creación de `src/data/content.ts` con los textos bilingües predeterminados de Máximo Monárdez (Hero, About, Navegación y Contacto).
  - Hook personalizado `useLanguage` con tipado estricto.
- **Dependencias**: `C-01`
- **Governance**: BAJO
- **Leer antes**:
  - `knowledge-base/04_modelo_de_datos.md` §ContentProfile
  - `knowledge-base/05_reglas_de_negocio.md` §RN-CNT-01

---

## FASE 2 — Componentes Visuales y Portada Interactiva

### [C-03] `navbar-and-navigation`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Componente `Navbar.tsx` con diseño *floating glass pill* centrado y bordes traslúcidos con `backdrop-blur`.
  - Selector de idioma conmutador interactivo (ES | EN) conectado a `LanguageContext`.
  - Enlaces de scroll suave ancla (`#home`, `#about`, `#contact`).
  - Menú desplegable animado para dispositivos móviles con Framer Motion.
- **Dependencias**: `C-01, C-02`
- **Governance**: BAJO
- **Leer antes**:
  - `knowledge-base/06_funcionalidades.md` §US-001
  - `knowledge-base/07_flujos_principales.md` §Flujo 2

### [C-04] `interactive-hero-section`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Componente `Hero.tsx` con corte diagonal asimétrico responsivo basado en el wireframe original.
  - Tipografía de impacto ("Hola! Me llamo Maximo Monardez" y "Soy Programador y Experto en ciberseguridad" con gradiente cian).
  - Componente `TechBackground.tsx`: Canvas con cuadrícula interactiva y partículas que reaccionan suavemente a la posición del cursor sin sobrecargar CPU.
  - Animaciones de entrada escalonadas con Framer Motion.
- **Dependencias**: `C-01`
- **Governance**: MEDIO
- **Leer antes**:
  - `knowledge-base/01_vision_y_objetivos.md` §Alcance v1.0
  - `knowledge-base/06_funcionalidades.md` §US-002
  - `knowledge-base/05_reglas_de_negocio.md` §RN-UI-01, RN-UI-02

### [C-05] `tactical-hud-container`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Componente `HudFrame.tsx` simulando un escáner biométrico / HUD táctico futurista.
  - Esquinas anguladas de alta tecnología, líneas de escaneo animadas y marcadores de coordenadas ficticios.
  - Placeholder interactivo autosuficiente listo para recibir la fotografía final de Máximo.
  - Efectos visuales de hover sutiles (brillo perimetral cian).
- **Dependencias**: `C-01, C-04`
- **Governance**: BAJO
- **Leer antes**:
  - `knowledge-base/06_funcionalidades.md` §US-002
  - `knowledge-base/09_decisiones_y_supuestos.md` §SU-01

---

## FASE 3 — Contenido Personal y Conversión de Contactos

### [C-06] `about-me-section`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Componente `About.tsx` modular organizado en tarjetas de enfoque técnico (Desarrollo, Ciberseguridad, Filosofía de trabajo).
  - Consumo dinámico de `content.ts` para que Máximo edite su biografía sin alterar el código del componente.
  - Insignias de tecnologías y áreas de expertise (Next.js, TypeScript, Pentesting, Linux, Python, etc.).
- **Dependencias**: `C-01, C-02`
- **Governance**: BAJO
- **Leer antes**:
  - `knowledge-base/06_funcionalidades.md` §US-003
  - `knowledge-base/04_modelo_de_datos.md` §ContentProfile

### [C-07] `contact-section-and-api`
- **Estado**: `[x]` completado (archivado 2026-10-29)
- **Scope**:
  - Componente `Contact.tsx` con formulario reactivo (Nombre, Correo, Mensaje).
  - Validación de campos en tiempo real y protección con campo Honeypot anti-spam.
  - Route handler `src/app/api/contact/route.ts` con sanitización estricta de inputs.
  - Tarjetas de acceso directo a GitHub, LinkedIn y Telegram.
  - Feedback visual interactivo con estados de carga, éxito y error con estética tech.
- **Dependencias**: `C-01, C-02`
- **Governance**: MEDIO
- **Leer antes**:
  - `knowledge-base/02_descripcion_general.md` §API REST
  - `knowledge-base/05_reglas_de_negocio.md` §RN-SEC-01, RN-SEC-02
  - `knowledge-base/06_funcionalidades.md` §US-004

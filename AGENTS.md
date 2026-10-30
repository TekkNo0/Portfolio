# Portfolio Máximo Monárdez — Instrucciones para Agentes

> Reglas globales ya definidas en `~/.claude/CLAUDE.md` (orquestador, governance, TDD, engram): el proyecto las hereda. Acá viven solo las reglas **específicas de este proyecto** + las universales que el global no cubra.

---

## Stack Tecnológico

| Capa | Tecnologías | Versión / Detalle |
| :--- | :--- | :--- |
| **Framework Web** | Next.js (App Router) | 15+ (React 19 / Server & Client Components) |
| **Lenguaje** | TypeScript | 5+ con tipado estricto |
| **Estilos & UI** | Tailwind CSS | v3/v4 con paleta Cyberpunk/Dark HUD |
| **Animaciones** | Framer Motion | Animaciones de layout, scroll y micro-interacciones |
| **Iconografía** | Lucide React | Iconos SVG vectoriales modernos y ligeros |
| **Formulario / API** | Next.js API Routes / Resend o Web3Forms | Envío de correos serverless con honeypot |
| **Despliegue** | Vercel / Cloudflare Pages | Edge hosting con SSL y CDN global |

---

## Base de Conocimiento

| Archivo | Descripción |
| :--- | :--- |
| [01_vision_y_objetivos.md](knowledge-base/01_vision_y_objetivos.md) | Propósito, actores, alcance v1.0 y métricas de éxito |
| [02_descripcion_general.md](knowledge-base/02_descripcion_general.md) | Arquitectura técnica general, integraciones y API REST |
| [03_actores_y_roles.md](knowledge-base/03_actores_y_roles.md) | Visitantes, reclutadores, owner y matriz de permisos RBAC |
| [04_modelo_de_datos.md](knowledge-base/04_modelo_de_datos.md) | Tipos y contratos de contenido bilingüe (ES/EN) y mensajes |
| [05_reglas_de_negocio.md](knowledge-base/05_reglas_de_negocio.md) | Reglas codificadas RN-UI, RN-SEC y RN-CNT |
| [06_funcionalidades.md](knowledge-base/06_funcionalidades.md) | Historias de usuario (Navbar, Hero, About, Contact) |
| [07_flujos_principales.md](knowledge-base/07_flujos_principales.md) | Flujos E2E de carga, cambio de idioma y contacto |
| [08_arquitectura_propuesta.md](knowledge-base/08_arquitectura_propuesta.md) | Patrones, estructura de directorios y seguridad |
| [09_decisiones_y_supuestos.md](knowledge-base/09_decisiones_y_supuestos.md) | Decisiones arquitectónicas y supuestos de diseño |
| [10_preguntas_abiertas.md](knowledge-base/10_preguntas_abiertas.md) | Inconsistencias y puntos para producción |

---

## Skills Disponibles

| Agente / Rol | Enfoque | Skills que carga |
| :--- | :--- | :--- |
| **Frontend / UI Agent** | Next.js, React, Tailwind, Canvas y Animaciones | `modern-web-guidance` |
| **Backend / API Agent** | API Routes, validación, sanitización y seguridad | `endpoint-code-review` |
| **Orquestador SDD** | Gestión de OpenSpec y flujo de cambios | `active-orchestrator`, `openspec` |

> Los compact rules de cada skill los resuelve el orquestador desde `.atl/skill-registry.md` (generado por `skill-registry`; no versionado — no está en el repo).

---

## Roadmap de Changes

El proyecto se implementa en **7 changes atómicos** distribuidos en 3 fases (ver [CHANGES.md](CHANGES.md)):

* **Camino crítico**: `C-01` ──> `C-04` ──> `C-05` ──> `C-07`
* **Primer change a ejecutar**: `C-01` (`foundation-setup`)

---

## Reglas Duras (específicas del proyecto)

1. **TypeScript Estricto:**
   - Prohibido el uso de `any`. Toda interfaz, prop, función y evento debe contar con tipado exhaustivo.
2. **Next.js 15 & React Architecture:**
   - Componentes de Servidor (RSC) por defecto.
   - Usar `'use client'` estrictamente en componentes que requieran estado local, hooks del ciclo de vida o animaciones de Framer Motion.
3. **Desacoplamiento Absoluto de Contenido:**
   - NUNCA hardcodear cadenas de texto en los componentes JSX.
   - Todo texto bilingüe debe residir en `src/data/content.ts` o resolverse a través de `LanguageContext`.
4. **UI & Rendimiento:**
   - El corte diagonal asimétrico del Hero debe implementarse con CSS eficiente (`clip-path` o capas transformadas con aceleración por hardware) y ser completamente adaptable a dispositivos móviles.
   - Las partículas del canvas de fondo deben escuchar eventos de puntero de forma throttled/debounced para evitar saturación de CPU.
5. **Seguridad en Endpoints:**
   - Sanitización de todos los datos recibidos en `/api/contact`.
   - Incorporación obligatoria de campo Honeypot anti-spam en el formulario.

---

## Flujo de Trabajo

1. Consultar [CHANGES.md](CHANGES.md) para identificar el change en progreso.
2. Leer los documentos indicados en la sección "Leer antes" de la Knowledge Base.
3. Crear o continuar el cambio mediante OpenSpec:
   - Proponer: `openspec new change "<nombre-change>"` o `/opsx-propose <nombre>`
   - Implementar: ejecutar tareas aplicando Strict TDD en lógica de negocio.
   - Verificar y archivar: `openspec archive <nombre>`

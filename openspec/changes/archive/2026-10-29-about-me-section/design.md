# Design: About Me Section

## Context
Ver `proposal.md` y `knowledge-base/06_funcionalidades.md` §US-003.

## Goals / Non-Goals

**Goals:**
- Implementar `About.tsx` con contenedor `max-w-6xl` y ancla `id="about"`.
- Tarjetas con `bg-cyber-surface/70 border border-cyber-border hover:border-cyber-cyan/50`.
- Insignias de habilidades en dos columnas temáticas (Software Development & Cybersecurity).

**Non-Goals:**
- No incluye timeline de empleos pasados (se diferirá si el usuario lo requiere más adelante).

## Decisions

### D-01: Mapeo de iconos dinámicos
- **Decisión**: Mapear los strings de icono (`code`, `shield`, `terminal`) a componentes de `lucide-react` de forma tipada y segura.
- **Razón**: Permite que `content.ts` permanezca como JSON/TypeScript serializable sin acoplarse directamente a JSX.

# Design: Navbar and Navigation

## Context
Ver wireframe original del usuario. La barra de navegación ocupa la parte superior con una caja redondeada ("Home", "About me", "Contact", "Projects"). Respetando la decisión de posponer proyectos a v2, se incluyen Home, About me, Contact y el selector bilingüe.

## Goals / Non-Goals

**Goals:**
- Implementar `Navbar.tsx` con `fixed top-4 left-1/2 -translate-x-1/2 z-50`.
- Efecto glassmorphism: `bg-cyber-surface/75 backdrop-blur-md border border-cyber-border/80`.
- Soporte mobile con menú animado vía `framer-motion`.

**Non-Goals:**
- No incluye lógica de autenticación o búsqueda global.

## Decisions

### D-01: Barra flotante desacoplada de la cuadrícula
- **Decisión**: La barra flota con `z-50` sobre el fondo y el Hero.
- **Razón**: Permite mantenerla visible en todo momento durante el scroll sin interferir con el corte diagonal del Hero.

## Risks / Trade-offs

- **[Riesgo: Superposición en pantallas pequeñas]** → Mitigación: Switch automático a menú hamburguesa compacto con backdrop blur en pantallas móviles.

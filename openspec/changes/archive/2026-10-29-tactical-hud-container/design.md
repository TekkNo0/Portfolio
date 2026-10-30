# Design: Tactical HUD Container

## Context
Ver wireframe original donde se ubica el recuadro "rostro".

## Goals / Non-Goals

**Goals:**
- Implementar `HudFrame.tsx` como componente modular y reutilizable.
- Incluir un escáner láser de barrido vertical continuo con CSS keyframes.
- Mostrar marcadores tácticos SVG (`[ + ]`, mira de precisión, coordenadas y status `ID: MM-2026 // SEC_OPS`).
- Añadir prop opcional `imageSrc?: string` para facilitar la incorporación de la foto tan pronto Máximo la tenga lista.

**Non-Goals:**
- No incluye integración de cámara web real o reconocimiento facial computacional.

## Decisions

### D-01: Animación CSS pura para el láser de escaneo
- **Decisión**: Usar animación CSS `translateY` continua con `ease-in-out` en lugar de Framer Motion rerenders.
- **Razón**: 0 carga sobre el runtime de JavaScript y 60 FPS garantizados en el hilo de composición de la GPU.

## Risks / Trade-offs

- **[Riesgo: Sobrecarga visual]** → Mitigación: Usar opacidades controladas (`opacity-40` a `opacity-80`) para que el efecto sume inmersión sin cansar la vista.

# Design: Interactive Hero Section

## Context
Ver boceto adjunto del usuario. La pantalla principal presenta:
- Arriba la Navbar flotante.
- Un corte diagonal que baja desde la parte superior (aproximadamente a 40-45% del ancho) hasta el vértice inferior derecho.
- Del lado izquierdo: "Hola! Me llamo Maximo Monardez" seguido de "Soy Programador y Experto en ciberseguridad".
- Del lado derecho: Contenedor para "rostro".

## Goals / Non-Goals

**Goals:**
- Reproducir el corte diagonal mediante una línea de división SVG/CSS con resplandor neón cian y ángulo idéntico al dibujo.
- Crear `TechBackground.tsx` con un `canvas` que dibuje una red sutil de nodos conectados y partículas cibernéticas que responden suavemente al mouse.
- Usar `framer-motion` para animar secuencialmente la aparición del saludo, nombre, títulos y botones.

**Non-Goals:**
- El detalle interno del escáner HUD se modulariza en `HudFrame.tsx` (`C-05`).

## Decisions

### D-01: Representación de la línea diagonal
- **Decisión**: Usar un elemento absoluto con SVG / clip-path y una línea luminosa con gradiente `from-cyber-cyan/80 via-cyber-blue/40 to-transparent`.
- **Razón**: Permite nitidez perfecta en cualquier resolución (4K, Retina, etc.) sin pérdida de calidad.

### D-02: Canvas 2D nativo con requestAnimationFrame
- **Decisión**: Utilizar la API 2D de Canvas nativa en lugar de Three.js pesado para las partículas.
- **Razón**: Cero peso adicional en el bundle (~100KB ahorrados), 60 FPS garantizados y respuesta inmediata en dispositivos móviles.

## Risks / Trade-offs

- **[Riesgo: Rendimiento en móviles sin mouse]** → Mitigación: Las partículas tienen movimiento orbital autónomo continuo cuando no hay eventos de puntero.

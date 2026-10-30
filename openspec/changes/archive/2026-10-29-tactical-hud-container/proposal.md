# Proposal: Tactical HUD Container

## Why
El boceto del usuario reserva un contenedor principal para el "rostro". Dado que Máximo aún no cuenta con la fotografía definitiva, se requiere un componente HUD táctico autónomo e interactivo con escáner biométrico ficticio, telemetría y efectos holográficos que luzca imponente por sí mismo y admita una imagen real en el futuro sin rediseñar la interfaz.

## What Changes
- Creación de `src/components/ui/HudFrame.tsx` con diseño táctico de alta tecnología:
  - Esquinas reforzadas con biseles neón cian.
  - Barrido de escáner láser vertical animado.
  - Telemetría ficticia interactiva (coordenadas, indicador de estado de cifrado, métricas de red).
  - Soporte de prop `imageSrc` para renderizar fotografía cuando esté lista.
- Integración de `HudFrame` en la columna derecha de `src/components/sections/Hero.tsx`.

## Capabilities

### New Capabilities
- `tactical-hud`: Contenedor interactivo futurista de rostro con escáner biométrico y adaptabilidad para fotografía.

### Modified Capabilities
*Ninguna.*

## Impact
- Perfecciona la mitad derecha del Hero visualizando la sección "rostro" del wireframe con máxima estética cyber/tech.

# Spec Delta: tactical-hud

## Purpose
Proveer el contenedor HUD táctico para la sección de rostro con escáner biométrico y diseño militar futurista para el portfolio.

## ADDED Requirements

### Requirement: Contenedor táctico HUD interactivo
El sistema SHALL presentar en el Hero un contenedor con esquinas anguladas tácticas, animaciones de barrido biométrico y telemetría simulada que funcione con o sin fotografía.

#### Scenario: Visualización del escáner en modo placeholder
- **WHEN** no se provee una imagen fotográfica en `imageSrc`
- **THEN** el HUD renderiza una silueta cibernética estilizada con animación de escaneo continuo y estado `BIOMETRIC_TARGET_LOCK`

#### Scenario: Inserción de fotografía personalizada
- **WHEN** se provee una ruta de imagen válida en `imageSrc`
- **THEN** la fotografía se renderiza dentro del marco HUD manteniendo la superposición de efectos de escáner y esquinas tácticas

# Spec Delta: about-me

## Purpose
Proveer la sección Sobre Mí modular para el portfolio de Máximo Monárdez con pilares profesionales y habilidades técnicas.

## ADDED Requirements

### Requirement: Sección Sobre Mí modular y bilingüe
El sistema SHALL renderizar la sección `#about` con el título, subtítulo y párrafos leídos dinámicamente desde el diccionario del idioma activo.

#### Scenario: Navegación y lectura de párrafos desde content.ts
- **WHEN** un usuario navega a la sección `#about`
- **THEN** se presentan los párrafos de biografía en el idioma seleccionado sin texto hardcodeado en el componente

#### Scenario: Visualización de pilares técnicos e insignias
- **WHEN** se renderiza la sección `#about`
- **THEN** se muestran las 3 tarjetas de pilares (Desarrollo, Ciberseguridad, Automatización) y las listas de tecnologías correspondientes

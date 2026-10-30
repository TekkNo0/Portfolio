# Spec Delta: navigation-bar

## Purpose
Proveer la barra de navegación flotante fija con estética traslúcida glassmorphism, navegación por anclas y selector de idioma para el portfolio.

## ADDED Requirements

### Requirement: Barra de navegación flotante responsive
El sistema SHALL presentar una barra fija superior centrada con contenedor estilo cápsula de vidrio (`backdrop-blur`) y enlaces a las secciones principales del sitio.

#### Scenario: Navegación por ancla en desktop
- **WHEN** el usuario hace clic en el enlace "About me"
- **THEN** la vista se desplaza suavemente hacia la sección `#about`

#### Scenario: Despliegue de menú móvil
- **WHEN** un usuario en pantalla menor a 768px presiona el botón de menú hamburguesa
- **THEN** se despliega el menú de navegación con animación fluida de apertura

### Requirement: Selector interactivo de idioma en cabecera
El sistema SHALL incluir un control visual en la barra de navegación que indique el idioma activo y permita alternar entre Español e Inglés con un solo clic.

#### Scenario: Conmutación de idioma desde la barra de navegación
- **WHEN** el usuario pulsa el switch de idioma
- **THEN** los textos de la barra de navegación y del contenido general se actualizan inmediatamente al nuevo idioma

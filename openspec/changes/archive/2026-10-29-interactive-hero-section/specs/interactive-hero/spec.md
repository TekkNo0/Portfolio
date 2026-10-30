# Spec Delta: interactive-hero

## Purpose
Proveer la sección principal interactiva del portfolio con corte diagonal asimétrico, tipografía de impacto y fondo reactivo al cursor.

## ADDED Requirements

### Requirement: Corte diagonal asimétrico y tipografía tecnológica
El sistema SHALL renderizar en el Hero la composición del boceto: texto a la izquierda ("Hola! Me llamo Maximo Monardez", "Soy Programador y Experto en ciberseguridad"), división diagonal angulada y área derecha para el contenedor de rostro.

#### Scenario: Renderizado del texto del Hero y corte diagonal en desktop
- **WHEN** un usuario accede a la vista de inicio en resolución mayor a 1024px
- **THEN** se visualiza la línea divisoria diagonal separando el área de texto de la derecha con animación de entrada

#### Scenario: Adaptación responsive en pantallas móviles
- **WHEN** el sitio se visualiza en pantallas pequeñas (<768px)
- **THEN** la estructura se reorganiza verticalmente manteniendo la legibilidad sin superposición ni cortes de texto

### Requirement: Fondo interactivo de partículas
El sistema SHALL renderizar un canvas de fondo con partículas y cuadrícula sutil que respondan de manera fluida y atenuada a las coordenadas del mouse del usuario.

#### Scenario: Reacción de partículas al desplazamiento del cursor
- **WHEN** el usuario desplaza el cursor sobre el Hero
- **THEN** las partículas cercanas modifican su trayectoria con atracción suave sin superar el 5% de consumo de CPU

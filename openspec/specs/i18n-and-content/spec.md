# i18n-and-content Specification

## Purpose
Proveer el contexto reactivo de cambio de idioma entre Español e Inglés y la estructura de datos desacoplada para el contenido del portfolio de Máximo Monárdez.

## Requirements

### Requirement: Gestión de idioma reactiva
El sistema SHALL proveer un contexto de React con el idioma actual ('es' o 'en'), una función para alternarlo y persistencia automática en el almacenamiento local.

#### Scenario: Cambio de idioma en tiempo real
- **WHEN** el usuario ejecuta la función de cambio de idioma a 'en'
- **THEN** el estado del contexto se actualiza a 'en' y se persiste en `localStorage` bajo la clave 'portfolio_lang'

#### Scenario: Persistencia de idioma en recarga
- **WHEN** un usuario con preferencia previa recarga la aplicación
- **THEN** el contexto inicializa con el idioma almacenado en `localStorage` o 'es' por defecto

### Requirement: Diccionario tipado de contenidos
El sistema SHALL proveer un archivo de datos `content.ts` con tipado estricto que suministre todas las cadenas de texto del Hero, About, Navegación y Contacto para los idiomas soportados.

#### Scenario: Consulta de textos bilingües por clave
- **WHEN** un componente accede a las propiedades de texto para el idioma activo
- **THEN** se obtienen las cadenas correspondientes en el idioma seleccionado sin valores undefined

# Spec Delta: contact-and-leads

## Purpose
Proveer el formulario y API route segura de contacto con protección anti-spam y enlaces a perfiles directos para el portfolio.

## ADDED Requirements

### Requirement: Endpoint seguro de recepción de contactos
El sistema SHALL proveer la ruta `POST /api/contact` que valide la presencia de campos obligatorios, sanitice las cadenas y verifique que el campo trampa honeypot esté vacío.

#### Scenario: Envío válido de formulario
- **WHEN** se envía una petición con nombre, correo válido y mensaje, con honeypot vacío
- **THEN** el endpoint retorna status 200 con `{ "success": true }`

#### Scenario: Detección y bloqueo de bots vía honeypot
- **WHEN** un bot automatizado completa el campo oculto `website` (honeypot)
- **THEN** el endpoint responde silenciosamente con éxito o rechazo controlado sin despachar correos

### Requirement: Sección visual interactiva de contacto
El sistema SHALL renderizar la sección `#contact` con campos reactivos de formulario, estados de transmisión tecnológica y enlaces directos a GitHub, LinkedIn y Telegram/Email.

#### Scenario: Interacción con el formulario y envío en vivo
- **WHEN** el usuario completa los datos y presiona "Transmitir Mensaje"
- **THEN** el botón pasa a estado de transmisión animado y muestra confirmación de éxito tras la respuesta

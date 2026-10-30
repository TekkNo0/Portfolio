# Proposal: Contact Section and API

## Why
El portfolio de Máximo requiere una sección de contacto interactiva (`#contact`) y una API segura que permita a reclutadores y clientes enviar mensajes directamente o acceder a sus redes profesionales (GitHub, LinkedIn, Telegram/Email), incorporando medidas de seguridad como Honeypot anti-spam y sanitización de inputs.

## What Changes
- Creación de `src/app/api/contact/route.ts`: Endpoint serverless que valida campos, descarta envíos con honeypot y procesa el mensaje de forma segura.
- Creación de `src/components/sections/Contact.tsx`: Formulario interactivo con feedback visual de estados (idle, sending, success, error) y tarjetas de enlaces directos.
- Creación de `src/components/layout/Footer.tsx`: Pie de página tecnológico con telemetría de seguridad (`ALL_SYSTEMS_SECURE`).
- Montaje de `Contact` y `Footer` en `src/app/page.tsx`.

## Capabilities

### New Capabilities
- `contact-and-leads`: Formulario validado con backend serverless protegido contra bots y enlaces directos a perfiles profesionales.

### Modified Capabilities
*Ninguna.*

## Impact
- Completa el MVP funcional v1.0 del portfolio de Máximo Monárdez.

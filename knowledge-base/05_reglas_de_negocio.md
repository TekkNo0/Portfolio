# Reglas de Negocio

Cada regla tiene un código único `RN-{DOMINIO}-{NN}` para trazabilidad.

## Dominio: Interfaz y Experiencia de Usuario (RN-UI)
- **RN-UI-01**: El corte diagonal debe permanecer proporcional y estético en todos los viewports (desktop, tablet y mobile), adaptando su ángulo o apilamiento en pantallas menores a 768px para no ocluir texto.
- **RN-UI-02**: Las micro-interacciones (partículas, escáner HUD) no deben bloquear el hilo principal de JavaScript ni superar el 5% de uso continuado de CPU.
- **RN-UI-03**: El cambio de idioma (ES <-> EN) debe persistirse localmente en `localStorage` y actualizar la interfaz instantáneamente sin recargar la página.

## Dominio: Formulario de Contacto y Seguridad (RN-SEC)
- **RN-SEC-01**: Sanitización estricta de entradas en `/api/contact` para prevenir Cross-Site Scripting (XSS) e inyección de encabezados de correo.
- **RN-SEC-02**: Protección anti-spam mediante campo Honeypot invisible y límite de frecuencia (rate limit) de 3 envíos por IP cada 10 minutos.
- **RN-SEC-03**: No exponer credenciales de servicios ni API keys en el cliente; todas las variables sensibles deben residir exclusivamente en el entorno del servidor (`process.env`).

## Dominio: Mantenibilidad de Contenido (RN-CNT)
- **RN-CNT-01**: Todo el contenido textual del sitio debe estar tipado y desacoplado de los componentes de renderizado en `src/data/content.ts`.

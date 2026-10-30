# Descripción General

## Stack tecnológico

| Capa | Tecnologías | Versión / Detalle |
| :--- | :--- | :--- |
| **Framework Web** | Next.js (App Router) | 15+ (React 19 / Server & Client Components) |
| **Lenguaje** | TypeScript | 5+ con tipado estricto |
| **Estilos & UI** | Tailwind CSS | v3 o v4 con paleta Cyberpunk/Dark HUD |
| **Animaciones** | Framer Motion | Animaciones de layout, scroll y micro-interacciones |
| **Iconografía** | Lucide React | Iconos SVG vectoriales modernos y ligeros |
| **Formulario / API** | Next.js API Routes / Resend o Web3Forms | Envío de correos serverless |
| **Despliegue** | Vercel / Cloudflare Pages | Edge hosting con SSL y CDN global |

## Arquitectura general
El sistema opera como una Single Page Application (SPA) optimizada con Server-Side Rendering (SSR) y Static Site Generation (SSG) de Next.js App Router:

```
[ Cliente / Browser ]
        │
        ├──> [ Floating Glass Navbar (Client Component) ] ──> Language State (ES / EN)
        ├──> [ Hero Section (Client Component) ] ──────────> Framer Motion + Canvas Particles
        ├──> [ About Section (Content Container) ] ────────> Editable Content Dictionaries
        └──> [ Contact Section (Form Component) ] ─────────> /api/contact (Server Route) ──> Email Provider
```

## Integraciones externas

| Servicio | Propósito | Tipo |
| :--- | :--- | :--- |
| **Resend / Web3Forms** | Procesamiento seguro del formulario de contacto | REST API (POST vía API Route) |
| **GitHub / LinkedIn / Telegram** | Enlaces de contacto directo y perfil social | Redirecciones HTTPS externas |

## API REST

### `POST /api/contact`
Procesa el envío de mensajes desde el formulario de contacto.
- **Payload**:
  ```json
  {
    "name": "string",
    "email": "string",
    "message": "string"
  }
  ```
- **Respuestas**:
  - `200 OK`: `{ "success": true, "message": "Mensaje enviado con éxito" }`
  - `400 Bad Request`: `{ "error": "Campos inválidos o incompletos" }`
  - `500 Server Error`: `{ "error": "Error interno al enviar correo" }`

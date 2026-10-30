# Arquitectura Propuesta

## Patrones aplicados

| Patrón | Dónde se usa | Por qué |
| :--- | :--- | :--- |
| **Component-Driven Architecture** | En `src/components/*` | Componentes atómicos, reutilizables y aislados (Navbar, Hero, HUD, Form). |
| **Dictionary Provider / i18n Context** | En `src/context/LanguageContext.tsx` | Permite conmutar idiomas dinámicamente sin duplicar páginas ni recargar el navegador. |
| **Headless Data Separation** | En `src/data/content.ts` | Desacopla la lógica de presentación del contenido personal de Máximo. |
| **Serverless Route Handlers** | En `src/app/api/contact/route.ts` | Procesamiento seguro en el backend sin necesidad de un servidor Node/Express persistente. |

## Estructura de directorios

```
portfolio/
├── openspec/                     # Configuración y estado de OpenSpec
├── knowledge-base/               # Base de conocimiento canónica
├── discovery/                    # Informes de discovery research
├── public/                       # Assets estáticos (SVGs, iconos, futura foto)
└── src/
    ├── app/
    │   ├── api/
    │   │   └── contact/
    │   │       └── route.ts      # API route para procesamiento de formulario
    │   ├── layout.tsx            # Root layout con fuentes y providers
    │   ├── page.tsx              # Home page ensamblando las secciones
    │   └── globals.css           # Tailwind + directivas de estilo cyber
    ├── components/
    │   ├── layout/
    │   │   ├── Navbar.tsx        # Floating glass pill con selector i18n
    │   │   └── Footer.tsx        # Pie de página tech
    │   ├── sections/
    │   │   ├── Hero.tsx          # Portada con corte diagonal asimétrico
    │   │   ├── About.tsx         # Sección sobre mí modular
    │   │   └── Contact.tsx       # Formulario y tarjetas de redes
    │   └── ui/
    │       ├── HudFrame.tsx      # Contenedor táctico HUD para rostro
    │       ├── TechBackground.tsx# Canvas reactivo con cuadrícula y partículas
    │       └── Button.tsx        # Botones estilizados con efecto neón
    ├── context/
    │   └── LanguageContext.tsx   # Estado global para ES/EN
    ├── data/
    │   └── content.ts            # Textos bilingües y datos editables
    └── types/
        └── index.ts              # Definiciones de tipos TypeScript
```

## Seguridad
- **Validación de input:** Sanitización en cliente y validación estricta en la API route antes de despachar emails.
- **Cabeceras HTTP de seguridad:** Configuración en `next.config.mjs` de Content-Security-Policy (CSP), X-Frame-Options (DENY) y Referrer-Policy.
- **Anti-Spam:** Honeypot field invisible a usuarios pero detectable ante bots automatizados.
- **Variables de entorno:** Claves de API nunca accesibles desde el frontend (`RESEND_API_KEY`, `CONTACT_EMAIL`).

## Variables de entorno

| Variable | Descripción | Ejemplo | Sensible (Y/N) |
| :--- | :--- | :--- | :--- |
| `RESEND_API_KEY` | API Key del proveedor de correo (opcional) | `re_123456789...` | Y |
| `CONTACT_RECIPIENT_EMAIL` | Dirección de destino donde Máximo recibe los mensajes | `maximo@ejemplo.com` | N |

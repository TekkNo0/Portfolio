# Actores y Roles

## Actores del sistema

| Actor | Descripción | Cómo interactúa |
| :--- | :--- | :--- |
| **Visitante / Reclutador** | Usuario anónimo que busca evaluar el perfil profesional. | Navega las secciones, conmuta idioma, prueba micro-interacciones del Hero y envía mensajes por el formulario. |
| **Máximo Monárdez (Owner)** | Propietario del portfolio. | Administra la configuración de textos, actualiza su biografía en el archivo de contenido y recibe los correos de contacto. |

## RBAC — Matriz de permisos

| Rol | Recurso: Home / Hero | Recurso: Sobre Mí | Recurso: Formulario Contacto | Recurso: Configuración / Código |
| :--- | :--- | :--- | :--- | :--- |
| **Visitante** | Read (Interacción UI) | Read | Create (Enviar mensaje) | Sin acceso |
| **Owner** | Read / Edit | Read / Edit | Read / Manage | Full Access (Git Repository) |

## Rutas públicas
- `/`: Página principal única (Single Page con anclas `#home`, `#about`, `#contact`).
- `/api/contact`: Endpoint serverless público protegido por limitación básica de tasa (rate limiting / honeypot anti-spam).

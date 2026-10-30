# Modelo de Datos

## Dominios
1. **Content & Internationalization Domain**: Define la estructura de los textos bilingües (ES / EN) y datos de configuración personal.
2. **Contact & Lead Domain**: Estructura de los mensajes recibidos a través del formulario web.

## ERD (Entity Relationship Diagram)

```
+───────────────────────────+             +──────────────────────────+
|      ContentProfile       |             |       ContactMessage     |
+───────────────────────────+             +──────────────────────────+
| name: string              |             | id?: string              |
| titles: string[]          |             | name: string             |
| bio: { es: text, en: text}|             | email: string            |
| socialLinks: SocialLink[] |             | message: string          |
| navLinks: NavLink[]       |             | createdAt: timestamp     |
+───────────────────────────+             +──────────────────────────+
```

## Entidades

### ContentProfile (TypeScript Schema)
- `name`: string ("Máximo Monárdez")
- `tagline`: Record<Language, string> ("Soy Programador y Experto en ciberseguridad")
- `about`: Record<Language, { title: string, paragraphs: string[] }>
- `socialLinks`: Array<{ platform: string, url: string, icon: string }>
- `navLinks`: Array<{ id: string, label: Record<Language, string>, href: string }>

### ContactMessage
- `name`: string (min: 2, max: 100 caracteres)
- `email`: string (formato RFC 5322 válido)
- `message`: string (min: 10, max: 2000 caracteres)
- `honeypot`: string (campo oculto anti-bots, debe estar vacío)

## Seed data inicial
Archivo `src/data/content.ts` con la información por defecto de Máximo Monárdez en español e inglés, facilitando que él mismo complete la sección "Sobre Mí" sin editar HTML.

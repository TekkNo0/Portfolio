# Máximo Monárdez — Portfolio Profesional

> Portfolio web interactivo con estética futurista / cyber-tech desarrollado con **Next.js 15 (App Router)**, **TypeScript**, **Tailwind CSS** y **Framer Motion**.
> Diseñado para reflejar la sinergia entre **Desarrollo de Software** y **Ciberseguridad**.

---

## ⚡ Características Principales

- **Hero Interactivo Asimétrico**: Corte diagonal de alta tecnología con efectos de resplandor neón cian y partículas de fondo en Canvas reactivas al cursor.
- **HUD Táctico para Rostro**: Marco de escaneo biométrico animado (`HudFrame`) con telemetría futurista y soporte para fotografía personal.
- **Barra de Navegación Glassmorphism**: Floating glass pill con selector de idioma en tiempo real (**Español / English**) y navegación por anclas.
- **Sección Sobre Mí Modular**: Arquitectura desacoplada (`src/data/content.ts`) para editar biografía, pilares y stack técnico sin tocar componentes JSX.
- **Contacto Seguro y Protegido**: Formulario validado con backend serverless en `/api/contact`, protección anti-spam con Honeypot invisible y enlaces directos a redes profesionales.
- **Spec-Driven Development (SDD)**: Construido y orquestado bajo la metodología OpenSpec y Active Stack con base de conocimiento canónica en `knowledge-base/` y roadmap en `CHANGES.md`.

---

## 🛠️ Stack Tecnológico

| Capa | Tecnología |
| :--- | :--- |
| **Framework** | Next.js 15 (App Router, Server & Client Components) |
| **Lenguaje** | TypeScript 5+ (Tipado estricto) |
| **Estilos** | Tailwind CSS (Tema Dark Cyberpunk con paleta neón personalizada) |
| **Animaciones** | Framer Motion & CSS Keyframes de GPU |
| **Iconos** | Lucide React |
| **Runtime & Servidor** | Node.js / Serverless API Routes |

---

## 🚀 Inicio Rápido

1. **Instalar dependencias**:
   ```bash
   npm install
   ```

2. **Ejecutar servidor de desarrollo**:
   ```bash
   npm run dev
   ```

3. **Abrir en el navegador**:
   Visita [http://localhost:3000](http://localhost:3000)

4. **Compilar para producción**:
   ```bash
   npm run build
   ```

---

## 📁 Estructura del Proyecto

```
portfolio/
├── knowledge-base/       # 10 documentos canónicos de arquitectura y requerimientos
├── openspec/             # Especificaciones formales y registro de changes archivados
├── src/
│   ├── app/
│   │   ├── api/contact/  # Route handler serverless seguro para formulario
│   │   ├── globals.css   # Variables CSS, utilities cyber y tema oscuro
│   │   ├── layout.tsx    # Root layout con providers (LanguageProvider, Navbar)
│   │   └── page.tsx      # Ensamble de secciones (Hero, About, Contact, Footer)
│   ├── components/
│   │   ├── layout/       # Navbar y Footer
│   │   ├── sections/     # Hero, About, Contact
│   │   └── ui/           # HudFrame, TechBackground (Canvas de partículas)
│   ├── context/          # LanguageContext (i18n reactivo con persistencia local)
│   ├── data/             # content.ts (Diccionario de textos bilingües desacoplados)
│   └── types/            # Definiciones de interfaces TypeScript
├── CHANGES.md            # Roadmap de implementación de changes OpenSpec
└── AGENTS.md / CLAUDE.md # Reglas y estándares del proyecto
```

---

## 👤 Autor

**Máximo Monárdez**
- Programador & Especialista en Ciberseguridad

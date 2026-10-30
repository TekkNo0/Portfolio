# Discovery Report — Portfolio Máximo Monárdez

> Documento generado durante la fase de Discovery Research (Active Stack Foundation).

## 1. Problema que resuelve
Falta de una plataforma web profesional, moderna e interactiva que refleje la sinergia del perfil dual de Máximo Monárdez como **Programador** y **Experto en Ciberseguridad**. Permite posicionar su propuesta de valor ante reclutadores técnicos y clientes de consultoría/freelance en un mercado saturado de plantillas genéricas.

## 2. Usuarios y Roles
- **Reclutadores y Tech Leads:** Buscan evaluar seniority técnico, prolijidad de código, stack moderno y capacidad de ejecución en menos de 5 segundos.
- **Clientes Freelance / Empresas:** Buscan soluciones de desarrollo seguro, auditorías y asesoramiento técnico confiable.
- **Máximo Monárdez (Owner):** Administra y personaliza el contenido de su biografía, proyectos y recibe leads de contacto directos.

## 3. Casos de Uso Principales
1. Como reclutador, quiero visualizar el Hero interactivo con estética cyber/tech y el corte diagonal asimétrico para comprobar el nivel de diseño y desarrollo frontend.
2. Como visitante (local o internacional), quiero alternar fluidamente el idioma entre Español e Inglés desde la barra de navegación.
3. Como cliente interesado, quiero contactar a Máximo mediante un formulario interactivo validado o enlaces directos a sus redes profesionales (LinkedIn, GitHub, Telegram).
4. Como Máximo, quiero poder redactar y modificar la sección "Sobre Mí" y agregar futuros proyectos en un archivo de configuración tipado sin necesidad de rehacer componentes.

## 4. Competidores y Soluciones Existentes
- **Portfolios estándar / plantillas genéricas:** Sitios estáticos sin dinamismo ni micro-interacciones, que no reflejan conocimiento en ciberseguridad ni identidad visual propia.
- **Portfolios de desarrolladores comunes:** Enfocados únicamente en desarrollo web sin el ángulo diferencial de seguridad de la información.

## 5. Funcionalidades Necesarias (MVP v1)
- **Barra de navegación flotante (Glass Pill):** Con enlaces ancla (`#home`, `#about`, `#contact`), diseño translúcido y selector de idioma (ES / EN).
- **Hero Interactivo:**
  - Corte diagonal asimétrico (CSS clip-path / layout angular).
  - Títulos y tipografía de impacto: "Hola! Me llamo Maximo Monardez", "Soy Programador y Experto en ciberseguridad" con acentos cian/neón.
  - Marco HUD interactivo (High-Tech HUD container) con escáner/placeholder holográfico para futura foto.
  - Fondo interactivo con micro-partículas o cuadrícula cibernética reactiva al movimiento del mouse.
- **Sección "Sobre Mí" (Modular):** Estructura clara y editable para que Máximo redacte su trayectoria y visión.
- **Sección de Contacto:** Formulario interactivo con feedback visual y enlaces a LinkedIn, GitHub y Telegram/Email.
- **Soporte Bilingüe (i18n):** Selector ES / EN en navbar que conmuta los textos de la interfaz.

## 6. Funcionalidades Opcionales (Backlog v2)
- Sección completa de Proyectos (con filtros dinámicos entre Software Development y Cybersecurity/Pentesting) cuando los proyectos estén listos.
- Terminal interactiva embebida (CLI web con comandos como `cat resume.txt`, `skills`, `clear`).
- Sección de Certificaciones, Labs y write-ups de CTF.

## 7. Reglas de Negocio
- Carga ultra rápida (< 1.5s inicial). Los efectos de Framer Motion y Canvas no deben penalizar el rendimiento en móviles.
- Diseño totalmente adaptable (Responsive) que conserve la estética diagonal en pantallas táctiles sin quebrar la tipografía.
- Gestión centralizada de textos en archivo de configuración (`src/data/content.ts` o diccionarios ES/EN).

## 8. Integraciones
- Formulario de contacto (API Route conectada a Resend o Web3Forms).
- Perfiles externos: GitHub, LinkedIn, Telegram / Email.

## 9. Restricciones
- Stack tecnológico: Next.js (App Router) + TypeScript + Tailwind CSS + Framer Motion.
- Ubicación del proyecto: `C:\Users\maxim\Desktop\portfolio`.

## 10. Riesgos
- Saturación visual: Mantener un equilibrio entre estética tecnológica/cyberpunk y legibilidad profesional.

## 11. Preguntas Abiertas
- Ninguna bloqueante para arrancar la fundación arquitectónica y el MVP del Hero y componentes base.

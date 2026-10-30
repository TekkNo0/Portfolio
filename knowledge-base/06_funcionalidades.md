# Funcionalidades

Organizadas por **épica** y luego por **historia de usuario** (formato US-NNN).

## Épica 1: Navegación & Layout Base
### US-001 — Floating Glass Navbar
**Como** visitante del sitio  
**Quiero** visualizar una barra de navegación fija pero flotante con estilo traslúcido y selector de idioma  
**Para** orientarme y navegar entre las secciones del sitio sin fricción.

**Criterios de aceptación**:
- [ ] Navbar flotante centrada con bordes redondeados y backdrop blur.
- [ ] Enlaces ancla funcionales a Home, About me y Contact.
- [ ] Selector interactivo de idioma (ES / EN) que conmuta los textos en vivo.
- [ ] Responsive: menú hamburguesa estilizado en dispositivos móviles.

**Reglas relacionadas**: RN-UI-01, RN-UI-03

---

## Épica 2: Hero Interactivo (Cyber / Tech Style)
### US-002 — Hero con Corte Diagonal y HUD Facial
**Como** visitante técnico o reclutador  
**Quiero** ver una portada asimétrica con corte diagonal, tipografía de impacto y un contenedor HUD interactivo  
**Para** experimentar un sitio web futurista que evidencie el perfil de desarrollador y experto en ciberseguridad.

**Criterios de aceptación**:
- [ ] Título principal: "Hola! Me llamo Maximo Monardez".
- [ ] Subtítulo con acento cian neón: "Soy Programador y Experto en ciberseguridad".
- [ ] Corte diagonal dinámico que divide visualmente las dos secciones.
- [ ] Contenedor estilo HUD táctico (con bordes angulados, efecto escáner holográfico y placeholder para futura fotografía).
- [ ] Fondo reactivo al cursor con cuadrícula cibernética y partículas flotantes.

**Reglas relacionadas**: RN-UI-01, RN-UI-02

---

## Épica 3: Sección Sobre Mí
### US-003 — Estructura Modular "About Me"
**Como** Máximo Monárdez  
**Quiero** disponer de una sección Sobre Mí limpia, bilingüe y estructurada en tarjetas  
**Para** redactar mi trayectoria, enfoque en ciberseguridad y habilidades sin tocar código complejo.

**Criterios de aceptación**:
- [ ] Lectura automática de textos desde el diccionario `content.ts`.
- [ ] Formato estilizado con tarjetas de información (Pilares, Enfoque y Skills clave).

**Reglas relacionadas**: RN-CNT-01

---

## Épica 4: Contacto & Leads
### US-004 — Formulario Interactivo y Enlaces Directos
**Como** cliente o reclutador interesado  
**Quiero** enviar un mensaje directo mediante un formulario validado o hacer clic en sus redes sociales  
**Para** ponerme en contacto de forma ágil y segura.

**Criterios de aceptación**:
- [ ] Formulario con campos: Nombre, Correo y Mensaje.
- [ ] Validación de formato de email en tiempo real.
- [ ] Animaciones de estado (enviando, éxito, error).
- [ ] Botones directos a LinkedIn, GitHub y Telegram con target `_blank` y `rel="noopener noreferrer"`.

**Reglas relacionadas**: RN-SEC-01, RN-SEC-02

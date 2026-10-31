import { SiteContent, Language } from "@/types";

export const siteContent: Record<Language, SiteContent> = {
  es: {
    navLinks: [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "About me", href: "#about" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    hero: {
      greeting: "Hola! Me llamo",
      name: "Maximo Monardez",
      rolePrefix: "Soy",
      roleDev: "Programador",
      roleAnd: "y",
      roleSec: "Experto en ciberseguridad",
      statusBadge: "SISTEMA ACTIVO // LISTO PARA CONEXIÓN",
      ctaProjects: "Explorar Proyectos",
      ctaContact: "Iniciar Contacto",
    },
    about: {
      sectionTitle: "Sobre Mí",
      subtitle: "Perfil Técnico & Filosofía",
      paragraphs: [
        "Soy Máximo Monárdez, apasionado por la convergencia entre el desarrollo de software de alto rendimiento y la seguridad informática ofensiva y defensiva.",
        "Mi enfoque radica en diseñar arquitecturas resilientes desde la primera línea de código, garantizando tanto una experiencia interactiva moderna como una infraestructura blindada contra vectores de ataque.",
      ],
      pillars: [
        {
          title: "Desarrollo de Software",
          description:
            "Creación de aplicaciones web modernas, rápidas y escalables con Next.js, TypeScript y patrones limpios.",
          icon: "code",
        },
        {
          title: "Ciberseguridad",
          description:
            "Auditorías de seguridad, análisis de vulnerabilidades, hardening de sistemas y buenas prácticas de seguridad.",
          icon: "shield",
        },
        {
          title: "Automatización & CLI",
          description:
            "Desarrollo de scripts, herramientas de terminal y flujos de automatización para optimizar entornos de trabajo.",
          icon: "terminal",
        },
      ],
      skillsTitle: "Arsenal Técnico",
      devSkills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
        "SQL",
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Git",
      ],
      secSkills: [
        "Web App Security",
        "OWASP Top 10",
        "Network Analysis",
        "Linux Hardening",
        "Pentesting Basics",
      ],
    },
    contact: {
      sectionTitle: "Contacto",
      subtitle: "¿Tenés un proyecto en mente o querés conectar?",
      formNameLabel: "Nombre / Empresa",
      formNamePlaceholder: "Tu nombre o empresa...",
      formEmailLabel: "Correo Electrónico",
      formEmailPlaceholder: "tu.correo@ejemplo.com",
      formMessageLabel: "Mensaje",
      formMessagePlaceholder: "Escribe tu propuesta o consulta aquí...",
      formSubmitButton: "Transmitir Mensaje",
      formSendingButton: "Transmitiendo...",
      formSuccessMessage: "Mensaje recibido con éxito. Te responderé a la brevedad.",
      formErrorMessage: "Ocurrió un error al enviar. Por favor intenta por redes directas.",
      directChannelsTitle: "Canales Directos",
    },
    footer: {
      copyright: "© 2026 Máximo Monárdez. Todos los derechos reservados.",
      statusIndicator: "ALL_SYSTEMS_SECURE",
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/TekkNo0",
        icon: "github",
        handle: "@TekkNo0",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maximo-monardez-395588302/",
        icon: "linkedin",
        handle: "in/maximo-monardez",
      },
      {
        name: "Gmail",
        url: "mailto:maximonardezz@gmail.com",
        icon: "mail",
        handle: "maximonardezz@gmail.com",
      },
    ],
  },
  en: {
    navLinks: [
      { id: "home", label: "Home", href: "#home" },
      { id: "about", label: "About me", href: "#about" },
      { id: "contact", label: "Contact", href: "#contact" },
    ],
    hero: {
      greeting: "Hello! I am",
      name: "Maximo Monardez",
      rolePrefix: "I am a",
      roleDev: "Software Developer",
      roleAnd: "and",
      roleSec: "Cybersecurity Specialist",
      statusBadge: "SYSTEM_ONLINE // READY FOR CONNECTION",
      ctaProjects: "Explore Projects",
      ctaContact: "Get in Touch",
    },
    about: {
      sectionTitle: "About Me",
      subtitle: "Technical Profile & Philosophy",
      paragraphs: [
        "I am Máximo Monárdez, passionate about the convergence of high-performance software engineering and cybersecurity.",
        "My approach centers on building resilient architectures from day one, delivering modern interactive user experiences alongside hardened defense against threat vectors.",
      ],
      pillars: [
        {
          title: "Software Development",
          description:
            "Building modern, fast, and scalable web applications with Next.js, TypeScript, and clean architecture.",
          icon: "code",
        },
        {
          title: "Cybersecurity",
          description:
            "Security audits, vulnerability assessments, system hardening, and defensive programming practices.",
          icon: "shield",
        },
        {
          title: "Automation & CLI",
          description:
            "Developing custom CLI tools, scripts, and automated workflows to optimize productivity.",
          icon: "terminal",
        },
      ],
      skillsTitle: "Technical Arsenal",
      devSkills: [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "C#",
        "SQL",
        "HTML5",
        "CSS3",
        "React",
        "Next.js",
        "Node.js",
        "Tailwind CSS",
        "Git",
      ],
      secSkills: [
        "Web App Security",
        "OWASP Top 10",
        "Network Analysis",
        "Linux Hardening",
        "Pentesting Basics",
      ],
    },
    contact: {
      sectionTitle: "Contact",
      subtitle: "Have a project in mind or want to connect?",
      formNameLabel: "Name / Company",
      formNamePlaceholder: "Your name or organization...",
      formEmailLabel: "Email Address",
      formEmailPlaceholder: "your.email@example.com",
      formMessageLabel: "Message",
      formMessagePlaceholder: "Write your inquiry or proposal here...",
      formSubmitButton: "Transmit Message",
      formSendingButton: "Transmitting...",
      formSuccessMessage: "Message received successfully. I'll get back to you shortly.",
      formErrorMessage: "Failed to transmit message. Please reach out via direct socials.",
      directChannelsTitle: "Direct Channels",
    },
    footer: {
      copyright: "© 2026 Máximo Monárdez. All rights reserved.",
      statusIndicator: "ALL_SYSTEMS_SECURE",
    },
    socials: [
      {
        name: "GitHub",
        url: "https://github.com/TekkNo0",
        icon: "github",
        handle: "@TekkNo0",
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/maximo-monardez-395588302/",
        icon: "linkedin",
        handle: "in/maximo-monardez",
      },
      {
        name: "Gmail",
        url: "mailto:maximonardezz@gmail.com",
        icon: "mail",
        handle: "maximonardezz@gmail.com",
      },
    ],
  },
};

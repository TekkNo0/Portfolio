# Spec Delta: core-infrastructure

## Purpose
Provee la configuración base del entorno web, pipeline de compilación con Next.js 15, utilidades de estilos con Tailwind CSS y dependencias de animación para soportar la interfaz interactiva del portfolio.

## ADDED Requirements

### Requirement: Entorno de compilación Next.js y TypeScript
El sistema SHALL inicializar un proyecto Next.js 15 con App Router y TypeScript configurado con chequeo estricto de tipos.

#### Scenario: Compilación exitosa del proyecto
- **WHEN** se ejecuta el script de compilación `npm run build`
- **THEN** el proyecto compila sin errores de tipado TypeScript ni advertencias de configuración

### Requirement: Configuración de estilos y tema oscuro tecnológico
El sistema SHALL configurar Tailwind CSS con paleta temática oscura y soporte de clases de resplandor y acento tecnológico (cian y esmeralda).

#### Scenario: Aplicación de clases de tema oscuro
- **WHEN** un componente renderiza utilizando clases de Tailwind con fondo oscuro y bordes de acento
- **THEN** los estilos se resuelven correctamente sin errores de compilación de CSS

### Requirement: Dependencias de animación y componentes atómicos
El sistema SHALL proveer las dependencias `framer-motion`, `lucide-react`, `clsx` y `tailwind-merge` listas para su importación en componentes de cliente.

#### Scenario: Disponibilidad de módulos de animación
- **WHEN** un componente cliente importa `motion` desde `framer-motion`
- **THEN** el bundle resuelve la librería sin errores de módulos no encontrados

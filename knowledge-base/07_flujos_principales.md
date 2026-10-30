# Flujos Principales

## Flujo 1: Carga e Interacción con el Hero
**Disparador**: El usuario ingresa a la URL raíz `/`.  
**Actor**: Visitante / Reclutador.

**Pasos**:
1. El navegador descarga el bundle optimizado de Next.js (App Router).
2. Framer Motion ejecuta la animación de entrada escalonada (aparición del navbar, revelado del texto del Hero y montaje del contenedor HUD).
3. El canvas de fondo inicializa la cuadrícula de baja intensidad y escucha las coordenadas del puntero del mouse para desplazar suavemente las partículas interactivas.
4. El visitante explora la interfaz o hace hover sobre el contenedor HUD para activar el efecto de escáner.

```
Visitante ──> [ GET / ] ──> Next.js SSR/Static Page
                               │
                               ├──> Framer Motion (Fade in + Slide up)
                               └──> Interactive Canvas (Mouse Tracking)
```

---

## Flujo 2: Cambio de Idioma (ES / EN)
**Disparador**: El usuario pulsa el switch "ES | EN" en la Navbar.  
**Actor**: Visitante.

**Pasos**:
1. El componente `Navbar` dispara el evento de actualización de estado de idioma en el Contexto de React.
2. El nuevo idioma se almacena en `localStorage` con la clave `portfolio_lang`.
3. Todos los componentes suscritos (`Hero`, `About`, `Contact`, `Footer`) actualizan instantáneamente sus cadenas de texto sin recargar la página.

---

## Flujo 3: Envío de Mensaje de Contacto
**Disparador**: El usuario completa el formulario y presiona "Enviar Mensaje".  
**Actor**: Cliente o Reclutador.

**Pasos**:
1. Validación en el cliente (campos no vacíos, formato de correo válido, honeypot vacío).
2. Disparo de petición `POST /api/contact` con estado de carga animado en el botón.
3. El servidor sanitiza los datos y realiza la llamada al proveedor de correos (Resend o fallback configurado).
4. El cliente recibe código 200 y muestra un mensaje de confirmación tecnológico ("Mensaje transmitido exitosamente").
5. Limpieza automática de los campos del formulario.

**Casos de error**:
- Fallo de validación: Se resaltan los campos con borde rojo y texto de advertencia.
- Fallo de red / servidor: Se muestra notificación de error con invitación a contactar por LinkedIn o correo directo.

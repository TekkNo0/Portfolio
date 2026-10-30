# Design: Contact Section and API

## Context
Ver `knowledge-base/02_descripcion_general.md` §API REST y `05_reglas_de_negocio.md` §RN-SEC.

## Goals / Non-Goals

**Goals:**
- Implementar `POST /api/contact` con `NextResponse`.
- Implementar `Contact.tsx` con soporte de honeypot invisible `tabIndex={-1}` y `autoComplete="off"`.
- Implementar `Footer.tsx` tecnológico con estado de seguridad.

**Non-Goals:**
- No requiere base de datos persistente; los mensajes se despachan mediante el proveedor configurado o registran log seguro en consola en modo local.

## Decisions

### D-01: Honeypot invisible
- **Decisión**: Añadir un input llamado `website_url` oculto vía CSS (`display: none` o `opacity-0 pointer-events-none`).
- **Razón**: Detiene el 99% de los bots genéricos de spam web sin molestar a usuarios reales con captchas invasivos.

## Risks / Trade-offs

- **[Riesgo: Spammers avanzados]** → Mitigación: Validar estructura y longitud de strings en servidor.

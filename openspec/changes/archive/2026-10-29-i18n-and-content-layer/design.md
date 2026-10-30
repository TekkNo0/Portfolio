# Design: i18n and Content Layer

## Context
Ver `proposal.md` y `knowledge-base/04_modelo_de_datos.md`. El sitio requiere una experiencia SPA rápida donde conmutar idioma sea instantáneo.

## Goals / Non-Goals

**Goals:**
- Proporcionar el `LanguageProvider` y hook `useLanguage`.
- Centralizar en `src/data/content.ts` las cadenas en español e inglés.
- Definir tipos limpios en `src/types/index.ts`.

**Non-Goals:**
- No incluye componentes visuales (los componentes visuales se integran en changes C-03 a C-07).

## Decisions

### D-01: React Context API para i18n
- **Decisión**: Usar un contexto de React con `localStorage` en lugar de librerías pesadas como `next-intl` o subrutas `/es` y `/en`.
- **Razón**: Máxima ligereza, 0 dependencias extra y transición instantánea sin recarga.

### D-02: Objeto tipado `content[lang]`
- **Decisión**: Estructurar el diccionario como `content.es` y `content.en` conformando la interfaz `SiteContent`.
- **Razón**: Permite tipado estricto e inferencia inmediata con autocompletado en TypeScript.

## Risks / Trade-offs

- **[Riesgo: Hidratación mismatch al leer `localStorage`]** → Mitigación: Renderizar con estado por defecto seguro en el primer render y sincronizar en `useEffect`.

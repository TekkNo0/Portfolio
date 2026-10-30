# Tasks: i18n and Content Layer

## 1. Definición de Tipos

- [x] 1.1 Crear `src/types/index.ts` con interfaces para `Language`, `NavLink`, `SocialLink`, `HeroContent`, `AboutContent`, `ContactContent` y `SiteContent`

## 2. Capa de Contenido y Diccionario

- [x] 2.1 Crear `src/data/content.ts` con los textos bilingües de Máximo Monárdez (Hero, Sobre Mí con visión inicial, enlaces a redes y formulario)

## 3. Contexto de Internacionalización

- [x] 3.1 Implementar `src/context/LanguageContext.tsx` con `LanguageProvider` y hook `useLanguage`
- [x] 3.2 Envolver la aplicación en `src/app/layout.tsx` con el `LanguageProvider` y verificar compilación exitosa con `npm run build`

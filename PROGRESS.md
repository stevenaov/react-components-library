# PROGRESS.md — Avance del proyecto

## Estado actual: v0.1 — Primera versión funcional ✅

**Stack**: Vite 6 + React 18 + TypeScript (strict). CSS puro con tokens — cero dependencias runtime más allá de React.

## Componentes implementados (24/20 del objetivo inicial)

| # | Componente | Categoría | Estado |
|---|---|---|---|
| 1 | Button | Botones | ✅ |
| 2 | Badge | Display | ✅ |
| 3 | Card | Display | ✅ |
| 4 | Input | Formularios | ✅ |
| 5 | Textarea | Formularios | ✅ |
| 6 | Switch | Formularios | ✅ |
| 7 | Checkbox | Formularios | ✅ |
| 8 | RadioGroup | Formularios | ✅ |
| 9 | Select | Formularios | ✅ |
| 10 | Slider | Formularios | ✅ |
| 11 | Rating | Formularios | ✅ |
| 12 | Modal | Superposición | ✅ |
| 13 | Dropdown | Superposición | ✅ |
| 14 | Tooltip | Superposición | ✅ |
| 15 | Tabs | Navegación | ✅ |
| 16 | Accordion | Navegación | ✅ |
| 17 | Breadcrumbs | Navegación | ✅ |
| 18 | Pagination | Navegación | ✅ |
| 19 | Progress | Feedback | ✅ |
| 20 | Spinner | Feedback | ✅ |
| 21 | Toast | Feedback | ✅ |
| 22 | Alert | Feedback | ✅ |
| 23 | Skeleton | Feedback | ✅ |
| 24 | Avatar / AvatarGroup | Display | ✅ |

## Landing page

- [x] Nav flotante en píldora con blur (glassmorphism).
- [x] Hero con grid enmascarado, halos radiales, serif itálica de acento y CTA animado.
- [x] Sección de features con cards glow y reveal al scroll (IntersectionObserver).
- [x] Galería: filtros por categoría con contadores, preview en vivo, ver código y copiar (clipboard + fallback).
- [x] Footer con referencias a DESIGN.md y PROGRESS.md.

## Infraestructura

- [x] `src/lib/registry.tsx`: registro central (metadatos + demo + código vía `?raw`).
- [x] `src/lib/useReveal.ts`: animación de aparición al scroll.
- [x] Tokens y sistema documentados en `DESIGN.md`.
- [x] Build verificado: `npm run build` (tsc strict + vite build) sin errores.

## Próximos pasos (backlog)

- [ ] Publicar como paquete npm (entry `src/components/ui/index.ts`).
- [ ] Tema claro con `data-theme` y tokens alternativos.
- [ ] Componentes adicionales: CommandPalette, DatePicker, Table, Drawer, Popover, FileUpload.
- [ ] Tests unitarios (Vitest + Testing Library) y accesibilidad (axe).
- [ ] Página de documentación por componente con tabla de props.
- [ ] CI con GitHub Actions (build + lint).

## Cómo añadir un componente

Ver checklist en `DESIGN.md` → sección "Añadir un componente nuevo".

# DESIGN.md — Sistema de diseño de Lumina UI

Este documento define las decisiones visuales del proyecto. Cualquier componente nuevo debe respetar estos principios para mantener la coherencia de la librería.

## Filosofía

Inspiración: **Linear** (precisión y sobriedad), **Vercel** (contraste y tipografía), **Framer** (movimiento con carácter). Objetivo: interfaces premium, nunca genéricas ni cuadradas.

## Tokens (src/index.css)

Todos los componentes consumen variables CSS globales (`--*`). Nunca hardcodear colores, radios, duraciones o fuentes.

### Superficies
| Token | Valor | Uso |
|---|---|---|
| `--bg` | `#07070c` | Fondo de página |
| `--bg-elev-1/2/3` | `#0d0d15` → `#1a1a28` | Elevación progresiva de superficies |
| `--border` / `--border-strong` | `rgba(255,255,255,.08/.16)` | Bordes hairline translúcidos |

### Texto
`--text-1` (principal `#f4f4f8`), `--text-2` (secundario `#a6a6b8`), `--text-3` (terciario `#63636f`). Jerarquía por opacidad, no por color.

### Acentos
- Gradiente de marca: `--grad-accent` = violeta `#8b5cf6` → índigo `#6366f1` → cian `#22d3ee`.
- Semánticos: `--success #34d399`, `--warning #fbbf24`, `--danger #fb7185`.
- Glow: `--shadow-glow` con tinte violeta para elementos activos.

### Geometría
- Botones y chips: píldora (`--r-pill: 999px`). **Nunca esquinas rectas en elementos interactivos.**
- Tarjetas: `--r-lg: 24px`. Inputs y menús: `--r-md: 16px`. Detalles: `--r-sm: 10px`.

### Movimiento
- `--ease-out: cubic-bezier(.16,1,.3,1)` — entradas suaves.
- `--ease-spring: cubic-bezier(.34,1.56,.64,1)` — rebote elástico (switches, checks, tooltips).
- Duraciones: `--dur-fast 150ms`, `--dur 250ms`, `--dur-slow 450ms`.
- Reglas: `transform: scale(.96)` al presionar botones; `translateY(-4px)` al hover de tarjetas; aperturas de menús con `transform-origin: top` y `lu-pop`.
- Todo movimiento debe quedar desactivado bajo `prefers-reduced-motion` (ya cubierto globalmente en `index.css`).

## Tipografía

- **Inter** (Google Fonts) para UI, con `letter-spacing` negativo en títulos grandes y `font-feature-settings: "cv11","ss01"`.
- **Instrument Serif** itálica como acento expresivo en el hero (palabra destacada en cursiva serif).
- **JetBrains Mono** para bloques de código.
- Escala: hero `clamp(2.75rem, 7vw, 4.75rem)`, títulos de sección ~2.6rem, cuerpo 0.875–1.0625rem.

## Convenciones de componentes

1. Prefijo de clase CSS: `lu-` (p. ej. `lu-button`, `lu-card__title` — BEM).
2. Estilos de librería centralizados en `src/components/ui/ui.css`; los estilos de la landing en `src/app.css` (prefijos `nav__`, `hero__`, `component-card__`).
3. Un archivo por componente en `src/components/ui/`, exportado desde `index.ts`.
4. Interactividad real: estado con hooks, cierre por clic externo/Escape, ARIA roles (`switch`, `tablist`, `radiogroup`, `listbox`, `dialog`), foco visible con `:focus-visible`.
5. Variantes mediante props (`variant`, `tone`, `size`), nunca clases ad hoc.

## Añadir un componente nuevo (checklist)

1. Crea `src/components/ui/Nombre.tsx` autocontenido + estilos con prefijo `lu-` en `ui.css`.
2. Expórtalo en `src/components/ui/index.ts`.
3. Regístralo en `src/lib/registry.tsx`: importa su fuente con `?raw`, añade `id`, `name`, `category`, `description`, `code` y un `demo` **interactivo** (con estado si aplica).
4. Verifica accesibilidad (teclado + ARIA) y `prefers-reduced-motion`.
5. Actualiza el contador en `PROGRESS.md`.

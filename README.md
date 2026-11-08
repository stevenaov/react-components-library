# Lumina UI

Librería open source de componentes React con estética premium, inspirada en Linear, Vercel y Framer. Incluye una landing page con galería interactiva: cada componente tiene vista previa en vivo y su código fuente listo para copiar.

## Stack

- **Vite 6** + **React 18** + **TypeScript strict**
- **CSS puro** con tokens de diseño (`src/index.css`) — cero dependencias runtime
- Tipografías: Inter (UI), Instrument Serif (acento), JetBrains Mono (código)

## Comandos

```bash
npm install
npm run dev      # servidor de desarrollo
npm run build    # type-check (tsc) + build de producción
npm run preview  # sirve el build
```

## Estructura

```
src/
├── components/ui/    # librería: 24 componentes autocontenidos + ui.css
├── lib/registry.tsx  # registro: metadatos, demos y código (?raw) por componente
├── App.tsx           # landing page (hero, features, galería)
└── index.css         # tokens de diseño
```

## Documentación

- `DESIGN.md` — sistema de diseño, tokens y checklist para nuevos componentes.
- `PROGRESS.md` — avance del proyecto y roadmap.

## Contribuir

Los componentes nuevos se registran en `src/lib/registry.tsx` con un demo interactivo; el código copiable se importa automáticamente con `?raw`. Ver el checklist en `DESIGN.md`.

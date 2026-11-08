import { useMemo, useState } from "react";
import "./app.css";
import "./components/ui/ui.css";
import { Badge, Button, Card, CardDescription, CardTitle } from "./components/ui";
import { useReveal } from "./lib/useReveal";
import { categories, registry, type Category } from "./lib/registry";

function Nav() {
  return (
    <header className="nav">
      <a className="nav__logo" href="#top">
        <span className="nav__logo-mark" />
        Lumina UI
      </a>
      <nav className="nav__links">
        <a className="nav__link" href="#features">Ventajas</a>
        <a className="nav__link" href="#componentes">Componentes</a>
        <a className="nav__link" href="#top">Docs</a>
      </nav>
      <Button size="sm" shine>Empezar</Button>
    </header>
  );
}

function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero__bg" aria-hidden="true" />
      <div className="container">
        <span className="hero__pill">v0.1 — {registry.length} componentes listos</span>
        <h1>
          Componentes React con <span className="grad">detalles que importan</span>, listos para tu <em>próximo</em> proyecto
        </h1>
        <p className="hero__sub">
          Una librería open source con estética de producto premium: botones píldora, esquinas generosas,
          movimiento con carácter y cero dependencias externas. Copia el código y úsalo hoy.
        </p>
        <div className="hero__cta">
          <Button size="lg" shine onClick={() => document.getElementById("componentes")?.scrollIntoView()}>
            Explorar componentes
          </Button>
          <Button size="lg" variant="secondary">Documentación</Button>
        </div>
        <div className="hero__stats">
          <div className="hero__stat">
            <div className="hero__stat-value">{registry.length}</div>
            <div className="hero__stat-label">Componentes</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">{categories.length}</div>
            <div className="hero__stat-label">Categorías</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">0</div>
            <div className="hero__stat-label">Dependencias runtime</div>
          </div>
          <div className="hero__stat">
            <div className="hero__stat-value">100%</div>
            <div className="hero__stat-label">TypeScript</div>
          </div>
        </div>
      </div>
    </section>
  );
}

const features = [
  {
    title: "Diseño con personalidad",
    desc: "Tokens compartidos, gradientes con intención y microinteracciones elásticas — nada de interfaces genéricas.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M12 3l2.2 5.8L20 11l-5.8 2.2L12 19l-2.2-5.8L4 11l5.8-2.2L12 3z" />
      </svg>
    ),
  },
  {
    title: "Accesible por defecto",
    desc: "Roles ARIA, navegación por teclado y respeto a prefers-reduced-motion en cada componente.",
    icon: (
      <svg viewBox="0 0 24 24">
        <circle cx="12" cy="12" r="9" />
        <path d="M12 8v4l2.5 2.5" />
      </svg>
    ),
  },
  {
    title: "Copia y pega",
    desc: "Cada vista previa expone su código fuente real: sin build steps ni paquetes intermedios.",
    icon: (
      <svg viewBox="0 0 24 24">
        <rect x="9" y="9" width="11" height="11" rx="3" />
        <path d="M5 15V6a2 2 0 012-2h9" />
      </svg>
    ),
  },
  {
    title: "Rendimiento real",
    desc: "CSS puro con transiciones nativas y cero dependencias runtime: solo React.",
    icon: (
      <svg viewBox="0 0 24 24">
        <path d="M13 2L5 14h6l-1 8 8-12h-6l1-8z" />
      </svg>
    ),
  },
];

function Features() {
  const { ref, visible } = useReveal();
  return (
    <section className="section" id="features">
      <div className="container">
        <div className="section__head">
          <div className="section__eyebrow">Por qué Lumina</div>
          <h2 className="section__title">Calidad de producto, no de demo</h2>
          <p className="section__sub">
            Cada componente está pensado para producción: funcional, accesible y con un sistema visual coherente.
          </p>
        </div>
        <div className={`features reveal ${visible ? "reveal--visible" : ""}`} ref={ref as React.RefObject<HTMLDivElement>}>
          {features.map((f) => (
            <Card key={f.title} hover glow>
              <span className="feature__icon">{f.icon}</span>
              <CardTitle>{f.title}</CardTitle>
              <CardDescription>{f.desc}</CardDescription>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

function ComponentCard({ id }: { id: string }) {
  const entry = useMemo(() => registry.find((e) => e.id === id)!, [id]);
  const [codeOpen, setCodeOpen] = useState(false);
  const [copied, setCopied] = useState(false);

  const copy = async () => {
    try {
      await navigator.clipboard.writeText(entry.code);
    } catch {
      const ta = document.createElement("textarea");
      ta.value = entry.code;
      document.body.appendChild(ta);
      ta.select();
      document.execCommand("copy");
      ta.remove();
    }
    setCopied(true);
    setTimeout(() => setCopied(false), 1800);
  };

  return (
    <article className={`component-card ${codeOpen ? "component-card--code-open" : ""}`}>
      <div className="component-card__head">
        <span className="component-card__name">{entry.name}</span>
        <Badge tone="accent">{entry.category}</Badge>
      </div>
      <p className="component-card__desc">{entry.description}</p>
      <div className="component-card__preview">{entry.demo}</div>
      <div className="component-card__code">
        <pre>
          <code>{entry.code}</code>
        </pre>
      </div>
      <div className="component-card__foot">
        <div className="component-card__actions">
          <button
            type="button"
            className="icon-btn"
            onClick={() => setCodeOpen((o) => !o)}
            aria-expanded={codeOpen}
          >
            {codeOpen ? "Ocultar código" : "Ver código"}
          </button>
        </div>
        <button
          type="button"
          className={`icon-btn ${copied ? "icon-btn--copied" : ""}`}
          onClick={copy}
        >
          {copied ? (
            <svg viewBox="0 0 24 24">
              <path d="M5 13l4 4L19 7" />
            </svg>
          ) : (
            <svg viewBox="0 0 24 24">
              <rect x="9" y="9" width="11" height="11" rx="3" />
              <path d="M5 15V6a2 2 0 012-2h9" />
            </svg>
          )}
          {copied ? "Copiado" : "Copiar"}
        </button>
      </div>
    </article>
  );
}

function Gallery() {
  const [filter, setFilter] = useState<Category | "Todos">("Todos");
  const { ref, visible } = useReveal(0.05);

  const visibleEntries = useMemo(
    () => (filter === "Todos" ? registry : registry.filter((e) => e.category === filter)),
    [filter]
  );

  return (
    <section className="section" id="componentes">
      <div className="container">
        <div className="section__head">
          <div className="section__eyebrow">Galería interactiva</div>
          <h2 className="section__title">{registry.length} componentes, {categories.length} categorías</h2>
          <p className="section__sub">
            Prueba cada componente en vivo, abre su código y cópialo con un clic. Todo funciona de verdad.
          </p>
        </div>
        <div className="filters" role="tablist" aria-label="categorías">
          {(["Todos", ...categories] as const).map((cat) => (
            <button
              key={cat}
              type="button"
              role="tab"
              aria-selected={filter === cat}
              className={`filter ${filter === cat ? "filter--active" : ""}`}
              onClick={() => setFilter(cat)}
            >
              {cat}
              <span className="filter__count">
                {cat === "Todos" ? registry.length : registry.filter((e) => e.category === cat).length}
              </span>
            </button>
          ))}
        </div>
        <div className={`gallery reveal ${visible ? "reveal--visible" : ""}`} ref={ref as React.RefObject<HTMLDivElement>}>
          {visibleEntries.map((entry) => (
            <ComponentCard key={entry.id} id={entry.id} />
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <p className="footer__text">
          <strong>Lumina UI</strong> — librería open source de componentes React.
        </p>
        <p className="footer__text">
          Hecho con React 18, TypeScript y CSS puro. Consulta <strong>DESIGN.md</strong> y <strong>PROGRESS.md</strong> para contribuir.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Features />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

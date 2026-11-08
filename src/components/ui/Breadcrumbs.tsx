export interface BreadcrumbsProps {
  items: string[];
  onNavigate?: (index: number) => void;
}

export function Breadcrumbs({ items, onNavigate }: BreadcrumbsProps) {
  return (
    <nav className="lu-breadcrumbs" aria-label="migas de pan">
      {items.map((item, i) => {
        const isCurrent = i === items.length - 1;
        return (
          <span key={item} style={{ display: "inline-flex", alignItems: "center", gap: 8 }}>
            {i > 0 && (
              <span className="lu-breadcrumbs__sep" aria-hidden="true">
                /
              </span>
            )}
            <button
              type="button"
              className={`lu-breadcrumbs__item ${isCurrent ? "lu-breadcrumbs__item--current" : ""}`}
              aria-current={isCurrent ? "page" : undefined}
              onClick={() => !isCurrent && onNavigate?.(i)}
            >
              {item}
            </button>
          </span>
        );
      })}
    </nav>
  );
}

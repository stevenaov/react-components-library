export interface PaginationProps {
  page: number;
  total: number;
  onChange: (page: number) => void;
}

function pageList(page: number, total: number): (number | "…")[] {
  if (total <= 7) return Array.from({ length: total }, (_, i) => i + 1);
  const set = new Set([1, total, page, page - 1, page + 1]);
  const sorted = [...set].filter((p) => p >= 1 && p <= total).sort((a, b) => a - b);
  const out: (number | "…")[] = [];
  let prev = 0;
  for (const p of sorted) {
    if (p - prev > 1) out.push("…");
    out.push(p);
    prev = p;
  }
  return out;
}

export function Pagination({ page, total, onChange }: PaginationProps) {
  return (
    <nav className="lu-pagination" aria-label="paginación">
      {pageList(page, total).map((p, i) =>
        p === "…" ? (
          <span key={`dots-${i}`} className="lu-pagination__dots">
            …
          </span>
        ) : (
          <button
            key={p}
            type="button"
            className={`lu-pagination__page ${p === page ? "lu-pagination__page--active" : ""}`}
            aria-current={p === page ? "page" : undefined}
            onClick={() => onChange(p)}
          >
            {p}
          </button>
        )
      )}
    </nav>
  );
}

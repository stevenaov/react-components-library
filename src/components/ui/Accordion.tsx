import { useState } from "react";

export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
  defaultOpen?: number;
}

export function Accordion({ items, defaultOpen = -1 }: AccordionProps) {
  const [openIndex, setOpenIndex] = useState<number>(defaultOpen);

  return (
    <div className="lu-accordion">
      {items.map((item, i) => {
        const open = openIndex === i;
        return (
          <div key={item.title} className={`lu-accordion__item ${open ? "lu-accordion__item--open" : ""}`}>
            <button
              type="button"
              className="lu-accordion__trigger"
              aria-expanded={open}
              onClick={() => setOpenIndex(open ? -1 : i)}
            >
              {item.title}
              <svg className="lu-accordion__icon" viewBox="0 0 24 24" aria-hidden="true">
                <path d="M12 5v14M5 12h14" />
              </svg>
            </button>
            <div className="lu-accordion__content">
              <div className="lu-accordion__content-inner">
                <p>{item.content}</p>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

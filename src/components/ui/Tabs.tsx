export interface TabsProps {
  tabs: string[];
  active: string;
  onChange: (tab: string) => void;
  "aria-label"?: string;
}

export function Tabs({ tabs, active, onChange, "aria-label": ariaLabel }: TabsProps) {
  return (
    <div className="lu-tabs" role="tablist" aria-label={ariaLabel}>
      {tabs.map((tab) => (
        <button
          key={tab}
          type="button"
          role="tab"
          aria-selected={tab === active}
          className={`lu-tabs__tab ${tab === active ? "lu-tabs__tab--active" : ""}`}
          onClick={() => onChange(tab)}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}

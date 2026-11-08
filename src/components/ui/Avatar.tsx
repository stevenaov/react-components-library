import type { ReactNode } from "react";

export interface AvatarProps {
  name?: string;
  src?: string;
  size?: "sm" | "md" | "lg";
  status?: "online" | "offline";
}

const palette = [
  "linear-gradient(135deg,#8b5cf6,#6366f1)",
  "linear-gradient(135deg,#22d3ee,#3b82f6)",
  "linear-gradient(135deg,#f472b6,#8b5cf6)",
  "linear-gradient(135deg,#34d399,#22d3ee)",
  "linear-gradient(135deg,#fbbf24,#fb7185)",
];

function hashIndex(name: string) {
  let h = 0;
  for (let i = 0; i < name.length; i++) h = (h * 31 + name.charCodeAt(i)) >>> 0;
  return h % palette.length;
}

export function Avatar({ name = "?", src, size = "md", status }: AvatarProps) {
  const initials = name
    .split(" ")
    .map((w) => w[0])
    .slice(0, 2)
    .join("")
    .toUpperCase();
  return (
    <span
      className={`lu-avatar lu-avatar--${size}`}
      style={src ? undefined : { background: palette[hashIndex(name)] }}
      title={name}
    >
      {src ? (
        <img className="lu-avatar__img" src={src} alt={name} />
      ) : (
        initials
      )}
      {status && (
        <span
          className={`lu-avatar__status ${
            status === "offline" ? "lu-avatar__status--offline" : ""
          }`}
        />
      )}
    </span>
  );
}

export function AvatarGroup({ children }: { children: ReactNode }) {
  return <div className="lu-avatar-group">{children}</div>;
}

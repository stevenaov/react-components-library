export interface SkeletonProps {
  width?: string | number;
  height?: string | number;
  circle?: boolean;
  style?: React.CSSProperties;
}

export function Skeleton({ width = "100%", height = 14, circle = false, style }: SkeletonProps) {
  return (
    <span
      className="lu-skeleton"
      style={{
        width,
        height: circle ? width : height,
        borderRadius: circle ? "50%" : undefined,
        display: "block",
        ...style,
      }}
      aria-hidden="true"
    />
  );
}

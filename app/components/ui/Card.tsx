type CardProps = {
  children: React.ReactNode;
  padding?: "sm" | "md" | "lg";
  hover?: boolean;
  style?: React.CSSProperties;
  accent?: string; // left border color
};

const paddings = { sm: 16, md: 24, lg: 32 };

export default function Card({
  children,
  padding = "md",
  hover = true,
  style,
  accent,
}: CardProps) {
  return (
    <div
      style={{
        background: "#fff",
        borderRadius: 16,
        border: "1px solid #E2E8F0",
        borderLeft: accent ? `4px solid ${accent}` : undefined,
        padding: paddings[padding],
        transition: hover ? "transform 0.25s ease, box-shadow 0.25s ease" : undefined,
        ...style,
      }}
      className={hover ? "card-lift" : undefined}
    >
      {children}
    </div>
  );
}
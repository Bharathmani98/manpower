type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  highlight?: string;   // part of title shown in orange
  subtitle?: string;
  center?: boolean;
  light?: boolean;      // true = white text (for dark bg sections)
};

export default function SectionHeader({
  eyebrow,
  title,
  highlight,
  subtitle,
  center = false,
  light = false,
}: SectionHeaderProps) {
  return (
    <div style={{ textAlign: center ? "center" : "left", marginBottom: 56 }}>
      {/* Badge */}
      <div
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: 6,
          background: light ? "rgba(240,90,40,0.2)" : "#FEF0EB",
          color: light ? "#FF9A6C" : "#C94416",
          fontSize: 11,
          fontWeight: 700,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          padding: "5px 14px",
          borderRadius: 100,
          border: light ? "1px solid rgba(240,90,40,0.3)" : "1px solid #FCCBB8",
          marginBottom: 16,
        }}
      >
        ✦ {eyebrow}
      </div>

      {/* Title */}
      <h2
        style={{
          fontFamily: "var(--font-display)",
          fontSize: "clamp(32px, 5vw, 52px)",
          fontWeight: 900,
          color: light ? "#fff" : "#0F1F3D",
          lineHeight: 1.1,
          marginBottom: subtitle ? 16 : 0,
        }}
      >
        {title}{" "}
        {highlight && (
          <span style={{ color: "#F05A28" }}>{highlight}</span>
        )}
      </h2>

      {/* Subtitle */}
      {subtitle && (
        <p
          style={{
            color: light ? "rgba(255,255,255,0.6)" : "#64748B",
            fontSize: 16,
            lineHeight: 1.7,
            maxWidth: center ? 520 : 480,
            margin: center ? "0 auto" : undefined,
          }}
        >
          {subtitle}
        </p>
      )}
    </div>
  );
}
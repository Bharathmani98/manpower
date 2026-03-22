import Link from "next/link";

type ButtonProps = {
  href?: string;
  onClick?: () => void;
  variant?: "primary" | "outline" | "ghost" | "white";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  type?: "button" | "submit" | "reset";
  fullWidth?: boolean;
};

const styles = {
  primary: {
    background: "#F05A28",
    color: "#fff",
    border: "2px solid #F05A28",
  },
  outline: {
    background: "transparent",
    color: "#0F1F3D",
    border: "2px solid #0F1F3D",
  },
  ghost: {
    background: "rgba(255,255,255,0.1)",
    color: "#fff",
    border: "1px solid rgba(255,255,255,0.25)",
  },
  white: {
    background: "#fff",
    color: "#0F1F3D",
    border: "2px solid #fff",
  },
};

const sizes = {
  sm:  { padding: "9px 20px",  fontSize: 13 },
  md:  { padding: "13px 28px", fontSize: 14 },
  lg:  { padding: "16px 36px", fontSize: 15 },
};

export default function Button({
  href,
  onClick,
  variant = "primary",
  size = "md",
  children,
  className,
  type = "button",
  fullWidth = false,
}: ButtonProps) {
  const base: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    justifyContent: "center",
    gap: 8,
    fontFamily: "var(--font-body)",
    fontWeight: 700,
    letterSpacing: "0.03em",
    borderRadius: 8,
    cursor: "pointer",
    textDecoration: "none",
    transition: "all 0.2s ease",
    width: fullWidth ? "100%" : undefined,
    ...styles[variant],
    ...sizes[size],
  };

  if (href) {
    return (
      <Link href={href} style={base} className={className}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type} onClick={onClick} style={base} className={className}>
      {children}
    </button>
  );
}
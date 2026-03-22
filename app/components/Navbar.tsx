

"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const NAV_LINKS = [
  { label: "Home",     href: "/" },
  { label: "About",    href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Gallery",  href: "/gallery" },
  { label: "Contact",  href: "/contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isHome = pathname === "/";

  return (
    <>
      <nav style={{
        position: "fixed", top: 0, left: 0, right: 0, zIndex: 1000,
        background: scrolled ? "#fff" : isHome ? "transparent" : "#0a1e3c",
        boxShadow: scrolled ? "0 2px 20px rgba(10,30,60,0.10)" : "none",
        transition: "all 0.4s ease",
      }}>
        <div style={{
          maxWidth: 1200, margin: "0 auto", padding: "14px 24px",
          display: "flex", alignItems: "center", justifyContent: "space-between",
        }}>

         {/* Logo */}
<Link href="/" style={{ textDecoration: "none", display: "flex", alignItems: "center", gap: 10, flexShrink: 0 }}>
  <div style={{
    width: 60, height: 60, borderRadius: 10,
    overflow: "hidden", flexShrink: 0,
  }}>
    <img
      src="YOUR_LOGO_URL_HERE"
      alt="Million Dudes Logo"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
  <div style={{ display: "flex", flexDirection: "column", lineHeight: 1.15 }}>
    <span style={{ fontFamily: "Fraunces, serif", fontSize: 17, fontWeight: 900, color: scrolled ? "#0a1e3c" : "#fff" }}>Million Dudes</span>
    <span style={{ fontSize: 9, fontWeight: 700, color: scrolled ? "#1a6fb5" : "rgba(255,255,255,0.75)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Manpower</span>
  </div>
</Link>
          {/* Desktop Links */}
          <div style={{ display: "flex", alignItems: "center", gap: 28 }} className="nav-desktop">
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} style={{
                textDecoration: "none", fontSize: 14, fontWeight: 600,
                color: scrolled ? (pathname === l.href ? "#1a6fb5" : "#0a1e3c") : (pathname === l.href ? "#2e9cdb" : "#fff"),
                borderBottom: pathname === l.href ? `2px solid ${scrolled ? "#1a6fb5" : "#2e9cdb"}` : "2px solid transparent",
                paddingBottom: 2, transition: "all 0.2s",
              }}>{l.label}</Link>
            ))}
            <Link href="/contact" style={{
              background: "#0f4c8a", color: "#fff", padding: "10px 22px",
              borderRadius: 8, fontWeight: 700, fontSize: 14, textDecoration: "none",
              transition: "background 0.2s",
            }}>Hire Staff ›</Link>
          </div>

          {/* Hamburger */}
          <button onClick={() => setMenuOpen(!menuOpen)} className="nav-mobile" style={{
            background: "none", border: "none", cursor: "pointer", fontSize: 22,
            color: scrolled ? "#0a1e3c" : "#fff", padding: 4,
          }}>
            {menuOpen ? "✕" : "☰"}
          </button>
        </div>

        {/* Mobile menu */}
        {menuOpen && (
          <div style={{
            background: "#fff", borderTop: "1px solid #e8f4fd",
            padding: "20px 24px 28px", display: "flex", flexDirection: "column", gap: 16,
          }}>
            {NAV_LINKS.map((l) => (
              <Link key={l.href} href={l.href} onClick={() => setMenuOpen(false)} style={{
                textDecoration: "none", color: pathname === l.href ? "#1a6fb5" : "#0a1e3c",
                fontWeight: 600, fontSize: 16,
              }}>{l.label}</Link>
            ))}
            <Link href="/contact" onClick={() => setMenuOpen(false)} style={{
              background: "#0f4c8a", color: "#fff", padding: "12px 24px",
              borderRadius: 8, fontWeight: 700, fontSize: 14,
              textDecoration: "none", textAlign: "center",
            }}>Hire Staff ›</Link>
          </div>
        )}
      </nav>

      <style>{`
        .nav-desktop { display: flex !important; }
        .nav-mobile  { display: none  !important; }
        @media (max-width: 768px) {
          .nav-desktop { display: none  !important; }
          .nav-mobile  { display: block !important; }
        }
      `}</style>
    </>
  );
}
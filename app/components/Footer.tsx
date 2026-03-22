import Link from "next/link";

export default function Footer() {
  const cols = [
    {
      title: "Company",
      links: [
        { label: "Home",     href: "/" },
        { label: "About",    href: "/about" },
        { label: "Services", href: "/services" },
        { label: "Gallery",  href: "/gallery" },
        { label: "Contact",  href: "/contact" },
      ],
    },
    {
      title: "Services",
      links: [
        { label: "Brand Promotions",  href: "/services" },
        { label: "Event Management",  href: "/services" },
        { label: "Catering Services", href: "/services" },
      ],
    },
  ];

  return (
    <>
      <footer style={{
        background: "linear-gradient(135deg, #0a1e3c 0%, #0f4c8a 100%)",
        color: "#fff",
        padding: "60px 24px 28px",
        fontFamily: "'Plus Jakarta Sans', sans-serif",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Grid */}
          <div className="footer-grid">

            {/* Brand */}
            <div>
             <div style={{ display: "flex", alignItems: "center", gap: 10, marginBottom: 16 }}>
  <div style={{ width: 60, height: 60, borderRadius: 10, overflow: "hidden" }}>
    <img
      src="YOUR_LOGO_URL_HERE"
      alt="Logo"
      style={{ width: "100%", height: "100%", objectFit: "cover" }}
    />
  </div>
                <div>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: 18, fontWeight: 900, color: "#fff" }}>Million Dudes <span style={{ color: "#2e9cdb" }}></span></div>
                  <div style={{ fontSize: 9, color: "rgba(255,255,255,0.6)", letterSpacing: "0.1em", textTransform: "uppercase" }}>Manpower</div>
                </div>
              </div>
              <p style={{ color: "rgba(255,255,255,0.5)", fontSize: 14, lineHeight: 1.7, maxWidth: 260, marginBottom: 20 }}>
                Bengalore s premier manpower providers for events, catering, and brand activations since 2022.
              </p>
              {[
                { icon: "📧", text: "milliondudesmanpower@gmail.com", href: "mailto:hello@manpowerelite.in" },
                { icon: "📞", text: "+91 7019026644",        href: "tel:+91 7019026644" },
                { icon: "📍", text: "Bengaluru, Karnataka",   href: "#" },
              ].map((c) => (
                <a key={c.text} href={c.href} style={{
                  display: "flex", alignItems: "center", gap: 10,
                  color: "rgba(255,255,255,0.6)", fontSize: 13,
                  marginBottom: 10, textDecoration: "none",
                }}>
                  {c.icon} {c.text}
                </a>
              ))}
            </div>

            {/* Link columns */}
            {cols.map((col) => (
              <div key={col.title}>
                <p style={{ color: "#2e9cdb", fontSize: 11, fontWeight: 700, letterSpacing: "0.12em", textTransform: "uppercase", marginBottom: 18 }}>
                  {col.title}
                </p>
                <div style={{ display: "flex", flexDirection: "column", gap: 12 }}>
                  {col.links.map((l) => (
                    <Link key={l.label} href={l.href} style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, textDecoration: "none" }}>
                      {l.label}
                    </Link>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Bottom */}
          <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 22, marginTop: 48, display: "flex", justifyContent: "space-between", flexWrap: "wrap", gap: 10 }}>
            <p style={{ color: "rgba(255,255,255,0.3)", fontSize: 13 }}>
              © {new Date().getFullYear()} Million Dudes Manpower. All rights reserved.
            </p>
            <div style={{ display: "flex", gap: 20 }}>
              <Link href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none" }}>Privacy Policy</Link>
              <Link href="#" style={{ color: "rgba(255,255,255,0.3)", fontSize: 13, textDecoration: "none" }}>Terms</Link>
            </div>
          </div>
        </div>
      </footer>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 0;
        }
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 28px !important; }
        }
      `}</style>
    </>
  );
}
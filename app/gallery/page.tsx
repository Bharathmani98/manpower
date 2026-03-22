"use client";
import useReveal from "../hooks/useReveal";

const GALLERY = [
  { title: "Product Launch — Bengaluru",  category: "Brand",   emoji: "🎤", color: "#0f4c8a" },
  { title: "Corporate Gala — Mumbai",      category: "Event",   emoji: "🎪", color: "#1a6fb5" },
  { title: "Banquet Service — Chennai",    category: "Catering",emoji: "🍽️", color: "#2e9cdb" },
  { title: "Mall Activation — Hyderabad",  category: "Brand",   emoji: "🛍️", color: "#0f4c8a" },
  { title: "Exhibition — Delhi",           category: "Event",   emoji: "🏛️", color: "#1a6fb5" },
  { title: "Wedding Catering — Mysuru",    category: "Catering",emoji: "💍", color: "#2e9cdb" },
  { title: "Roadshow — Pune",              category: "Brand",   emoji: "🚗", color: "#0f4c8a" },
  { title: "Tech Conference — Bengaluru",  category: "Event",   emoji: "💻", color: "#1a6fb5" },
  { title: "Restaurant Launch — Kochi",    category: "Catering",emoji: "🥂", color: "#2e9cdb" },
];

export default function GalleryPage() {
  useReveal();

  return (
    <div style={{ paddingTop: 80, background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#0a1e3c 0%,#0f4c8a 60%,#1a6fb5 100%)", padding: "90px 24px 70px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(46,156,219,0.18)", color: "#2e9cdb", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 18px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.35)", marginBottom: 20 }}>
          Our Work
        </span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(38px,6vw,64px)", fontWeight: 900, color: "#fff", lineHeight: 1.1 }}>
          Event <span style={{ color: "#2e9cdb" }}>Gallery</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, marginTop: 16, maxWidth: 480, margin: "16px auto 0" }}>
          A snapshot of the events, campaigns, and activations we've powered across India.
        </p>
      </section>

      {/* Gallery */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="gallery-grid reveal">
            {GALLERY.map((item, i) => (
              <div key={i} style={{
                borderRadius: 16, overflow: "hidden",
                border: "1px solid #e8f4fd",
                boxShadow: "0 4px 16px rgba(10,30,60,0.07)",
                transition: "transform 0.25s ease, box-shadow 0.25s ease",
                cursor: "pointer",
              }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 32px rgba(10,30,60,0.14)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 4px 16px rgba(10,30,60,0.07)"; }}
              >
                {/* Image placeholder */}
                <div style={{
                  height: 180,
                  background: `linear-gradient(135deg, ${item.color}, #2e9cdb)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 56,
                }}>
                  {item.emoji}
                </div>
                <div style={{ padding: "18px 20px" }}>
                  <span style={{ display: "inline-block", background: "#e8f4fd", color: "#0f4c8a", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "3px 10px", borderRadius: 100, marginBottom: 8 }}>
                    {item.category}
                  </span>
                  <h4 style={{ color: "#0a1e3c", fontWeight: 700, fontSize: 15 }}>{item.title}</h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        @media (max-width: 900px) { .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; } }
        @media (max-width: 540px) { .gallery-grid { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
"use client";
import useReveal from "../hooks/useReveal";
import Link from "next/link";

const SERVICES = [
  {
    icon: "🎤",
    title: "Brand Promotions",
    tagline: "Make Your Brand Unforgettable",
    desc: "Our brand promotion staff are trained to engage, inform, and excite customers about your products. We provide high-energy teams for product launches, mall activations, and roadshows.",
    features: ["Product Demo Specialists", "Brand Ambassadors", "Promotional Models", "Leaflet & Sampling Distributors", "Exhibition Booth Staff", "In-Store Promoters"],
    color: "#0f4c8a",
  },
  {
    icon: "🎪",
    title: "Event Management Staff",
    tagline: "Flawless Events, Every Time",
    desc: "Whether it's a corporate gala, music festival, or private celebration, our event staff ensure your guests experience perfection from arrival to departure.",
    features: ["Ushers & Greeters", "Registration Desk Staff", "Information Desk Staff", "Giveaway Distribution Staff", "Event Coordinators", "Security & Crowd Management", "Stage Crew Assistants"],
    color: "#1a6fb5",
  },
  {
    icon: "🍽️",
    title: "Catering Services",
    tagline: "Serving Excellence, Every Plate",
    desc: "From intimate dinners to large-scale banquets, our catering staff brings hospitality expertise and professionalism to every table they serve.",
    features: ["Waiters & Waitresses", "Stewards", "Kitchen Assistants", "Food Counter Staff", "Buffet Managers", "Coffee & Tea Servers"],
    color: "#2e9cdb",
  },
];

export default function ServicesPage() {
  useReveal();

  return (
    <>
      {/* ── Page ── */}
      <div style={{ minHeight: "100vh", background: "#fff", paddingTop: 80, fontFamily: "'Plus Jakarta Sans', sans-serif" }}>

        {/* Hero */}
        <div style={{ background: "linear-gradient(135deg, #1a4a8a 0%, #0f2d55 100%)", padding: "90px 24px 70px", textAlign: "center" }}>
          <span style={{ display: "inline-block", background: "rgba(100,180,255,0.15)", color: "#90d0ff", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 18px", borderRadius: 100, border: "1px solid rgba(100,180,255,0.3)", marginBottom: 20 }}>
            What We Offer
          </span>
          <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(38px, 6vw, 68px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
            Our <span style={{ color: "#64b4ff" }}>Services</span>
          </h1>
        </div>

        {/* Body */}
        <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px" }}>
          {SERVICES.map((s, i) => (
            <div key={s.title} className={`service-row reveal ${i % 2 !== 0 ? "service-row--reverse" : ""}`}
              style={{
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gap: 60,
                alignItems: "center",
                padding: "80px 0",
                borderBottom: "1px solid #d0e8ff",
              }}
            >

              {/* Text */}
              <div>
                {/* Icon */}
                <div style={{
                  width: 64, height: 64, borderRadius: 18,
                  background: `linear-gradient(135deg, ${s.color}, #64b4ff)`,
                  display: "flex", alignItems: "center", justifyContent: "center",
                  fontSize: 30, marginBottom: 20,
                  boxShadow: `0 8px 24px ${s.color}40`,
                }}>
                  {s.icon}
                </div>

                {/* Tagline */}
                <div style={{ color: s.color, fontSize: 12, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 10 }}>
                  {s.tagline}
                </div>

                {/* Title */}
                <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(26px, 4vw, 38px)", fontWeight: 900, color: "#0a1e3c", lineHeight: 1.15, marginBottom: 16 }}>
                  {s.title}
                </h2>

                {/* Desc */}
                <p style={{ color: "#5a7a9a", fontSize: 15, lineHeight: 1.8, marginBottom: 28 }}>
                  {s.desc}
                </p>

                {/* Button */}
                <Link href="/contact" style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  background: `linear-gradient(135deg, ${s.color}, #2e9cdb)`,
                  color: "#fff", padding: "13px 28px", borderRadius: 100,
                  fontWeight: 700, fontSize: 14, textDecoration: "none",
                  boxShadow: `0 6px 20px ${s.color}40`,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = `0 10px 28px ${s.color}50`; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = `0 6px 20px ${s.color}40`; }}
                >
                  Request This Service ›
                </Link>
              </div>

              {/* Features box */}
              <div style={{
                background: "#f0f7ff",
                borderRadius: 20,
                padding: "32px 28px",
                border: "1px solid #d0e8ff",
              }}>
                <div style={{ fontFamily: "Fraunces, serif", fontSize: 20, fontWeight: 900, color: "#0a1e3c", marginBottom: 20 }}>
                  What's Included
                </div>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {s.features.map((f) => (
                    <div key={f} style={{ display: "flex", alignItems: "center", gap: 12 }}>
                      <div style={{
                        width: 24, height: 24, borderRadius: "50%", flexShrink: 0,
                        background: `linear-gradient(135deg, ${s.color}, #2e9cdb)`,
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#fff", fontSize: 11, fontWeight: 800,
                      }}>
                        ✓
                      </div>
                      <span style={{ color: "#334155", fontSize: 14, fontWeight: 500 }}>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>

      {/* Responsive styles */}
      <style>{`
        .service-row { direction: ltr; }
        .service-row--reverse { direction: rtl; }
        .service-row--reverse > * { direction: ltr; }

        @media (max-width: 768px) {
          .service-row {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
            direction: ltr !important;
          }
          .service-row--reverse {
            direction: ltr !important;
          }
        }
      `}</style>
    </>
  );
}
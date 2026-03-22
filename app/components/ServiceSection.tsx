"use client";
import Link from "next/link";
import { Users, UtensilsCrossed, Megaphone } from "lucide-react";

const services = [
  {
    icon: Users,
    number: "01",
    title: "Event Manpower",
    tagline: "From Gatherings to Grand Galas",
    description: "End-to-end staffing for corporate events, weddings, concerts, and exhibitions. Every crew member is briefed, uniformed, and supervised on-site.",
    roles: ["Ushers & Greeters", "Registration Staff", "Event Coordinators", "Security Personnel", "A/V Technicians"],
    color: "#1a6fb5",
    href: "/services#events",
  },
  {
    icon: UtensilsCrossed,
    number: "02",
    title: "Catering Staff",
    tagline: "Impeccable Service at Every Table",
    description: "FSSAI-trained catering workforce from kitchen prep to fine-dining service. From 10-person dinners to 400-pax banquets.",
    roles: ["Waitstaff & Servers", "Bartenders", "Kitchen Helpers", "Buffet Stewards", "Catering Supervisors"],
    color: "#2e9cdb",
    href: "/services#catering",
  },
  {
    icon: Megaphone,
    number: "03",
    title: "Brand Promotions",
    tagline: "Your Brand, Activated Nationwide",
    description: "Dynamic brand promoters for retail activations, mall promotions, and product launches with weekly performance reports.",
    roles: ["Brand Ambassadors", "Retail Promoters", "Product Demonstrators", "Lead Generators", "Activation Managers"],
    color: "#0f4c8a",
    href: "/services#brand",
  },
];

export default function ServicesSection() {
  return (
    <>
      <section style={{ background: "#f0f7ff", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "#d0e8ff", color: "#0f4c8a", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.3)", marginBottom: 16 }}>
              What We Offer
            </span>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(32px,5vw,52px)", fontWeight: 900, color: "#0a1e3c", lineHeight: 1.1 }}>
              Three Services, One <span style={{ color: "#2e9cdb" }}>Trusted Partner</span>
            </h2>
            <p style={{ color: "#5a7a9a", fontSize: 16, maxWidth: 480, margin: "14px auto 0", lineHeight: 1.7 }}>
              We handle the people so you can handle the vision.
            </p>
          </div>

          {/* Cards */}
          <div className="svc-section-grid">
            {services.map((s) => {
              const Icon = s.icon;
              return (
                <div key={s.number} className="svc-section-card" style={{
                  background: "#fff", borderRadius: 20,
                  border: "1px solid #d0e8ff", overflow: "hidden",
                  display: "flex", flexDirection: "column",
                  transition: "transform 0.3s, box-shadow 0.3s",
                }}
                  onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-8px)"; e.currentTarget.style.boxShadow = "0 20px 40px rgba(10,30,60,0.12)"; }}
                  onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
                >
                  {/* Top */}
                  <div style={{ background: `linear-gradient(135deg, ${s.color}, #64b4ff)`, padding: "28px 28px 24px" }}>
                    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "flex-start", marginBottom: 16 }}>
                      <div style={{ width: 44, height: 44, background: "rgba(255,255,255,0.18)", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center" }}>
                        <Icon size={22} color="#fff" />
                      </div>
                      <span style={{ fontFamily: "Fraunces, serif", fontSize: 48, fontWeight: 900, color: "rgba(255,255,255,0.12)", lineHeight: 1 }}>{s.number}</span>
                    </div>
                    <p style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 6 }}>{s.tagline}</p>
                    <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 900, color: "#fff" }}>{s.title}</h3>
                  </div>

                  {/* Body */}
                  <div style={{ padding: "24px 28px 28px", flex: 1, display: "flex", flexDirection: "column" }}>
                    <p style={{ color: "#5a7a9a", fontSize: 14, lineHeight: 1.7, marginBottom: 18 }}>{s.description}</p>
                    <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: 8, flex: 1, marginBottom: 22 }}>
                      {s.roles.map((r) => (
                        <li key={r} style={{ display: "flex", alignItems: "center", gap: 8, fontSize: 13, color: "#1e293b", fontWeight: 500 }}>
                          <span style={{ width: 6, height: 6, borderRadius: "50%", background: s.color, flexShrink: 0 }} />
                          {r}
                        </li>
                      ))}
                    </ul>
                    <Link href={s.href} style={{ display: "inline-flex", alignItems: "center", gap: 6, color: s.color, fontSize: 13, fontWeight: 700, textDecoration: "none" }}>
                      Learn more →
                    </Link>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .svc-section-grid { display: grid; grid-template-columns: repeat(3,1fr); gap: 20px; }
        @media(max-width:900px){ .svc-section-grid{ grid-template-columns: 1fr !important; } }
      `}</style>
    </>
  );
}

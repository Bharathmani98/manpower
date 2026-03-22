import { ShieldCheck, Clock, MapPin, Users, Star, Headphones } from "lucide-react";

const reasons = [
  {
    icon: ShieldCheck,
    title: "100% Deployment Guarantee",
    desc: "We've never left a client short-staffed. If a staff member can't show up, we replace within 2 hours.",
    color: "#1a5fa8",
  },
  {
    icon: Clock,
    title: "48-Hour Turnaround",
    desc: "From your enquiry to a fully briefed team on ground — all within 48 hours, guaranteed.",
    color: "#2278cc",
  },
  {
    icon: MapPin,
    title: "2+ City Coverage",
    desc: "Bengaluru, Mysore and  other cities across India.",
    color: "#1a5fa8",
  },
  {
    icon: Users,
    title: "150+ Verified Staff",
    desc: "Our talent pool is background-verified, trained, and rated after every assignment.",
    color: "#2278cc",
  },
  {
    icon: Star,
    title: "Industry-Trained Talent",
    desc: "From FSSAI food safety to event crowd management — our staff are certified for their roles.",
    color: "#1a5fa8",
  },
  {
    icon: Headphones,
    title: "Dedicated Account Manager",
    desc: "Every client gets a single point of contact available before, during, and after the event.",
    color: "#2278cc",
  },
];

export default function WhyUsSection() {
  return (
    <section style={{ background: "#fff", padding: "100px 28px" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto" }}>
        {/* Header */}
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 64, alignItems: "center", marginBottom: 64 }} className="whyus-header">
          <div>
            <div
              style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                background: "#e0f0ff", color: "#0f4c8a",
                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                textTransform: "uppercase", padding: "5px 14px", borderRadius: 100,
                border: "1px solid rgba(46,156,219,0.25)", marginBottom: 18,
              }}
            >
              ✦ Why Choose Us
            </div>
            <h2
              style={{
                fontFamily: "var(--font-display)", fontSize: "clamp(34px,5vw,52px)",
                fontWeight: 900, color: "#0f2d5e", lineHeight: 1.1, marginBottom: 16,
              }}
            >
              The Million Dudes <span style={{ color: "#1a6fb5" }}>Difference</span>
            </h2>
            <p style={{ color: "#6b8cae", fontSize: 16, lineHeight: 1.75 }}>
              Hundreds of staffing companies exist. Here's why India's top brands come back to us event after event.
            </p>
          </div>

          {/* Big stat callout */}
          <div
            style={{
              background: "linear-gradient(135deg, #0f2d5e, #1a5fa8)",
              borderRadius: 20, padding: "40px 36px",
            }}
          >
            <div
              style={{
                fontFamily: "var(--font-display)", fontSize: 72, fontWeight: 900,
                color: "#5bc8f5", lineHeight: 1,
              }}
            >
              98%
            </div>
            <p style={{ color: "#fff", fontSize: 18, fontWeight: 700, margin: "10px 0 8px" }}>
              Client Retention Rate
            </p>
            <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 14, lineHeight: 1.65 }}>
              Once you work with Million Dudes, you keep coming back. Our retention rate speaks louder than any pitch.
            </p>
          </div>
        </div>

        {/* 6-card grid */}
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3,1fr)", gap: 20 }} className="whyus-grid">
          {reasons.map((r) => {
            const Icon = r.icon;
            return (
              <div
                key={r.title}
                className="card-lift"
                style={{
                  background: "#f0f7ff", borderRadius: 16,
                  border: "1px solid #ddeeff",
                  borderTop: `4px solid ${r.color}`,
                  padding: "28px",
                }}
              >
                <div
                  style={{
                    width: 44, height: 44, borderRadius: 11,
                    background: "#ddeeff",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    marginBottom: 16,
                  }}
                >
                  <Icon size={20} color={r.color} />
                </div>
                <h3 style={{ color: "#0f2d5e", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>
                  {r.title}
                </h3>
                <p style={{ color: "#6b8cae", fontSize: 13, lineHeight: 1.65 }}>{r.desc}</p>
              </div>
            );
          })}
        </div>
      </div>

      <style>{`
        @media(max-width:900px) {
          .whyus-header { grid-template-columns: 1fr !important; gap: 36px !important; }
          .whyus-grid { grid-template-columns: 1fr 1fr !important; }
        }
        @media(max-width:540px) {
          .whyus-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </section>
  );
}
"use client";

const steps = [
  { number: "01", title: "Tell Us Your Needs", description: "Share event details — date, location, staff type, headcount. Takes 2 minutes.", icon: "📋" },
  { number: "02", title: "We Build Your Team", description: "Our team selects, briefs, and uniforms staff from our verified talent pool.", icon: "🤝" },
  { number: "03", title: "Staff Are Deployed", description: "Your team arrives on time with a dedicated on-site lead throughout the event.", icon: "🚀" },
  { number: "04", title: "You Get a Report", description: "Post-event attendance and performance summary with a single invoice.", icon: "📊" },
];

export default function ProcessSection() {
  return (
    <>
      <section style={{ background: "linear-gradient(135deg, #1a4a8a 0%, #0f2d55 100%)", padding: "80px 24px", position: "relative", overflow: "hidden" }}>

        {/* Blobs */}
        <div style={{ position: "absolute", top: -80, right: -80, width: 400, height: 400, borderRadius: "50%", background: "radial-gradient(circle, rgba(100,180,255,0.12) 0%, transparent 70%)", pointerEvents: "none" }} />
        <div style={{ position: "absolute", bottom: -60, left: "10%", width: 300, height: 300, borderRadius: "50%", background: "radial-gradient(circle, rgba(46,156,219,0.10) 0%, transparent 70%)", pointerEvents: "none" }} />

        <div style={{ maxWidth: 1100, margin: "0 auto" }}>

          {/* Header */}
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "rgba(100,180,255,0.15)", color: "#90d0ff", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(100,180,255,0.3)", marginBottom: 16 }}>
              How It Works
            </span>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(30px,5vw,48px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 12 }}>
              From Request to <span style={{ color: "#64b4ff" }}>Deployment</span>
            </h2>
            <p style={{ color: "rgba(255,255,255,0.6)", fontSize: 15, maxWidth: 440, margin: "0 auto" }}>
              A simple 4-step process — right people, right place, every time.
            </p>
          </div>

          {/* Steps */}
          <div className="process-grid" style={{ display: "grid", gridTemplateColumns: "repeat(4,1fr)", gap: 16, position: "relative" }}>

            {/* Connector line */}
            <div className="process-line" style={{ position: "absolute", top: 36, left: "12.5%", right: "12.5%", height: 2, background: "linear-gradient(90deg, #64b4ff, rgba(46,156,219,0.2))", zIndex: 0 }} />

            {steps.map((s, i) => (
              <div key={s.number} className="process-card" style={{
                background: "rgba(255,255,255,0.07)", border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: 16, padding: "24px 20px", position: "relative", zIndex: 1,
                transition: "background 0.3s, transform 0.3s, box-shadow 0.3s",
              }}
                onMouseEnter={e => { e.currentTarget.style.background = "rgba(255,255,255,0.13)"; e.currentTarget.style.transform = "translateY(-6px)"; e.currentTarget.style.boxShadow = "0 16px 36px rgba(10,30,60,0.25)"; }}
                onMouseLeave={e => { e.currentTarget.style.background = "rgba(255,255,255,0.07)"; e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "none"; }}
              >
                {/* Circle */}
                <div style={{ width: 44, height: 44, borderRadius: "50%", background: i === 0 ? "linear-gradient(135deg,#2e9cdb,#64b4ff)" : "rgba(100,180,255,0.12)", border: i === 0 ? "none" : "2px solid rgba(100,180,255,0.35)", display: "flex", alignItems: "center", justifyContent: "center", marginBottom: 16, boxShadow: i === 0 ? "0 4px 16px rgba(46,156,219,0.4)" : "none" }}>
                  <span style={{ color: i === 0 ? "#fff" : "#64b4ff", fontWeight: 800, fontSize: 13 }}>{s.number}</span>
                </div>
                <div style={{ fontSize: 26, marginBottom: 10 }}>{s.icon}</div>
                <h3 style={{ color: "#fff", fontWeight: 700, fontSize: 15, marginBottom: 8 }}>{s.title}</h3>
                <p style={{ color: "rgba(255,255,255,0.55)", fontSize: 13, lineHeight: 1.6 }}>{s.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        @media(max-width:900px){ .process-grid{ grid-template-columns:1fr 1fr !important; } .process-line{ display:none !important; } }
        @media(max-width:520px){ .process-grid{ grid-template-columns:1fr !important; } }
        .process-card:hover {}
      `}</style>
    </>
  );
}

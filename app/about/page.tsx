"use client";
import useReveal from "../hooks/useReveal";

export default function AboutPage() {
  useReveal();

  const values = [
    { icon: "🏆", title: "Excellence", desc: "Highest standards in recruitment, training, and deployment." },
    { icon: "🤝", title: "Reliability", desc: "On-time, every time. Our commitment to deadlines is non-negotiable." },
    { icon: "💡", title: "Innovation",  desc: "We continuously improve our training and deployment strategies." },
    { icon: "❤️", title: "Integrity",  desc: "Transparent pricing, honest communication, ethical practices always." },
  ];

  const team = [
    { name: "Guruswamy",              role: "Founder & CEO",        av: "G",  color: "#0a1e3c" },
    { name: "Mad",                    role: "Head of Operations",    av: "M",  color: "#0f4c8a" },
    { name: "Bharathmani",            role: "Managing Director",     av: "B",  color: "#1a6fb5" },
    { name: "Guruswamy & Abhishek",   role: "Client Relations",      av: "GA", color: "#2e9cdb" },
  ];

  return (
    <div style={{ paddingTop: 80, background: "#fff" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#0a1e3c 0%,#0f4c8a 60%,#1a6fb5 100%)", padding: "90px 24px 70px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(46,156,219,0.18)", color: "#2e9cdb", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 18px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.35)", marginBottom: 20 }}>
          About Us
        </span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(38px,6vw,68px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, margin: 0 }}>
          Who We <span style={{ color: "#2e9cdb" }}>Are</span>
        </h1>
      </section>

      {/* Mission */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div className="about-mission reveal">
            <div>
              <span style={{ display: "inline-block", background: "#e8f4fd", color: "#0f4c8a", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.2)", marginBottom: 18 }}>
                Our Mission
              </span>
              <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px,4vw,46px)", fontWeight: 900, color: "#0a1e3c", lineHeight: 1.15, marginBottom: 20 }}>
                Powering Brands<br />with <span style={{ color: "#1a6fb5" }}>People</span>
              </h2>
              <p style={{ color: "#5a7a9a", fontSize: 16, lineHeight: 1.8, marginBottom: 16 }}>
                ManPower Elite was founded with one goal: to bridge the gap between great brands and the professional human talent they need to shine.
              </p>
              <p style={{ color: "#5a7a9a", fontSize: 16, lineHeight: 1.8 }}>
                From humble beginnings in 2016, we have grown to serve 50+ events with a network of 100+ trained professionals ready to represent your brand.
              </p>
            </div>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }}>
              {[
                { n: "1+",   l: "Years Experience", c: "#0a1e3c" },
                { n: "100+", l: "Active Staff",      c: "#0f4c8a" },
                { n: "50+",  l: "Events Completed",  c: "#1a6fb5" },
                { n: "2+",   l: "Cities",            c: "#2e9cdb" },
              ].map((s) => (
                <div key={s.l} style={{ background: s.c, borderRadius: 16, padding: "32px 20px", textAlign: "center" }}>
                  <div style={{ fontFamily: "Fraunces, serif", fontSize: 44, fontWeight: 900, color: "#fff", lineHeight: 1, marginBottom: 8 }}>{s.n}</div>
                  <div style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, fontWeight: 600, textTransform: "uppercase", letterSpacing: "0.08em" }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section style={{ background: "#f4f8fc", padding: "80px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "#e8f4fd", color: "#0f4c8a", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.2)", marginBottom: 16 }}>Our Values</span>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#0a1e3c" }}>
              What <span style={{ color: "#1a6fb5" }}>Drives</span> Us
            </h2>
          </div>
          <div className="values-grid reveal">
            {values.map((v) => (
              <div key={v.title} style={{ background: "#fff", borderRadius: 16, border: "1px solid #e8f4fd", borderTop: "4px solid #1a6fb5", padding: "32px 24px", textAlign: "center", boxShadow: "0 2px 12px rgba(10,30,60,0.06)" }}>
                <div style={{ fontSize: 36, marginBottom: 16 }}>{v.icon}</div>
                <h3 style={{ color: "#0a1e3c", fontWeight: 700, fontSize: 18, marginBottom: 10 }}>{v.title}</h3>
                <p style={{ color: "#5a7a9a", fontSize: 14, lineHeight: 1.65 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section style={{ padding: "80px 24px", background: "#fff" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div style={{ textAlign: "center", marginBottom: 56 }}>
            <span style={{ display: "inline-block", background: "#e8f4fd", color: "#0f4c8a", fontSize: 11, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", padding: "5px 16px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.2)", marginBottom: 16 }}>Leadership</span>
            <h2 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(28px,4vw,44px)", fontWeight: 900, color: "#0a1e3c" }}>
              Meet the <span style={{ color: "#1a6fb5" }}>Team</span>
            </h2>
          </div>
          <div className="team-grid reveal">
            {team.map((t) => (
              <div key={t.name} style={{ background: "#f4f8fc", borderRadius: 20, border: "1px solid #e8f4fd", overflow: "hidden", textAlign: "center", boxShadow: "0 2px 12px rgba(10,30,60,0.06)" }}>
                <div style={{ background: t.color, height: 6 }} />
                <div style={{ padding: "28px 20px" }}>
                  <div style={{ width: 60, height: 60, background: `linear-gradient(135deg, ${t.color}, #2e9cdb)`, borderRadius: "50%", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px" }}>
                    <span style={{ color: "#fff", fontWeight: 800, fontSize: 18, fontFamily: "Fraunces, serif" }}>{t.av}</span>
                  </div>
                  <h4 style={{ color: "#0a1e3c", fontWeight: 700, fontSize: 15, marginBottom: 5 }}>{t.name}</h4>
                  <p style={{ color: "#1a6fb5", fontSize: 11, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase" }}>{t.role}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <style>{`
        .about-mission { display: grid; grid-template-columns: 1fr 1fr; gap: 60px; align-items: center; }
        .values-grid   { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        .team-grid     { display: grid; grid-template-columns: repeat(4, 1fr); gap: 20px; }
        @media (max-width: 900px) {
          .about-mission { grid-template-columns: 1fr !important; gap: 40px !important; }
          .values-grid   { grid-template-columns: repeat(2, 1fr) !important; }
          .team-grid     { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .values-grid { grid-template-columns: 1fr !important; }
          .team-grid   { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </div>
  );
}
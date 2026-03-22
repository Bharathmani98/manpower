"use client";
import { useState } from "react";

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    company: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    headcount: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const res = await fetch("https://milliondudesmanpower-default-rtdb.asia-southeast1.firebasedatabase.app/enquries.json", {
        
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      if (!res.ok) throw new Error("Something went wrong");

      setSubmitted(true);
    } catch (err) {
      setError("Failed to submit. Please try again or call us directly.");
    } finally {
      setLoading(false);
    }
  };

  const inp: React.CSSProperties = {
    width: "100%",
    background: "#f4f8fc",
    border: "1.5px solid #d0e8ff",
    borderRadius: 10,
    padding: "12px 14px",
    fontSize: 14,
    color: "#0a1e3c",
    outline: "none",
    fontFamily: "inherit",
  };

  const lbl: React.CSSProperties = {
    display: "block",
    fontSize: 11,
    fontWeight: 700,
    color: "#5a7a9a",
    letterSpacing: "0.08em",
    textTransform: "uppercase",
    marginBottom: 7,
  };

  return (
    <div style={{ paddingTop: 80, background: "#f4f8fc", minHeight: "100vh" }}>

      {/* Hero */}
      <section style={{ background: "linear-gradient(135deg,#0a1e3c 0%,#0f4c8a 60%,#1a6fb5 100%)", padding: "90px 24px 70px", textAlign: "center" }}>
        <span style={{ display: "inline-block", background: "rgba(46,156,219,0.18)", color: "#2e9cdb", fontSize: 11, fontWeight: 700, letterSpacing: "0.14em", textTransform: "uppercase", padding: "5px 18px", borderRadius: 100, border: "1px solid rgba(46,156,219,0.35)", marginBottom: 20 }}>
          Get In Touch
        </span>
        <h1 style={{ fontFamily: "Fraunces, serif", fontSize: "clamp(34px,5vw,58px)", fontWeight: 900, color: "#fff", lineHeight: 1.1, marginBottom: 16 }}>
          Let's Build Your <span style={{ color: "#2e9cdb" }}>Team Together</span>
        </h1>
        <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 16, lineHeight: 1.7 }}>
          Fill in your requirements and we'll respond within 2 business hours.
        </p>
      </section>

      <section style={{ padding: "60px 24px" }}>
        <div style={{ maxWidth: 1100, margin: "0 auto" }}>
          <div className="contact-grid">

            {/* Info */}
            <div style={{ background: "linear-gradient(135deg,#0a1e3c,#0f4c8a)", borderRadius: 20, padding: "36px 28px", color: "#fff", height: "fit-content" }}>
              <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 26, fontWeight: 900, marginBottom: 28 }}>Contact Details</h3>
              {[
                { icon: "📞", label: "Phone",  val: "+91 7019026644",                    href: "tel:+917019026644" },
                { icon: "📧", label: "Email",  val: "milliondudesmanpower@gmail.com",    href: "mailto:milliondudesmanpower@gmail.com" },
                { icon: "📍", label: "Office", val: "Bengaluru, Karnataka",              href: "#" },
              ].map(({ icon, label, val, href }) => (
                <div key={label} style={{ display: "flex", gap: 14, marginBottom: 22 }}>
                  <div style={{ width: 38, height: 38, background: "#1a6fb5", borderRadius: 10, display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0, fontSize: 16 }}>{icon}</div>
                  <div>
                    <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 3 }}>{label}</p>
                    <a href={href} style={{ color: "#fff", fontSize: 14, textDecoration: "none" }}>{val}</a>
                  </div>
                </div>
              ))}
              <div style={{ borderTop: "1px solid rgba(255,255,255,0.1)", paddingTop: 20, marginTop: 8 }}>
                <p style={{ color: "rgba(255,255,255,0.4)", fontSize: 10, fontWeight: 700, letterSpacing: "0.1em", textTransform: "uppercase", marginBottom: 8 }}>Office Hours</p>
                <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7 }}>Monday – Sunday<br />9:00 AM – 9:00 PM IST</p>
              </div>
            </div>

            {/* Form */}
            <div style={{ background: "#fff", borderRadius: 20, border: "1px solid #d0e8ff", padding: "36px 28px" }}>
              {submitted ? (
                <div style={{ textAlign: "center", padding: "48px 0" }}>
                  <div style={{ fontSize: 56, marginBottom: 16 }}>✅</div>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 28, fontWeight: 900, color: "#0a1e3c", marginBottom: 12 }}>Request Received!</h3>
                  <p style={{ color: "#5a7a9a" }}>Thank you, {form.name}. We'll reach out within 2 business hours.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit}>
                  <h3 style={{ fontFamily: "Fraunces, serif", fontSize: 24, fontWeight: 900, color: "#0a1e3c", marginBottom: 24 }}>Send an Enquiry</h3>

                  <div className="form-2">
                    {[
                      { name: "name",    lbl: "Full Name *",  type: "text",  ph: "Rohan Mehta",     req: true },
                      { name: "company", lbl: "Company",      type: "text",  ph: "Acme Corp",       req: false },
                      { name: "email",   lbl: "Email *",      type: "email", ph: "you@company.com", req: true },
                      { name: "phone",   lbl: "Phone",        type: "tel",   ph: "+91 98765 43210", req: false },
                    ].map((f) => (
                      <div key={f.name} style={{ marginBottom: 18 }}>
                        <label style={lbl}>{f.lbl}</label>
                        <input
                          name={f.name}
                          type={f.type}
                          required={f.req}
                          placeholder={f.ph}
                          value={(form as any)[f.name]}
                          onChange={onChange}
                          style={inp}
                        />
                      </div>
                    ))}
                  </div>

                  <div className="form-3">
                    <div style={{ marginBottom: 18 }}>
                      <label style={lbl}>Service *</label>
                      <select name="service" required value={form.service} onChange={onChange} style={{ ...inp, appearance: "none" as any }}>
                        <option value="" disabled>Select service</option>
                        {["Brand Promotions", "Event Management", "Catering Services", "Other"].map((o) => (
                          <option key={o}>{o}</option>
                        ))}
                      </select>
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <label style={lbl}>Event Date</label>
                      <input name="date" type="date" value={form.date} onChange={onChange} style={inp} />
                    </div>
                    <div style={{ marginBottom: 18 }}>
                      <label style={lbl}>Staff Required</label>
                      <input name="headcount" type="number" min="1" placeholder="e.g. 25" value={form.headcount} onChange={onChange} style={inp} />
                    </div>
                  </div>

                  <div style={{ marginBottom: 24 }}>
                    <label style={lbl}>Message / Event Details</label>
                    <textarea
                      name="message"
                      rows={4}
                      value={form.message}
                      onChange={onChange}
                      placeholder="Tell us about your event…"
                      style={{ ...inp, resize: "none" }}
                    />
                  </div>

                  {/* Error message */}
                  {error && (
                    <p style={{ color: "#e53e3e", fontSize: 13, marginBottom: 14, background: "#fff5f5", border: "1px solid #fed7d7", borderRadius: 8, padding: "10px 14px" }}>
                      ⚠️ {error}
                    </p>
                  )}

                  <button
                    type="submit"
                    disabled={loading}
                    style={{
                      width: "100%",
                      background: loading ? "#6b8cae" : "#0f4c8a",
                      color: "#fff",
                      padding: "14px",
                      borderRadius: 8,
                      fontWeight: 700,
                      fontSize: 15,
                      border: "none",
                      cursor: loading ? "not-allowed" : "pointer",
                      fontFamily: "inherit",
                      transition: "background 0.2s ease",
                    }}
                  >
                    {loading ? "Submitting…" : "Submit Request ›"}
                  </button>
                </form>
              )}
            </div>

          </div>
        </div>
      </section>

      <style>{`
        .contact-grid { display: grid; grid-template-columns: 1fr 2fr; gap: 32px; align-items: start; }
        .form-2 { display: grid; grid-template-columns: 1fr 1fr; gap: 0 20px; }
        .form-3 { display: grid; grid-template-columns: 1fr 1fr 1fr; gap: 0 20px; }
        @media (max-width: 900px) { .contact-grid { grid-template-columns: 1fr !important; } }
        @media (max-width: 600px) { .form-2, .form-3 { grid-template-columns: 1fr !important; } }
      `}</style>
    </div>
  );
}
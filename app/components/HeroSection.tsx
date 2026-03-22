"use client";
import useReveal from "../hooks/useReveal";

import Link from "next/link";

export default function HomePage() {
  useReveal();

  return (
    <div style={{ background: "#fff", overflowX: "hidden" }}>

      {/* ── HERO ── */}
      <section style={{
        minHeight: "100vh",
        background: "radial-gradient(ellipse at 20% 50%, #1a4a8a 0%, #0f2d5e 40%, #0a1e3c 100%)",
        padding: "120px 60px 0",
        position: "relative",
        overflow: "hidden",
        display: "flex",
        alignItems: "center",
      }}>

        {/* Animated floating dots */}
        <style>{`
          @keyframes float1 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-18px)} }
          @keyframes float2 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-12px)} }
          @keyframes float3 { 0%,100%{transform:translateY(0px)} 50%{transform:translateY(-22px)} }
          @keyframes fadeSlideUp { from{opacity:0;transform:translateY(40px)} to{opacity:1;transform:translateY(0)} }
          @keyframes fadeSlideRight { from{opacity:0;transform:translateX(40px)} to{opacity:1;transform:translateX(0)} }
          @keyframes pulseBadge { 0%,100%{box-shadow:0 0 0 0 rgba(46,156,219,0.4)} 50%{box-shadow:0 0 0 8px rgba(46,156,219,0)} }
          @keyframes shimmer { 0%{background-position:-200% center} 100%{background-position:200% center} }
          @keyframes rotateSlow { from{transform:rotate(0deg)} to{transform:rotate(360deg)} }
          @keyframes scaleIn { from{opacity:0;transform:scale(0.85)} to{opacity:1;transform:scale(1)} }
          @keyframes countUp { from{opacity:0;transform:translateY(20px)} to{opacity:1;transform:translateY(0)} }
          @keyframes glowPulse { 0%,100%{opacity:0.15} 50%{opacity:0.35} }
          @keyframes cardFloat { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-8px)} }
          @keyframes ripple { 0%{transform:scale(1);opacity:0.6} 100%{transform:scale(2.5);opacity:0} }

          .hero-left  { animation: fadeSlideUp 0.9s ease both; }
          .hero-right { animation: fadeSlideRight 0.9s ease 0.3s both; }
          .hero-badge { animation: fadeSlideUp 0.7s ease both; }
          .hero-h1    { animation: fadeSlideUp 0.8s ease 0.15s both; }
          .hero-p     { animation: fadeSlideUp 0.8s ease 0.25s both; }
          .hero-btns  { animation: fadeSlideUp 0.8s ease 0.35s both; }
          .hero-stats { animation: fadeSlideUp 0.8s ease 0.45s both; }
          .service-card-right { animation: cardFloat 4s ease-in-out infinite; }

          .btn-filled { transition: all 0.25s ease !important; }
          .btn-filled:hover { background:#2e9cdb!important; transform:translateY(-3px)!important; box-shadow:0 12px 28px rgba(26,111,181,0.45)!important; }

          .btn-ghost { transition: all 0.25s ease !important; }
          .btn-ghost:hover { background:rgba(255,255,255,0.15)!important; border-color:#fff!important; transform:translateY(-3px)!important; }

          .svc-card { transition: transform 0.3s ease, box-shadow 0.3s ease !important; }
          .svc-card:hover { transform:translateY(-8px)!important; box-shadow:0 24px 48px rgba(10,30,60,0.15)!important; }

          .why-card { transition: all 0.25s ease !important; }
          .why-card:hover { transform:translateY(-4px)!important; border-top-color:#2e9cdb!important; box-shadow:0 12px 28px rgba(10,30,60,0.10)!important; }

          .svc-grid   { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }
          .whyus-row  { display:grid; grid-template-columns:1fr 1.6fr; gap:64px; align-items:center; }
          .whyus-cards{ display:grid; grid-template-columns:repeat(3,1fr); gap:16px; }
          .testi-grid { display:grid; grid-template-columns:repeat(3,1fr); gap:24px; }

          @media(max-width:1024px){ .whyus-cards{grid-template-columns:repeat(2,1fr)!important;} }
          @media(max-width:900px){
            .svc-grid{grid-template-columns:1fr!important;}
            .whyus-row{grid-template-columns:1fr!important;gap:40px!important;}
            .testi-grid{grid-template-columns:1fr!important;}
            .hero-right{display:none!important;}
          }
          @media(max-width:640px){
            .whyus-cards{grid-template-columns:repeat(2,1fr)!important;}
            section{padding-left:20px!important;padding-right:20px!important;}
          }
          @media(max-width:480px){ .whyus-cards{grid-template-columns:1fr!important;} }
        `}</style>

        {/* Animated glow blobs */}
        <div style={{ position:"absolute", top:-150, right:-150, width:700, height:700, borderRadius:"50%", background:"radial-gradient(circle, rgba(46,156,219,0.20) 0%, transparent 65%)", animation:"glowPulse 4s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ position:"absolute", bottom:-100, left:"5%", width:400, height:400, borderRadius:"50%", background:"radial-gradient(circle, rgba(26,111,181,0.15) 0%, transparent 65%)", animation:"glowPulse 5s ease-in-out infinite 1s", pointerEvents:"none" }} />

        {/* Rotating ring decoration */}
        <div style={{ position:"absolute", top:"15%", right:"38%", width:200, height:200, borderRadius:"50%", border:"1px solid rgba(46,156,219,0.12)", animation:"rotateSlow 20s linear infinite", pointerEvents:"none" }}>
          <div style={{ position:"absolute", top:-4, left:"50%", width:8, height:8, borderRadius:"50%", background:"rgba(46,156,219,0.5)", transform:"translateX(-50%)" }} />
        </div>

        {/* Floating dots */}
        {[
          {top:"15%",left:"45%",s:3,a:"float1",d:"0s"},{top:"25%",left:"62%",s:2,a:"float2",d:"0.5s"},
          {top:"40%",left:"55%",s:4,a:"float3",d:"1s"},{top:"60%",left:"70%",s:2,a:"float1",d:"1.5s"},
          {top:"20%",left:"80%",s:3,a:"float2",d:"0.3s"},{top:"70%",left:"40%",s:2,a:"float3",d:"0.8s"},
          {top:"35%",left:"75%",s:3,a:"float1",d:"1.2s"},{top:"55%",left:"48%",s:2,a:"float2",d:"0.6s"},
        ].map((d,i) => (
          <div key={i} style={{ position:"absolute", top:d.top, left:d.left, width:d.s, height:d.s, borderRadius:"50%", background:"rgba(255,255,255,0.5)", animation:`${d.a} 3s ease-in-out ${d.d} infinite`, pointerEvents:"none" }} />
        ))}

        <div style={{ maxWidth:1300, margin:"0 auto", width:"100%", display:"flex", alignItems:"center", justifyContent:"space-between", gap:40 }}>

          {/* LEFT */}
          <div className="hero-left" style={{ flex:"0 0 55%", maxWidth:620 }}>

            {/* Badge */}
            <div className="hero-badge" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"rgba(46,156,219,0.18)", border:"1px solid rgba(46,156,219,0.4)", borderRadius:100, padding:"7px 18px", marginBottom:32, animation:"pulseBadge 2.5s ease-in-out infinite" }}>
              <div style={{ width:7, height:7, borderRadius:"50%", background:"#5bc8f5" }} />
              <span style={{ color:"rgba(255,255,255,0.9)", fontSize:12, fontWeight:700, letterSpacing:"0.15em", textTransform:"uppercase" }}>Trusted Staffing Partner</span>
            </div>

            {/* Headline */}
            <h1 className="hero-h1" style={{ fontFamily:"Fraunces, serif", fontSize:"clamp(44px,5.5vw,76px)", fontWeight:900, color:"#fff", lineHeight:1.05, marginBottom:24 }}>
              Million Dudes<br />
              Manpower for<br />
              <span style={{
                fontStyle:"italic", color:"transparent",
                background:"linear-gradient(90deg, #5bc8f5, #2e9cdb, #5bc8f5)",
                backgroundSize:"200% auto",
                WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent",
                backgroundClip:"text",
                animation:"shimmer 3s linear infinite",
              }}>Every Occasion</span>
            </h1>

            <p className="hero-p" style={{ color:"rgba(255,255,255,0.7)", fontSize:17, lineHeight:1.8, maxWidth:500, marginBottom:40 }}>
              We provide professionally trained staff for brand promotions, event management, and catering services. Your success is our mission.
            </p>

            {/* Buttons */}
            <div className="hero-btns" style={{ display:"flex", gap:16, flexWrap:"wrap", marginBottom:60 }}>
              <Link href="/services" className="btn-filled" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1a6fb5", color:"#fff", padding:"15px 32px", borderRadius:100, fontWeight:700, fontSize:15, textDecoration:"none" }}>
                Explore Services ›
              </Link>
              <Link href="/contact" className="btn-ghost" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"#fff", padding:"14px 32px", borderRadius:100, fontWeight:700, fontSize:15, textDecoration:"none", border:"2px solid rgba(255,255,255,0.45)" }}>
                Get a Quote
              </Link>
            </div>

            {/* Stats */}
            <div className="hero-stats" style={{ display:"flex", gap:40, flexWrap:"wrap" }}>
              {[{n:"50+",l:"Events Done"},{n:"5+",l:"Brand Clients"},{n:"100+",l:"Staff Deployed"}].map((s,i) => (
                <div key={s.l} style={{ animation:`countUp 0.6s ease ${0.5 + i*0.15}s both` }}>
                  <div style={{ fontFamily:"Fraunces, serif", fontSize:36, fontWeight:900, color:"#5bc8f5", lineHeight:1 }}>{s.n}</div>
                  <div style={{ color:"rgba(255,255,255,0.55)", fontSize:13, marginTop:5 }}>{s.l}</div>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT */}
          <div className="hero-right service-card-right" style={{ flex:"0 0 38%", maxWidth:360 }}>

            {/* Service card — lighter glass */}
            <div style={{
              background:"rgba(30,100,180,0.45)",
              backdropFilter:"blur(24px)",
              border:"1px solid rgba(91,200,245,0.3)",
              borderRadius:24, padding:28, marginBottom:16,
              boxShadow:"0 20px 60px rgba(10,30,60,0.3)",
            }}>
              <h3 style={{ color:"#fff", fontWeight:700, fontSize:18, marginBottom:20 }}>Our Core Services</h3>
              {[
                { icon:"🎤", title:"Brand Promotions", desc:"Trained promoters for product launches & campaigns" },
                { icon:"🎪", title:"Event Management", desc:"Ushers, hosts & event coordinators" },
                { icon:"🍽️", title:"Catering Staff",  desc:"Waiters, chefs & catering crew" },
              ].map((s,i) => (
                <div key={s.title} style={{
                  display:"flex", alignItems:"flex-start", gap:14,
                  background:"rgba(255,255,255,0.10)",
                  border:"1px solid rgba(255,255,255,0.15)",
                  borderRadius:14, padding:"14px 16px", marginBottom:10,
                  transition:"all 0.25s ease",
                  animation:`fadeSlideUp 0.6s ease ${0.6 + i*0.12}s both`,
                }}
                  onMouseEnter={e => { e.currentTarget.style.background="rgba(255,255,255,0.18)"; e.currentTarget.style.transform="translateX(4px)"; }}
                  onMouseLeave={e => { e.currentTarget.style.background="rgba(255,255,255,0.10)"; e.currentTarget.style.transform="translateX(0)"; }}
                >
                  <span style={{ fontSize:22, flexShrink:0 }}>{s.icon}</span>
                  <div>
                    <div style={{ color:"#fff", fontWeight:700, fontSize:14, marginBottom:3 }}>{s.title}</div>
                    <div style={{ color:"rgba(255,255,255,0.65)", fontSize:12, lineHeight:1.5 }}>{s.desc}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Rating badge */}
            <div style={{
              display:"inline-flex", alignItems:"center", gap:10,
              background:"rgba(30,100,180,0.50)",
              backdropFilter:"blur(20px)",
              border:"1px solid rgba(91,200,245,0.3)",
              borderRadius:14, padding:"12px 20px",
              boxShadow:"0 8px 24px rgba(10,30,60,0.25)",
              animation:"scaleIn 0.6s ease 1s both",
            }}>
              <span style={{ fontSize:22 }}>⭐</span>
              <div>
                <div style={{ color:"#fff", fontWeight:700, fontSize:15 }}>4.8 / 5 Rating</div>
                <div style={{ color:"rgba(255,255,255,0.55)", fontSize:11 }}>From 10+ clients</div>
              </div>
            </div>
          </div>
        </div>

        {/* Wave */}
        <div style={{ position:"absolute", bottom:0, left:0, right:0, lineHeight:0 }}>
          <svg viewBox="0 0 1440 90" xmlns="http://www.w3.org/2000/svg" style={{ display:"block", width:"100%" }}>
            <path d="M0,45 C240,90 480,0 720,45 C960,90 1200,0 1440,45 L1440,90 L0,90 Z" fill="#fff" />
          </svg>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section style={{ padding:"100px 24px", background:"#fff" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <span style={{ display:"inline-block", background:"#e0f0ff", color:"#0f4c8a", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"5px 18px", borderRadius:100, border:"1px solid rgba(46,156,219,0.25)", marginBottom:16 }}>What We Offer</span>
            <h2 style={{ fontFamily:"Fraunces, serif", fontSize:"clamp(32px,5vw,50px)", fontWeight:900, color:"#0f2d5e" }}>
              Our Core <span style={{ color:"#1a6fb5" }}>Services</span>
            </h2>
            <p style={{ color:"#6b8cae", fontSize:16, maxWidth:480, margin:"14px auto 0", lineHeight:1.7 }}>Three specialisations. One trusted partner.</p>
          </div>

          <div className="svc-grid reveal">
            {[
              { icon:"🎤", title:"Brand Promotions", color:"#1a5fa8", desc:"High-energy promoters for product launches, mall activations, and retail campaigns.", features:["Brand Ambassadors","Product Demonstrators","Exhibition Staff","Sampling Teams"] },
              { icon:"🎪", title:"Event Management", color:"#2278cc", desc:"Professional staff for corporate galas, exhibitions, and large-scale events.", features:["Ushers & Greeters","Registration Staff","Event Coordinators","Crowd Management"] },
              { icon:"🍽️", title:"Catering Services", color:"#3a9bd5", desc:"Experienced hospitality professionals for banquets and corporate dining.", features:["Waitstaff & Stewards","Kitchen Assistants","Buffet Managers","Coffee Servers"] },
            ].map(s => (
              <div key={s.title} className="svc-card" style={{ borderRadius:20, border:"1px solid #ddeeff", overflow:"hidden", display:"flex", flexDirection:"column", boxShadow:"0 4px 20px rgba(10,30,60,0.07)" }}>
                <div style={{ background:`linear-gradient(135deg, ${s.color}, #5bc8f5)`, padding:28 }}>
                  <div style={{ fontSize:32, marginBottom:12 }}>{s.icon}</div>
                  <h3 style={{ fontFamily:"Fraunces, serif", fontSize:24, fontWeight:900, color:"#fff" }}>{s.title}</h3>
                </div>
                <div style={{ padding:"24px 28px 28px", flex:1, display:"flex", flexDirection:"column", background:"#fff" }}>
                  <p style={{ color:"#6b8cae", fontSize:14, lineHeight:1.7, marginBottom:18 }}>{s.desc}</p>
                  <ul style={{ listStyle:"none", display:"flex", flexDirection:"column", gap:8, flex:1, marginBottom:22 }}>
                    {s.features.map(f => (
                      <li key={f} style={{ display:"flex", alignItems:"center", gap:8, fontSize:13, color:"#334155", fontWeight:500 }}>
                        <span style={{ width:6, height:6, borderRadius:"50%", background:s.color, flexShrink:0 }} />{f}
                      </li>
                    ))}
                  </ul>
                  <Link href="/services" style={{ color:s.color, fontSize:13, fontWeight:700, textDecoration:"none" }}>Learn more →</Link>
                </div>
              </div>
            ))}
          </div>

          {/* ── VIEW ALL SERVICES BUTTON ── */}
          <div style={{ textAlign:"center", marginTop:48 }}>
            <Link
              href="/services"
              className="btn-filled"
              style={{
                display:"inline-flex",
                alignItems:"center",
                gap:8,
                background:"#1a6fb5",
                color:"#fff",
                padding:"15px 44px",
                borderRadius:100,
                fontWeight:700,
                fontSize:15,
                textDecoration:"none",
              }}
            >
              View All Services ›
            </Link>
          </div>

        </div>
      </section>

      {/* ── WHY US ── */}
      <section style={{ background:"#f0f7ff", padding:"100px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div className="whyus-row reveal">
            <div>
              <span style={{ display:"inline-block", background:"#e0f0ff", color:"#0f4c8a", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"5px 18px", borderRadius:100, border:"1px solid rgba(46,156,219,0.25)", marginBottom:16 }}>Why Choose Us</span>
              <h2 style={{ fontFamily:"Fraunces, serif", fontSize:"clamp(28px,4vw,46px)", fontWeight:900, color:"#0f2d5e", marginBottom:20 }}>
                The ManPower Elite <span style={{ color:"#1a6fb5" }}>Difference</span>
              </h2>
              <p style={{ color:"#6b8cae", fontSize:16, lineHeight:1.75, marginBottom:32 }}>We don't just fill positions — we deploy trained professionals who represent your brand with excellence.</p>
              <Link href="/contact" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1a5fa8", color:"#fff", padding:"13px 28px", borderRadius:8, fontWeight:700, fontSize:14, textDecoration:"none", transition:"all 0.25s ease" }}
                onMouseEnter={e => { (e.currentTarget as HTMLAnchorElement).style.background="#2e9cdb"; (e.currentTarget as HTMLAnchorElement).style.transform="translateY(-2px)"; }}
                onMouseLeave={e => { (e.currentTarget as HTMLAnchorElement).style.background="#1a5fa8"; (e.currentTarget as HTMLAnchorElement).style.transform="translateY(0)"; }}
              >Get a Free Quote ›</Link>
            </div>
            <div className="whyus-cards">
              {[
                { icon:"⚡", title:"48-Hour Deployment", desc:"Full team assembled and briefed within 48 hours." },
                { icon:"🛡️", title:"100% Guarantee", desc:"Replacement within 2 hours if needed." },
                { icon:"🎓", title:"Trained Professionals", desc:"Role-specific training before every deployment." },
                { icon:"📊", title:"Performance Reports", desc:"Weekly activity summaries for every campaign." },
                { icon:"🌏", title:"Multi-City Coverage", desc:"Operations across major Indian cities." },
                { icon:"🤝", title:"Dedicated Manager", desc:"One contact before, during, and after your event." },
              ].map(r => (
                <div key={r.title} className="why-card" style={{ background:"#fff", borderRadius:14, border:"1px solid #ddeeff", borderTop:"3px solid #1a6fb5", padding:20, boxShadow:"0 2px 12px rgba(10,30,60,0.05)", cursor:"default" }}>
                  <div style={{ fontSize:22, marginBottom:8 }}>{r.icon}</div>
                  <h4 style={{ color:"#0f2d5e", fontWeight:700, fontSize:14, marginBottom:6 }}>{r.title}</h4>
                  <p style={{ color:"#6b8cae", fontSize:12, lineHeight:1.6 }}>{r.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── TESTIMONIALS ── */}
      <section style={{ background:"#fff", padding:"100px 24px" }}>
        <div style={{ maxWidth:1200, margin:"0 auto" }}>
          <div style={{ textAlign:"center", marginBottom:60 }}>
            <span style={{ display:"inline-block", background:"#e0f0ff", color:"#0f4c8a", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"5px 18px", borderRadius:100, border:"1px solid rgba(46,156,219,0.25)", marginBottom:16 }}>Client Voices</span>
            <h2 style={{ fontFamily:"Fraunces, serif", fontSize:"clamp(28px,4vw,46px)", fontWeight:900, color:"#0f2d5e" }}>
              What Our <span style={{ color:"#1a6fb5" }}>Clients Say</span>
            </h2>
          </div>
          <div className="testi-grid reveal">
            {[
              { quote:"ManPower Elite provided flawless staff for our product launch. Every promoter was trained, presentable, and professional.", author:"Ravi Kumar", role:"Marketing Head, TechBrand" },
              { quote:"Their catering team handled our 300-pax banquet perfectly. Punctual, well-groomed, and incredibly efficient.", author:"Priya Nair", role:"Event Manager, ITC Hotels" },
              { quote:"We used their event staff for our annual exhibition. Zero issues — they managed crowds and registration seamlessly.", author:"Arjun Mehta", role:"Director, ExpoIndia" },
            ].map((t,i) => (
              <div key={i} style={{ background:"#f0f7ff", borderRadius:20, border:"1px solid #ddeeff", padding:32, display:"flex", flexDirection:"column", gap:20, transition:"transform 0.25s ease, box-shadow 0.25s ease", cursor:"default" }}
                onMouseEnter={e => { e.currentTarget.style.transform="translateY(-5px)"; e.currentTarget.style.boxShadow="0 16px 40px rgba(10,30,60,0.10)"; }}
                onMouseLeave={e => { e.currentTarget.style.transform="translateY(0)"; e.currentTarget.style.boxShadow="none"; }}
              >
                <div style={{ fontFamily:"Fraunces, serif", fontSize:56, color:"#1a6fb5", opacity:0.25, lineHeight:1, height:32 }}>"</div>
                <p style={{ color:"#334155", fontSize:15, lineHeight:1.75, flex:1 }}>"{t.quote}"</p>
                <div style={{ display:"flex", alignItems:"center", gap:12, borderTop:"1px solid #ddeeff", paddingTop:18 }}>
                  <div style={{ width:40, height:40, background:"linear-gradient(135deg,#1a5fa8,#3a9bd5)", borderRadius:10, display:"flex", alignItems:"center", justifyContent:"center" }}>
                    <span style={{ color:"#fff", fontWeight:800, fontSize:14 }}>{t.author.split(" ").map(n=>n[0]).join("")}</span>
                  </div>
                  <div>
                    <p style={{ color:"#0f2d5e", fontWeight:700, fontSize:14 }}>{t.author}</p>
                    <p style={{ color:"#6b8cae", fontSize:12 }}>{t.role}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section style={{ background:"radial-gradient(ellipse at 20% 50%, #1a4a8a 0%, #0f2d5e 40%, #0a1e3c 100%)", padding:"100px 24px", textAlign:"center", position:"relative", overflow:"hidden" }}>
        <div style={{ position:"absolute", top:0, left:0, right:0, lineHeight:0, transform:"rotate(180deg)" }}>
          <svg viewBox="0 0 1440 60" xmlns="http://www.w3.org/2000/svg" style={{ display:"block", width:"100%" }}>
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,60 L0,60 Z" fill="#fff" />
          </svg>
        </div>
        <div style={{ position:"absolute", top:-100, right:-100, width:500, height:500, borderRadius:"50%", background:"radial-gradient(circle, rgba(91,200,245,0.15) 0%, transparent 65%)", animation:"glowPulse 4s ease-in-out infinite", pointerEvents:"none" }} />
        <div style={{ maxWidth:700, margin:"0 auto", position:"relative", zIndex:1 }}>
          <span style={{ display:"inline-block", background:"rgba(91,200,245,0.18)", color:"#5bc8f5", fontSize:11, fontWeight:700, letterSpacing:"0.14em", textTransform:"uppercase", padding:"5px 18px", borderRadius:100, border:"1px solid rgba(91,200,245,0.35)", marginBottom:20 }}>Let's Work Together</span>
          <h2 style={{ fontFamily:"Fraunces, serif", fontSize:"clamp(32px,5vw,56px)", fontWeight:900, color:"#fff", lineHeight:1.1, marginBottom:20 }}>
            Ready to Build Your{" "}
            <span style={{ color:"transparent", background:"linear-gradient(90deg,#5bc8f5,#2e9cdb,#5bc8f5)", backgroundSize:"200% auto", WebkitBackgroundClip:"text", WebkitTextFillColor:"transparent", backgroundClip:"text", animation:"shimmer 3s linear infinite" }}>Dream Team?</span>
          </h2>
          <p style={{ color:"rgba(255,255,255,0.7)", fontSize:17, lineHeight:1.7, marginBottom:36 }}>Tell us about your event and we'll deploy the right talent within 48 hours.</p>
          <div style={{ display:"flex", gap:14, justifyContent:"center", flexWrap:"wrap" }}>
            <Link href="/contact" className="btn-filled" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"#1a6fb5", color:"#fff", padding:"15px 36px", borderRadius:100, fontWeight:700, fontSize:15, textDecoration:"none" }}>Request Manpower ›</Link>
            <a href="tel:+919876543210" className="btn-ghost" style={{ display:"inline-flex", alignItems:"center", gap:8, background:"transparent", color:"#fff", padding:"14px 32px", borderRadius:100, fontWeight:700, fontSize:15, textDecoration:"none", border:"2px solid rgba(255,255,255,0.4)" }}>📞 Call Us Now</a>
          </div>
        </div>
      </section>

    </div>
  );
}
import { useEffect } from "react";

export default function About() {
  // Inline Manrope loader (local to this file)
  useEffect(() => {
    if (typeof document === "undefined") return;
    if (!document.getElementById("google-font-manrope")) {
      const l1 = document.createElement("link");
      l1.id = "google-font-manrope";
      l1.rel = "preconnect";
      l1.href = "https://fonts.googleapis.com";
      document.head.appendChild(l1);

      const l2 = document.createElement("link");
      l2.rel = "preconnect";
      l2.href = "https://fonts.gstatic.com";
      l2.crossOrigin = "anonymous";
      document.head.appendChild(l2);

      const l3 = document.createElement("link");
      l3.rel = "stylesheet";
      l3.href =
        "https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap";
      document.head.appendChild(l3);
    }
  }, []);

  return (
    <section
      id="about"
      className="bg-white"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
      }}
    >
      <div className="max-w-[1260px] mx-auto px-6 md:px-8 py-20 md:py-28">
        {/* pill */}
        <div className="flex justify-center">
          <span className="inline-flex items-center gap-2 rounded-full border border-[#DDE3EA] bg-[#F8FAFC] px-4 py-2 text-[12.3px] font-semibold text-[#2B5AD5]">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <circle cx="12" cy="12" r="9" strokeWidth="2" />
              <path d="M12 7v6l4 2" strokeWidth="2" />
            </svg>
            About Us
          </span>
        </div>

        {/* heading + subtitle */}
        <h2 className="mt-6 text-center text-[30.6px] md:text-[37.4px] font-extrabold text-[#0F172A] tracking-[-0.01em]">
          Your Trusted AI Security Partner in Africa
        </h2>
        <p className="mt-4 text-center text-[15.3px] leading-[1.75] text-[#64748B] max-w-[980px] mx-auto">
          Delivering world-class technology across Africa, built on Zero Trust Architecture principles.
        </p>

        {/* two columns */}
        <div className="mt-14 grid grid-cols-12 gap-x-14 gap-y-12 items-start">
          {/* LEFT graphic card */}
          <div className="col-span-12 lg:col-span-6">
            <GraphicCard />
          </div>

          {/* RIGHT copy + cards (top aligned to card) */}
          <div className="col-span-12 lg:col-span-6 lg:pt-2">
            <p className="text-[14.9px] leading-[1.9] text-[#334155]">
              E-Merge Africa Limited is a Kigali-based IT solutions provider and value-added reseller. We partner with global technology leaders to deliver secure, scalable, and future-ready solutions for African organizations.
            </p>

            <div className="mt-6 space-y-6">
              <InfoCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path d="M12 6v6l4 2" strokeWidth="2" />
                  </svg>
                }
                title="Mission"
                text="To empower African organizations with innovative and secure technology.."
              />

              <InfoCard
                icon={
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" className="stroke-current">
                    <circle cx="12" cy="12" r="9" strokeWidth="2" />
                    <path d="M9 12l2 2 4-4" strokeWidth="2" />
                  </svg>
                }
                title="Vision"
                text="To be Africa’s most trusted technology integrator and reseller."
              />
            </div>
          </div>
        </div>

        {/* ===== Our Core Values ===== */}
        <div className="mt-16 md:mt-20 rounded-2xl border border-[#E8EEF5] bg-white shadow-[0_10px_30px_rgba(15,23,42,0.05)] p-8 md:p-12">
          <h3 className="text-center text-[23.8px] md:text-[27.2px] font-extrabold text-[#0F172A]">
            Our Core Values
          </h3>

          <div className="mt-10 grid grid-cols-1 md:grid-cols-3 gap-8">
            <ValueCard
              icon={<ShieldIcon />}
              title="Integrity"
              text="We deploy cutting-edge AI that learns and adapts to protect your business autonomously."
              tone="blue"
            />
            <ValueCard
              icon={<UsersIcon />}
              title="Innovation"
              text="We bring the latest IT & cybersecurity innovations to advance Africa’s digital transformation."
              tone="teal"
            />
            <ValueCard
              icon={<GlobeIcon />}
              title="Customer Focus"
              text="We build long-term relationships with deep understanding of African business needs."
              tone="gray"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- right-side small cards ---------- */
function InfoCard({ icon, title, text }) {
  return (
    <div className="rounded-xl border border-[#E6ECF2] bg-white shadow-[0_6px_24px_rgba(15,23,42,0.05)] p-5 md:p-6">
      <div className="flex items-start gap-4">
        <div className="grid place-items-center w-11 h-11 rounded-lg bg-[#EFF6FF] text-[#2563EB] border border-[#E4EEFF]">
          {icon}
        </div>
        <div>
          <h4 className="text-[14.45px] font-bold text-[#0F172A]">{title}</h4>
          <p className="mt-1.5 text-[13.43px] leading-[1.75] text-[#475569]">{text}</p>
        </div>
      </div>
    </div>
  );
}

/* ---------- values block ---------- */
function ValueCard({ icon, title, text, tone = "blue" }) {
  const toneClasses =
    tone === "teal"
      ? "bg-teal-50 text-teal-600"
      : tone === "gray"
      ? "bg-slate-50 text-slate-600"
      : "bg-blue-50 text-blue-600";
  return (
    <div className="text-center px-5 py-6">
      <div className={`mx-auto w-16 h-16 rounded-lg grid place-items-center ${toneClasses}`}>
        {icon}
      </div>
      <h4 className="mt-4 text-[15.3px] font-bold text-[#0F172A]">{title}</h4>
      <p className="mt-2 text-[13.18px] leading-[1.8] text-[#475569]">{text}</p>
    </div>
  );
}

/* ---------- values icons ---------- */
function ShieldIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" strokeWidth="2" />
    </svg>
  );
}
function UsersIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <path d="M16 11a4 4 0 10-8 0 4 4 0 008 0z" strokeWidth="2" />
      <path d="M3 20a7 7 0 0114 0" strokeWidth="2" />
    </svg>
  );
}
function GlobeIcon() {
  return (
    <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="stroke-current">
      <circle cx="12" cy="12" r="9" strokeWidth="2" />
      <path d="M3 12h18M12 3c3 3 3 15 0 18M12 3c-3 3-3 15 0 18" strokeWidth="2" />
    </svg>
  );
}

/* ---------- left graphic (wider, less “squeezed”) ---------- */
function GraphicCard() {
  const TILE = 106; // bigger tiles than before
  return (
    <div className="relative rounded-2xl border border-[#E8EEF5] bg-white shadow-[0_14px_40px_rgba(15,23,42,0.06)] p-10 md:p-12 overflow-hidden min-h-[420px] -ml-6">
      {/* faint gradient & diagonal sheen */}
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        style={{
          background:
            "radial-gradient(120% 90% at 22% 0%, rgba(37,99,235,0.06) 0%, rgba(37,99,235,0) 58%), radial-gradient(90% 80% at 100% 100%, rgba(20,184,166,0.06) 0%, rgba(20,184,166,0) 60%)",
        }}
      />
      <div
        className="pointer-events-none absolute inset-0 -z-10 rounded-2xl"
        style={{
          background:
            "linear-gradient(135deg, rgba(255,255,255,0) 60%, rgba(15,23,42,0.04) 63%)",
        }}
      />
      {/* subtle corner glow */}
      <div className="pointer-events-none absolute -top-8 -left-10 w-64 h-64 rounded-full bg-[#E9F1FF] opacity-[0.18] blur-2xl -z-10" />

      {/* tiny float particles */}
      {Array.from({ length: 14 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-[3px] h-[3px] rounded-full bg-emerald-400/80"
          style={{
            left: `${14 + Math.random() * 72}%`,
            top: `${14 + Math.random() * 72}%`,
            opacity: 0.35,
            animation: `aboutDot ${2.6 + Math.random() * 2}s ease-in-out ${Math.random()}s infinite`,
          }}
        />
      ))}

      {/* 3-step flow */}
      <div className="grid grid-cols-3 gap-10 items-end">
        {/* 1) Raw Data */}
        <div className="text-center">
          <div
            className="mx-auto rounded-xl bg-[#F6F8FB] border border-[#E7EDF5] grid place-items-center shadow-sm"
            style={{ width: TILE, height: TILE }}
          >
            <svg
              width={TILE * 0.42}
              height={TILE * 0.42}
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-[#334155]/80"
            >
              <ellipse cx="12" cy="6" rx="7" ry="3" strokeWidth="2" />
              <path d="M5 6v6c0 1.7 3.1 3 7 3s7-1.3 7-3V6" strokeWidth="2" />
              <path d="M5 12v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" strokeWidth="2" />
            </svg>
          </div>
          <div className="mt-3 font-semibold text-[#0F172A] text-[13.6px]">Raw Data</div>
          <div className="text-[11.48px] text-[#64748B]">Network Traffic</div>
          <div className="mt-2 flex justify-center gap-1">
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/70" />
            <span className="w-1.5 h-1.5 rounded-full bg-[#2563EB]/50" />
          </div>
        </div>

        {/* 2) AI Engine */}
        <div className="text-center relative">
          <div
            className="mx-auto rounded-xl grid place-items-center shadow-[0_10px_22px_rgba(37,99,235,0.25)] border border-white/40"
            style={{
              width: TILE,
              height: TILE,
              background: "linear-gradient(135deg, #10B981 0%, #2563EB 85%)",
              position: "relative",
            }}
          >
            <span className="absolute inset-[8px] rounded-[12px] border border-white/20" />
            <svg
              width={TILE * 0.40}
              height={TILE * 0.40}
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-white"
            >
              <path d="M8 8c0-2.2 1.8-4 4-4s4 1.8 4 4v8c0 2.2-1.8 4-4 4s-4-1.8-4-4V8z" strokeWidth="2" />
              <path d="M12 4v16M7 9h10M7 15h10" strokeWidth="2" />
            </svg>
          </div>
          <div className="mt-3 font-semibold text-[#0F172A] text-[13.6px]">AI Engine</div>
          <div className="text-[11.48px] text-[#64748B]">Darktrace</div>
          <div className="mt-2 mx-auto flex justify-center gap-1.5 h-5">
            {[8, 12, 10, 14, 9].map((h, idx) => (
              <span
                key={idx}
                className="w-[3px] bg-emerald-500/75 rounded-sm"
                style={{
                  height: `${h}px`,
                  animation: `aboutBars 1.55s ease-in-out ${idx * 0.08}s infinite`,
                }}
              />
            ))}
          </div>
        </div>

        {/* 3) Protection */}
        <div className="text-center">
          <div
            className="mx-auto rounded-xl grid place-items-center shadow-[0_10px_22px_rgba(37,99,235,0.25)] border border-white/40"
            style={{
              width: TILE,
              height: TILE,
              background: "linear-gradient(135deg, #1D4ED8 0%, #2563EB 85%)",
            }}
          >
            <svg
              width={TILE * 0.40}
              height={TILE * 0.40}
              viewBox="0 0 24 24"
              fill="none"
              className="stroke-white"
            >
              <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" strokeWidth="2" />
            </svg>
          </div>
          <div className="mt-3 font-semibold text-[#0F172A] text-[13.6px]">Protection</div>
          <div className="text-[11.48px] text-[#64748B]">Threat Blocked</div>
          <div className="mt-2 inline-flex items-center gap-1.5 text-[11.48px] font-medium text-[#2563EB]">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" className="stroke-current">
              <path d="M9 16l-3-3 1.5-1.5L9 13l7.5-7.5L18 7l-9 9z" strokeWidth="2" />
            </svg>
            99.9% Success
          </div>
        </div>
      </div>

      {/* connector line + arrow */}
      <div className="relative mt-7">
        <div className="absolute left-[26%] right-[35%] top-0 h-[3px] rounded-full bg-gradient-to-r from-[#14B8A6] to-[#2563EB]" />
        <svg className="absolute right-[34%] -top-1.5" width="20" height="20" viewBox="0 0 24 24" fill="none">
          <path d="M5 12h14M12 5l7 7-7 7" stroke="#2563EB" strokeWidth="2" />
        </svg>
      </div>
    </div>
  );
}


/* append local animations once */
(() => {
  if (typeof document === "undefined") return;
  if (document.getElementById("about-graphic-keys")) return;
  const s = document.createElement("style");
  s.id = "about-graphic-keys";
  s.textContent = `
    @keyframes aboutDot { 0%,100%{ transform: translateY(0); opacity:.25 } 50%{ transform: translateY(-4px); opacity:.55 } }
    @keyframes aboutBars { 0%,100%{ transform: scaleY(.85); opacity:.65 } 50%{ transform: scaleY(1.15); opacity:1 } }
  `;
  document.head.appendChild(s);
})();


/* animations (append once) */
const style = document.createElement("style");
style.innerHTML = `
@keyframes aDot { 0%,100%{ transform: translateY(0); opacity:.25 } 50%{ transform: translateY(-4px); opacity:.5 } }
@keyframes bars { 0%,100%{ transform: scaleY(.8); opacity:.6 } 50%{ transform: scaleY(1.1); opacity:1 } }
`;
if (typeof document !== "undefined" && !document.getElementById("about-keys")) {
  style.id = "about-keys";
  document.head.appendChild(style);
}

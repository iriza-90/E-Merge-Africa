import React, { useEffect } from "react";
import TiltWrapper from "../TiltWrapper";

const GREEN = "#00B386";

export default function Hero({ onPrimary, onSecondary }) {
  // Load Manrope (700/800) once
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
        "https://fonts.googleapis.com/css2?family=Manrope:wght@700;800&display=swap";
      document.head.appendChild(l3);
    }
  }, []);

  return (
    <section
      id="home"
      className="relative isolate flex items-center min-h-[92vh] overflow-hidden pt-8 md:pt-10"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
        background:
          "linear-gradient(135deg,#0D1017 0%,#131A2A 55%,#0D1220 100%)",
      }}
    >
      <BgDecor />

      <div className="relative z-10 w-full max-w-[1240px] mx-auto px-6">
        <div className="grid grid-cols-12 items-center gap-x-16 lg:gap-x-24">
          {/* LEFT */}
          <div className="col-span-12 lg:col-span-7 mt-2 md:mt-3">
            <GoalChip className="mb-6 md:mb-7" />

            {/* TIGHT HEADING */}
            <h1
              className="text-white tracking-[-0.015em] md:leading-[0.98]"
              style={{ fontWeight: 900, lineHeight: 1.02 }} // fallback for <md
            >
              {/* line 1 — slight negative mb to close gap */}
              <span className="block text-[34px] sm:text-[44.2px] lg:text-[52.7px] xl:text-[57.8px] -mb-[8px]">
                <span className="inline-flex items-baseline">
                  <span>Deliver great&nbsp;</span>
                  <AIPill>IT</AIPill>
                </span>
              </span>

              {/* line 2 — pill + text as one row, tight gap */}
              <span className="block text-[25.5px] sm:text-[25.5px] lg:text-[52.7px] xl:text-[57.8px] -mb-[4px]">
                <span className="inline-flex items-baseline">
                  <SecurityPill>Solutions</SecurityPill>
                  <span className="ml-[8px] align-[2px] text-[34px] sm:text-[44.2px] lg:text-[52.7px] xl:text-[57.8px]">
                    to African
                  </span>
                </span>
              </span>

              {/* line 3 */}
              <span className="block text-[34px] sm:text-[44.2px] lg:text-[52.7px] xl:text-[57.8px]">
                enterprises
              </span>
            </h1>

            {/* body */}
            <p
              className="mt-6 text-[#C4CBD4] max-w-[680px]"
              style={{ fontSize: 13.175, lineHeight: 1.7, fontWeight: 700 }}
            >
              E-Merge Africa Limited is a Kigali-based IT solutions provider and value-added reseller. We partner with global technology leaders to deliver secure, scalable, and future-ready solutions for African organizations.

            </p>

            {/* CTAs */}
            <div className="mt-7 flex flex-col sm:flex-row gap-4">
              <button
                onClick={onPrimary}
                className="inline-flex items-center justify-center rounded-[12px] px-6 py-[14px] text-[11.9px] font-bold text-[#0B1015] transition"
                style={{ backgroundColor: GREEN }}
              >
                Our Services
                <svg
                  className="ml-2 h-5 w-5"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  aria-hidden="true"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </button>

              <a
                href="#contact"
                onClick={onSecondary}
                className="inline-flex items-center justify-center rounded-[12px] px-6 py-[14px] text-[11.9px] font-bold border border-[#2F3747] text-white/90 hover:bg-white/5 transition"
              >
                Become a partner
              </a>
            </div>

            {/* trust row */}
            <div
              className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-[10.625px] text-[#8D98A7]"
              style={{ fontWeight: 700 }}
            >
              <Trust icon="shield">SOC 2 Certified</Trust>
              <Trust icon="check">ISO 27001</Trust>
              <Trust icon="star">Darktrace Partner</Trust>
            </div>
          </div>

          {/* RIGHT */}
          <div className="col-span-12 lg:col-span-5 flex items-center justify-center lg:justify-end">
            <TiltWrapper max={5} scale={1.015}>
              <div className="lg:translate-x-1 xl:translate-x-3">
                <ShieldVisual />
              </div>
            </TiltWrapper>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- helpers ---------- */

function BgDecor() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10">
      <div
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.06) 1px, transparent 1px)",
          backgroundSize: "64px 64px",
        }}
      />
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(206deg, rgba(0,0,0,0) 50%, rgba(0,0,0,0.40) 54%)",
        }}
      />
      {Array.from({ length: 26 }).map((_, i) => (
        <span
          key={i}
          className="absolute w-[2px] h-[2px] rounded-full"
          style={{
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            backgroundColor: "rgba(0,255,200,0.35)",
            opacity: 0.35,
          }}
        />
      ))}
    </div>
  );
}

function GoalChip({ className = "" }) {
  return (
    <div
      className={`inline-flex items-center gap-2 px-[16px] py-[9px] rounded-lg border ${className}`}
      style={{
        background: "rgba(0,179,134,0.12)",
        borderColor: GREEN,
        color: GREEN,
        fontWeight: 700,
        fontSize: "0.748rem",
        fontFamily: "Manrope, sans-serif",
      }}
    >
      <span
        className="inline-block w-2 h-2 rounded-full"
        style={{ backgroundColor: GREEN }}
      />
      Your Trusted Partner in Cybersecurity & IT Solutions
    </div>
  );
}

/* pills — trimmed vertical padding for tighter heading */
function AIPill({ children }) {
  return (
    <span
      className="inline-block rounded-md px-[16px] py-[8px] align-middle"
      style={{
        backgroundColor: GREEN,
        color: "#0B1015",
        fontWeight: 900,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {children}
    </span>
  );
}

function SecurityPill({ children }) {
  return (
    <span
      className="inline-block rounded-md px-[16px] py-[8px] align-middle"
      style={{
        backgroundColor: GREEN,
        color: "#0B1015",
        fontWeight: 900,
        fontFamily: "Manrope, sans-serif",
      }}
    >
      {children}
    </span>
  );
}

function Trust({ icon = "shield", children }) {
  const d =
    icon === "check"
      ? "M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z"
      : icon === "star"
      ? "M12 17.3l6.18 3.7-1.64-7.03L22 8.6l-7.19-.61L12 1 9.19 8l-7.19.6 5.46 5.38L5.82 21z"
      : "M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z";
  return (
    <span className="inline-flex items-center gap-2">
      <svg
        width="16"
        height="16"
        viewBox="0 0 24 24"
        className="stroke-current text-[#7E8A9A]"
        aria-hidden="true"
      >
        <path d={d} fill="none" strokeWidth="2" />
      </svg>
      {children}
    </span>
  );
}

/* shield visual & keyframes are unchanged from your last working version */
function ShieldVisual() {
  return (
    <div className="relative w-[360px] h-[360px] md:w-[420px] md:h-[420px] xl:w-[480px] xl:h-[480px]">
      <div
        className="absolute inset-[-6%] rounded-full blur-[14px]"
        style={{
          background:
            "radial-gradient(circle at 50% 50%, rgba(37,99,235,0.2) 0%, rgba(37,99,235,0) 70%)",
        }}
      />
      <div className="absolute inset-0">
        {[0, 14, 28, 42, 56].map((inset, i) => (
          <div
            key={i}
            className="absolute rounded-full border border-white/10"
            style={{
              inset,
              animation: `${i % 2 ? "ringSpinR" : "ringSpin"} ${
                18 + i * 2
              }s linear infinite`,
              transformOrigin: "50% 50%",
            }}
          />
        ))}
      </div>
      <div
        className="absolute inset-[8%] rounded-full pointer-events-none mix-blend-screen"
        style={{
          background:
            "conic-gradient(from 0deg, rgba(255,255,255,0.09) 0deg, rgba(255,255,255,0) 60deg, rgba(255,255,255,0) 360deg)",
          animation: "sweepRotate 12s linear infinite",
        }}
      />
      <div
        className="absolute rounded-full grid place-items-center"
        style={{
          left: "50%",
          top: "50%",
          transform: "translate(-50%, -50%)",
          width: "46%",
          height: "46%",
          background: "linear-gradient(135deg, #14B8A6 0%, #2563EB 80%)",
          boxShadow: "0 0 24px rgba(37,99,235,0.32)",
          animation: "corePulse 3.6s ease-in-out infinite",
        }}
      >
        <svg
          width="44"
          height="44"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
        >
          <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
        </svg>
      </div>
      <div
        className="absolute inset-0"
        style={{ animation: "orbitSpin 24s linear infinite", transformOrigin: "50% 50%" }}
      >
        {Array.from({ length: 8 }).map((_, i) => {
          const angle = (i * 360) / 8;
          const r = 150;
          const x = Math.cos((angle * Math.PI) / 180) * r;
          const y = Math.sin((angle * Math.PI) / 180) * r;
          return (
            <div
              key={i}
              className="absolute rounded-full"
              style={{
                left: `calc(50% + ${x}px - 4px)`,
                top: `calc(50% + ${y}px - 4px)`,
                width: "8px",
                height: "8px",
                backgroundColor: GREEN,
                boxShadow: "0 0 8px rgba(0,179,134,0.6)",
              }}
            />
          );
        })}
      </div>
      <div
        aria-label="Verified"
        className="absolute -top-3 -right-3 grid place-items-center rounded-full shadow-lg"
        style={{
          width: "36px",
          height: "36px",
          background: "linear-gradient(135deg, #3B82F6 0%, #2563EB 80%)",
          boxShadow: "0 8px 18px rgba(37,99,235,0.35)",
          border: "1px solid rgba(255,255,255,0.18)",
          animation: "badgeFloat 3.2s ease-in-out infinite",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.4">
          <path d="M20 6L9 17l-5-5" />
        </svg>
      </div>
      <div
        aria-label="Energy"
        className="absolute -bottom-8 -left-8 grid place-items-center rounded-full shadow-lg"
        style={{
          width: "38px",
          height: "38px",
          background: "linear-gradient(135deg, #10B981 0%, #00B386 85%)",
          boxShadow: "0 10px 20px rgba(16,185,129,0.35)",
          border: "1px solid rgba(255,255,255,0.14)",
          animation: "badgeFloat 3.2s ease-in-out infinite",
          animationDelay: "0.6s",
        }}
      >
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.2">
          <path d="M13 2L3 14h7l-1 8 10-12h-7l1-8z" />
        </svg>
      </div>
    </div>
  );
}

/* keyframes (unchanged) */
const _style = document.createElement("style");
_style.innerHTML = `
@keyframes ringSpin { to { transform: rotate(360deg) } }
@keyframes ringSpinR { to { transform: rotate(-360deg) } }
@keyframes sweepRotate { to { transform: rotate(360deg) } }
@keyframes corePulse {
  0%,100% { transform: translate(-50%,-50%) scale(1); box-shadow: 0 0 24px rgba(37,99,235,0.32); }
  50% { transform: translate(-50%,-50%) scale(1.04); box-shadow: 0 0 34px rgba(37,99,235,0.42); }
}
@keyframes orbitSpin { to { transform: rotate(360deg) } }
@keyframes badgeFloat { 0%,100% { transform: translateY(0) } 50% { transform: translateY(-6px) } }
`;
if (typeof document !== "undefined" && !document.getElementById("hero-keys")) {
  _style.id = "hero-keys";
  document.head.appendChild(_style);
}

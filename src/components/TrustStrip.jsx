import React from "react";

/**
 * TrustStrip
 * - Continuous auto-scroll of logos (duplicated for seamless loop)
 * - Grayscale by default; full color on hover
 * - Pauses on hover/focus
 * - Replace the `logos` array with your real logos (SVGs or PNGs)
 */
export default function TrustStrip() {
  const logos = [
    { name: "Banking Group", src: "/logos/banking.svg", w: 120 },
    { name: "Telecom", src: "/logos/telecom.svg", w: 110 },
    { name: "Fintech", src: "/logos/fintech.svg", w: 120 },
    { name: "Energy", src: "/logos/energy.svg", w: 110 },
    { name: "Insurance", src: "/logos/insurance.svg", w: 120 },
    { name: "GovTech", src: "/logos/gov.svg", w: 110 },
  ];

  // Duplicate to create an infinite loop
  const marquee = [...logos, ...logos];

  return (
    <section
      aria-label="Trusted by leading African enterprises"
      className="relative py-10 bg-white"
    >
      <div className="mx-auto max-w-7xl px-6">
        <div className="text-center mb-6">
          <p className="text-sm font-medium text-slate-500 tracking-wide uppercase">
            Trusted by forward-thinking teams
          </p>
        </div>

        <div
          className="group relative overflow-hidden rounded-xl border border-slate-200/70 bg-white"
          style={{
            maskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to right, transparent, black 8%, black 92%, transparent)",
          }}
        >
          <div
            className="flex items-center gap-12 py-6 animate-[trust-marquee_26s_linear_infinite] group-hover:[animation-play-state:paused]"
            role="list"
          >
            {marquee.map((l, i) => (
              <div
                role="listitem"
                key={`${l.name}-${i}`}
                className="shrink-0 opacity-80 hover:opacity-100 transition"
                title={l.name}
              >
                <img
                  src={l.src}
                  alt={l.name}
                  width={l.w}
                  height={32}
                  loading="lazy"
                  className="block grayscale hover:grayscale-0 transition duration-300"
                  style={{ height: 32, objectFit: "contain" }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Metrics() {
  const data = [
    { number: "100+", label: "Partners in Africa" },
    { number: "500+", label: "Cybersecurity Experts" },
    { number: "50+", label: "Enterprise Solutions" },
  ];

  return (
    <section
      className="relative text-center"
      /* keep the original dark background but make spacing responsive */
      style={{ paddingTop: "clamp(56px, 10vw, 96px)", paddingBottom: "clamp(56px, 10vw, 96px)", backgroundColor: "#070E20" }}
    >
      {/* gradient overlay (unchanged visually) */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#081028] via-[#060B16] to-[#060B16]/80" />
      
      <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6">
        <h2
          className="font-semibold mb-10 sm:mb-12"
          /* fluid heading size; prevents wrap/overflow on tiny devices */
          style={{ fontSize: "clamp(22px, 5.2vw, 48px)", lineHeight: 1.15, letterSpacing: "-0.01em" }}
        >
          Protecting Africa with AI and Innovation
        </h2>

        {/* grid scales from 1 → 3 columns; tighter gaps on small screens */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 sm:gap-10 md:gap-12">
          {data.map((item, i) => (
            <div key={i} className="px-1">
              <h3
                className="font-bold text-[#22C55E] mb-1.5 sm:mb-2"
                /* fluid number size with tight line-height to avoid jumpiness */
                style={{ fontSize: "clamp(28px, 7vw, 56px)", lineHeight: 1.05, letterSpacing: "-0.01em" }}
              >
                {item.number}
              </h3>
              <p
                className="text-gray-400"
                /* labels scale gently; never too small to read, never wrap awkwardly */
                style={{ fontSize: "clamp(13px, 2.6vw, 16px)", lineHeight: 1.5 }}
              >
                {item.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

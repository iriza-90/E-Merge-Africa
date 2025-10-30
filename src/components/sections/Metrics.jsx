import React from "react";

export default function Metrics() {
  const data = [
    { number: "100+", label: "Partners in Africa" },
    { number: "500+", label: "Cybersecurity Experts" },
    { number: "50+", label: "Enterprise Solutions" },
  ];

  return (
    <section className="py-24 bg-[#070E20] text-center relative">
      <div className="absolute inset-0 bg-gradient-to-b from-[#081028] via-[#060B16] to-[#060B16]/80" />
      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <h2 className="text-3xl md:text-5xl font-semibold mb-12">
          Protecting Africa with AI and Innovation
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {data.map((item, i) => (
            <div key={i}>
              <h3 className="text-4xl md:text-5xl font-bold text-[#22C55E] mb-2">
                {item.number}
              </h3>
              <p className="text-gray-400">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

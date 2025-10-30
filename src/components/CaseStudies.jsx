import React from "react";

/**
 * CaseStudies
 * - Seamless looping, auto-advance every 6s
 * - Pauses on hover/focus
 * - 1/2/3 cards per view (mobile/md/lg)
 * - Uses pixel-based translate for accuracy
 */
export default function CaseStudies() {
  const slides = [
    {
      tag: "Banking Group",
      title: "97% reduction in alert noise",
      body:
        "Darktrace’s autonomous investigations collapsed noisy alerts into high-fidelity incidents, freeing the SOC to focus on real threats.",
      metric: "97% ↓ alerts",
      tone: "blue",
    },
    {
      tag: "Telecom",
      title: "<1s average detection time",
      body:
        "Self-learning AI identified deviations from ‘pattern of life’ in under a second across high-throughput networks.",
      metric: "<1s detect",
      tone: "teal",
    },
    {
      tag: "Fintech",
      title: "99.99% uptime during attacks",
      body:
        "Autonomous response contained lateral movement while keeping critical services online for customers.",
      metric: "99.99% uptime",
      tone: "blue",
    },
    {
      tag: "Energy",
      title: "IoT threats neutralized",
      body:
        "Behavioral analysis isolated compromised devices without manual rules or signatures.",
      metric: "0 rules",
      tone: "teal",
    },
    {
      tag: "Insurance",
      title: "Faster incident closure",
      body:
        "AI-written summaries gave analysts instant context to act decisively.",
      metric: "4× faster",
      tone: "blue",
    },
  ];

  // duplicate for seamless loop
  const loop = [...slides, ...slides];

  const viewportRef = React.useRef(null);
  const trackRef = React.useRef(null);
  const cardRef = React.useRef(null);

  const [index, setIndex] = React.useState(0);
  const [perView, setPerView] = React.useState(1);
  const [paused, setPaused] = React.useState(false);
  const [translate, setTranslate] = React.useState(0);

  const DURATION = 6000; // ms
  const total = slides.length;

  // determine cards per view based on width
  React.useEffect(() => {
    const calc = () => {
      const w = window.innerWidth;
      if (w >= 1024) setPerView(3);
      else if (w >= 768) setPerView(2);
      else setPerView(1);
    };
    calc();
    window.addEventListener("resize", calc);
    return () => window.removeEventListener("resize", calc);
  }, []);

  // measure card width in pixels
  const getCardWidth = React.useCallback(() => {
    const card = cardRef.current;
    if (!card) return 0;
    return card.getBoundingClientRect().width;
  }, []);

  // recompute translate when index/perView changes
  React.useEffect(() => {
    const cw = getCardWidth();
    const offset = (index % total) * cw; // only slide through first set
    setTranslate(offset);
  }, [index, perView, getCardWidth, total]);

  // auto advance timer
  React.useEffect(() => {
    if (paused) return;
    const id = setInterval(() => setIndex((i) => i + 1), DURATION);
    return () => clearInterval(id);
  }, [paused]);

 
  const pause = () => setPaused(true);
  const resume = () => setPaused(false);

  
  const tones = {
    blue: {
      chipBg: "bg-blue-50 border-blue-200 text-blue-700",
      stripe: "from-[#00B3FF] to-[#0099E6]",
      iconStroke: "#00A7F2",
    },
    teal: {
      chipBg: "bg-teal-50 border-teal-200 text-teal-700",
      stripe: "from-[#00D4AA] to-[#00B3D4]",
      iconStroke: "#00C9B0",
    },
  };

  return (
    <section className="relative bg-white py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-10">
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            What we achieved for African enterprises
          </h3>
          <p className="text-gray-600 mt-2">
            A snapshot of measurable impact powered by Darktrace AI
          </p>
        </div>

        {/* viewport */}
        <div
          ref={viewportRef}
          className="relative overflow-hidden rounded-xl border border-gray-200"
          onMouseEnter={pause}
          onMouseLeave={resume}
          onFocus={pause}
          onBlur={resume}
          aria-roledescription="carousel"
        >
          {/* track */}
          <div
            ref={trackRef}
            className="flex will-change-transform transition-transform duration-300 ease-out"
            style={{
              transform: `translateX(-${translate}px)`,
            }}
          >
            {loop.map((s, i) => (
              <article
                key={`${s.tag}-${i}`}
                className="shrink-0 p-6 sm:p-7"
                style={{
                  width:
                    perView === 3
                      ? "33.3333%"
                      : perView === 2
                      ? "50%"
                      : "100%",
                }}
                // attach ref only to the very first real card for measuring width
                ref={i === 0 ? cardRef : null}
              >
                <div className="h-full rounded-xl border border-gray-200 bg-white p-6 shadow-sm hover:shadow-lg transition-transform duration-300 hover:-translate-y-1">
                  {/* chip */}
                  <div
                    className={`inline-flex items-center gap-2 rounded-full border px-3 py-1 text-xs font-medium ${
                      tones[s.tone]?.chipBg || tones.blue.chipBg
                    }`}
                  >
                    <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
                      <path
                        d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z"
                        stroke={tones[s.tone]?.iconStroke || tones.blue.iconStroke}
                        strokeWidth="1.6"
                      />
                    </svg>
                    {s.tag}
                  </div>

                  {/* title */}
                  <h4 className="mt-4 text-lg font-bold text-gray-900">
                    {s.title}
                  </h4>

                  {/* body */}
                  <p className="mt-2 text-gray-600">{s.body}</p>

                  {/* metric pill */}
                  <div className="mt-5 inline-flex items-center gap-2 rounded-lg bg-gray-50 px-3 py-2 text-sm font-semibold text-gray-800">
                    <svg
                      width="16"
                      height="16"
                      viewBox="0 0 24 24"
                      className="text-emerald-500"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12l5 5L20 7" />
                    </svg>
                    {s.metric}
                  </div>

                  {/* bottom stripe */}
                  <div
                    className={`mt-6 h-1 w-full rounded-full bg-gradient-to-r ${
                      tones[s.tone]?.stripe || tones.blue.stripe
                    }`}
                  />
                </div>
              </article>
            ))}
          </div>

          {/* controls */}
          <div className="absolute inset-x-0 -bottom-10 flex items-center justify-center gap-3">
            <button
              aria-label="Previous slides"
              onClick={() => setIndex((i) => Math.max(0, i - 1))}
              className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
            >
              ←
            </button>
            <button
              aria-label="Next slides"
              onClick={() => setIndex((i) => i + 1)}
              className="rounded-full border border-gray-300 bg-white px-3 py-1 text-sm text-gray-700 hover:bg-gray-50"
            >
              →
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

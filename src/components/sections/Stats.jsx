import { useState, useEffect } from "react";
import { motion } from "framer-motion";

/* === Counter Hook === */
function useCounter(end, duration = 2000) {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let startTime;
    let frame;
    const animate = (time) => {
      if (!startTime) startTime = time;
      const progress = Math.min((time - startTime) / duration, 1);
      const easeOut = 1 - Math.pow(1 - progress, 3);
      setCount(Math.floor(easeOut * end));
      if (progress < 1) frame = requestAnimationFrame(animate);
    };
    frame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(frame);
  }, [end, duration]);

  return count;
}

/* === Framer Variants === */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* === Stats Section === */
export default function Stats() {
  /* inline-load Manrope once */
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
        "https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap";
      document.head.appendChild(l3);
    }

    /* scoped 15% font-size reduction for Tailwind text classes inside #stats */
    if (!document.getElementById("stats-typescale")) {
      const css = document.createElement("style");
      css.id = "stats-typescale";
      css.textContent = `
        /* base scale: 85% of Tailwind sizes */
        #stats .text-xs   { font-size: calc(0.75rem * 0.85) !important; }
        #stats .text-sm   { font-size: calc(0.875rem * 0.85) !important; }
        #stats .text-base { font-size: calc(1rem * 0.85) !important; }
        #stats .text-lg   { font-size: calc(1.125rem * 0.85) !important; }
        #stats .text-xl   { font-size: calc(1.25rem * 0.85) !important; }
        #stats .text-2xl  { font-size: calc(1.5rem * 0.85) !important; }
        #stats .text-3xl  { font-size: calc(1.875rem * 0.85) !important; }
        #stats .text-4xl  { font-size: calc(2.25rem * 0.85) !important; }
        #stats .text-5xl  { font-size: calc(3rem * 0.85) !important; }

        /* responsive overrides for the classes used here */
        @media (min-width: 1024px) {
          #stats .lg\\:text-base { font-size: calc(1rem * 0.85) !important; }
          #stats .lg\\:text-4xl  { font-size: calc(2.25rem * 0.85) !important; }
          #stats .lg\\:text-5xl  { font-size: calc(3rem * 0.85) !important; }
        }
      `;
      document.head.appendChild(css);
    }
  }, []);

  const threatsCount = useCounter(100);
  const responseCount = useCounter(1);
  const uptimeCount = useCounter(99.9);
  const yearsCount = useCounter(3);

  const stats = [
    {
      count: `${threatsCount.toLocaleString()}+`,
      label: "Threats Stopped Daily",
      color: "#2563EB",
      gradient: "from-[#2563EB] to-[#1E40AF]",
      bg: "bg-blue-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
        </svg>
      ),
    },
    {
      count: `${responseCount}s`,
      label: "Average Response Time",
      color: "#059669",
      gradient: "from-[#059669] to-[#16A34A]",
      bg: "bg-green-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ),
    },
    {
      count: `${uptimeCount}%`,
      label: "System Uptime",
      color: "#2563EB",
      gradient: "from-[#2563EB] to-[#059669]",
      bg: "bg-blue-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
        </svg>
      ),
    },
    {
      count: `${yearsCount}+`,
      label: "Years Protecting Africa",
      color: "#059669",
      gradient: "from-[#059669] to-[#2563EB]",
      bg: "bg-green-50",
      icon: (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 2a10 10 0 100 20 10 10 0 000-20zM2 12h20" />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="stats"
      className="py-20 bg-white relative overflow-hidden"
      style={{ fontFamily: "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial" }}
    >
      {/* background grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #059669 1px, transparent 1px), radial-gradient(circle at 75% 75%, #2563EB 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      ></div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-[#059669]/10 to-[#2563EB]/10 text-[#059669] rounded-full border border-[#059669]/20 mb-8">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3" />
            </svg>
            <span className="text-sm font-medium">Live Security Metrics</span>
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4">
            Protecting Africa with AI
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Real-time metrics from our Darktrace AI deployment across African enterprises
          </p>
        </motion.div>

        {/* stats grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              variants={fadeInUp}
              className="text-center group"
            >
              <div
                className={`${stat.bg} rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 cursor-pointer border border-gray-100`}
              >
                <div
                  className={`w-16 h-16 rounded-xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300`}
                >
                  {stat.icon}
                </div>
                <div
                  className="text-4xl lg:text-5xl font-bold mb-3 transition-transform duration-300 group-hover:scale-105"
                  style={{ color: stat.color }}
                >
                  {stat.count}
                </div>
                <div className="text-sm lg:text-base font-semibold text-gray-700 leading-tight">
                  {stat.label}
                </div>
                <div className="mt-4 h-1 bg-gray-200 rounded-full overflow-hidden">
                  <div
                    className={`h-full bg-gradient-to-r ${stat.gradient} rounded-full transition-all duration-1000 group-hover:scale-x-105`}
                    style={{
                      width: "100%",
                      animation: "slideIn 2s ease-out forwards",
                    }}
                  ></div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

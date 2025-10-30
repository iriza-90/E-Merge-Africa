import { motion } from "framer-motion";
import React, { useEffect } from "react";

/* Load Manrope locally (inline) */
function useManrope() {
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
}

/* === Framer Motion Variants === */
const fadeInUp = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: "easeOut" },
  },
};

const fadeInScale = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* === Partnership Section === */
export default function Partnership() {
  useManrope();

  return (
    <section
      id="partnership"
      className="py-20 relative overflow-hidden"
      style={{
        background:
          "linear-gradient(135deg, #0F0F0F 0%, #1A1A2E 50%, #0F0F23 100%)",
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
      }}
    >
      {/* floating lights */}
      <div className="absolute inset-0 pointer-events-none">
        {Array.from({ length: 30 }, (_, i) => (
          <div
            key={i}
            className="absolute rounded-full"
            style={{
              width: `${1 + Math.random() * 3}px`,
              height: `${1 + Math.random() * 3}px`,
              backgroundColor: "#00D4AA",
              opacity: Math.random() * 0.3 + 0.1,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animation: `float ${4 + Math.random() * 6}s ease-in-out infinite`,
              animationDelay: `${Math.random() * 3}s`,
            }}
          ></div>
        ))}
      </div>

      {/* subtle geometric shapes */}
      <div className="absolute inset-0 opacity-[0.03]">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-[#00D4AA] rotate-45 animate-pulse"></div>
        <div
          className="absolute bottom-1/4 right-1/4 w-24 h-24 border border-[#00B3FF] rotate-12 animate-pulse"
          style={{ animationDelay: "1s" }}
        ></div>
      </div>

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* section badge */}
        <motion.div
          variants={fadeInUp}
          className="inline-flex items-center justify-center gap-2 px-4 py-2 mb-8 rounded-full border border-[#00D4AA]/30"
          style={{
            backgroundColor: "rgba(0, 212, 170, 0.1)",
            color: "#00D4AA",
            fontSize: "11.9px",
            fontWeight: 600,
          }}
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            className="fill-none stroke-current"
          >
            <path
              d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z"
              strokeWidth="1.6"
            />
          </svg>
          <span>Strategic Partnership</span>
        </motion.div>

        {/* heading + subtext */}
        <motion.h2
          variants={fadeInUp}
          className="font-bold mb-6 text-white"
          style={{ fontSize: "34px", lineHeight: 1.1 }}
        >
          Powered by Darktrace
        </motion.h2>
        <motion.p
          variants={fadeInUp}
          className="mb-12 max-w-2xl mx-auto text-[#B0B0B0]"
          style={{ fontSize: "15.3px", lineHeight: 1.7, fontWeight: 500 }}
        >
          We are an authorized partner of Darktrace, the global leader in AI
          cybersecurity, bringing world-class autonomous security to African
          enterprises.
        </motion.p>

        {/* partner card */}
        <motion.div
          variants={fadeInScale}
          className="inline-block rounded-lg p-12 shadow-sm hover:shadow-xl hover:scale-105 transition-all duration-300"
          style={{
            backgroundColor: "rgba(255,255,255,0.05)",
            border: "1px solid rgba(0, 212, 170, 0.2)",
          }}
        >
          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 sm:gap-10">
            {/* logo bubble */}
            <div
              className="w-16 h-16 rounded-lg flex items-center justify-center group-hover:scale-110 transition-all duration-300"
              style={{ backgroundColor: "#00D4AA" }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#000000"
                strokeWidth={2}
              >
                <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
              </svg>
            </div>

            {/* text content */}
            <div className="text-left">
              <h3
                className="font-bold mb-2 text-white group-hover:text-teal-400 transition-colors duration-300"
                style={{ fontSize: "17px" }}
              >
                Darktrace
              </h3>
              <p
                className="font-semibold text-[#B0B0B0]"
                style={{ fontSize: "15.3px" }}
              >
                Enterprise Immune System
              </p>
              <p className="text-[#888888]" style={{ fontSize: "11.9px" }}>
                Autonomous AI Cyber Defense
              </p>
            </div>
          </div>
        </motion.div>
      </motion.div>

      {/* subtle float animation */}
      <style jsx>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0);
          }
          50% {
            transform: translateY(-8px);
          }
        }
      `}</style>
    </section>
  );
}

import { motion } from "framer-motion";
import React, { useEffect } from "react";

/* Load Manrope locally (since it's not global) */
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
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* === Footer Section === */
export default function Footer() {
  useManrope();

  const solutions = [
    { label: " Access Security", href: "#services" },
    { label: " Endpoint Security", href: "#services" },
    { label: " Infrastructure Security", href: "#services" },
    { label: " Data Security", href: "#services" },
  ];

  const company = [
    { label: "About Us", href: "#about" },
    { label: "Partnership", href: "#contact" },
    { label: "Contact", href: "#contact" },
    { label: "Request a Demo", href: "#contact" },
  ];

  const socials = [
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/e-merge-africa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M4.98 3.5c0 1.38-1.12 2.5-2.49 2.5C1.12 6 0 4.88 0 3.5S1.12 1 2.49 1C3.86 1 4.98 2.12 4.98 3.5zM0 8h5v16H0V8zm7.5 0h4.8v2.2h.07c.67-1.27 2.32-2.6 4.78-2.6 5.1 0 6.05 3.36 6.05 7.72V24h-5v-7.2c0-1.72-.03-3.93-2.4-3.93-2.4 0-2.77 1.87-2.77 3.8V24h-5V8z" />
        </svg>
      ),
    },
    {
      label: "Twitter/X",
      href: "https://twitter.com/search?q=E-Merge%20Africa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
          <path d="M18.244 2H21l-6.794 7.76L22 22h-6.828l-5.34-6.624L3.6 22H1l7.29-8.327L2 2h6.914l4.807 6.165L18.244 2zm-1.196 18h2.2L7.142 4H4.84l12.208 16z" />
        </svg>
      ),
    },
    {
      label: "Email",
      href: "mailto:hello@emerge.africa",
      icon: (
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M4 4h16v16H4z" />
          <path d="M22 6l-10 7L2 6" />
        </svg>
      ),
    },
  ];

  return (
    <footer
      className="relative overflow-hidden bg-gray-950 text-white"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
      }}
    >
      {/* soft background accents */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,.06) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,.06) 1px, transparent 1px)",
          backgroundSize: "56px 56px",
        }}
      />
      <div className="absolute -top-24 -right-24 w-[420px] h-[420px] rounded-full bg-gradient-to-br from-[#00B3FF1f] to-[#00D4AA1f] blur-3xl" />
      <div className="absolute -bottom-32 -left-32 w-[360px] h-[360px] rounded-full bg-gradient-to-tr from-[#00B3FF1a] to-[#0099E61a] blur-3xl" />

      <motion.div
        className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* top grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Logo + description */}
          <motion.div variants={fadeInUp} className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-r from-[#00B3FF] to-[#0099E6] grid place-items-center shadow-lg ring-1 ring-white/20">
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                  <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
                </svg>
              </div>
              <div>
                <h3 className="font-bold text-[17px]">E-Merge Africa Limited</h3>
                <p className="text-gray-400 font-normal text-[11.9px]">AI Cybersecurity Solutions</p>
              </div>
            </div>

            <p className="text-gray-400 leading-relaxed max-w-md text-[13.6px]">
              Our flagship partnership with Darktrace brings AI-driven cyber defense to the region, and we are expanding our portfolio with top vendors to deliver networking, cloud, and IT services.
            </p>

            {/* badges */}
            <div className="mt-4 flex flex-wrap items-center gap-3 text-[13.6px]">
              <span className="kernel-status active">Darktrace Partner</span>
              <span className="kernel-status">SOC 2</span>
              <span className="kernel-status">ISO 27001</span>
            </div>
          </motion.div>

          {/* Solutions */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold mb-6 text-[15.3px]">Solutions</h4>
            <ul className="space-y-3 text-gray-400 text-[13.6px]">
              {solutions.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    className="relative inline-flex items-center gap-2 hover:text-white transition-colors"
                  >
                    <span className="absolute -left-4 opacity-0 group-hover:opacity-100 transition-opacity">
                      <svg width="14" height="14" viewBox="0 0 24 24" className="fill-[#00B3FF]">
                        <path d="M12 5l7 7-7 7-1.4-1.4L15.2 12 10.6 6.4 12 5z" />
                      </svg>
                    </span>
                    <span className="group">{s.label}</span>
                    <span className="ml-2 block h-[2px] w-0 bg-[#00B3FF] transition-all group-hover:w-6" />
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold mb-6 text-[15.3px]">Company</h4>
            <ul className="space-y-3 text-gray-400 text-[13.6px]">
              {company.map((c) => (
                <li key={c.label}>
                  <a
                    href={c.href}
                    className="group inline-flex items-center hover:text-white transition-colors"
                  >
                    <span>{c.label}</span>
                    <svg
                      width="14"
                      height="14"
                      viewBox="0 0 24 24"
                      className="ml-2 opacity-0 group-hover:opacity-100 transition-opacity"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                    >
                      <path d="M5 12h14M12 5l7 7-7 7" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div variants={fadeInUp}>
            <h4 className="font-bold mb-6 text-[15.3px]">Contact</h4>
            <ul className="space-y-3 text-gray-400 text-[13.6px]">
              <li className="flex items-start gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="mt-0.5 text-[#00B3FF]" fill="currentColor">
                  <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5a2.5 2.5 0 110-5 2.5 2.5 0 010 5z" />
                </svg>
                Kigali, Rwanda
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#00B3FF]" fill="currentColor">
                  <path d="M21 8V7l-3 2-4-3-4 3-4-3-3 2v1l3-2 4 3 4-3 4 3 3-2z" />
                </svg>
                <a href="mailto:hello@emerge.africa" className="hover:text-white">
                  hello@emerge.africa
                </a>
              </li>
              <li className="flex items-center gap-3">
                <svg width="18" height="18" viewBox="0 0 24 24" className="text-[#00B3FF]" fill="currentColor">
                  <path d="M6.62 10.79a15.46 15.46 0 006.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V21c0 .55-.45 1-1 1C10.85 22 2 13.15 2 2c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.24.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z" />
                </svg>
                <a href="tel:+250000000000" className="hover:text-white">
                  +250 788 315 845
                </a>
              </li>
            </ul>

            {/* socials */}
            <div className="mt-5 flex items-center gap-3">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 hover:bg-white/10 transition ring-1 ring-white/10"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </motion.div>
        </div>

        {/* divider row */}
        <motion.div
          variants={fadeInUp}
          className="pt-8 mt-4 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-[11.9px] text-center md:text-left">
            &copy; {new Date().getFullYear()} E-Merge Africa Limited. All rights reserved. 
          </p>

          {/* quick links / legal */}
          <div className="flex items-center gap-5 text-gray-400 text-[11.9px]">
            <a href="#home" className="hover:text-white">Home</a>
            <span className="opacity-30">•</span>
            <a href="#services" className="hover:text-white">Services</a>
            <span className="opacity-30">•</span>
            <a href="#about" className="hover:text-white">About</a>
            <span className="opacity-30">•</span>
            <a href="#contact" className="hover:text-white">Contact</a>
          </div>
        </motion.div>
      </motion.div>

      {/* Back to top */}
      <a
        href="#home"
        aria-label="Back to top"
        className="group fixed bottom-5 right-5 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#00B3FF] to-[#0099E6] shadow-lg ring-1 ring-white/20 hover:translate-y-[-2px] transition"
      >
        <svg width="18" height="18" viewBox="0 0 24 24" className="text-white" fill="none" stroke="currentColor" strokeWidth="2">
          <path d="M12 19V5M5 12l7-7 7 7" />
        </svg>
      </a>
    </footer>
  );
}

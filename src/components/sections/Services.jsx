import React, { useEffect } from "react";
import { motion } from "framer-motion";

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

/* =============================
   Framer Motion Variants
   ============================= */
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
  visible: { transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

/* =============================
   Clean SVG Icons (distinct)
   ============================= */
function ServiceIcon({ name, stroke = "#2563EB" }) {
  const base = {
    fill: "none",
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  switch (name) {
    case "identity":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <path d="M12 12a4 4 0 100-8 4 4 0 000 8z" />
          <path d="M4 20a8 8 0 0116 0" />
        </svg>
      );
    case "endpoint":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <rect x="3" y="5" width="18" height="12" rx="2" />
          <path d="M2 19h20" />
        </svg>
      );
    case "network":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <circle cx="6" cy="6" r="3" />
          <circle cx="18" cy="6" r="3" />
          <circle cx="12" cy="18" r="3" />
          <path d="M8.5 8.5l3 7M15.5 8.5l-3 7M9 6h6" />
        </svg>
      );
    case "app":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <rect x="3" y="4" width="18" height="10" rx="2" />
          <path d="M7 8h6M6 20c0-2 3-3 6-3s6 1 6 3" />
          <ellipse cx="12" cy="17" rx="6" ry="2.5" />
        </svg>
      );
    case "cloud":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <path d="M7 18a4 4 0 010-8 5 5 0 019.7 1.5A3.5 3.5 0 1117 18H7z" />
        </svg>
      );
    case "soc":
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <circle cx="12" cy="12" r="9" />
          <path d="M12 12l6-6M12 3v3M21 12h-3M12 21v-3M3 12h3" />
          <circle cx="12" cy="12" r="3" />
        </svg>
      );
    default:
      return (
        <svg width="28" height="28" viewBox="0 0 24 24" {...base}>
          <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
        </svg>
      );
  }
}

/* =============================
   Resilience Panel
   ============================= */

function ResiliencePanel() {
  const items = [
    {
      icon: (
        // megaphone (awareness)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00B3FF" strokeWidth="2">
          <path d="M3 11v2a3 3 0 003 3h1l5 3v-16l-5 3H6a3 3 0 00-3 3z" />
          <path d="M16 9a5 5 0 010 6" />
          <path d="M18 7a8 8 0 010 10" />
        </svg>
      ),
      title: "Awareness Training",
      desc: "Reducing human risk with engaging, role-based training.",
      tone: "from-[#00B3FF] to-[#0099E6]",
    },
    {
      icon: (
        // target (exec drills)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" strokeWidth="2">
          <circle cx="12" cy="12" r="8" />
          <circle cx="12" cy="12" r="4" />
          <path d="M16 8l4-4" />
          <path d="M19 5v4h-4" />
        </svg>
      ),
      title: "Executive Drills & Simulations",
      desc: "Preparing leadership for cyber crisis response.",
      tone: "from-[#00D4AA] to-[#00B3D4]",
    },
    {
      icon: (
        // shield-check (governance)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#10B981" strokeWidth="2">
          <path d="M12 3l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-3z" />
          <path d="M9 12l2 2 4-4" />
        </svg>
      ),
      title: "Compliance & Governance Advisory",
      desc: "Alignment with ISO 27001, GDPR, and Rwanda DPP law.",
      tone: "from-[#34D399] to-[#10B981]",
    },
    {
      icon: (
        // file-text (policy)
        <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#8B5CF6" strokeWidth="2">
          <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12V8z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8M8 17h8M8 9h3" />
        </svg>
      ),
      title: "Policy Development & Audits",
      desc: "Strengthening governance frameworks and assurance.",
      tone: "from-[#8B5CF6] to-[#6366F1]",
    },
  ];

  return (
    <motion.div
      variants={fadeInUp}
      className="mt-12 rounded-2xl border border-gray-200 bg-white/80 backdrop-blur-sm shadow-sm overflow-hidden"
    >
      {/* top bar */}
      <div className="px-6 sm:px-8 pt-8">
        <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1 text-emerald-700 font-medium text-[11.9px]">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
          </svg>
           Governance, Risk &amp; Awareness
        </div>

        <h3 className="mt-4 font-bold text-gray-900 text-[20.4px] md:text-[25.5px]">
          Building human and organizational resilience to cyber risks
        </h3>
        <p className="mt-2 text-gray-600 max-w-3xl text-[13.6px]">
          Practical programs that reduce human risk, prepare leadership, and align your organization
          to modern governance and regulatory requirements.
        </p>
      </div>

      {/* content */}
      <div className="px-6 sm:px-8 pb-8 pt-4 grid md:grid-cols-2 gap-8 items-stretch">
        {/* left: illustration card */}
        <div className="relative rounded-xl border border-gray-200 bg-gradient-to-br from-[#F8FAFC] to-white p-6 overflow-hidden">
          <div className="absolute -right-20 -top-20 w-80 h-80 rounded-full bg-gradient-to-tr from-[#00B3FF1a] to-[#00D4AA1a] blur-2xl" />
          <div className="relative">
            <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#00B3FF] to-[#0099E6] grid place-items-center shadow-md">
              <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2">
                <path d="M12 3l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V6l7-3z" />
              </svg>
            </div>
            <h4 className="mt-4 font-semibold text-gray-900 text-[15.3px]">Human-centric cyber resilience</h4>
            <p className="mt-2 text-gray-600 text-[13.6px]">
              We tailor content and drills to roles—from frontline teams to executive leadership—so
              security becomes cultural, not just technical.
            </p>
          </div>
          <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-[#00B3FF] to-[#00D4AA]" />
        </div>

        {/* right: bullet items */}
        <ul className="space-y-4">
          {items.map((it, idx) => (
            <li
              key={idx}
              className="group relative rounded-xl border border-gray-200 p-5 bg-white hover:shadow-lg transition-shadow"
            >
              <div className="flex items-start gap-3">
                <div className="mt-1 grid place-items-center w-8 h-8 rounded-lg bg-white shadow-inner ring-1 ring-gray-200">
                  {it.icon}
                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-[13.6px]">{it.title}</p>
                  <p className="text-gray-600 mt-0.5 text-[11.9px]">{it.desc}</p>
                </div>
              </div>
              <div className={`mt-4 h-[3px] w-full rounded-full bg-gradient-to-r ${it.tone}`} />
            </li>
          ))}
        </ul>
      </div>
    </motion.div>
  );
}

/* =============================
   Services Section (export)
   ============================= */
export default function Services() {
  useManrope();

  const services = [
    {
      title: "Identity & Access Security",
      icon: "identity",
      desc:
        "Verify every user, device, and workload before granting access",
      gradient: "from-[#2563EB] to-[#1E40AF]",
      bg: "bg-blue-50",
      iconColor: "#2563EB",
      features: [
        "Multi-Factor Authentication (MFA)",
        "Single Sign-On",
        "Privileged Access Management (PAM)",
        "Identity Governance (IGA)",
      ],
    },
    {
      title: "Device & Endpoint Security",
      icon: "endpoint",
      desc:
        "Ensure only trusted, secure devices connect to your systems",
      gradient: "from-[#059669] to-[#16A34A]",
      bg: "bg-green-50",
      iconColor: "#059669",
      features: [
        "Endpoint Detection & Response (EDR)",
        "Next-Gen Antivirus (NGAV)",
        "Mobile * Device Management (MDM)",
        "Full Disk Encryption",
      ],
    },
    {
      title: "Network & Infrastructure Security",
      icon: "network",
      desc:
        "Eliminate implicit trust in networks and secure connectivity everywhere",
      gradient: "from-[#2563EB] to-[#059669]",
      bg: "bg-blue-50",
      iconColor: "#2563EB",
      features: [
        "Next-Generation Firewalls (NGFW)",
        "Zero Trust Network Access (ZTNA)",
        "Secure VPN & Remote Access",
        "Micro-Segmentation",
      ],
    },
    {
      title: "Application & Data Security",
      icon: "app",
      desc:
        "Protect applications and data wherever they live-on-prem or in the cloud",
      gradient: "from-[#00B3FF] to-[#0099E6]",
      bg: "bg-blue-50",
      iconColor: "#0099E6",
      features: [
        "Web Application Firewalls (WAF)",
        "API Security",
        "Data Loss Prevention",
        "Encryption & Tokenization",
      ],
    },
    {
      title: "Cloud Security & Workloads",
      icon: "cloud",
      desc:
        "Securing multi-cloud, hybrid, and SaaS environments",
      gradient: "from-[#00D4AA] to-[#00B3D4]",
      bg: "bg-cyan-50",
      iconColor: "#00D4AA",
      features: [
        "Cloud Security Posture Management (CSPM)",
        "Cloud Access Security Broker (CASB)",
        "Workload Protection (CWPP)",
        "Cloud Identity & Entitlement Management (CIEM)",
      ],
    },
    {
      title: "Security Operations & Intelligence",
      icon: "soc",
      desc:
        "Continous monitoring, autmoation, and intelligence for faster response.",
      gradient: "from-[#00D4AA] to-[#00B3FF]",
      bg: "bg-cyan-50",
      iconColor: "#00B3FF",
      features: [
        "Security Information & Event Management (SIEM)",
        "Threat Intelligence Platforms (TIP)",
        "Incident Response & Recovery",
        "Predictive Security Analytics",
      ],
    },
  ];

  return (
    <section
      id="services"
      className="py-20 bg-white relative overflow-hidden"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
      }}
    >
      {/* soft grid background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #059669 1px, transparent 1px), radial-gradient(circle at 75% 75%, #2563EB 1px, transparent 1px)",
          backgroundSize: "100px 100px",
        }}
      />

      <motion.div
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
        variants={staggerContainer}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        {/* header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-50 text-blue-700 rounded-full border border-blue-200 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-none stroke-current">
              <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" strokeWidth="1.6" />
            </svg>
            <span className="font-medium text-[11.9px]">AI Security Solutions</span>
          </div>
          <h2 className="font-bold text-gray-900 mb-6 text-[30.6px] lg:text-[40.8px]">
            Our Zero Trust-Based Offerings
          </h2>
          <p className="text-gray-600 max-w-3xl mx-auto text-[15.3px]">
            Our offerings are designed around the Zero Trust Security Framework, ensuring continuous verification, least-privilege access, and complete visibility across digital ecosystems.
          </p>
        </motion.div>

        {/* cards grid */}
        <div className="grid lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {services.map((s) => (
            <motion.div
              key={s.title}
              variants={fadeInUp}
              whileHover={{ y: -10, scale: 1.02, rotate: -0.4 }}
              whileTap={{ scale: 0.995 }}
              transition={{ type: "spring", stiffness: 260, damping: 20 }}
              className="relative bg-white border border-gray-200 rounded-xl p-8 shadow hover:shadow-2xl transition-all duration-300 group"
            >
              {/* hover glow */}
              <span
                className="pointer-events-none absolute -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                style={{
                  background:
                    "radial-gradient(120% 70% at 50% 0%, rgba(0,179,255,0.08) 0%, rgba(0,179,255,0) 60%)",
                }}
              />
              <div
                className={`relative w-16 h-16 rounded-lg ${s.bg} grid place-items-center mb-6 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}
              >
                <ServiceIcon name={s.icon} stroke={s.iconColor} />
              </div>
              <h3 className="font-bold text-gray-900 mb-3 group-hover:text-[#00B3FF] transition-colors duration-300 text-[17px]">
                {s.title}
              </h3>
              <p className="text-gray-600 mb-6 text-[13.6px]">{s.desc}</p>

              <ul className="space-y-3">
                {s.features.map((f, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-blue-100 grid place-items-center mt-0.5 flex-shrink-0">
                      <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[#00B3FF]">
                        <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                      </svg>
                    </div>
                    <span className="text-gray-600 leading-relaxed text-[11.9px]">{f}</span>
                  </li>
                ))}
              </ul>

              <div className={`h-1 w-full mt-8 bg-gradient-to-r ${s.gradient} rounded-b-lg`} />
            </motion.div>
          ))}
        </div>

        {/* 🔄 replaced metrics with this */}
        <ResiliencePanel />
      </motion.div>
    </section>
  );
}

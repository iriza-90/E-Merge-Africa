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

const fadeInLeft = {
  hidden: { opacity: 0, x: -40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const fadeInRight = {
  hidden: { opacity: 0, x: 40 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const staggerContainer = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
};

/* ——— distinct contact icons ——— */
function ContactIcon({ name, stroke = "currentColor" }) {
  const props = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke,
    strokeWidth: 1.8,
    strokeLinecap: "round",
    strokeLinejoin: "round",
  };

  if (name === "location") {
    return (
      <svg {...props} aria-hidden="true">
        <path d="M12 21s7-7.1 7-12a7 7 0 10-14 0c0 4.9 7 12 7 12z" />
        <circle cx="12" cy="9" r="2.5" />
      </svg>
    );
  }
  if (name === "email") {
    return (
      <svg {...props} aria-hidden="true">
        <rect x="3" y="5" width="18" height="14" rx="2" />
        <path d="M3 7l9 6 9-6" />
      </svg>
    );
  }
  // phone
  return (
    <svg {...props} aria-hidden="true">
      <path d="M22 16.92v2a2 2 0 01-2.18 2 19.8 19.8 0 01-8.62-3.06A19.5 19.5 0 016.14 13.8 19.8 19.8 0 013.08 5.18 2 2 0 015.06 3h2a2 2 0 012 1.72c.12.9.33 1.77.62 2.61a2 2 0 01-.45 2.11L8.1 10.6a16 16 0 005.3 5.3l1.16-1.13a2 2 0 012.11-.45c.84.29 1.71.5 2.61.62A2 2 0 0122 16.92z" />
    </svg>
  );
}

/* === Contact Section === */
export default function Contact() {
  useManrope();

  const contactInfo = [
    {
      title: "Location",
      content: "Kigali, Rwanda",
      color: "bg-blue-50 text-[#00B3FF]",
      icon: "location",
      href: "https://maps.google.com/?q=Kigali%2C%20Rwanda",
    },
    {
      title: "Email",
      content: "info@emerge-africa.com",
      color: "bg-cyan-50 text-[#00D4AA]",
      icon: "email",
      href: "mailto:info@emerge-africa.com",
    },
    {
      title: "Phone",
      content: "+250 788 315 845",
      color: "bg-gray-50 text-gray-600",
      icon: "phone",
      href: "tel:+250788315845",
    },
  ];

  const reasons = [
    "Built on Zero Trust Architecture for secure, scalable IT environments",
    "Authorized Darktrace partner delivering AI-driven cyber defense across Africa",
    "Comprehensive security portfolio from identity to cloud and data protection",
    "24/7 monitoring and rapid response through intelligent automation",
    "Deep local expertise with global technology partnerships",
  ];

  return (
    <section
      id="contact"
      className="py-20 bg-white relative overflow-hidden"
      style={{
        fontFamily:
          "'Manrope', ui-sans-serif, system-ui, -apple-system, Segoe UI, Helvetica, Arial",
      }}
    >
      {/* subtle background */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 25% 25%, #00B3FF 1px, transparent 1px), radial-gradient(circle at 75% 75%, #00D4AA 1px, transparent 1px)",
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
        {/* Header */}
        <motion.div variants={fadeInUp} className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-blue-50 text-[#00B3FF] rounded-full border border-blue-200 mb-8">
            <svg width="16" height="16" viewBox="0 0 24 24" className="fill-none stroke-current">
              <path d="M4 4h16v16H4z" strokeWidth="1.5" />
            </svg>
            <span className="font-medium text-[11.9px]">Get In Touch</span>
          </div>
          <h2 className="font-bold text-gray-900 mb-6 text-[30.6px] lg:text-[40.8px]">
            Ready to Deploy AI Security?
          </h2>
          <p className="text-gray-600 text-[15.3px]">
            Contact our team to see Darktrace AI in action for your organization.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* left column */}
          <motion.div variants={fadeInLeft} className="space-y-8">
            {/* demo card */}
            <div className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
              <h3 className="font-bold text-gray-900 mb-6 text-[20.4px]">Start Your Zero Trust Journey Today</h3>
              <p className="text-gray-600 mb-8 leading-relaxed text-[13.2px]">
               Discover how AI-driven Zero Trust security protects your business. Book a demo with E-Merge Africa’s experts.
              </p>
              <a
                href="mailto:info@emerge-africa.com?subject=Schedule%20AI%20Demo"
                className="bg-[#00B3FF] hover:bg-[#0099E6] text-white px-8 py-3 rounded-lg font-semibold text-[15.3px] transition-all duration-200 inline-flex items-center gap-3 group"
              >
                <svg width="20" height="20" viewBox="0 0 24 24" className="text-white" fill="currentColor">
                  <polygon points="5 3 19 12 5 21 5 3" />
                </svg>
                Book Demo
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  className="fill-none stroke-current text-white group-hover:translate-x-1 transition-transform duration-200"
                >
                  <path d="M5 12h14M12 5l7 7-7 7" strokeWidth="2" />
                </svg>
              </a>
            </div>

            {/* contact cards */}
            <div className="space-y-6">
              {contactInfo.map((item) => {
                const Content = (
                  <>
                    <div className={`w-12 h-12 rounded-lg ${item.color} flex items-center justify-center ring-1 ring-black/5`}>
                      <ContactIcon name={item.icon} />
                    </div>
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1 text-[15.3px]">{item.title}</h4>
                      <p className="text-gray-600 text-[13.2px]">{item.content}</p>
                    </div>
                  </>
                );

                return (
                  <motion.div
                    key={item.title}
                    variants={fadeInUp}
                    className="flex items-center gap-4 p-6 bg-white rounded-lg border border-gray-200 shadow-sm hover:shadow-md transition-all duration-300"
                  >
                    {item.href ? (
                      <a
                        href={item.href}
                        target={item.icon === "location" ? "_blank" : undefined}
                        rel={item.icon === "location" ? "noopener noreferrer" : undefined}
                        className="flex items-center gap-4"
                        aria-label={item.title}
                      >
                        {Content}
                      </a>
                    ) : (
                      <div className="flex items-center gap-4">{Content}</div>
                    )}
                  </motion.div>
                );
              })}
            </div>
          </motion.div>

          {/* right column */}
          <motion.div variants={fadeInRight} className="bg-gray-50 rounded-lg p-8 border border-gray-200 shadow-sm">
            <h3 className="font-bold text-gray-900 mb-8 text-[20.4px]">Why Choose E-Merge Africa?</h3>
            <ul className="space-y-6">
              {reasons.map((reason, index) => (
                <motion.li key={index} variants={fadeInUp} className="flex items-start gap-4">
                  <div className="w-6 h-6 rounded-full bg-blue-100 grid place-items-center flex-shrink-0 mt-1">
                    <svg width="12" height="12" viewBox="0 0 24 24" className="fill-[#00B3FF]">
                      <path d="M9 16.2l-3.5-3.5-1.4 1.4L9 19 20.3 7.7l-1.4-1.4z" />
                    </svg>
                  </div>
                  <span className="text-gray-600 leading-relaxed text-[13.2px]">{reason}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}

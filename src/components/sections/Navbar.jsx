import { useState, useEffect } from "react";

const GREEN = "#00B386";
const BLUE  = "#00B3FF";

export default function Navbar({ onNav }) {
  const [open, setOpen] = useState(false);

  // Load Manrope once
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
      l3.href = "https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap";
      document.head.appendChild(l3);
    }
  }, []);

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => { onNav?.(id); setOpen(false); }}
      className="group relative text-[#6B7280] hover:text-[#111827] transition-colors"
      style={{
        fontFamily: "'Manrope', ui-sans-serif, system-ui",
        fontSize: "clamp(10px, 1.05vw, 11.05px)",
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
        lineHeight: 1.2,
        whiteSpace: "nowrap",
      }}
    >
      {label}
      <span className="pointer-events-none absolute left-0 -bottom-[6px] h-[2px] w-full bg-[#111827] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
    </button>
  );

  return (
    <header
      data-navbar
      className="fixed top-0 inset-x-0 z-[100] border-b border-[#E5E7EB]"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Manrope', ui-sans-serif, system-ui",
        paddingTop: "max(0px, env(safe-area-inset-top))", // iOS notch safe-area
      }}
    >
      <div
        className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between"
        style={{
          height: "clamp(52px, 7.2vh, 64px)", // stable bar height across screens
        }}
      >
        {/* brand */}
        <div className="flex items-center gap-2.5 sm:gap-3 min-w-0">
          <div
            className="rounded-lg grid place-items-center shadow-sm flex-shrink-0"
            style={{
              width: "clamp(28px, 7vw, 32px)",
              height: "clamp(28px, 7vw, 32px)",
              background: `linear-gradient(135deg, ${BLUE} 0%, #0099E6 100%)`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ width: "clamp(14px, 4vw, 18px)", height: "clamp(14px, 4vw, 18px)" }}
              aria-hidden="true"
            >
              <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
            </svg>
          </div>

          <div className="leading-tight min-w-0">
            <div
              className="text-[#111827] truncate md:whitespace-nowrap"
              style={{
                fontSize: "clamp(11px, 3.2vw, 12.75px)",
                fontWeight: 800,
                lineHeight: 1.1,
                maxWidth: "min(54vw, 420px)", 
              }}
              title="E-Merge Africa Limited"
            >
              E-Merge Africa Limited
            </div>
            <div
              className="text-[#9CA3AF] hidden sm:block truncate"
              style={{
                fontSize: "clamp(10.5px, 2.6vw, 10.2px)",
                lineHeight: 1.1,
                marginTop: "0.12em",
                maxWidth: "min(60vw, 460px)",
              }}
              title="Zero Trust Cybersecurity & IT Solutions"
            >
              Empowering Africa’s Digital Future through Cybersecurity and Innovation
            </div>
          </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-4 lg:gap-7">
          <NavLink id="home" label="Home" />
          <NavLink id="about" label="About" />
          <NavLink id="services" label="Services" />
          <NavLink id="contact" label="Contact" />
          <a
            href="#contact"
            className="ml-1 lg:ml-2 inline-flex items-center justify-center rounded-md text-white shadow-sm transition-all whitespace-nowrap"
            style={{
              height: "clamp(34px, 5.2vh, 36px)",
              paddingInline: "clamp(10px, 1.4vw, 16px)",
              background: `linear-gradient(90deg, ${GREEN} 0%, ${BLUE} 100%)`,
              fontSize: "clamp(10px, 1.05vw, 11.05px)",
              fontWeight: 700,
              lineHeight: 1.2,
            }}
          >
            Talk to Our Experts
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center rounded-md border border-[#E5E7EB] text-[#111827]"
          aria-label="Menu"
          aria-expanded={open}
          style={{
            width: "clamp(34px, 9vw, 36px)",
            height: "clamp(34px, 9vw, 36px)",
            flexShrink: 0,
          }}
        >
          <svg viewBox="0 0 24 24" style={{ width: "20px", height: "20px" }} aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="px-3 sm:px-4 py-3 flex flex-col gap-2.5">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="services" label="Services" />
            <NavLink id="contact" label="Contact" />
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center rounded-md text-white"
              style={{
                height: "clamp(36px, 9.6vw, 40px)",
                background: `linear-gradient(90deg, ${GREEN} 0%, ${BLUE} 100%)`,
                fontSize: "clamp(11px, 3.6vw, 11.9px)",
                fontWeight: 700,
                lineHeight: 1.2,
              }}
              onClick={() => setOpen(false)}
            >
              Talk to Our Experts
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { useState, useEffect } from "react";

const GREEN = "#00B386";
const BLUE = "#00B3FF";

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
      l3.href =
        "https://fonts.googleapis.com/css2?family=Manrope:wght@600;700;800&display=swap";
      document.head.appendChild(l3);
    }
  }, []);

  const NavLink = ({ id, label }) => (
    <button
      onClick={() => {
        onNav?.(id);
        setOpen(false);
      }}
      className="group relative text-[#6B7280] hover:text-[#111827] transition-colors"
      style={{
        fontFamily: "'Manrope', ui-sans-serif, system-ui",
        fontSize: "11.05px", // 13px → -15%
        fontWeight: 600,
        textTransform: "uppercase",
        letterSpacing: "0.08em",
      }}
    >
      {label}
      {/* underline on hover */}
      <span className="pointer-events-none absolute left-0 -bottom-1 h-[2px] w-full bg-[#111827] scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-200" />
    </button>
  );

  return (
    <header
      data-navbar
      className="fixed top-0 inset-x-0 z-[100] border-b border-[#E5E7EB]"
      style={{
        backgroundColor: "#ffffff",
        fontFamily: "'Manrope', ui-sans-serif, system-ui",
      }}
    >
      <div className="max-w-7xl mx-auto h-16 px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* brand */}
        <div className="flex items-center gap-3">
          <div
            className="w-8 h-8 rounded-lg grid place-items-center shadow-sm"
            style={{
              background: `linear-gradient(135deg, ${BLUE} 0%, #0099E6 100%)`,
            }}
          >
            <svg
              viewBox="0 0 24 24"
              className="w-[18px] h-[18px] text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M12 2l7 3v6c0 5-3.5 9.5-7 11-3.5-1.5-7-6-7-11V5l7-3z" />
            </svg>
          </div>
          <div className="leading-tight">
            <div
              className="text-[#111827]"
              style={{
                fontSize: "12.75px", // 15px → -15%
                fontWeight: 800,
                fontFamily: "'Manrope', ui-sans-serif, system-ui",
              }}
            >
              E-Merge Africa Limited
            </div>
            <div
              className="text-[#9CA3AF] -mt-0.5"
              style={{
                fontSize: "10.2px", // 12px → -15%
                fontFamily: "'Manrope', ui-sans-serif, system-ui",
              }}
            >
              Zero Trust Cybersecurity & IT Solutions
            </div>
          </div>
        </div>

        {/* desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          <NavLink id="home" label="Home" />
          <NavLink id="about" label="About" />
          <NavLink id="services" label="Services" />
          <NavLink id="contact" label="Contact" />
          <a
            href="#contact"
            className="ml-2 inline-flex items-center justify-center h-9 px-4 rounded-md text-white shadow-sm transition-all"
            style={{
              background: `linear-gradient(90deg, ${GREEN} 0%, ${BLUE} 100%)`,
              fontSize: "11.05px", // 13px → -15%
              fontWeight: 700,
              fontFamily: "'Manrope', ui-sans-serif, system-ui",
            }}
          >
            Talk to Our Experts
          </a>
        </nav>

        {/* mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden inline-flex items-center justify-center w-9 h-9 rounded-md border border-[#E5E7EB] text-[#111827]"
          aria-label="Menu"
        >
          <svg viewBox="0 0 24 24" className="w-5 h-5">
            <path
              d="M4 7h16M4 12h16M4 17h16"
              stroke="currentColor"
              strokeWidth="2"
            />
          </svg>
        </button>
      </div>

      {/* mobile menu */}
      {open && (
        <div className="md:hidden border-t border-[#E5E7EB] bg-white">
          <div className="px-4 py-3 flex flex-col gap-3">
            <NavLink id="home" label="Home" />
            <NavLink id="about" label="About" />
            <NavLink id="services" label="Services" />
            <NavLink id="contact" label="Contact" />
            <a
              href="#contact"
              className="mt-2 inline-flex items-center justify-center h-10 rounded-md text-white"
              style={{
                background: `linear-gradient(90deg, ${GREEN} 0%, ${BLUE} 100%)`,
                fontSize: "11.9px", // 14px → -15%
                fontWeight: 700,
                fontFamily: "'Manrope', ui-sans-serif, system-ui",
              }}
            >
              Talk to Our Experts
            </a>
          </div>
        </div>
      )}
    </header>
  );
}

import { useCallback } from "react";
import Navbar from "../components/sections/Navbar";
import Hero from "../components/sections/Hero";
import Stats from "../components/sections/Stats";
import About from "../components/sections/About";
import Services from "../components/sections/Services";
import Partnership from "../components/sections/Partnership";
import Contact from "../components/sections/Contact";
import Footer from "../components/sections/Footer";
import ScrollProgress from "../components/ScrollProgress";

export default function Home() {
  const scrollTo = useCallback((id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, []);

  return (
    <div className="min-h-screen bg-[var(--background)] text-[var(--foreground)]">
      {/* Top Nav (expects onNav(sectionId)) */}
      <Navbar onNav={scrollTo} />
        <ScrollProgress /> 

      {/* Hero (expects CTA handlers) */}
      <Hero
        onPrimary={() => scrollTo("services")}
        onSecondary={() => scrollTo("about")}
      />
      

      {/* Main sections */}
      <Stats />
      <About />
      <Services />
      <Partnership />
      <Contact />

      {/* Footer */}
      <Footer />

      {/* Floating CTA (optional) */}
      <button
  onClick={() => scrollTo("contact")}
  className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-gradient-to-br from-[#00B3FF] to-[#0099E6] text-white 
             shadow-[0_4px_20px_rgba(0,179,255,0.4)] hover:shadow-[0_6px_30px_rgba(0,179,255,0.55)] 
             transition-all duration-300 transform hover:scale-110 hover:-translate-y-1 
             flex items-center justify-center ring-1 ring-white/20 backdrop-blur-sm"
  aria-label="Contact"
  title="Contact"
>
  {/* modern message-bubble icon */}
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="26"
    height="26"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="drop-shadow-sm"
  >
    <path d="M21 15a4 4 0 0 1-4 4H9l-4 4v-4H5a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h12a4 4 0 0 1 4 4v8z" />
    <path d="M7 9h10M7 13h6" />
  </svg>

  {/* subtle glowing ring pulse animation */}
  <span className="absolute inset-0 rounded-full animate-ping bg-[#00B3FF]/30 scale-90"></span>
</button>

    </div>
  );
}

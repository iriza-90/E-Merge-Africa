import React from "react";

/**
 * ScrollProgress
 * Renders a thin gradient bar below your fixed navbar that tracks page scroll.
 * - `top` = CSS length where the bar should sit (match your navbar height).
 */
export default function ScrollProgress({ top = 64 }) {
  const [width, setWidth] = React.useState(0);

  React.useEffect(() => {
    let raf;
    const onScroll = () => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        const h = document.documentElement;
        const scrolled = window.scrollY || h.scrollTop || 0;
        const total = (h.scrollHeight - window.innerHeight) || 1;
        setWidth((scrolled / total) * 100);
      });
    };
    onScroll(); // initialize
    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
    };
  }, []);

  return (
    <div
      className="fixed left-0 right-0 z-[60] pointer-events-none"
      style={{ top }}
      aria-hidden="true"
    >
      <div className="h-[3px] bg-transparent">
        <div
          className="h-full rounded-r-full bg-gradient-to-r from-[#00B3FF] to-[#00D4AA] transition-[width] duration-150 ease-out"
          style={{ width: `${width}%` }}
        />
      </div>
    </div>
  );
}

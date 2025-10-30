import React from "react";

/**
 * TiltWrapper
 * - Subtle 3D tilt that follows the cursor
 * - Automatically disables for touch + reduced motion
 * - Props:
 *    max = max tilt degrees (default 6)
 *    scale = hover scale (default 1.02)
 */
export default function TiltWrapper({ children, max = 6, scale = 1.02, className = "" }) {
  const ref = React.useRef(null);
  const isTouch = typeof window !== "undefined" && matchMedia("(hover: none)").matches;
  const prefersReduced = typeof window !== "undefined" && matchMedia("(prefers-reduced-motion: reduce)").matches;

  React.useEffect(() => {
    if (isTouch || prefersReduced) return;
    const el = ref.current;
    if (!el) return;

    const onMove = (e) => {
      const r = el.getBoundingClientRect();
      const px = (e.clientX - (r.left + r.width / 2)) / (r.width / 2);
      const py = (e.clientY - (r.top + r.height / 2)) / (r.height / 2);
      const rx = Math.max(Math.min(-py * max, max), -max);
      const ry = Math.max(Math.min(px * max, max), -max);
      el.style.transform = `perspective(800px) rotateX(${rx}deg) rotateY(${ry}deg) scale(${scale})`;
    };

    const reset = () => {
      el.style.transition = "transform 180ms ease-out";
      el.style.transform = "perspective(800px) rotateX(0) rotateY(0) scale(1)";
      // clear transition after it runs once
      const t = setTimeout(() => (el.style.transition = ""), 180);
      return () => clearTimeout(t);
    };

    el.addEventListener("mousemove", onMove);
    el.addEventListener("mouseleave", reset);
    return () => {
      el.removeEventListener("mousemove", onMove);
      el.removeEventListener("mouseleave", reset);
    };
  }, [isTouch, prefersReduced, max, scale]);

  return (
    <div ref={ref} className={`will-change-transform ${className}`}>
      {children}
    </div>
  );
}

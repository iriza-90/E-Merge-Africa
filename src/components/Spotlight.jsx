import React from "react";

export default function Spotlight() {
  const ref = React.useRef(null);

  React.useEffect(() => {
    const el = ref.current;
    const move = (e) => {
      const r = el.getBoundingClientRect();
      const x = e.clientX - r.left;
      const y = e.clientY - r.top;
      el.style.setProperty("--mx", `${x}px`);
      el.style.setProperty("--my", `${y}px`);
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none fixed inset-0 z-[5]"
      style={{
        background:
          "radial-gradient(160px 160px at var(--mx) var(--my), rgba(0,179,255,.08), rgba(0,179,255,0) 70%)",
      }}
    />
  );
}

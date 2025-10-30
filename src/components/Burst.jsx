import { useCallback } from "react";


export default function Burst() {
  const burst = useCallback((x = window.innerWidth / 2, y = 120) => {
    const PARTICLES = 28;
    for (let i = 0; i < PARTICLES; i++) {
      const dot = document.createElement("div");
      dot.style.cssText =
        "position:fixed;width:6px;height:6px;border-radius:9999px;z-index:9999;pointer-events:none;will-change:transform,opacity";
      dot.style.background = i % 3 ? "#00B3FF" : "#00D4AA";
      document.body.appendChild(dot);

      const angle = (i / PARTICLES) * Math.PI * 2;
      const distance = 40 + Math.random() * 90;
      const tx = Math.cos(angle) * distance;
      const ty = Math.sin(angle) * distance;

      const rotate = Math.floor(Math.random() * 360);

      dot.animate(
        [
          { transform: `translate(${x}px, ${y}px)`, opacity: 1, offset: 0 },
          {
            transform: `translate(${x + tx}px, ${y + ty}px) rotate(${rotate}deg)`,
            opacity: 0,
            offset: 1,
          },
        ],
        {
          duration: 900 + Math.random() * 500,
          easing: "cubic-bezier(.2,.8,.2,1)",
          fill: "forwards",
        }
      ).onfinish = () => dot.remove();
    }
  }, []);

  return burst;
}

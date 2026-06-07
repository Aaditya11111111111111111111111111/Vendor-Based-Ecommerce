import { useRef, useEffect } from "react";

const items = [
  // Sarees
  { label: "Banarasi Saree", type: "saree" },
  { label: "Kanjivaram", type: "saree" },
  { label: "Patola", type: "saree" },
  { label: "Organza", type: "saree" },
  { label: "Chanderi", type: "saree" },
  { label: "Tissue Silk", type: "saree" },
  { label: "Georgette Saree", type: "saree" },
  { label: "Chiffon Saree", type: "saree" },
  { label: "Net Saree", type: "saree" },
  { label: "Linen Saree", type: "saree" },
  // Lehengas
  { label: "Bridal Lehenga", type: "lehenga" },
  { label: "Designer Lehenga", type: "lehenga" },
  { label: "Embroidered Lehenga", type: "lehenga" },
  { label: "Sequin Lehenga", type: "lehenga" },
  // T-Shirts
  { label: "Oversized T-Shirt", type: "tshirt" },
  { label: "Polo T-Shirt", type: "tshirt" },
  { label: "Graphic Tee", type: "tshirt" },
  { label: "Henley T-Shirt", type: "tshirt" },
  { label: "V-Neck T-Shirt", type: "tshirt" },
  // Pants & Jeans
  { label: "Slim Fit Jeans", type: "pants" },
  { label: "Wide Leg Pants", type: "pants" },
  { label: "Denim Joggers", type: "pants" },
  { label: "Cargo Pants", type: "pants" },
  { label: "Chinos", type: "pants" },
  { label: "Palazzo Pants", type: "pants" },
  // Others
  { label: "Kurti", type: "other" },
  { label: "Anarkali Suit", type: "other" },
  { label: "Sherwani", type: "other" },
  { label: "Kurta Pajama", type: "other" },
  { label: "Indo-Western", type: "other" },
];

// Duplicate items so the scroll loops seamlessly
const displayItems = [...items, ...items];

const dotColor = {
  saree: "#c084fc",    // purple
  lehenga: "#f472b6",  // pink
  tshirt: "#60a5fa",   // blue
  pants: "#34d399",    // green
  other: "#fbbf24",    // amber
};

export default function Display() {
  const trackRef = useRef(null);
  const animFrameRef = useRef(null);
  const posRef = useRef(0);
  const speedRef = useRef(0.6); // px per frame

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    const half = track.scrollWidth / 2;

    const step = () => {
      posRef.current += speedRef.current;
      if (posRef.current >= half) posRef.current = 0;
      track.style.transform = `translateX(-${posRef.current}px)`;
      animFrameRef.current = requestAnimationFrame(step);
    };

    animFrameRef.current = requestAnimationFrame(step);

    // Pause on hover
    const pause = () => (speedRef.current = 0);
    const play = () => (speedRef.current = 0.6);
    track.addEventListener("mouseenter", pause);
    track.addEventListener("mouseleave", play);

    return () => {
      cancelAnimationFrame(animFrameRef.current);
      track.removeEventListener("mouseenter", pause);
      track.removeEventListener("mouseleave", play);
    };
  }, []);

  return (
    <section className="relative w-full overflow-hidden bg-[#0f0e0e] border-y border-neutral-800 py-5 select-none">
      {/* Left fade */}
      <div className="pointer-events-none absolute left-0 top-0 h-full w-16 z-10"
        style={{ background: "linear-gradient(to right, #0f0e0e, transparent)" }} />
      {/* Right fade */}
      <div className="pointer-events-none absolute right-0 top-0 h-full w-16 z-10"
        style={{ background: "linear-gradient(to left, #0f0e0e, transparent)" }} />

      {/* Scrolling track */}
      <div ref={trackRef} className="flex items-center gap-0 will-change-transform whitespace-nowrap">
        {displayItems.map((item, i) => (
          <span key={i} className="flex items-center gap-2 px-5">
            {/* Colored dot */}
            <span
              className="inline-block w-1.5 h-1.5 rounded-full flex-shrink-0"
              style={{ backgroundColor: dotColor[item.type] }}
            />
            {/* Label */}
            <span
              className="text-sm font-light tracking-widest uppercase cursor-default transition-colors duration-200"
              style={{ color: "#b0a89a", fontFamily: "'Georgia', serif", letterSpacing: "0.18em" }}
              onMouseEnter={e => (e.target.style.color = dotColor[item.type])}
              onMouseLeave={e => (e.target.style.color = "#b0a89a")}
            >
              {item.label}
            </span>
            {/* Separator dot */}
            <span className="ml-3 text-neutral-600 text-xs">·</span>
          </span>
        ))}
      </div>
    </section>
  );
}

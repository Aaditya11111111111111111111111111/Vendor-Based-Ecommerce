import { useState } from "react";
import men   from "../../assets/images/categories/17.png";
import women from "../../assets/images/categories/15.png";
import kids  from "../../assets/images/categories/16.png";

const panels = [
  { key: "men",   label: "Men",   image: men,   accent: "#e879a0" },
  { key: "women", label: "Women", image: women, accent: "#f9a8d4" },
  { key: "kids",  label: "Kids",  image: kids,  accent: "#e879a0" },
];

const CategoryHero = () => {
  const [active, setActive] = useState(null);

  return (
    <section
      className="relative w-full flex overflow-hidden -mt-16"
      style={{ height: "calc(100vh - 64px)" }}
    >
      {panels.map((p, i) => {
        const isActive = active === p.key;
        const isInactive = active !== null && !isActive;

        return (
          <div
            key={p.key}
            className="relative overflow-hidden cursor-pointer"
            style={{
              flex: isActive ? "1.6" : isInactive ? "0.7" : "1",
              transition: "flex 0.6s cubic-bezier(0.77,0,0.175,1)",
              borderRight: i < panels.length - 1 ? "1px solid rgba(255,255,255,0.12)" : "none",
            }}
            onMouseEnter={() => setActive(p.key)}
            onMouseLeave={() => setActive(null)}
          >
            {/* Image */}
            <img
              src={p.image}
              alt={p.label}
              className="absolute inset-0 w-full h-full object-cover object-top"
              style={{
                transform: isActive ? "scale(1.07)" : "scale(1.0)",
                filter: isInactive ? "brightness(0.65)" : "brightness(1)",
                transition: "transform 0.9s cubic-bezier(0.25,0.46,0.45,0.94), filter 0.5s ease",
              }}
            />

            {/* Base gradient — always present */}
            <div
              className="absolute inset-0"
              style={{
                background: isActive
                  ? "linear-gradient(to bottom, rgba(0,0,0,0) 30%, rgba(0,0,0,0.85) 100%)"
                  : "linear-gradient(to bottom, rgba(0,0,0,0) 40%, rgba(0,0,0,0.65) 100%)",
                transition: "background 0.5s ease",
              }}
            />

            {/* Bottom content */}
            <div className="absolute bottom-0 left-0 right-0 z-10 px-6 pb-10">

              {/* Animated line */}
              <div
                style={{
                  height: "1px",
                  background: `linear-gradient(to right, ${p.accent}, transparent)`,
                  marginBottom: "16px",
                  width: isActive ? "100%" : "0%",
                  transition: "width 0.6s ease 0.1s",
                }}
              />

              {/* Category name */}
              <div className="overflow-hidden">
                <h2
                  className="font-bold text-white leading-none"
                  style={{
                    fontFamily: "Georgia, serif",
                    fontSize: isActive ? "clamp(2.8rem, 4.5vw, 4rem)" : "clamp(2rem, 3.5vw, 3rem)",
                    letterSpacing: "-0.02em",
                    transform: isActive ? "translateY(0)" : "translateY(6px)",
                    transition: "font-size 0.5s ease, transform 0.5s ease",
                  }}
                >
                  {p.label}
                </h2>
              </div>

              {/* Sub label — slides up on hover */}
              <div
                style={{
                  overflow: "hidden",
                  maxHeight: isActive ? "40px" : "0px",
                  opacity: isActive ? 1 : 0,
                  transition: "max-height 0.5s ease 0.15s, opacity 0.4s ease 0.1s",
                  marginTop: "8px",
                }}
              >
                <p className="text-white/50 text-xs uppercase tracking-[0.35em]">
                  Explore Collection →
                </p>
              </div>

            </div>

            {/* Vertical label — visible when collapsed */}
            <div
              className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none"
              style={{
                opacity: isInactive ? 0.4 : 0,
                transition: "opacity 0.4s ease",
              }}
            >
              <span
                className="text-white font-bold uppercase tracking-[0.4em] text-sm"
                style={{
                  writingMode: "vertical-rl",
                  textOrientation: "mixed",
                  transform: "rotate(180deg)",
                  fontFamily: "Georgia, serif",
                }}
              >
                {p.label}
              </span>
            </div>

          </div>
        );
      })}

      {/* Eyebrow — top center */}
      <div className="absolute top-24 left-0 right-0 flex justify-center z-20 pointer-events-none">
        <span className="text-white/20 text-[10px] uppercase tracking-[0.5em]">
          Shop by Category
        </span>
      </div>

    </section>
  );
};

export default CategoryHero;

import { useState, useEffect } from "react";
import video1 from "../../assets/images/banners/1.mp4";
import video2 from "../../assets/images/banners/1.mov";

const stats = [
  { value: "500+", label: "Products" },
  { value: "50+",  label: "Vendors" },
  { value: "10K+", label: "Customers" },
];

const AboutStory = () => {
  const [active, setActive] = useState(0);

  // Swap background video every 6 seconds
  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a === 0 ? 1 : 0)), 6000);
    return () => clearInterval(t);
  }, []);

  return (
    <section className="relative w-full overflow-hidden" style={{ height: "100vh" }}>

      {/* ── Background videos — crossfade ── */}
      {[video1, video2].map((src, i) => (
        <video
          key={i}
          src={src}
          autoPlay muted loop playsInline
          className="absolute inset-0 w-full h-full object-cover transition-opacity duration-1000"
          style={{ opacity: active === i ? 1 : 0 }}
        />
      ))}

      {/* ── Overlay — left half dark for text, right fades to transparent ── */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(to right, rgba(247,243,239,0.97) 0%, rgba(247,243,239,0.92) 45%, rgba(247,243,239,0.3) 70%, transparent 100%)",
        }}
      />

      {/* ── Content — left side only ── */}
      <div className="relative z-10 h-full flex items-start w-full pt-12 sm:pt-16 lg:pt-20">
        <div className="w-full lg:w-1/2 px-6 sm:px-10 lg:px-16">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-5">
            <span className="w-6 h-px bg-pink-500 block" />
            <span className="text-pink-500 text-[10px] font-bold uppercase tracking-[0.35em]">
              Who We Are
            </span>
          </div>

          {/* Heading */}
          <h2
            className="text-gray-900 font-bold leading-tight text-3xl sm:text-4xl lg:text-5xl xl:text-6xl"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            A marketplace built
            <span className="block italic font-light text-pink-500 mt-1">
              on trust & craft.
            </span>
          </h2>

          {/* Body */}
          <p className="mt-4 sm:mt-6 text-gray-600 text-sm sm:text-base leading-relaxed">
            StyleHub connects independent fashion vendors with customers who care about quality.
            Every product is handpicked, verified, and backed by sellers who are passionate
            about what they create.
          </p>

          <p className="mt-3 text-gray-600 text-sm sm:text-base leading-relaxed">
            From the weavers of Varanasi to streetwear designers in Biratnagar — we give every
            maker a stage and every buyer the best of South Asian fashion.
          </p>

          {/* Video switch dots */}
          <div className="flex items-center gap-2 mt-6">
            {[0, 1].map((i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="transition-all duration-300"
                style={{
                  width: active === i ? "24px" : "8px",
                  height: "8px",
                  borderRadius: "4px",
                  backgroundColor: active === i ? "#ec4899" : "#d1d5db",
                  border: "none",
                  cursor: "pointer",
                }}
              />
            ))}
          </div>

          {/* Stats */}
          <div className="flex items-center gap-8 mt-8 pt-6 border-t border-gray-200/80">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p
                  className="text-gray-900 font-bold text-2xl sm:text-3xl leading-none"
                  style={{ fontFamily: "Georgia, serif" }}
                >
                  {stat.value}
                </p>
                <p className="text-gray-400 text-xs uppercase tracking-widest mt-1">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default AboutStory;

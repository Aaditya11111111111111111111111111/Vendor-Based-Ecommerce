import hero from "../../assets/images/banners/hero.png";
import { ArrowRight } from "lucide-react";

const stats = [
  { value: "500+", label: "Products" },
  { value: "50+",  label: "Vendors" },
  { value: "10K+", label: "Customers" },
];

const Hero = () => {
  return (
    <section className="relative w-full overflow-hidden" style={{ height: "calc(100vh - 64px)" }}>

      {/* Background image */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-center"
      />

      {/* Overlay — solid black left, fades to transparent right */}
      <div className="absolute inset-0"
        style={{ background: "linear-gradient(to right, #0a0a0a 38%, rgba(10,10,10,0.7) 60%, transparent 85%)" }}
      />

      {/* Content — left column only */}
      <div className="relative z-10 h-full flex items-center">
        <div className="px-8 sm:px-12 lg:px-16 max-w-[560px]">

          {/* Eyebrow */}
          <div className="flex items-center gap-3 mb-7">
            <span className="w-7 h-px bg-pink-500 block" />
            <span className="text-pink-500 text-xs font-semibold uppercase tracking-[0.35em]">
              New Collection 2026
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-white font-bold leading-[1.05] tracking-tight
                         text-5xl sm:text-6xl lg:text-[4.5rem]">
            Fashion That
            <span className="block text-pink-500 italic font-light"
              style={{ fontStyle: "italic" }}>
              Defines Your Style
            </span>
          </h1>

          {/* Pink underline accent */}
          <div className="w-10 h-0.5 bg-pink-500 mt-6 mb-6" />

          {/* Description */}
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-sm">
            Curated collections from premium brands and independent vendors.
            Discover timeless fashion crafted for confidence, comfort, and
            everyday elegance.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap items-center gap-3 mt-8">
            <button className="flex items-center gap-2 bg-pink-600 hover:bg-pink-700
                               text-white font-semibold text-sm px-7 py-3.5
                               transition-all shadow-lg shadow-pink-900/30">
              Shop Collection
              <ArrowRight size={15} />
            </button>
            <button className="text-white text-sm font-medium px-7 py-3.5
                               border border-white/40 hover:bg-white/10 transition-all">
              Explore Vendors
            </button>
          </div>

          {/* Stats with dividers */}
          <div className="flex items-center gap-0 mt-12">
            {stats.map((stat, i) => (
              <div key={stat.label} className="flex items-center">
                <div className="pr-8">
                  <p className="text-white text-3xl sm:text-4xl font-bold leading-none">
                    {stat.value}
                  </p>
                  <p className="text-gray-400 text-[10px] uppercase tracking-[0.2em] mt-1.5">
                    {stat.label}
                  </p>
                </div>
                {i < stats.length - 1 && (
                  <div className="w-px h-10 bg-white/20 mr-8" />
                )}
              </div>
            ))}
          </div>

        </div>
      </div>

    </section>
  );
};

export default Hero;

import hero from "../../assets/images/banners/hero.png";
import { ArrowRight } from "lucide-react";
import Navbar from "../Navbar/Navbar";

const stats = [
  { value: "500+", label: "Products" },
  { value: "50+",  label: "Vendors" },
  { value: "10K+", label: "Customers" },
];

const Hero = () => {
  return (
    <div className="relative w-full h-screen overflow-hidden">

      {/* Background image — full 100vh */}
      <img
        src={hero}
        alt="Hero"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />



      {/* Navbar sits at the top inside the hero */}
      <div className="relative z-20">
        <Navbar />
      </div>

      {/* Hero content fills the rest */}
      <div className="relative z-10 flex items-center"
           style={{ height: "calc(100% - 64px)" }}>
        <div className="w-full max-w-7xl mx-auto px-8 sm:px-12 lg:px-16">
          <div className="max-w-[520px]">

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
              <span className="block text-pink-500 italic font-light">
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

            {/* Stats */}
            <div className="flex items-center mt-12">
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
      </div>

    </div>
  );
};

export default Hero;

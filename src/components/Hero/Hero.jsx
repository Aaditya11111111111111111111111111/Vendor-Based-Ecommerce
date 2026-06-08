import hero from "../../assets/images/banners/hero.png";
import { BadgeCheck, Shirt, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Premium Quality", desc: "Finest materials" },
  { icon: Shirt,      title: "Trendy Styles",   desc: "Latest collections" },
  { icon: ShieldCheck,title: "Easy Returns",    desc: "Hassle free" },
];

const Hero = () => {
  return (
    <>
      {/* ── MOBILE HERO (< lg) ── full-screen bg image + centered content */}
      <section className="lg:hidden relative min-h-screen flex items-center justify-center overflow-hidden">

        {/* Background image */}
        <img
          src={hero}
          alt="Fashion Model"
          className="absolute inset-0 w-full h-full object-cover object-top"
        />

        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/70" />

        {/* Content — centered */}
        <div className="relative z-10 text-center px-6 pt-24 pb-16">

          <p className="text-pink-400 font-semibold mb-3 text-sm uppercase tracking-widest">
            New Collection 2026
          </p>

          <h1 className="text-4xl sm:text-5xl font-bold leading-tight tracking-tighter text-white">
            Discover Fashion
            <span className="block text-pink-400 mt-1">
              That Defines You
            </span>
          </h1>

          <p className="mt-4 text-sm sm:text-base text-white/70 max-w-sm mx-auto">
            Premium clothing designed for comfort, confidence and everyday elegance.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center gap-x-5 gap-y-3 mt-7">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                    <Icon className="text-pink-400" size={15} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-xs text-white">{item.title}</h4>
                    <p className="text-[10px] text-white/50">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* CTA */}
          <div className="mt-7">
            <button className="px-8 py-3 rounded-2xl bg-pink-600 hover:bg-pink-700
                               text-white font-medium flex items-center gap-2
                               shadow-lg shadow-pink-900/40 transition-all text-sm mx-auto">
              Shop Now
              <ArrowRight size={16} />
            </button>
          </div>

        </div>
      </section>

      {/* ── DESKTOP HERO (lg+) ── two-column layout unchanged */}
      <section className="hidden lg:flex items-center relative overflow-hidden bg-white">
        <div className="w-full max-w-7xl mx-auto px-8 pt-28 pb-20
                        grid grid-cols-2 gap-20 items-center">

          {/* Left Content */}
          <div>
            <p className="text-pink-600 font-semibold mb-4 text-lg">
              New Collection 2026
            </p>

            <h1 className="text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
              Discover Fashion
              <span className="block text-pink-600 mt-3">
                That Defines You
              </span>
            </h1>

            <p className="mt-6 text-lg text-gray-600 max-w-md">
              Premium clothing designed for comfort, confidence and everyday elegance.
            </p>

            {/* Features */}
            <div className="flex flex-wrap gap-x-8 gap-y-5 mt-10">
              {features.map((item) => {
                const Icon = item.icon;
                return (
                  <div key={item.title} className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0">
                      <Icon className="text-pink-600" size={22} />
                    </div>
                    <div>
                      <h4 className="font-semibold text-base">{item.title}</h4>
                      <p className="text-sm text-gray-500">{item.desc}</p>
                    </div>
                  </div>
                );
              })}
            </div>

            <button className="mt-10 px-9 py-4 rounded-2xl bg-pink-600 hover:bg-pink-700
                               text-white font-medium flex items-center gap-2
                               shadow-lg shadow-pink-200 transition-all">
              Shop Now
              <ArrowRight size={20} />
            </button>
          </div>

          {/* Right Image */}
          <div className="-mr-12">
            <img
              src={hero}
              alt="Fashion Model"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>

        </div>
      </section>
    </>
  );
};

export default Hero;

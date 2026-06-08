import { useRef, useState, useEffect } from "react";
import heroBg from "../../assets/images/banners/15.PNG";
import heroVideo from "../../assets/images/banners/1.mov";
import { BadgeCheck, Shirt, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Premium Quality", desc: "Finest materials" },
  { icon: Shirt,       title: "Trendy Styles",   desc: "Latest collections" },
  { icon: ShieldCheck, title: "Easy Returns",    desc: "Hassle free" },
];

const Hero = () => {
  const videoRef = useRef(null);
  const sectionRef = useRef(null);
  // tracks whether user has chosen to have sound on
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true); // ref so IntersectionObserver always reads latest value

  // Keep ref in sync with state
  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  // Pause audio when section leaves viewport, resume when it comes back
  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        if (!video) return;
        if (entry.isIntersecting) {
          // Back in view — restore user's mute preference
          video.muted = mutedRef.current;
        } else {
          // Out of view — always mute (silence without changing user pref)
          video.muted = true;
        }
      },
      { threshold: 0.1 } // triggers when 10% of section is visible
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSectionClick = (e) => {
    if (e.target.closest("[data-cta]")) return;
    if (videoRef.current) {
      const newMuted = !muted;
      videoRef.current.muted = newMuted;
      setMuted(newMuted);
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative min-h-screen flex items-start sm:items-center overflow-hidden cursor-pointer"
      onClick={handleSectionClick}
    >

      {/* Background video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20" />

      {/* Content */}
      <div className="relative z-10 w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 pt-20 pb-6 sm:py-10">

        <p className="text-pink-400 font-semibold mb-3 text-sm sm:text-base uppercase tracking-widest">
          New Collection 2026
        </p>

        <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter text-white max-w-2xl">
          Discover Fashion
          <span className="block text-pink-400 mt-1 lg:mt-3">
            That Defines You
          </span>
        </h1>

        <p className="mt-5 text-base sm:text-lg text-white/70 max-w-md">
          Premium clothing designed for comfort, confidence and everyday elegance.
        </p>

        {/* Features */}
        <div className="flex flex-wrap gap-x-6 gap-y-4 mt-8">
          {features.map((item) => {
            const Icon = item.icon;
            return (
              <div key={item.title} className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-2xl bg-white/10 backdrop-blur-sm flex items-center justify-center shrink-0">
                  <Icon className="text-pink-400" size={18} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm sm:text-base text-white">{item.title}</h4>
                  <p className="text-xs sm:text-sm text-white/60">{item.desc}</p>
                </div>
              </div>
            );
          })}
        </div>

        {/* CTA */}
        <button
          data-cta
          className="mt-10 px-7 sm:px-9 py-3 sm:py-4 rounded-full bg-pink-600
                     hover:bg-pink-700 active:scale-95 text-white font-semibold
                     flex items-center gap-2 shadow-lg shadow-pink-900/40
                     transition-all duration-200 text-sm sm:text-base cursor-pointer"
        >
          Shop Now
          <ArrowRight size={18} />
        </button>

      </div>
    </section>
  );
};

export default Hero;

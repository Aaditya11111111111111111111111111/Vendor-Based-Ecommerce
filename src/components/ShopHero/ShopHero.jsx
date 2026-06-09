import heroVideo from "../../assets/images/banners/1.mov";

const ShopHero = () => {
  return (
    <section className="relative w-full overflow-hidden -mt-16" style={{ height: "50vh" }}>

      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover object-center"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
      />

      {/* Overlay — matches site color scheme */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, rgba(3,3,3,0.60) 0%, rgba(24,23,24,0.45) 60%, rgba(9,9,9,0.55) 100%)",
        }}
      />

      {/* Foreground — centered */}
      <div className="relative z-10 h-full flex flex-col items-center justify-center text-center px-6">

        {/* Site title */}
        <h1
          className="text-white font-bold tracking-tight
                     text-4xl sm:text-5xl lg:text-6xl"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Style<span className="text-pink-500">Hub</span>
        </h1>

        {/* Quote */}
        <p className="mt-4 text-white/70 text-sm sm:text-base lg:text-lg
                      max-w-md leading-relaxed italic"
           style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}>
          "Where every thread tells a story,
          <span className="block">and every piece is made for you."</span>
        </p>

        {/* Subtle divider */}
        <div className="mt-5 w-10 h-px bg-pink-500/60" />

      </div>

    </section>
  );
};

export default ShopHero;
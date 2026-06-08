const Hero = () => {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center px-6 py-24">

      <div className="max-w-4xl w-full text-center">

        {/* Eyebrow */}
        <span className="mb-5 inline-block px-4 py-2 text-xs font-semibold uppercase
                         tracking-[0.3em] text-white/70 border-b border-white/20">
          What We Offer
        </span>

        {/* Headline */}
        <h2 className="mt-4 text-4xl sm:text-5xl md:text-6xl font-bold leading-tight text-white">
          A Marketplace Designed
          <span className="block text-pink-400 mt-2">
            For Growing Businesses
          </span>
        </h2>

        {/* Description */}
        <p className="mx-auto mt-6 max-w-2xl text-base sm:text-lg leading-relaxed text-white/60">
          We provide businesses with a powerful platform to showcase
          their finest products, connect with customers, build brand
          trust, and grow their sales through a seamless digital shopping
          experience.
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
          <button className="px-8 py-3 rounded-full bg-pink-600 hover:bg-pink-700
                             font-medium text-white transition-all duration-200
                             shadow-lg shadow-pink-900/40">
            Become a Vendor
          </button>
          <button className="px-8 py-3 rounded-full border border-white/30
                             font-medium text-white hover:bg-white/10
                             transition-all duration-200">
            Learn More
          </button>
        </div>

      </div>

    </section>
  );
};

export default Hero;

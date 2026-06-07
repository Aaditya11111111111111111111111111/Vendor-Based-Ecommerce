import hero from "../../assets/images/banners/hero.png";
import { BadgeCheck, Shirt, ShieldCheck, ArrowRight } from "lucide-react";

const features = [
  { icon: BadgeCheck, title: "Premium Quality", desc: "Finest materials" },
  { icon: Shirt,      title: "Trendy Styles",   desc: "Latest collections" },
  { icon: ShieldCheck,title: "Easy Returns",    desc: "Hassle free" },
];

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-white py-16 sm:py-20 lg:py-0">
      <div className="w-full max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12
                      grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-20 items-center">

        {/* Left Content */}
        <div className="text-center lg:text-left order-2 lg:order-1">
          <p className="text-pink-600 font-semibold mb-3 text-sm sm:text-base lg:text-lg">
            New Collection 2026
          </p>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
            Discover Fashion
            <span className="block text-pink-600 mt-1 lg:mt-3">
              That Defines You
            </span>
          </h1>

          <p className="mt-5 text-base sm:text-lg text-gray-600 max-w-md mx-auto lg:mx-0">
            Premium clothing designed for comfort, confidence and everyday elegance.
          </p>

          {/* Features */}
          <div className="flex flex-wrap justify-center lg:justify-start gap-x-6 gap-y-5 mt-8">
            {features.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="flex items-center gap-3">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-pink-50 flex items-center justify-center shrink-0">
                    <Icon className="text-pink-600" size={20} />
                  </div>
                  <div className="text-left">
                    <h4 className="font-semibold text-sm sm:text-base">{item.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-500">{item.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="flex justify-center lg:justify-start mt-8">
            <button className="px-7 sm:px-9 py-3 sm:py-4 rounded-2xl bg-pink-600 hover:bg-pink-700
                               text-white font-medium flex items-center gap-2
                               shadow-lg shadow-pink-200 transition-all text-sm sm:text-base">
              Shop Now
              <ArrowRight size={18} />
            </button>
          </div>
        </div>

        {/* Right Image */}
        <div className="order-1 lg:order-2 lg:-mr-12">
          <img
            src={hero}
            alt="Fashion Model"
            className="w-full max-h-[55vh] sm:max-h-[60vh] lg:max-h-none object-cover rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;

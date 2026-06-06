import hero from "../../assets/images/banners/hero.png";
import {
  BadgeCheck,
  Shirt,
  ShieldCheck,
  ArrowRight,
} from "lucide-react";

const features = [
  {
    icon: BadgeCheck,
    title: "Premium Quality",
    desc: "Finest materials",
  },
  {
    icon: Shirt,
    title: "Trendy Styles",
    desc: "Latest collections",
  },
  {
    icon: ShieldCheck,
    title: "Easy Returns",
    desc: "Hassle free",
  },
];

const Hero = () => {
  return (
    <section className="min-h-[90vh] flex items-center relative overflow-hidden bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
        {/* Left Content */}
        <div className="lg:pt-8">
          <p className="text-pink-600 font-semibold mb-4 text-base lg:text-lg">
            New Collection 2026
          </p>

          <h1 className="text-5xl lg:text-6xl xl:text-7xl font-bold leading-tight tracking-tighter">
            Discover Fashion
            <span className="block text-pink-600 mt-2 lg:mt-3">
              That Defines You
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-md">
            Premium clothing designed for comfort,
            confidence and everyday elegance.
          </p>

          {/* Features */}
          <div className="flex flex-wrap gap-x-8 gap-y-6 mt-10">
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

          <button className="mt-10 px-9 py-4 rounded-2xl bg-pink-600 hover:bg-pink-700 text-white font-medium flex items-center gap-2 shadow-lg shadow-pink-200 transition-all">
            Shop Now
            <ArrowRight size={20} />
          </button>
        </div>

        {/* Right Image */}
        <div className="relative lg:-mr-12">
          <img
            src={hero}
            alt="Fashion Model"
            className="w-full rounded-3xl shadow-2xl"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
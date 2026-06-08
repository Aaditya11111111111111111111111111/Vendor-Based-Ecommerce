import { categories } from "../../assets/data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

const CategoriesAnimation = lazy(() => import("./CategoriesAnimation"));

const Categories = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [showAnimation, setShowAnimation] = useState(false);
  const sectionRef = useRef(null);

  useEffect(() => {
    const element = sectionRef.current;
    if (!element) { setIsVisible(true); setShowAnimation(true); return; }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          setShowAnimation(true);
          observer.disconnect();
        }
      },
      { rootMargin: "0px 0px -80px 0px", threshold: 0.1 }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full py-16 sm:py-20 overflow-hidden"
      style={{ backgroundColor: "#f7f3ef" }}
    >
      {/* Lazy confetti — fires once when section enters viewport */}
      {showAnimation && (
        <Suspense fallback={null}>
          <CategoriesAnimation />
        </Suspense>
      )}

      {/* Header */}
      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="text-center mb-10 sm:mb-14 px-4"
      >
        {/* Eyebrow with dashes */}
        <div className="flex items-center justify-center gap-3 mb-4">
          <span className="w-8 h-px bg-pink-500 block" />
          <span className="text-pink-500 text-[11px] font-semibold uppercase tracking-[0.3em]">
            Shop By Category
          </span>
          <span className="w-8 h-px bg-pink-500 block" />
        </div>

        {/* Main heading */}
        <h2
          className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight"
          style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
        >
          Find Your Perfect Style.
        </h2>

        {/* Subtitle */}
        <p className="mt-4 text-gray-500 text-sm sm:text-base max-w-sm mx-auto leading-relaxed">
          Explore our handpicked collections designed for every
          member of your family.
        </p>

        {/* Leaf with stem SVG divider */}
        <div className="mt-6 flex items-center justify-center">
          <svg
            width="120" height="32"
            viewBox="0 0 120 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            {/* Central stem */}
            <line x1="60" y1="28" x2="60" y2="8" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round"/>
            {/* Left branch */}
            <path d="M60 18 C52 12, 42 14, 38 16" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            {/* Left leaf */}
            <path d="M38 16 C34 10, 40 6, 46 10 C44 14, 38 16, 38 16Z" fill="#f9a8d4" opacity="0.8"/>
            {/* Right branch */}
            <path d="M60 18 C68 12, 78 14, 82 16" stroke="#f472b6" strokeWidth="1.2" strokeLinecap="round" fill="none"/>
            {/* Right leaf */}
            <path d="M82 16 C86 10, 80 6, 74 10 C76 14, 82 16, 82 16Z" fill="#f9a8d4" opacity="0.8"/>
            {/* Top left small leaf */}
            <path d="M60 10 C56 4, 50 5, 52 10 C55 11, 60 10, 60 10Z" fill="#f9a8d4" opacity="0.6"/>
            {/* Top right small leaf */}
            <path d="M60 10 C64 4, 70 5, 68 10 C65 11, 60 10, 60 10Z" fill="#f9a8d4" opacity="0.6"/>
            {/* Left far branch */}
            <path d="M60 22 C48 18, 36 20, 30 22" stroke="#f472b6" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
            {/* Right far branch */}
            <path d="M60 22 C72 18, 84 20, 90 22" stroke="#f472b6" strokeWidth="1" strokeLinecap="round" fill="none" opacity="0.5"/>
            {/* Base dot */}
            <circle cx="60" cy="28" r="2" fill="#ec4899" opacity="0.7"/>
          </svg>
        </div>
      </motion.div>

      {/* Cards */}
      <motion.div
        initial={{ opacity: 0, y: 28 }}
        animate={isVisible ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
      >
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
          {categories.map((category, i) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              animate={isVisible ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            >
              <CategoryCard title={category.title} image={category.image} />
            </motion.div>
          ))}
        </div>
      </motion.div>

    </section>
  );
};

export default Categories;

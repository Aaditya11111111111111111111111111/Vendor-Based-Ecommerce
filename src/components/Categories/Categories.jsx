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
    <section ref={sectionRef} className="relative py-16 sm:py-20 lg:py-28 overflow-hidden">
      {showAnimation && (
        <Suspense fallback={<div className="pointer-events-none absolute inset-x-0 top-0 h-72 -z-10 bg-pink-50/30" />}>
          <CategoriesAnimation />
        </Suspense>
      )}

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12 relative z-10">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-4"
        >
          <div>
            <p className="text-pink-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
              Collections
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              Shop By Category
            </h2>
          </div>
          <button className="text-pink-600 font-semibold hover:underline text-sm sm:text-base">
            View All
          </button>
        </motion.div>

        {/* Grid — 1 col mobile, 2 col tablet, 4 col desktop */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6 lg:gap-8"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 220, damping: 18 }}
            >
              <CategoryCard title={category.title} image={category.image} />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Categories;

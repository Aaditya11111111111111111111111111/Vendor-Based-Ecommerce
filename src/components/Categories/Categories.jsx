import { categories } from "../../assets/data/categories";
import CategoryCard from "../CategoryCard/CategoryCard";
import { lazy, Suspense, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

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
      { threshold: 0.1, rootMargin: "0px 0px -50px 0px" }
    );
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative pt-25 pb-10 lg:pt-25 lg:pb-14 overflow-hidden"
    >
      {showAnimation && (
        <Suspense fallback={<div className="pointer-events-none absolute inset-0" />}>
          <CategoriesAnimation />
        </Suspense>
      )}

      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-10 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 mb-8"
        >
          <div>
            <p className="text-pink-400 uppercase tracking-[0.2em] text-2xl md:text-3xl font-bold mb-2">
              Collections
            </p>
            <h2 className="text-xs md:text-sm font-semibold tracking-[0.2em] uppercase text-white/50">
              Shop By Category
            </h2>
          </div>

          <button className="group flex items-center gap-2 text-white/70 hover:text-pink-400 transition-colors font-medium text-sm">
            View All Products
            <ArrowRight
              size={15}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </motion.div>

        {/* Cards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isVisible ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5"
        >
          {categories.map((category) => (
            <motion.div
              key={category.id}
              whileHover={{ y: -5 }}
              transition={{ type: "spring", stiffness: 280, damping: 20 }}
            >
              <CategoryCard
                title={category.title}
                image={category.image}
                subtitle={category.subtitle}
                tag={category.tag}
              />
            </motion.div>
          ))}
        </motion.div>

      </div>
    </section>
  );
};

export default Categories;
import { ArrowRight } from "lucide-react";

const CategoryCard = ({ image, title }) => {
  return (
    <div className="group cursor-pointer overflow-hidden rounded-t-xl shadow-sm
                    hover:shadow-md transition-shadow duration-300 bg-white">

      {/* Image — tall portrait */}
      <div className="overflow-hidden h-52 sm:h-72 lg:h-[420px]">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top
                     transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Footer strip — white, category name left, arrow right */}
      <div className="flex items-center justify-between px-4 py-3.5 bg-white">
        <span className="text-gray-900 text-base sm:text-lg font-medium">
          {title}
        </span>
        <ArrowRight
          size={18}
          className="text-pink-500 transition-transform duration-300 group-hover:translate-x-1"
        />
      </div>

    </div>
  );
};

export default CategoryCard;

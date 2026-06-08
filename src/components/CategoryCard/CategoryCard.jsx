const CategoryCard = ({ image, title }) => {
  return (
    <div className="group cursor-pointer border border-gray-300 hover:border-pink-400
                    hover:shadow-md transition-all duration-300 bg-white">

      {/* Image — no overlay, no gradient */}
      <div className="overflow-hidden h-48 sm:h-72 lg:h-96">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top
                     transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* Text below image — separated by border */}
      <div className="border-t border-gray-300 px-4 py-3">
        <h3 className="text-gray-900 text-base sm:text-lg font-semibold">
          {title}
        </h3>
        <p className="text-xs sm:text-sm text-gray-400 mt-0.5">
          Explore Collection
        </p>
      </div>

    </div>
  );
};

export default CategoryCard;

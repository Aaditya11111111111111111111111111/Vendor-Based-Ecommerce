const CategoryCard = ({ image, title, subtitle, tag }) => {
  return (
    <div className="group cursor-pointer overflow-hidden bg-white border border-gray-100 hover:shadow-lg transition-shadow duration-300">

      <div className="relative overflow-hidden h-[30rem] sm:h-80 lg:h-96">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
        />
        {tag && (
          <div className="absolute top-3 left-3 bg-black text-white text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
            {tag}
          </div>
        )}
      </div>

      <div className="px-4 py-3.5 bg-white">
        <h3 className="text-base sm:text-lg font-semibold text-gray-900 leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-xs text-gray-400 uppercase tracking-wider font-medium">
          {subtitle}
        </p>
      </div>

    </div>
  );
};

export default CategoryCard;
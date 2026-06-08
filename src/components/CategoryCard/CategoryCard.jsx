const CategoryCard = ({ image, title, subtitle, tag }) => {
  return (
    <div className="group cursor-pointer overflow-hidden border border-white/20 hover:border-white/50
                    transition-all duration-300 hover:shadow-lg hover:shadow-black/30">

      {/* Image area */}
      <div className="relative overflow-hidden h-52 sm:h-80 lg:h-96">
        <img
          src={image}
          alt={title}
          className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
        />
        {tag && (
          <div className="absolute top-3 left-3 bg-black/70 backdrop-blur-sm text-white
                          text-[9px] font-bold uppercase tracking-widest px-2.5 py-1">
            {tag}
          </div>
        )}
      </div>

      {/* Text area — transparent with white text */}
      <div className="px-4 py-3.5 border-t border-white/20 bg-black/30 backdrop-blur-sm
                      h-[4.5rem] flex flex-col justify-center">
        <h3 className="text-base sm:text-lg font-semibold text-white leading-snug">
          {title}
        </h3>
        <p className="mt-1 text-xs text-white/50 uppercase tracking-wider font-medium line-clamp-1">
          {subtitle}
        </p>
      </div>

    </div>
  );
};

export default CategoryCard;

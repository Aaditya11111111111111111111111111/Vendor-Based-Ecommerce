const CategoryCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-2xl sm:rounded-3xl
                    h-64 sm:h-80 lg:h-96 cursor-pointer">

      <img
        src={image}
        alt={title}
        className="h-full w-full object-cover transition-all duration-700 group-hover:scale-110"
      />

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

      <div className="absolute bottom-5 sm:bottom-8 left-5 sm:left-8">
        <h3 className="text-white text-xl sm:text-2xl lg:text-3xl font-bold">
          {title}
        </h3>
        <p className="text-white/80 mt-1 text-sm sm:text-base">
          Explore Collection
        </p>
      </div>

    </div>
  );
};

export default CategoryCard;

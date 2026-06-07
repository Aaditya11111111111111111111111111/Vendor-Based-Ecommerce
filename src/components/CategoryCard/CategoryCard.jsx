const CategoryCard = ({ image, title }) => {
  return (
    <div className="group relative overflow-hidden rounded-3xl h-105 cursor-pointer">

      <img
        src={image}
        alt={title}
        className="
          h-full
          w-full
          object-cover
          transition-all
          duration-700
          group-hover:scale-110
        "
      />

      <div
        className="
          absolute
          inset-0
          bg-linear-to-t
          from-black/80
          via-black/20
          to-transparent
        "
      />

      <div className="absolute bottom-8 left-8">

        <h3 className="text-white text-3xl font-bold">
          {title}
        </h3>

        <p className="text-white/80 mt-2">
          Explore Collection
        </p>

      </div>

    </div>
  );
};

export default CategoryCard;
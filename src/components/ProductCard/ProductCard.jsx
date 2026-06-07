import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div className="bg-white rounded-2xl sm:rounded-3xl overflow-hidden shadow-sm
                    hover:shadow-2xl transition-all duration-300 group">

      {/* Image */}
      <div className="relative overflow-hidden h-56 sm:h-72 lg:h-80">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover transition-all duration-700 group-hover:scale-105"
        />
        <div className="absolute top-4 left-4 bg-pink-600 text-white px-3 py-1 rounded-full text-xs sm:text-sm">
          New
        </div>
      </div>

      {/* Info */}
      <div className="p-4 sm:p-6">
        <p className="text-gray-500 text-xs sm:text-sm">{product.category}</p>
        <h3 className="text-base sm:text-xl font-semibold mt-1 sm:mt-2 line-clamp-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-4 sm:mt-5">
          <span className="text-lg sm:text-2xl font-bold text-pink-600">
            Rs. {product.price}
          </span>
          <button className="flex items-center gap-1 sm:gap-2 bg-pink-600 text-white
                             px-3 sm:px-5 py-2 sm:py-3 rounded-full hover:bg-black
                             transition text-xs sm:text-sm">
            <FiShoppingBag />
            Add
          </button>
        </div>
      </div>

    </div>
  );
};

export default ProductCard;

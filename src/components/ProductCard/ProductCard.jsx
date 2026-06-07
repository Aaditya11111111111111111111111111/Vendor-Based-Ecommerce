import { FiShoppingBag } from "react-icons/fi";

const ProductCard = ({ product }) => {
  return (
    <div
      className="
        bg-white
        rounded-3xl
        overflow-hidden
        shadow-sm
        hover:shadow-2xl
        transition-all
        duration-300
        group
      "
    >
      <div className="relative overflow-hidden h-105">

        <img
          src={product.image}
          alt={product.name}
          className="
            h-full
            w-full
            object-cover
            transition-all
            duration-700
            group-hover:scale-105
          "
        />

        <div
          className="
            absolute
            top-5
            left-5
            bg-pink-600
            text-white
            px-4
            py-1
            rounded-full
            text-sm
          "
        >
          New
        </div>

      </div>

      <div className="p-6">

        <p className="text-gray-500 text-sm">
          {product.category}
        </p>

        <h3 className="text-xl font-semibold mt-2">
          {product.name}
        </h3>

        <div className="flex items-center justify-between mt-5">

          <span className="text-2xl font-bold text-pink-600">
            Rs. {product.price}
          </span>

          <button
            className="
              flex
              items-center
              gap-2
              bg-pink-600
              text-white
              px-5
              py-3
              rounded-full
              hover:bg-black
              transition
            "
          >
            <FiShoppingBag />
            Add
          </button>

        </div>

      </div>
    </div>
  );
};

export default ProductCard;
import { products } from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = () => {
  const arrivals = products.filter((p) => p.newArrival);

  return (
    <section className="py-16 sm:py-20 lg:py-28">
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-12">

        <div className="flex flex-col items-center text-center mb-10 sm:mb-14 gap-4">
          <div>
            <p className="text-pink-600 font-semibold uppercase tracking-wider text-sm sm:text-base">
              Latest Collection
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mt-2">
              New Arrivals
            </h2>
          </div>
          <button className="text-pink-600 font-semibold hover:underline text-sm sm:text-base">
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 sm:gap-6 lg:gap-8">
          {arrivals.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>

      </div>
    </section>
  );
};

export default NewArrivals;

import { products } from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";

const NewArrivals = () => {

  const arrivals = products.filter(
    (product) => product.newArrival
  );

  return (
    <section className="py-28">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-14 gap-6">

          <div>
            <p className="text-pink-600 font-semibold uppercase tracking-wider">
              Latest Collection
            </p>

            <h2 className="text-5xl font-bold mt-2">
              New Arrivals
            </h2>
          </div>

          <button className="text-pink-600 font-semibold hover:underline">
            View All
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {arrivals.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
            />
          ))}

        </div>

      </div>

    </section>
  );
};

export default NewArrivals;
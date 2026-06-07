import { products } from "../../assets/data/products";
import ProductCard from "../ProductCard/ProductCard";

const FeaturedProducts = () => {

  const featuredProducts = products.filter(
    (product) => product.featured
  );

  return (
    <section className="bg-[#fafafa] py-28">

      <div className="max-w-7xl mx-auto px-4">

        <div className="flex flex-col items-center text-center mb-14 gap-6">

          <div>
            <p className="text-pink-600 font-semibold uppercase tracking-wider">
              Featured
            </p>

            <h2 className="text-5xl font-bold mt-2">
              Featured Products
            </h2>
          </div>

          <button className="text-pink-600 font-semibold hover:underline">
            View All
          </button>

        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">

          {featuredProducts.map((product) => (
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

export default FeaturedProducts;
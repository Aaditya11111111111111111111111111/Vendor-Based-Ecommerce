import { useState, useMemo } from "react";
import { FiSearch, FiShoppingBag } from "react-icons/fi";
import { products } from "../../assets/data/products";
import { categories } from "../../assets/data/categories";

const BestProducts = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const categoryOptions = ["All", ...categories.map((c) => c.title)];

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const matchCat =
        activeCategory === "All" || p.category.toLowerCase().includes(activeCategory.toLowerCase());
      const matchSearch =
        !search.trim() || p.name.toLowerCase().includes(search.toLowerCase());
      return matchCat && matchSearch;
    });
  }, [search, activeCategory]);

  return (
    <section className="w-full py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

      {/* ── Top bar ── */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">

        {/* Left: title + count */}
        <div>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
          >
            Collection
          </h2>
          <p className="text-gray-400 text-sm mt-1">
            Showing <span className="text-gray-700 font-semibold">{filtered.length}</span> out of{" "}
            <span className="text-gray-700 font-semibold">{products.length}</span> products
          </p>
        </div>

        {/* Right: category filter + search */}
        <div className="flex flex-wrap items-center gap-3">

          {/* Category pills */}
          <div className="flex flex-wrap gap-2">
            {categoryOptions.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 text-xs font-semibold uppercase tracking-wider
                            border transition-all duration-200
                            ${activeCategory === cat
                              ? "bg-pink-600 border-pink-600 text-white"
                              : "border-gray-300 text-gray-600 hover:border-pink-400 hover:text-pink-500 bg-white"
                            }`}
              >
                {cat}
              </button>
            ))}
          </div>

          {/* Search bar */}
          <div className="flex items-center gap-2 bg-white border border-gray-300
                          hover:border-pink-400 transition-colors px-3 py-2 min-w-[180px]">
            <FiSearch size={14} className="text-gray-400 shrink-0" />
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search..."
              className="bg-transparent outline-none text-sm w-full text-gray-700 placeholder-gray-400"
            />
          </div>

        </div>
      </div>

      {/* ── Product grid ── */}
      {filtered.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-24 text-gray-400">
          <p className="text-lg">No products found.</p>
        </div>
      ) : (
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 lg:gap-4">
          {filtered.map((product) => (
            <div
              key={product.id}
              className="group cursor-pointer overflow-hidden rounded-t-xl shadow-sm
                         hover:shadow-md transition-shadow duration-300 bg-white"
            >
              {/* Image — exact same as CategoryCard */}
              <div className="overflow-hidden h-52 sm:h-72 lg:h-[420px]">
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-top
                             transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Footer strip — fixed height, two rows */}
              <div className="px-3 py-3 bg-white" style={{ minHeight: "88px" }}>
                {/* Row 1: category + price */}
                <div className="flex items-center justify-between mb-1">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider">
                    {product.category}
                  </p>
                  <span className="text-pink-600 font-bold text-sm">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>
                {/* Row 2: name + add button */}
                <div className="flex items-center justify-between gap-2">
                  <span className="text-gray-900 text-sm font-medium line-clamp-1 flex-1">
                    {product.name}
                  </span>
                  <button className="shrink-0 flex items-center gap-1 bg-pink-600 hover:bg-pink-700
                                     text-white text-xs font-semibold px-3 py-1.5 transition-all">
                    <FiShoppingBag size={11} />
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}

      </div>
    </section>
  );
};

export default BestProducts;

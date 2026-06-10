import { useState, useMemo } from "react";
import { useNavigate } from "react-router-dom";
import { FiSearch, FiShoppingCart } from "react-icons/fi";
import { products } from "../../assets/data/products";
import { categories } from "../../assets/data/categories";
import { useCart } from "../../context/CartContext";
import toast from "react-hot-toast";

const BestProducts = () => {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");
  const { addToCart } = useCart();
  const navigate = useNavigate();

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
              {/* Image — clickable → product detail */}
              <div
                className="overflow-hidden h-52 sm:h-72 lg:h-[420px] cursor-pointer"
                onClick={() => navigate(`/product/${product.id}`)}
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="h-full w-full object-cover object-top
                             transition-transform duration-700 group-hover:scale-105"
                />
              </div>

              {/* Footer strip */}
              <div className="px-3 pt-3 pb-3 bg-white flex items-end justify-between gap-2">

                {/* Left: category → name → price stacked */}
                <div className="min-w-0 flex-1">
                  <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                    {product.category}
                  </p>
                  <p
                    className="text-gray-900 text-sm font-semibold line-clamp-1 mb-1 cursor-pointer hover:text-pink-500 transition-colors"
                    onClick={() => navigate(`/product/${product.id}`)}
                  >
                    {product.name}
                  </p>
                  <span className="text-pink-600 font-bold text-sm">
                    ₹{product.price.toLocaleString()}
                  </span>
                </div>

                {/* Right: cart icon aligned to bottom */}
                <button
                    className="shrink-0 p-2 text-pink-500 hover:text-pink-600 transition-colors duration-200 mb-0.5"
                    onClick={() => {
                      addToCart(product);
                      toast.custom((t) => (
                        <div
                          onClick={() => { toast.dismiss(t.id); navigate("/cart"); }}
                          className={`flex items-center gap-3 bg-white border border-gray-100
                                      shadow-lg px-4 py-3 transition-all duration-300 cursor-pointer
                                      hover:border-pink-200 hover:shadow-pink-100
                                      ${t.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"}`}
                          style={{ minWidth: "220px" }}
                        >
                          <div className="w-10 h-10 shrink-0 overflow-hidden bg-gray-50">
                            <img
                              src={product.image}
                              alt={product.name}
                              className="w-full h-full object-cover object-top"
                            />
                          </div>
                          <div className="flex-1 min-w-0">
                            <p className="text-[11px] text-pink-500 font-bold uppercase tracking-widest mb-0.5">
                              Added to bag
                            </p>
                            <p className="text-gray-800 text-xs font-semibold line-clamp-1">
                              {product.name}
                            </p>
                            <p className="text-[10px] text-gray-400 mt-0.5">Tap to view cart →</p>
                          </div>
                          <FiShoppingCart size={16} className="text-pink-400 shrink-0" />
                        </div>
                      ));
                    }}
                    aria-label="Add to cart"
                  >
                    <FiShoppingCart size={18} />
                </button>

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

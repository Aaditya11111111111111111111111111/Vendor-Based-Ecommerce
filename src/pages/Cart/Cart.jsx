import { Link } from "react-router-dom";
import { FiX, FiPlus, FiMinus, FiArrowRight, FiShoppingBag } from "react-icons/fi";
import { useCart } from "../../context/CartContext";

const Cart = () => {
  const { items, updateQty, remove } = useCart();

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0);
  const shipping = subtotal >= 2000 ? 0 : 149;
  const total    = subtotal + shipping;
  const saved    = subtotal >= 2000 ? 149 : 0;

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f3ef" }}>
      <div className="max-w-6xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">

        {/* ── PAGE HEADING ── */}
        <div className="flex items-end justify-between mb-10 pb-6 border-b border-gray-200">
          <div>
            <p className="text-pink-500 text-[10px] font-bold uppercase tracking-[0.4em] mb-1">
              StyleHub
            </p>
            <h1
              className="text-3xl sm:text-4xl font-bold text-gray-900 leading-none"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              Your Bag
            </h1>
          </div>
          {items.length > 0 && (
            <span className="text-gray-400 text-sm">
              {items.length} {items.length === 1 ? "item" : "items"}
            </span>
          )}
        </div>

        {/* ── EMPTY STATE ── */}
        {items.length === 0 && (
          <div className="flex flex-col items-center justify-center py-32 text-center">
            <div className="w-20 h-20 rounded-full bg-pink-50 flex items-center justify-center mb-6">
              <FiShoppingBag size={32} className="text-pink-300" />
            </div>
            <h3
              className="text-2xl font-bold text-gray-800 mb-2"
              style={{ fontFamily: "Georgia, serif" }}
            >
              Your bag is empty
            </h3>
            <p className="text-gray-400 text-sm mb-8 max-w-xs">
              You haven't added anything yet. Explore our collections and find something you love.
            </p>
            <Link
              to="/shop"
              className="inline-flex items-center gap-2 bg-pink-600 hover:bg-pink-700
                         text-white font-semibold text-sm px-8 py-4 transition-all"
            >
              Explore Shop
              <FiArrowRight size={15} />
            </Link>
          </div>
        )}

        {/* ── CART CONTENT ── */}
        {items.length > 0 && (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-14 items-start">

            {/* ── LEFT: item list (2/3) ── */}
            <div className="lg:col-span-2 space-y-0">
              {items.map((item, i) => (
                <div
                  key={item.id}
                  className={`flex gap-5 sm:gap-6 py-6 ${i < items.length - 1 ? "border-b border-gray-200" : ""}`}
                >
                  {/* Thumbnail */}
                  <div className="w-24 h-28 sm:w-28 sm:h-36 shrink-0 overflow-hidden bg-gray-100">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover object-top"
                    />
                  </div>

                  {/* Details */}
                  <div className="flex-1 min-w-0 flex flex-col justify-between">
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <p className="text-gray-400 text-[10px] uppercase tracking-wider mb-1">
                          {item.category}
                        </p>
                        <h3 className="text-gray-900 font-semibold text-sm sm:text-base leading-snug">
                          {item.name}
                        </h3>
                        <p className="text-pink-600 font-bold text-base mt-1">
                          ₹{item.price.toLocaleString()}
                        </p>
                      </div>
                      {/* Remove */}
                      <button
                        onClick={() => remove(item.id)}
                        className="text-gray-300 hover:text-pink-500 transition-colors shrink-0 mt-0.5"
                        aria-label="Remove item"
                      >
                        <FiX size={18} />
                      </button>
                    </div>

                    {/* Qty + row total */}
                    <div className="flex items-center justify-between mt-4">
                      {/* Qty stepper */}
                      <div className="flex items-center border border-gray-300 divide-x divide-gray-300">
                        <button
                          onClick={() => updateQty(item.id, -1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500
                                     hover:text-pink-500 hover:bg-pink-50 transition-colors"
                        >
                          <FiMinus size={12} />
                        </button>
                        <span className="w-10 h-8 flex items-center justify-center text-sm font-semibold text-gray-800">
                          {item.qty}
                        </span>
                        <button
                          onClick={() => updateQty(item.id, 1)}
                          className="w-8 h-8 flex items-center justify-center text-gray-500
                                     hover:text-pink-500 hover:bg-pink-50 transition-colors"
                        >
                          <FiPlus size={12} />
                        </button>
                      </div>

                      {/* Row total */}
                      <p className="text-gray-900 font-bold text-base">
                        ₹{(item.price * item.qty).toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              ))}

              {/* Continue shopping */}
              <div className="pt-6">
                <Link
                  to="/shop"
                  className="text-sm text-gray-400 hover:text-pink-500 transition-colors flex items-center gap-2"
                >
                  ← Continue Shopping
                </Link>
              </div>
            </div>

            {/* ── RIGHT: order summary (1/3) sticky ── */}
            <div className="lg:col-span-1 lg:sticky lg:top-8">
              <div className="bg-white p-7">

                {/* Summary heading */}
                <h2 className="text-gray-900 font-bold text-sm uppercase tracking-wider mb-6 pb-4 border-b border-gray-100">
                  Order Summary
                </h2>

                {/* Line items */}
                <div className="space-y-3 text-sm text-gray-600">
                  <div className="flex justify-between">
                    <span>Subtotal ({items.reduce((s, i) => s + i.qty, 0)} items)</span>
                    <span className="font-medium text-gray-800">₹{subtotal.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Shipping</span>
                    <span className={`font-medium ${shipping === 0 ? "text-green-600" : "text-gray-800"}`}>
                      {shipping === 0 ? "FREE" : `₹${shipping}`}
                    </span>
                  </div>
                  {saved > 0 && (
                    <div className="flex justify-between text-green-600 text-xs">
                      <span>You saved</span>
                      <span>₹{saved}</span>
                    </div>
                  )}
                  {shipping > 0 && (
                    <p className="text-[11px] text-gray-400 bg-pink-50 px-3 py-2">
                      Add ₹{(2000 - subtotal).toLocaleString()} more for free shipping
                    </p>
                  )}
                </div>

                {/* Total */}
                <div className="flex justify-between items-center mt-5 pt-5 border-t border-gray-100">
                  <span className="text-gray-900 font-bold text-base">Total</span>
                  <span className="text-gray-900 font-bold text-xl">₹{total.toLocaleString()}</span>
                </div>

                {/* Checkout CTA */}
                <button
                  className="w-full mt-6 flex items-center justify-center gap-2
                             bg-pink-600 hover:bg-pink-700 text-white font-semibold
                             text-sm py-4 transition-all shadow-lg shadow-pink-200"
                >
                  Checkout
                  <FiArrowRight size={15} />
                </button>

                {/* Trust line */}
                <p className="text-center text-[11px] text-gray-400 mt-4 tracking-wide">
                  🔒 Secure checkout · Easy returns · COD available
                </p>

              </div>

              {/* Promo code */}
              <div className="mt-3 bg-white p-5">
                <p className="text-xs font-bold uppercase tracking-wider text-gray-400 mb-3">
                  Promo Code
                </p>
                <div className="flex gap-0">
                  <input
                    type="text"
                    placeholder="Enter code"
                    className="flex-1 border border-gray-200 px-4 py-2.5 text-sm outline-none
                               focus:border-pink-400 transition-colors bg-[#fdf8f5] text-gray-700
                               placeholder-gray-300"
                  />
                  <button
                    className="bg-gray-900 hover:bg-pink-600 text-white text-xs font-semibold
                               px-5 py-2.5 transition-colors shrink-0"
                  >
                    Apply
                  </button>
                </div>
              </div>

            </div>

          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;

import { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import {
  FiShoppingCart, FiPlus, FiMinus,
  FiTruck, FiMapPin, FiDollarSign, FiShield,
} from "react-icons/fi";
import toast from "react-hot-toast";
import { products } from "../../assets/data/products";
import { useCart } from "../../context/CartContext";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart } = useCart();

  const product = products.find((p) => p.id === Number(id));

  const [activeImg, setActiveImg] = useState(0);
  const [qty, setQty] = useState(1);
  const [pincode, setPincode] = useState("");
  const [pincodeMsg, setPincodeMsg] = useState("");

  // Use the same product image 4 times as placeholders
  const images = product ? [product.image, product.image, product.image, product.image] : [];

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center gap-4"
           style={{ backgroundColor: "#f7f3ef" }}>
        <p className="text-gray-500 text-lg">Product not found.</p>
        <button onClick={() => navigate("/shop")}
                className="text-sm text-pink-500 hover:underline flex items-center gap-1">
          ← Back to Shop
        </button>
      </div>
    );
  }

  const handleAddToCart = () => {
    for (let i = 0; i < qty; i++) addToCart(product);
    toast.custom((t) => (
      <div
        onClick={() => { toast.dismiss(t.id); navigate("/cart"); }}
        className={`flex items-center gap-3 bg-white border border-gray-100 shadow-lg
                    px-4 py-3 cursor-pointer hover:border-pink-200 transition-all duration-300
                    ${t.visible ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"}`}
        style={{ minWidth: "220px" }}
      >
        <div className="w-10 h-10 shrink-0 overflow-hidden bg-gray-50">
          <img src={product.image} alt={product.name}
               className="w-full h-full object-cover object-top" />
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-[11px] text-pink-500 font-bold uppercase tracking-widest mb-0.5">
            Added to bag
          </p>
          <p className="text-gray-800 text-xs font-semibold line-clamp-1">{product.name}</p>
          <p className="text-[10px] text-gray-400 mt-0.5">Tap to view cart →</p>
        </div>
        <FiShoppingCart size={16} className="text-pink-400 shrink-0" />
      </div>
    ));
  };

  const checkPincode = () => {
    if (pincode.length !== 6 || isNaN(pincode)) {
      setPincodeMsg("Enter a valid 6-digit pincode.");
      return;
    }
    setPincodeMsg("Delivery available! Estimated 3–5 business days.");
  };

  return (
    <div className="min-h-screen" style={{ backgroundColor: "#f7f3ef" }}>
      <div className="max-w-7xl mx-auto px-4 sm:px-8 lg:px-12 py-10 sm:py-14">

        {/* ── 3-COLUMN LAYOUT ── */}
        <div className="grid grid-cols-1 lg:grid-cols-[280px_1fr_260px] gap-8 lg:gap-10 items-start">

          {/* ══ LEFT — image thumbnails (4-row grid) ══ */}
          <div className="grid grid-cols-2 lg:grid-cols-1 gap-2 lg:gap-3">
            {images.map((img, i) => (
              <button
                key={i}
                onClick={() => setActiveImg(i)}
                className={`overflow-hidden aspect-square border-2 transition-all duration-200
                            ${activeImg === i
                              ? "border-pink-500 shadow-md"
                              : "border-transparent hover:border-pink-300"
                            }`}
              >
                <img
                  src={img}
                  alt={`${product.name} view ${i + 1}`}
                  className="w-full h-full object-cover object-top"
                />
              </button>
            ))}
          </div>

          {/* ══ MIDDLE — product info ══ */}
          <div className="flex flex-col gap-5">

            {/* Active image preview */}
            <div className="w-full overflow-hidden bg-gray-100 aspect-[3/4] max-h-[520px]">
              <img
                src={images[activeImg]}
                alt={product.name}
                className="w-full h-full object-cover object-top"
              />
            </div>

            {/* Category */}
            <p className="text-pink-500 text-[10px] font-bold uppercase tracking-[0.35em]">
              {product.category}
            </p>

            {/* Name */}
            <h1
              className="text-2xl sm:text-3xl font-bold text-gray-900 leading-snug"
              style={{ fontFamily: "Georgia, 'Times New Roman', serif" }}
            >
              {product.name}
            </h1>

            {/* Price */}
            <p className="text-2xl font-bold text-pink-600">
              ₹{product.price.toLocaleString()}
            </p>

            {/* Short description */}
            <p className="text-gray-500 text-sm leading-relaxed max-w-lg">
              {product.description}
            </p>

            {/* Divider */}
            <div className="border-t border-gray-200" />

            {/* Quantity */}
            <div className="flex items-center gap-4">
              <span className="text-sm font-semibold text-gray-700 uppercase tracking-wider">
                Qty
              </span>
              <div className="flex items-center border border-gray-300 divide-x divide-gray-300">
                <button
                  onClick={() => setQty((q) => Math.max(1, q - 1))}
                  className="w-9 h-9 flex items-center justify-center text-gray-500
                             hover:text-pink-500 hover:bg-pink-50 transition-colors"
                >
                  <FiMinus size={12} />
                </button>
                <span className="w-12 h-9 flex items-center justify-center text-sm
                                 font-semibold text-gray-800">
                  {qty}
                </span>
                <button
                  onClick={() => setQty((q) => q + 1)}
                  className="w-9 h-9 flex items-center justify-center text-gray-500
                             hover:text-pink-500 hover:bg-pink-50 transition-colors"
                >
                  <FiPlus size={12} />
                </button>
              </div>
            </div>

            {/* Add to cart */}
            <button
              onClick={handleAddToCart}
              className="flex items-center justify-center gap-2 bg-pink-600 hover:bg-pink-700
                         text-white font-semibold text-sm py-4 w-full sm:max-w-xs
                         transition-all shadow-md shadow-pink-200"
            >
              <FiShoppingCart size={16} />
              Add to Cart
            </button>

          </div>

          {/* ══ RIGHT — delivery & info panel ══ */}
          <div className="flex flex-col gap-4">

            {/* ── Delivery destination ── */}
            <div className="bg-white p-5">
              <div className="flex items-center gap-2 mb-3">
                <FiMapPin size={14} className="text-pink-500 shrink-0" />
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700">
                  Check Delivery
                </p>
              </div>
              <div className="flex gap-0">
                <input
                  type="text"
                  maxLength={6}
                  value={pincode}
                  onChange={(e) => { setPincode(e.target.value); setPincodeMsg(""); }}
                  placeholder="Enter pincode"
                  className="flex-1 border border-gray-200 px-3 py-2 text-sm outline-none
                             focus:border-pink-400 transition-colors bg-[#fdf8f5]
                             text-gray-700 placeholder-gray-300"
                />
                <button
                  onClick={checkPincode}
                  className="bg-gray-900 hover:bg-pink-600 text-white text-xs font-semibold
                             px-4 py-2 transition-colors shrink-0"
                >
                  Check
                </button>
              </div>
              {pincodeMsg && (
                <p className={`text-[11px] mt-2 ${pincodeMsg.startsWith("Delivery available")
                  ? "text-green-600" : "text-red-500"}`}>
                  {pincodeMsg}
                </p>
              )}
            </div>

            {/* ── Delivery charge ── */}
            <div className="bg-white p-5 flex items-start gap-3">
              <FiTruck size={16} className="text-pink-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Delivery Charge
                </p>
                <p className="text-sm text-gray-500">
                  Free delivery on orders above{" "}
                  <span className="text-gray-800 font-semibold">₹2,000</span>.
                  Otherwise{" "}
                  <span className="text-gray-800 font-semibold">₹149</span> shipping fee.
                </p>
              </div>
            </div>

            {/* ── Cash on Delivery ── */}
            <div className="bg-white p-5 flex items-start gap-3">
              <FiDollarSign size={16} className="text-pink-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Cash on Delivery
                </p>
                <span className="inline-block text-xs font-semibold bg-green-50 text-green-600
                                 px-2 py-0.5 border border-green-200">
                  Available
                </span>
              </div>
            </div>

            {/* ── Warranty ── */}
            <div className="bg-white p-5 flex items-start gap-3">
              <FiShield size={16} className="text-pink-500 shrink-0 mt-0.5" />
              <div>
                <p className="text-xs font-bold uppercase tracking-wider text-gray-700 mb-1">
                  Warranty
                </p>
                {product.Warranty === "Available" ? (
                  <span className="inline-block text-xs font-semibold bg-green-50 text-green-600
                                   px-2 py-0.5 border border-green-200">
                    Available
                  </span>
                ) : (
                  <span className="inline-block text-xs font-semibold bg-red-50 text-red-500
                                   px-2 py-0.5 border border-red-200">
                    Not Available
                  </span>
                )}
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;

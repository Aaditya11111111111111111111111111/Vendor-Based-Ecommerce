import { useEffect } from "react";
import confetti from "canvas-confetti";

const CategoriesAnimation = () => {
  useEffect(() => {
    confetti({
      particleCount: 70,
      spread: 110,
      origin: { y: 0.6 },
      scalar: 0.85,
      colors: ["#ff6bcb", "#ff9fd3", "#ffffff", "#f4c7ff"],
    });
  }, []);

  return (
    <div className="pointer-events-none absolute inset-x-0 top-0 h-72 -z-10 overflow-hidden" />
  );
};

export default CategoriesAnimation;

import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";
import Shop from "../pages/Shop/Shop";
import CategoriesPage from "../pages/Categories/Categories";

const AppRoutes = () => {
  return (
    <Routes>
      {/* Home — standalone, Hero owns the navbar */}
      <Route path="/" element={<Home />} />

      {/* All other pages — fixed solid navbar via MainLayout */}
      <Route element={<MainLayout />}>
        <Route path="/shop" element={<Shop />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/contact" element={<div className="p-10 text-gray-700">Contact page coming soon</div>} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;

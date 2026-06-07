import { Routes, Route } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home/Home";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        {/* Add more pages here — they'll all inherit Navbar + Footer automatically */}
      </Route>
    </Routes>
  );
};

export default AppRoutes;

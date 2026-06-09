import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

// Used for all pages EXCEPT Home
const MainLayout = () => {
  return (
    <div style={{ backgroundColor: "#f7f3ef", minHeight: "100vh" }}>
      <Navbar solid />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;

import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

const MainLayout = () => {
  return (
    <>
      <Navbar />
      <div className="pt-16">
        <Outlet />
      </div>
      <Footer />
    </>
  );
};

export default MainLayout;

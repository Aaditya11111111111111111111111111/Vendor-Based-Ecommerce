import { useRef, useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import heroVideo from "../assets/images/banners/1.mov";
import heroBg from "../assets/images/banners/15.PNG";

const MainLayout = () => {
  const videoRef = useRef(null);
  const [muted, setMuted] = useState(true);
  const mutedRef = useRef(true);

  useEffect(() => {
    mutedRef.current = muted;
  }, [muted]);

  return (
    <div className="relative">

      {/* Fixed video background — stays locked while everything scrolls over it */}
      <video
        ref={videoRef}
        className="fixed inset-0 w-full h-full object-cover -z-10"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        poster={heroBg}
      />

      {/* Fixed overlay — softens the video */}
      <div className="fixed inset-0 bg-gradient-to-r from-black/75 via-black/50 to-black/20 -z-10" />

      <Navbar />
      <Outlet />
      <Footer />
    </div>
  );
};

export default MainLayout;

import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Display from "../../components/Display/Display";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer"


const Home = () => {
    return (
        <>
        <Navbar />
        <div className="pt-[60px] sm:pt-[68px]">
        <Hero />
        <Display />
        <Categories />
        <Footer />
        </div>
        </>
    );
};

export default Home;
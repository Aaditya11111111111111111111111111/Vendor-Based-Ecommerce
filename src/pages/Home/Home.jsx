import Navbar from "../../components/Navbar/Navbar";
import Hero from "../../components/Hero/Hero";
import Categories from "../../components/Categories/Categories";
import Footer from "../../components/Footer/Footer"


const Home = () => {
    return (
        <>
        <Navbar />
        <Hero />

        <Categories />
        <Footer />
        </>
    );
};

export default Home;
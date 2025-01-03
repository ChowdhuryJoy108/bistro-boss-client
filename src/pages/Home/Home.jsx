import Banner from "./HomeComponents/Banner";
import FeaturedMenu from "./HomeComponents/FeaturedMenu";
import OurMenu from "./HomeComponents/OurMenu";
import PopularMenu from "./HomeComponents/PopularMenu";
import Testimonials from "./HomeComponents/Testimonials";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurMenu />
            <FeaturedMenu />
            <PopularMenu />
            <Testimonials />
        </div>
    );
};

export default Home;
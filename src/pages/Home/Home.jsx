import Banner from "./HomeComponents/Banner";
import FeaturedMenu from "./HomeComponents/FeaturedMenu";
import OurMenu from "./HomeComponents/OurMenu";
import PopularMenu from "./HomeComponents/PopularMenu";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurMenu />
            <FeaturedMenu />
            <PopularMenu />
        </div>
    );
};

export default Home;
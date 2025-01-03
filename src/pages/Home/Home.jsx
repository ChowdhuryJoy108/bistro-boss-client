import Banner from "./HomeComponents/Banner";
import FeaturedMenu from "./HomeComponents/FeaturedMenu";
import OurMenu from "./HomeComponents/OurMenu";


const Home = () => {
    return (
        <div>
            <Banner />
            <OurMenu />
            <FeaturedMenu />
        </div>
    );
};

export default Home;
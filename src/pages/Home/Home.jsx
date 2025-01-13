import { Helmet } from "react-helmet-async";
import Banner from "./HomeComponents/Banner";
import FeaturedMenu from "./HomeComponents/FeaturedMenu";
import OurMenu from "./HomeComponents/OurMenu";
import PopularMenu from "./HomeComponents/PopularMenu";
import Testimonials from "./HomeComponents/Testimonials";

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>Bistro Boss | Home</title>
      </Helmet>
      <Banner />
      <OurMenu />
      <FeaturedMenu />
      <PopularMenu />
      <Testimonials />
    </div>
  );
};

export default Home;

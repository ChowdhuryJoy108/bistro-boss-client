import { Helmet } from "react-helmet-async";
import "./css/menu.css";
import Cover from "../../sharedComponents/Cover";
import menuCover from "../../assets/menu/banner3.jpg";
import dessertCover from "../../assets/menu/dessert-bg.jpeg";
import pizzaCover from "../../assets/menu/pizza-bg.jpg";
import saladCover from "../../assets/menu/salad-bg.jpg";
import soupCover from "../../assets/menu/soup-bg.jpg";
import SectionTitle from "../../globalComponents/SectionTitle";
import useMenu from "../../hooks/useMenu";
import MenuCategory from "./menuComponents/MenuCategory";
const Menu = () => {
  const [menu] = useMenu();
  const desserts = menu.filter((item) => item.category === "dessert");
  const salads = menu.filter((item) => item.category === "salad");
  const pizzas = menu.filter((item) => item.category === "pizza");
  const soups = menu.filter((item) => item.category === "soup");
  const offers = menu.filter((item) => item.category === "offered");

  return (
    <div className="">
      <Helmet>
        <title>Bistro Boss | Menu</title>
      </Helmet>
      <div>
        <Cover img={menuCover} title={"our menu"} />

        {/* offered menu items */}
        <div className="my-10">
          <SectionTitle heading={"todays offers"} subHeading={"Don't Miss"} />
          <MenuCategory items={offers} />
        </div>

        {/* dessert menu items */}
        <div>
          <MenuCategory 
          items={desserts} 
          title="desserts"
          img={dessertCover} 
          />
        </div>
        {/* Pizza menu items */}
        <div>
          <MenuCategory 
          items={pizzas} 
          title="pizza"
          img={pizzaCover} 
          />
        </div>
        {/* salads menu items */}
        <div>
          <MenuCategory 
          items={salads} 
          title="salad"
          img={saladCover} 
          />
        </div>
        {/* soup menu items */}
        <div>
          <MenuCategory 
          items={soups} 
          title="soups"
          img={soupCover} 
          />
        </div>
      </div>
    </div>
  );
};

export default Menu;

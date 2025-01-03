import { useEffect, useState } from "react";
import FeaturedItem from "../../../globalComponents/FeaturedItem";
import SectionTitle from "../../../globalComponents/SectionTitle";

const FeaturedMenu = () => {
  const [menus, setMenus] = useState([]);

  useEffect(() => {
    fetch("menu.json")
      .then((res) => res.json())
      .then((data) => {
        const filteredItems = data.filter(
          (item) => item.category === "popular"
        );
        setMenus(filteredItems);
      });
  }, []);
  return (
    <div className="my-20">
      <SectionTitle heading="from our menu" subHeading="Check it out" />
      <div className="grid gap-4 md:grid-cols-2">
        {menus.map((menu) => (
          <FeaturedItem key={menu._id} item={menu} />
        ))}
      </div>
    </div>
  );
};

export default FeaturedMenu;

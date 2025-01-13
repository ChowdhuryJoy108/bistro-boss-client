import { Link } from "react-router-dom";
import FeaturedItem from "../../../globalComponents/FeaturedItem";
import Cover from "../../../sharedComponents/Cover";

const MenuCategory = ({ items, img, title }) => {
  return (
    <div className="">
      {title && <Cover img={img} title={title} />}
      <div className="grid gap-4 my-8 md:grid-cols-2">
        {items.map((menu) => (
          <FeaturedItem key={menu._id} item={menu} />
        ))}
      </div>
      <div className="flex flex-col my-8 items-center">
        <Link to={`/order/${title}`}>
        <button className="btn btn-outline border-0 border-b-4 text-center">
          Order Now
        </button>
        </Link>
      </div>
    </div>
  );
};

export default MenuCategory;

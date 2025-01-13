const FeaturedItem = ({ item }) => {
  const { name, image, recipe, price } = item;
  return (
    <div className="flex w-full mx-auto md:w-[550px] ">
      <div className="flex items-center gap-2">
        <div>
          <img style={{borderRadius:'0 200px 200px 200px'}} className="max-w-[100px] max-h-[80px]" src={image} alt="menu-image" />
        </div>
        <div>
            <h1 className="text-xl uppercase">{name} --------------</h1>
            <p className="text-gray-400">{recipe}</p>
        </div>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default FeaturedItem;

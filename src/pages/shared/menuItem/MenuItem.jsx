const MenuItem = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="flex gap-6 space-x-5">
      <img
        style={{ borderRadius: "0 200px 200px 200px" }}
        className="h-24"
        src={image}
        alt=""
      />
      <div>
        <h3 className="uppercase">{name}-----------------</h3>
        <p>{recipe}</p>
      </div>
      <p className="text-yellow-500">${price}</p>
    </div>
  );
};

export default MenuItem;

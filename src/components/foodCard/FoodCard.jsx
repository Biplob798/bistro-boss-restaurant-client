const FoodCard = ({ item }) => {
  const { name, price, image, recipe } = item;
  return (
    <div className="card bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="image" />
      </figure>
      <p className="absolute right-0 mr-6 mt-6 px-2 text-orange-400 bg-slate-900">
        ${price}
      </p>
      <div className="card-body flex flex-col items-center">
        <h2 className="card-title">{name}</h2>
        <p>{recipe}</p>
        <div className="card-actions justify-end">
          <button
            className="btn btn-outline border-0 border-b-4 
           mt-4 bg-slate-100 border-orange-400"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

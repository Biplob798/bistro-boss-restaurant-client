import FoodCard from "../../../components/foodCard/FoodCard";

const OrderTab = ({ items }) => {
  return (
    <div className="grid grid-cols-3 gap-6 my-12">
      {" "}
      {items.map((item) => (
        <FoodCard key={item._id} item={item}></FoodCard>
      ))}
    </div>
  );
};

export default OrderTab;

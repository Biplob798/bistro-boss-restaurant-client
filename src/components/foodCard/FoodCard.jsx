import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import { useLocation, useNavigate } from "react-router-dom";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useCart from "../../hooks/useCart";

const FoodCard = ({ item }) => {
  const { user } = useAuth();
  const { name, price, image, recipe, _id } = item;
  const navigate = useNavigate();
  const location = useLocation();
  const axiosSecure = useAxiosSecure();
  const [, refetch] = useCart();

  const handleAddToCart = () => {
    if (user && user.email) {
      // send cart item to the database
      const cartItem = {
        menuId: _id,
        email: user.email,
        name,
        image,
        price,
      };
      axiosSecure.post("/carts", cartItem).then((res) => {
        console.log(res.data);
        if (res.data.insertedId) {
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: `${name} added to your cart`,
            showConfirmButton: false,
            timer: 1500,
          });
          // refetch the cart to update the items count
          refetch();
        }
      });
    } else {
      Swal.fire({
        title: "Yor Are Not Login",
        text: "please log in to add to cart?",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes,  login!",
      }).then((result) => {
        if (result.isConfirmed) {
          // send the user to the login page
          navigate("/login", { state: { from: location } });
        }
      });
    }
  };
  // const { user } = useContext(AuthContext);
  // const { name, price, image, recipe } = item;
  // const handleAddToCart = (food) => {
  //   console.log(food);
  // };

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
        <div className="card bg-base-100 shadow-xl">
          {/* ... rest of the code ... */}
          <div className="card-actions justify-end">
            <button
              onClick={handleAddToCart}
              className="btn btn-outline border-0 border-b-4 mt-4 bg-slate-100 border-orange-400"
            >
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;

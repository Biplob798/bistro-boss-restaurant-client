import {
  FaAd,
  FaBook,
  FaCalendar,
  FaEnvelope,
  FaHome,
  FaList,
  FaSearch,
  FaShoppingCart,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { NavLink, Outlet } from "react-router-dom";
import useCart from "../hooks/useCart";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  const [cart] = useCart();
  const [isAdmin] = useAdmin();
  return (
    <div className="flex">
      {/*dashboard sidebar  */}
      <div className="w-64 min-h-screen bg-amber-500">
        <ul className="menu">
          {isAdmin ? (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/adminHome">
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/addItems">
                  <FaCalendar></FaCalendar> Add Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userPayment">
                  <FaUtensils></FaUtensils> My Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/manageItems">
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/bookings">
                  <FaBook></FaBook>Manage Bookings
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/users">
                  <FaUsers></FaUsers>All Users
                </NavLink>
              </li>
            </>
          ) : (
            <>
              {" "}
              <li>
                <NavLink to="/dashboard/userHome">
                  <FaHome></FaHome> My Home
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userReservation">
                  <FaCalendar></FaCalendar> My Reservation
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userPayment">
                  <FaCalendar></FaCalendar> My Payment
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/cart">
                  <FaShoppingCart></FaShoppingCart> My Cart ({cart.length})
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userReview">
                  <FaAd></FaAd> My Review
                </NavLink>
              </li>
              <li>
                <NavLink to="/dashboard/userBookings">
                  <FaBook></FaBook>My Bookings
                </NavLink>
              </li>
            </>
          )}
          <div className="divider"></div>
          {/* shared nav links */}
          <li>
            <NavLink to="/">
              <FaHome></FaHome>Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/menu">
              <FaSearch></FaSearch>Menu
            </NavLink>
          </li>
          <li>
            <NavLink to="/contact">
              <FaEnvelope />
              Contact
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard  */}
      <div className="flex-1 p-8">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;

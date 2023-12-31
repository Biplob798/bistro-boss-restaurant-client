import { Link, NavLink } from "react-router-dom";
import { FaShoppingCart } from "react-icons/fa";
import useCart from "../../../hooks/useCart";
import useAuth from "../../../hooks/useAuth";
import useAdmin from "../../../hooks/useAdmin";
const NavBar = () => {
  const { user, logOut } = useAuth();
  const [isAdmin] = useAdmin();
  const [cart] = useCart();

  const handleLogOut = () => {
    logOut()
      .then(() => {})
      .catch((error) => console.log(error));
  };
  const navOptions = (
    <>
      <NavLink to="/">Home</NavLink>
      <NavLink to="/menu">Our Menu</NavLink>
      <NavLink to="/order/salad">Order Food</NavLink>
      {
        // user? 'true':'false'
        // user? condition? 'double true':'one true':'false'
      }
      {user && isAdmin && (
        <li>
          <Link to="/dashboard/adminHome">Dashboard</Link>
        </li>
      )}
      {user && !isAdmin && (
        <li>
          <Link to="/dashboard/userHome">Dashboard</Link>
        </li>
      )}
      <NavLink to="/secret">Secret</NavLink>
      <Link to="/dashboard/cart">
        <button className="btn">
          <FaShoppingCart className="ml-2"></FaShoppingCart>
          <div className="badge badge-secondary">+{cart.length}</div>
        </button>
      </Link>
      <>
        {user ? (
          <>
            <span>{user.displayName}</span>
            <button onClick={handleLogOut} className="btn">
              Log Out
            </button>
          </>
        ) : (
          <NavLink to="/login">Login</NavLink>
        )}
      </>
    </>
  );

  return (
    <>
      <div className="navbar fixed z-10 bg-black max-w-screen-lg text-white bg-opacity-60">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52 text-white border gap-4"
            >
              {navOptions}
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-xl">
            Bistro Boss <br /> Restaurant
          </a>
        </div>
        <div className="navbar-center hidden lg:flex text-white">
          <ul className="menu menu-horizontal px-1 gap-4">{navOptions}</ul>
        </div>
        {/* avatar  */}
      </div>
    </>
  );
};

export default NavBar;

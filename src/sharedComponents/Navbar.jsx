import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, signOutUser } = useContext(AuthContext);
  console.log(user);

  const handleLogOut = () => {
    signOutUser()
      .then(() => {
        alert("successfully Logged out!");
      })
      .catch((err) => alert("Couldn't Log out"));
  };

  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/menu">Our Menu</NavLink>
      </li>
      <li>
        <NavLink to="/order/salad">Our Shop</NavLink>
      </li>
    </>
  );

  const accountLinks = (
    <>
      {user ? (
        <>
          <button
            onClick={handleLogOut}
            className="btn btn-outline text-white font-semibold"
          >
            Logout
          </button>
        </>
      ) : (
        <>
          <Link to="/login">
            <button className="btn btn-outline text-white font-semibold">
              Login
            </button>
          </Link>
          <Link to="/register">
            <button className="btn btn-outline text-white font-semibold">
              Register
            </button>
          </Link>
        </>
      )}
    </>
  );

  return (
    <>
      <div className="fixed z-20 opacity-60 navbar bg-black text-white font-bold max-w-screen-xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost text-xl">
            Bistro Boss
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 flex gap-2">{navLinks}</ul>
        </div>
        <div className="navbar-end">
          <div className="flex items-center gap-2">{accountLinks}</div>
        </div>
      </div>
    </>
  );
};

export default Navbar;

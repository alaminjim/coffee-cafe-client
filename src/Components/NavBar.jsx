import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-cafe-48 (1).png";

const NavBar = () => {
  return (
    <div className="">
      <div className="navbar shadow-sm bg-[#4a1e1be6]">
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
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            ></ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <p className="text-xl text-white font-dancing">COFFEE_CAFE</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 text-amber-100 gap-5 text-lg font-semibold">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/quires">Quires</NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          <Link to="/login" className="btn">
            Log in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;

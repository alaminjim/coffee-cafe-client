import { Link, NavLink } from "react-router-dom";
import logo from "../assets/icons8-cafe-48 (1).png";
import { useContext } from "react";
import AuthContext from "../Context/AuthContext";
import toast from "react-hot-toast";

const NavBar = () => {
  const { user, userSignOut } = useContext(AuthContext);
  const handelSignOut = () => {
    userSignOut()
      .then(() => {
        toast.success("sign out successful");
      })
      .catch((err) => {
        toast.error(err.message);
      });
  };
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
            >
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#854d3dea] text-amber-100"
                    : "text-amber-100 gap-5 text-lg font-semibold"
                }
                to="/"
              >
                Home
              </NavLink>
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#854d3dea] text-amber-100"
                      : "text-amber-100 gap-5 text-lg font-semibold"
                  }
                  to="/my-quires"
                >
                  My Quires
                </NavLink>
              )}
              {user && (
                <NavLink
                  className={({ isActive }) =>
                    isActive
                      ? "btn bg-[#854d3dea] text-amber-100"
                      : "text-amber-100 gap-5 text-lg font-semibold"
                  }
                  to="/add-quires"
                >
                  Add Quires
                </NavLink>
              )}
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#854d3dea] text-amber-100"
                    : "text-amber-100 gap-5 text-lg font-semibold"
                }
                to="/quire"
              >
                Quires
              </NavLink>
            </ul>
          </div>
          <div className="flex items-center gap-2">
            <img src={logo} alt="" />
            <p className="text-xl text-white font-dancing">COFFEE_CAFE</p>
          </div>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 gap-5 ">
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#854d3dea] text-amber-100"
                  : "text-amber-100 gap-5 text-lg font-semibold"
              }
              to="/"
            >
              Home
            </NavLink>
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#854d3dea] text-amber-100"
                    : "text-amber-100 gap-5 text-lg font-semibold"
                }
                to="/my-quires"
              >
                My Quires
              </NavLink>
            )}
            {user && (
              <NavLink
                className={({ isActive }) =>
                  isActive
                    ? "btn bg-[#854d3dea] text-amber-100"
                    : "text-amber-100 gap-5 text-lg font-semibold"
                }
                to="/add-quires"
              >
                Add Quires
              </NavLink>
            )}
            <NavLink
              className={({ isActive }) =>
                isActive
                  ? "btn bg-[#854d3dea] text-amber-100"
                  : "text-amber-100 gap-5 text-lg font-semibold"
              }
              to="/quire"
            >
              Quires
            </NavLink>
          </ul>
        </div>
        <div className="navbar-end">
          {user ? (
            <button
              onClick={handelSignOut}
              className="btn bg-amber-100  text-[#4a1e1bdc]"
            >
              log out
            </button>
          ) : (
            <div className="space-x-4">
              <Link to="/login">
                <button className="btn bg-amber-100  text-[#4a1e1bdc]">
                  Log in
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default NavBar;

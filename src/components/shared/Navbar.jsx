import { memo, useEffect, useState } from "react";
import { FaBars, FaMoon, FaPaperPlane } from "react-icons/fa";
import {
  MdDarkMode,
  MdOutlineLightMode,
  MdTravelExplore,
} from "react-icons/md";
import { Link, NavLink } from "react-router";
import NavMobile from "./NavMobile";
import { useDispatch, useSelector } from "react-redux";
import UserLoading from "./loader/UserLoading";
import { logout } from "../../redux/auth/authSlice";

const Navbar = () => {
  const { user, userLoading } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch();
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });
  const [showMenu, setShowMenu] = useState(false);
  const handelTheme = () => {
    setTheme((prev) => !prev);
  };

  const Btn = () => (
    <button
      onClick={handelTheme}
      className="ml-4 px-3 py-2 rounded-lg border glass cursor-pointer"
    >
      {theme ? <MdDarkMode size={20} /> : <MdOutlineLightMode size={20} />}
    </button>
  );

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "dark" : "light");
  }, [theme]);

  return (
    <>
      <header className="w-full fixed shadow-sm bg-white/10   dark:bg-gray-800/40 top-0 backdrop-blur z-40">
        <div className="container mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            {/* <MdTravelExplore size={40} /> */}
            <FaPaperPlane size={35} />

            <div>
              <div className="font-extrabold text-lg">TravelEase</div>
              <div className="line-clamp-1 text-xs">
                Vehicle Booking & Trip Management
              </div>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-4 text-sm font-bold nav-links">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/allVehicles" className="nav-link">
              All Vehicles
            </NavLink>
            {user && (
              <>
                <NavLink to="/addVehicles" className="nav-link">
                  Add Vehicle
                </NavLink>
                <NavLink to="/myVehicles" className="nav-link">
                  My Vehicles
                </NavLink>
                <NavLink to="/myBookings" className="nav-link">
                  My Bookings
                </NavLink>
              </>
            )}
            <Btn />

            {user ? (
              <div className="flex gap-4 items-center  cursor-pointer">
                {userLoading ? (
                  <UserLoading />
                ) : (
                  <div
                    title={user?.displayName}
                    className="w-10 h-10 rounded-full  flex items-center justify-center  font-bold border-2 border-green-400"
                  >
                    <img
                      src={user?.photoURL}
                      alt=""
                      className="rounded-full w-full"
                    />
                  </div>
                )}
                <button
                  onClick={() => dispatch(logout())}
                  className="cursor-pointer rounded-lg bg-linear-to-r from-red-500 to-pink-500 py-3 px-4 text-center font-semibold text-white transition-all duration-200 hover:opacity-90"
                >
                  Log Out
                </button>
              </div>
            ) : (
              <div className="ml-4 flex items-center gap-3 ">
                <Link
                  to="/auth/login"
                  className="w-full cursor-pointer py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-200 flex items-center justify-center gap-3"
                >
                  Login
                </Link>
                <Link
                  to="auth/register"
                  className="w-full cursor-pointer py-3 px-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
                >
                  Register
                </Link>
              </div>
            )}
          </nav>

          <div className="lg:hidden space-x-3">
            <Btn />
            <button
              onClick={() => setShowMenu(!showMenu)}
              className="p-2 rounded-md glass cursor-pointer"
            >
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      <NavMobile showMenu={showMenu} setShowMenu={setShowMenu} />
    </>
  );
};
export default memo(Navbar);

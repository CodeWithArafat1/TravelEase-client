import { Link, NavLink } from "react-router";
import profile from "../../assets/profile.jpg";
const NavMobile = ({ setShowMenu, showMenu }) => {
  return (
    <div
      className={`bg-black/10 inset-0 z-99 fixed lg:hidden ${
        showMenu ? "flex" : "hidden"
      }`}
      onClick={() => setShowMenu(false)}
    >
      <div
        className="w-72 bg-white h-full px-4 py-3"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-center">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full  flex items-center justify-center  font-bold border-2 border-green-400">
              <img src={profile} alt="" className="rounded-full w-full" />
            </div>
            <div>
              <div className="font-extrabold text-lg">Arafat Nill</div>
              <div className="text-xs  dark:text-slate-300">abc@gmail.com</div>
            </div>
          </Link>

          <button className="btn" onClick={() => setShowMenu(!showMenu)}>
            X
          </button>
        </div>

        <nav className="gap-4 text-sm font-bold flex flex-col mt-10 nav-links">
          <NavLink
            to="/"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            Home
          </NavLink>
          <NavLink
            to="/allVehicles"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            All Vehicles
          </NavLink>
          <NavLink
            to="/addVehicles"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            Add Vehicle
          </NavLink>
          <NavLink
            to="/myVehicles"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            My Vehicles
          </NavLink>
          <NavLink
            to="/myBookings"
            className="nav-link"
            onClick={() => setShowMenu(false)}
          >
            My Bookings
          </NavLink>

          <div className="flex-col flex items-center gap-3">
            <Link
              onClick={() => setShowMenu(false)}
              to="/auth/login"
              className="w-full cursor-pointer py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-200 flex items-center justify-center gap-3"
            >
              Login
            </Link>
            <Link
              onClick={() => setShowMenu(false)}
              to="auth/register"
              className="w-full text-center cursor-pointer py-3 px-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
            >
              Register
            </Link>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default NavMobile;

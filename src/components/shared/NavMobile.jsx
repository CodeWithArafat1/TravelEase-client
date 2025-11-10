import { Link, NavLink } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import UserLoading from "./loader/UserLoading";
import { IoClose } from "react-icons/io5";
import { logout } from "../../redux/auth/authSlice";
import { memo } from "react";

const NavMobile = ({ setShowMenu, showMenu }) => {
  const dispatch = useDispatch();
  const { user, userLoading } = useSelector((store) => store.userAuth);

  const MenuHeader = () => (
    <div className="flex w-full items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
      {user ? (
        <>
          {userLoading ? (
            <UserLoading />
          ) : (
            <div className="flex items-center gap-3 overflow-hidden">
              <div className="w-10 h-10 rounded-full border-2 border-emerald-500 dark:border-emerald-400">
                <img
                  src={user?.photoURL}
                  alt={user?.displayName || "Profile picture"}
                  className="h-full w-full rounded-full object-cover"
                />
              </div>
              <div className="overflow-hidden">
                <div className="truncate font-extrabold text-lg">
                  {user?.displayName}
                </div>
                <div className="truncate text-xs text-gray-500 dark:text-slate-400">
                  {user?.email}
                </div>
              </div>
            </div>
          )}
        </>
      ) : (
        <Link to="/" className="flex items-center gap-3">
          <div className="flex h-10 w-10  items-center justify-center rounded-full bg-linear-to-br from-emerald-400 to-sky-500 font-bold text-white border border-gray-300 dark:border-gray-700">
            TE
          </div>
          <div>
            <div className="font-extrabold text-lg">TravelEase</div>
            <div className="line-clamp-1 text-xs text-gray-500 dark:text-slate-400">
              Vehicle Booking & Trip Management
            </div>
          </div>
        </Link>
      )}
      <button
        className="rounded-full p-2 transition-colors hover:bg-gray-100 dark:hover:bg-slate-800"
        onClick={() => setShowMenu(false)}
      >
        <IoClose size={20} />
      </button>
    </div>
  );

  const AuthButtons = () => (
    <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-700">
      {user ? (
        <button
          onClick={() => {
            setShowMenu(false);
            dispatch(logout());
          }}
          className="w-full cursor-pointer rounded-lg bg-linear-to-r from-red-500 to-pink-500 py-3 px-4 text-center font-semibold text-white transition-all duration-200 hover:opacity-90"
        >
          Log Out
        </button>
      ) : (
        <div className="flex flex-col items-center gap-3">
          <Link
            onClick={() => setShowMenu(false)}
            to="/auth/login"
            className="flex w-full cursor-pointer items-center justify-center gap-3 rounded-lg border border-gray-300 dark:border-gray-600 bg-white/30 py-3 px-4 backdrop-blur-sm transition-colors duration-200 hover:bg-white/70 dark:bg-slate-800/30 dark:hover:bg-slate-800/50"
          >
            Login
          </Link>
          <Link
            onClick={() => setShowMenu(false)}
            to="/auth/register"
            className="w-full cursor-pointer rounded-lg bg-linear-to-r from-emerald-500 to-sky-500 py-3 px-4 text-center font-semibold text-white transition-all duration-200 hover:opacity-90"
          >
            Register
          </Link>
        </div>
      )}
    </div>
  );

  return (
    <div
      className={`fixed inset-0 z-50 lg:hidden transition-opacity duration-300 ${
        showMenu ? "opacity-100 visible" : "opacity-0 invisible"
      }`}
      onClick={() => setShowMenu(false)}
    >
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" />

      <div
        role="dialog"
        aria-modal="true"
        className={`relative h-full w-80 bg-white px-4 py-3 text-gray-800 shadow-xl transition-transform duration-300 ease-in-out dark:bg-slate-900 dark:text-gray-100 ${
          showMenu ? "translate-x-0" : "-translate-x-full"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <MenuHeader />

        <nav className="flex flex-col gap-4 mt-8 text-sm font-bold nav-links">
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
          {user && (
            <>
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
            </>
          )}
        </nav>

        <AuthButtons />
      </div>
    </div>
  );
};
export default memo(NavMobile);

import { useEffect, useState } from "react";
import { FaBars, FaMoon } from "react-icons/fa";
import { MdDarkMode, MdOutlineLightMode } from "react-icons/md";
import { Link, NavLink } from "react-router";
export default function Navbar() {
  
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem("theme");
    return savedTheme === "dark";
  });

  useEffect(() => {
    const html = document.querySelector("html");
    html.setAttribute("data-theme", theme ? "dark" : "light");
    localStorage.setItem("theme", theme ? "dark" : "light");
  }, [theme]);

  const handelTheme = () => {
    setTheme((prev) => !prev);
  };

  return (
    <>
      <header className="w-full fixed shadow-sm bg-white/40 dark:bg-slate-800/40 top-0 backdrop-blur z-40">
        <div className="max-w-7xl mx-auto px-4 py-3 flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-liner-to-br from-emerald-400 to-sky-500 flex items-center justify-center  font-bold border">
              TE
            </div>
            <div>
              <div className="font-extrabold text-lg">TravelEase</div>
              <div className="text-xs  dark:text-slate-300">
                Vehicle Booking & Trip Management
              </div>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-4 text-sm font-bold">
            <NavLink to="/" className="nav-link">
              Home
            </NavLink>
            <NavLink to="/allVehicles" className="nav-link">
              All Vehicles
            </NavLink>
            <NavLink to="/addVehicles" className="nav-link">
              Add Vehicle
            </NavLink>
            <NavLink to="/myVehicles" className="nav-link">
              My Vehicles
            </NavLink>
            <NavLink to="/myBookings" className="nav-link">
              My Bookings
            </NavLink>
            <button
              onClick={handelTheme}
              className="ml-4 px-3 py-2 rounded-lg border glass cursor-pointer"
            >
              {theme ? (
                <MdDarkMode size={20} />
              ) : (
                <MdOutlineLightMode size={20} />
              )}
            </button>
            <div id="authArea" className="ml-4 flex items-center gap-3">
              <Link
                to="/auth/login"
                className="w-full cursor-pointer py-3 px-4 border border-gray-300 dark:border-gray-600 rounded-lg bg-white/50 dark:bg-slate-700/50 backdrop-blur-sm hover:bg-white/70 dark:hover:bg-slate-700/70 transition-all duration-200 flex items-center justify-center gap-3"
              >
                Login
              </Link>
              <Link
                to="auth/register"
                className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
              >
                Register
              </Link>
            </div>
          </nav>

          <div className="md:hidden">
            <button id="mobileMenuBtn" className="p-2 rounded-md glass">
              <FaBars size={20} />
            </button>
          </div>
        </div>
      </header>

      <div
        id="mobileMenu"
        className="md:hidden p-4 space-y-3 max-w-3xl mx-auto hidden"
      >
        <a href="#home" className="block">
          Home
        </a>
        <a href="#all-vehicles" className="block">
          All Vehicles
        </a>
        <a href="#add-vehicle" className="block">
          Add Vehicle
        </a>
        <a href="#my-vehicles" className="block">
          My Vehicles
        </a>
        <a href="#my-bookings" className="block">
          My Bookings
        </a>
        <div
          id="mobileAuthArea"
          className="flex items-center gap-3 pt-2 border-t"
        >
          <button className="px-3 py-1 rounded-lg border">Login</button>
          <button className="w-full cursor-pointer py-3 px-4 bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg  transform hover:-translate-y-0.5 transition-all duration-200 disabled:opacity-50 ">
            Register
          </button>
        </div>
      </div>
    </>
  );
}

import React, { memo } from "react";
import { BsTwitterX } from "react-icons/bs";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaLinkedinIn,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className=" backdrop-blur">
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full  flex items-center justify-center font-bold border">
                TE
              </div>
              <div>
                <div className="font-extrabold text-lg">TravelEase</div>
                <div className="text-xs dark:text-slate-300">
                  Vehicle Booking & Trip Management
                </div>
              </div>
            </div>
            <p className="text-sm dark:text-slate-300">
              Your trusted partner for vehicle rentals and trip management.
              Making every journey memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="/"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="/allVehicles"
                  className="hover:text-emerald-500 transition-colors"
                >
                  All Vehicles
                </a>
              </li>
              <li>
                <a
                  href="/addVehicles"
                  className="hover:text-emerald-500 transition-colors"
                >
                  Add Vehicle
                </a>
              </li>
              <li>
                <a
                  href="/myVehicles"
                  className="hover:text-emerald-500 transition-colors"
                >
                  My Vehicles
                </a>
              </li>
              <li>
                <a
                  href="/myBookings"
                  className="hover:text-emerald-500 transition-colors"
                >
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>

            <div className="space-y-2 mb-4 text-sm">
              <div className="flex items-center gap-2">
                <FaMapMarkerAlt className="text-emerald-500" />
                <span>Dhaka, Bangladesh</span>
              </div>
              <div className="flex items-center gap-2">
                <FaPhone className="text-emerald-500" />
                <span>+880 1234-567890</span>
              </div>
              <div className="flex items-center gap-2">
                <FaEnvelope className="text-emerald-500" />
                <span>info@travelease.com</span>
              </div>
            </div>

            <div className="flex gap-3">
              <Link
                to="https://www.facebook.com/ArafatNill69"
                target="_blank"
                className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaFacebookF className="text-sm" />
              </Link>
              <Link
                to="https://x.com/ArafatNill37290"
                target="_blank"
                className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <BsTwitterX className="text-sm" />
              </Link>
              <Link
                to="https://www.instagram.com/mr.rabbitai/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaInstagram className="text-sm" />
              </Link>
              <Link
                to="https://www.linkedin.com/in/md-arafat-ali-a66420367/"
                target="_blank"
                className="w-10 h-10 rounded-full bg-linear-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
              >
                <FaLinkedinIn className="text-sm" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-6 text-center text-sm dark:text-slate-300">
          <p>© {currentYear} TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default memo(Footer);

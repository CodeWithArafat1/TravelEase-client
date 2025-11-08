import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaEnvelope, FaPhone, FaMapMarkerAlt } from "react-icons/fa";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white/40 dark:bg-slate-800/40 backdrop-blur">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* About Section */}
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
              Your trusted partner for vehicle rentals and trip management. Making every journey memorable.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/" className="hover:text-emerald-500 transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="/allVehicles" className="hover:text-emerald-500 transition-colors">
                  All Vehicles
                </a>
              </li>
              <li>
                <a href="/addVehicles" className="hover:text-emerald-500 transition-colors">
                  Add Vehicle
                </a>
              </li>
              <li>
                <a href="/myVehicles" className="hover:text-emerald-500 transition-colors">
                  My Vehicles
                </a>
              </li>
              <li>
                <a href="/myBookings" className="hover:text-emerald-500 transition-colors">
                  My Bookings
                </a>
              </li>
            </ul>
          </div>

          {/* Contact & Social */}
          <div>
            <h3 className="font-bold text-lg mb-4">Connect With Us</h3>
            
            {/* Contact Info */}
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

            {/* Social Links */}
            <div className="flex gap-3">
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Facebook"
              >
                <FaFacebookF className="text-sm" />
              </a>
              <a 
                href="https://twitter.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Twitter"
              >
                <BsTwitterX className="text-sm"/>
              </a>
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="Instagram"
              >
                <FaInstagram className="text-sm" />
              </a>
              <a 
                href="https://linkedin.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gradient-to-br from-emerald-400 to-sky-500 flex items-center justify-center text-white hover:scale-110 transition-transform"
                aria-label="LinkedIn"
              >
                <FaLinkedinIn className="text-sm" />
              </a>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-200 dark:border-slate-700 mt-8 pt-6 text-center text-sm dark:text-slate-300">
          <p>© {currentYear} TravelEase. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
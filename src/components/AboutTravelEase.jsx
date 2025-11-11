import React, { memo } from "react";
import { FaCar, FaUserCheck, FaShieldAlt } from "react-icons/fa";
import { Link } from "react-router";

const AboutTravelEase = () => {
  return (
    <div className="card container mx-auto w-full bg-base-200 shadow-sm p-6">
      <div className="card-body p-0">
        <h2 className="card-title text-2xl font-bold text-base-content mb-3">
          About TravelEase
        </h2>
        
        <p className="text-base-content text-opacity-80 mb-5">
          Welcome to TravelEase, your trusted partner for vehicle booking and 
          trip management. We connect vehicle owners with travelers to make 
          every journey simple, safe, and memorable.
        </p>

      
        <div className="space-y-3 mb-6">
          <div className="flex items-center gap-3">
            <FaCar className="text-emerald-500" size={18} />
            <span className="font-medium">Find the perfect vehicle for any trip.</span>
          </div>
          <div className="flex items-center gap-3">
            <FaUserCheck className="text-emerald-500" size={18} />
            <span className="font-medium">Connect with verified local hosts.</span>
          </div>
          <div className="flex items-center gap-3">
            <FaShieldAlt className="text-emerald-500" size={18} />
            <span className="font-medium">Book safely with our secure platform.</span>
          </div>
        </div>

        <div className="card-actions justify-start">
          <Link
            to="/allVehicles"
            className="cursor-pointer btn btn-sm bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
          >
            Browse Vehicles
          </Link>
        </div>
      </div>
    </div>
  );
};

export default memo(AboutTravelEase);
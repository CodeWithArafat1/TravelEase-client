import React from "react";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ vehicle }) => {
  // Using props for dynamic data
  const {
    id = 23,
    vehicleName = "Suzuki Swift",
    category = "Sedan",
    pricePerDay = 45,
    location = "Rajshahi, Bangladesh",
    description = "Small, nimble car for urban driving. Perfect for city commutes with excellent fuel efficiency.",
    availability = "Available",
    availableFrom = "11/6/2025",
    coverImage = "https://images.unsplash.com/photo-1503376780353-7e6692767b70?q=80&w=800&auto=format&fit=crop&ixlib=rb-4.0.3&s=ijkl",
    rating = 4.5,
  } = vehicle || {};

  return (
    <div className="card bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-base-300/30 group">
      {/* Image Section */}
      <figure className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        {/* Price Badge */}
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm rounded-full px-3 py-1 text-sm font-bold text-base-content shadow-md dark:bg-slate-700/90">
          ${pricePerDay}/day
        </div>

        {/* Category Badge */}
        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary-content">
          {category}
        </div>
      </figure>

      {/* Card Content */}
      <div className="card-body p-5">
        {/* Header with Title and Rating */}
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-bold text-base-content">
            {vehicleName}
          </h2>
          <div className="flex items-center gap-1 text-sm">
            <FaStar className="text-amber-500" />
            <span className="font-medium">{rating}</span>
          </div>
        </div>

        {/* Location */}
        <div className="flex items-center mt-2 text-sm text-base-content/70">
          <FaMapMarkerAlt className="mr-2 text-primary" />
          <span>{location}</span>
        </div>

        {/* Description */}
        <p className="mt-3 text-sm text-base-content/80 line-clamp-2">
          {description}
        </p>

        {/* Availability Date */}
        <div className="flex items-center mt-3 text-sm text-base-content/70">
          <FaCalendarAlt className="mr-2 text-primary" />
          <span>Available from {availableFrom}</span>
        </div>

        {/* Status Badge */}
        <div className="mt-3">
          <div
            className={`badge ${
              availability === "Available" ? "badge-success" : "badge-error"
            } badge-sm`}
          >
            {availability}
          </div>
        </div>

        {/* Action Buttons */}
        <div className="card-actions justify-between items-center mt-5">
          <Link
            to={`/viewDetails/${id}`}
            className="btn btn-outline btn-sm border-base-300 hover:bg-base-200 hover:border-base-400 transition-all"
          >
            View Details
          </Link>
          <button className="btn btn-sm bg-primary hover:bg-primary-focus text-white border-none transition-all">
            Book Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

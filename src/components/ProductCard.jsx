import { format } from "date-fns";
import { FaMapMarkerAlt, FaCalendarAlt, FaHeart, FaStar } from "react-icons/fa";
import { Link } from "react-router";

const ProductCard = ({ vehicle }) => {
  const {
    availability,
    category,
    coverImage,
    createAt,
    description,
    location,
    pricePerDay,
    vehicleName,
    _id,
  } = vehicle;
    const createdAtDate = vehicle.createAt ? new Date(vehicle.createAt) : null;

  return (
    <div className="card bg-base-100 rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-base-300/30 group">
      <figure className="relative h-48 overflow-hidden">
        <img
          src={coverImage}
          alt={vehicleName}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute top-3 left-3 bg-primary/90 backdrop-blur-sm rounded-full px-3 py-1 text-xs font-semibold text-primary-content">
          {category}
        </div>
      </figure>

      <div className="card-body p-5">
        <div className="flex justify-between items-start">
          <h2 className="card-title text-lg font-bold text-base-content">
            {vehicleName}
          </h2>
          <div className="font-bold text-base-content text-lg ">
            ${pricePerDay}/day
          </div>
        </div>

        <div className="flex items-center mt-2 text-sm text-base-content/70">
          <FaMapMarkerAlt className="mr-2 text-primary" />
          <span>{location}</span>
        </div>

        <p className="mt-3 text-sm text-base-content/80 line-clamp-2">
          {description}
        </p>

        <div className="flex items-center mt-3 text-sm text-base-content/70">
          <FaCalendarAlt className="mr-2 text-primary" />
          <span>Available from {format(createdAtDate, "MMMM yyyy")}</span>
        </div>

        <div className="mt-3">
          <div
            className={`badge ${
              availability === "Available" ? "badge-success" : "badge-error"
            } badge-sm`}
          >
            {availability}
          </div>
        </div>

        <div className="card-actions justify-end items-center mt-5">
          <Link
            to={`/viewDetails/${_id}`}
            className="btn btn-md border-base-300  transition-all"
          >
            View Details
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;

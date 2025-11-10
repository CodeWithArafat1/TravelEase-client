import React, { useState } from "react";
import {
  FaEye,
  FaTimesCircle,
  FaCheckCircle,
  FaCalendarAlt,
  FaDollarSign,
  FaMapMarkerAlt,
  FaCar,
} from "react-icons/fa";
import { FaCarBurst } from "react-icons/fa6";
import { format } from "date-fns";

const MyBookings = () => {
  const [filter, setFilter] = useState("all");

  // Static demo data
  const bookings = [
    {
      id: "507f1f77bcf86cd799439028",
      vehicleName: "Ford Explorer",
      category: "SUV",
      pricePerDay: 175,
      location: "Rajshahi, Bangladesh",
      bookingDate: "2025-11-05",
      returnDate: "2025-11-10",
      status: "Confirmed",
      coverImage:
        "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      ownerName: "Arafat Nill",
      ownerEmail: "isha@gmail.com",
      ownerPhoto: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "507f1f77bcf86cd799439029",
      vehicleName: "Toyota Hilux",
      category: "Truck",
      pricePerDay: 155,
      location: "Mymensingh, Bangladesh",
      bookingDate: "2025-11-10",
      returnDate: "2025-11-15",
      status: "Pending",
      coverImage:
        "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      ownerName: "Arafat Nill",
      ownerEmail: "isha@gmail.com",
      ownerPhoto: "https://i.pravatar.cc/150?img=32",
    },
    {
      id: "507f1f77bcf86cd799439030",
      vehicleName: "Hyundai Tucson",
      category: "SUV",
      pricePerDay: 155,
      location: "Khulna, Bangladesh",
      bookingDate: "2025-11-15",
      returnDate: "2025-11-20",
      status: "Confirmed",
      coverImage:
        "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
      ownerName: "Arafat Nill",
      ownerEmail: "isha@gmail.com",
      ownerPhoto: "https://i.pravatar.cc/150?img=32",
    },
  ];

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    if (filter === booking.status) {
      return booking;
    }
  });

  const getStatusBadge = (status) => {
    switch (status) {
      case "Confirmed":
        return "badge-success";
      case "Pending":
        return "badge-warning";
      case "Completed":
        return "badge-info";
      case "Cancelled":
        return "badge-error";
      default:
        return "badge-neutral";
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">My Bookings</h2>
        <div className="flex gap-2">
          <select
            className="select select-bordered select-sm"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
          >
            <option value="all">All Bookings</option>
            <option value="Pending">Pending</option>
            <option value="Confirmed">Confirmed</option>
            <option value="Completed">Completed</option>
            <option value="Cancelled">Cancelled</option>
          </select>
        </div>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
        <table className="table table-zebra w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="text-xs sm:text-sm">Vehicle</th>
              <th className="text-xs sm:text-sm">Booking Period</th>
              <th className="text-xs sm:text-sm hidden md:table-cell">Owner</th>
              <th className="text-xs sm:text-sm">Total Price</th>
              <th className="text-xs sm:text-sm">Status</th>
              <th className="text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredBookings.map((booking) => (
              <tr key={booking.id}>
                <td>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-10 h-10 sm:w-12 sm:h-12">
                        <img
                          src={booking.coverImage}
                          alt={booking.vehicleName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {booking.vehicleName}
                      </div>
                      <div className="text-xs opacity-70">
                        {booking.category}
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  <div className="text-xs sm:text-sm">
                    <div>
                      {format(new Date(booking.bookingDate), "MMM dd, yyyy")}
                    </div>
                    <div className="text-xs opacity-70">
                      to {format(new Date(booking.returnDate), "MMM dd, yyyy")}
                    </div>
                    <div className="text-xs opacity-70">days</div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center space-x-2">
                    <div className="avatar">
                      <div className="mask mask-squircle w-6 h-6 sm:w-8 sm:h-8">
                        <img src={booking.ownerPhoto} alt={booking.ownerName} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm">
                        {booking.ownerName}
                      </div>
                      <div className="text-xs opacity-70">
                        {booking.ownerEmail}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xs sm:text-sm">$0</td>
                <td>
                  <div
                    className={`badge badge-xs sm:badge-sm ${getStatusBadge(
                      booking.status
                    )}`}
                  >
                    {booking.status}
                  </div>
                </td>
                <td>
                  <div className="flex gap-1 sm:gap-2">
                    <button
                      className="btn btn-xs btn-outline btn-info"
                      title="View Details"
                    >
                      <FaEye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline ml-1">View</span>
                    </button>
                    {booking.status === "Pending" && (
                      <button
                        className="btn btn-xs btn-outline btn-error"
                        title="Cancel Booking"
                      >
                        <FaTimesCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline ml-1">Cancel</span>
                      </button>
                    )}
                    {booking.status === "Confirmed" && (
                      <button
                        className="btn btn-xs btn-outline btn-success"
                        title="Confirm Pickup"
                      >
                        <FaCheckCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline ml-1">Pickup</span>
                      </button>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredBookings.length === 0 && (
        <div className="bg-base-100 rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaCarBurst size={100} className="text-6xl text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
          <p className="text-base-content/70">
            {filter === "all"
              ? "You haven't made any bookings yet."
              : `You don't have any ${filter.toLowerCase()} bookings.`}
          </p>
          <button className="btn btn-primary mt-4">Browse Vehicles</button>
        </div>
      )}
    </div>
  );
};

export default MyBookings;

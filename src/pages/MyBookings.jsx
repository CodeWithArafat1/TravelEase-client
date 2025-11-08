import React, { useState, useEffect } from "react";
import { FaEye, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { format } from "date-fns";
import Loading from "../components/shared/loader/Loading";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [filter, setFilter] = useState("all");

  // Static data for demonstration
  // In a real app, this would be fetched from your API
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setBookings([
        {
          id: 1,
          vehicleName: "Toyota Corolla",
          category: "Sedan",
          pricePerDay: 70,
          location: "Dhaka, Bangladesh",
          bookingDate: "2025-06-11",
          returnDate: "2025-06-15",
          status: "Confirmed",
          coverImage:
            "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
          ownerName: "John Doe",
          ownerEmail: "john@example.com",
        },
        {
          id: 2,
          vehicleName: "Honda CR-V",
          category: "SUV",
          pricePerDay: 85,
          location: "Chittagong, Bangladesh",
          bookingDate: "2025-06-20",
          returnDate: "2025-06-25",
          status: "Pending",
          coverImage:
            "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
          ownerName: "Jane Smith",
          ownerEmail: "jane@example.com",
        },
        {
          id: 3,
          vehicleName: "Tesla Model 3",
          category: "Electric",
          pricePerDay: 120,
          location: "Sylhet, Bangladesh",
          bookingDate: "2025-07-01",
          returnDate: "2025-07-05",
          status: "Confirmed",
          coverImage:
            "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
          ownerName: "Robert Johnson",
          ownerEmail: "robert@example.com",
        },
        {
          id: 4,
          vehicleName: "Toyota Hiace",
          category: "Van",
          pricePerDay: 100,
          location: "Rajshahi, Bangladesh",
          bookingDate: "2025-07-10",
          returnDate: "2025-07-15",
          status: "Completed",
          coverImage:
            "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
          ownerName: "Emily Davis",
          ownerEmail: "emily@example.com",
        },
        {
          id: 5,
          vehicleName: "Nissan Leaf",
          category: "Electric",
          pricePerDay: 95,
          location: "Khulna, Bangladesh",
          bookingDate: "2025-07-20",
          returnDate: "2025-07-25",
          status: "Cancelled",
          coverImage:
            "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
          ownerName: "Michael Wilson",
          ownerEmail: "michael@example.com",
        },
      ]);
      setLoading(false);
    }, 1000);
  }, []);

  const filteredBookings = bookings.filter((booking) => {
    if (filter === "all") return true;
    return booking.status === filter;
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

  const calculateDays = (bookingDate, returnDate) => {
    const start = new Date(bookingDate);
    const end = new Date(returnDate);
    const diffTime = Math.abs(end - start);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
  };

  const calculateTotalPrice = (pricePerDay, bookingDate, returnDate) => {
    const days = calculateDays(bookingDate, returnDate);
    return pricePerDay * days;
  };

  if (loading) {
    return (
      <Loading/>
    );
  }

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

      {filteredBookings.length === 0 ? (
        <div className="bg-base-100 rounded-lg shadow-sm p-8 text-center">
          <div className="text-6xl mb-4">🚗</div>
          <h3 className="text-xl font-semibold mb-2">No bookings found</h3>
          <p className="text-base-content/70">
            {filter === "all"
              ? "You haven't made any bookings yet."
              : `You don't have any ${filter.toLowerCase()} bookings.`}
          </p>
          <button className="btn btn-primary mt-4">Browse Vehicles</button>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
          <table className="table table-zebra w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-xs sm:text-sm">Vehicle</th>
                <th className="text-xs sm:text-sm">Booking Period</th>
                <th className="text-xs sm:text-sm hidden md:table-cell">
                  Owner
                </th>
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
                        to{" "}
                        {format(new Date(booking.returnDate), "MMM dd, yyyy")}
                      </div>
                      <div className="text-xs opacity-70">
                        {calculateDays(booking.bookingDate, booking.returnDate)}{" "}
                        days
                      </div>
                    </div>
                  </td>
                  <td className="hidden md:table-cell">
                    <div className="text-xs sm:text-sm">
                      <div>{booking.ownerName}</div>
                      <div className="text-xs opacity-70">
                        {booking.ownerEmail}
                      </div>
                    </div>
                  </td>
                  <td className="text-xs sm:text-sm">
                    $
                    {calculateTotalPrice(
                      booking.pricePerDay,
                      booking.bookingDate,
                      booking.returnDate
                    )}
                  </td>
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
      )}
    </div>
  );
};

export default MyBookings;

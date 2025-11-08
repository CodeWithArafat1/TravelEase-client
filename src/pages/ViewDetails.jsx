import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { FaStar, FaMapMarkerAlt, FaCalendarAlt, FaUser, FaTag, FaDollarSign, FaCar, FaCheckCircle, FaArrowLeft } from "react-icons/fa";
import { format } from "date-fns";
import FullLoader from "../components/shared/loader/FullLoader";
import BtnLoader from "../components/shared/loader/BtnLoader";

const ViewDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState(null);
  const [loading, setLoading] = useState(true);
  const [bookingLoading, setBookingLoading] = useState(false);

  // Static data for demonstration
  // In a real app, this would be fetched from your API using the id
  useEffect(() => {
    // Simulate API call
    setTimeout(() => {
      setVehicle({
        id: id,
        vehicleName: "Toyota Corolla",
        owner: "John Doe",
        category: "Sedan",
        pricePerDay: 70,
        location: "Dhaka, Bangladesh",
        availability: "Available",
        description: "Comfortable 5-seater with A/C and GPS. Perfect for city driving and long trips. Well-maintained vehicle with regular servicing. Features include Bluetooth connectivity, USB charging ports, and spacious trunk for luggage.",
        coverImage: "https://plus.unsplash.com/premium_photo-1673002094223-c6b534dcb861?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wyfHx8ZW58MHx8fHx8&auto=format&fit=crop&q=60&w=500",
        userEmail: "john@example.com",
        createdAt: "2025-06-01T10:30:00+00:00",
        categories: "Electric",
        features: [
          "Air Conditioning",
          "GPS Navigation",
          "Bluetooth Audio",
          "USB Charging",
          "Spacious Trunk",
          "Safety Airbags"
        ],
        rating: 4.8,
        totalBookings: 127,
        ownerPhoto: "https://i.pravatar.cc/150?img=32"
      });
      setLoading(false);
    }, 1000);
  }, [id]);

  const handleBookNow = async () => {
    setBookingLoading(true);
    // Simulate booking API call
    setTimeout(() => {
      setBookingLoading(false);
      // Show success message and redirect to bookings
      navigate("/myBookings");
    }, 1500);
  };

  if (loading) {
    return (
      <FullLoader/>
    );
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Vehicle Not Found</h2>
          <button className="btn btn-primary" onClick={() => navigate("/all-vehicles")}>
            Back to Vehicles
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="mt-20 container mx-auto bg-base-200 ">
      {/* Hero Section with Image */}
      <div className="relative h-64 sm:h-80 md:h-96">
        <img
          src={vehicle.coverImage}
          alt={vehicle.vehicleName}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
        
        {/* Back Button */}
        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 btn btn-circle btn-ghost text-white hover:bg-white/20"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        {/* Vehicle Name on Image */}
        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">{vehicle.vehicleName}</h1>
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt />
              <span>{vehicle.location}</span>
            </div>
            <div className={`badge ${vehicle.availability === "Available" ? "badge-success" : "badge-error"}`}>
              {vehicle.availability}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Quick Info Cards */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              <div className="bg-base-100 rounded-lg p-4 text-center">
                <FaDollarSign className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">${vehicle.pricePerDay}</p>
                <p className="text-sm opacity-70">per day</p>
              </div>
              <div className="bg-base-100 rounded-lg p-4 text-center">
                <FaCar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{vehicle.category}</p>
                <p className="text-sm opacity-70">type</p>
              </div>
              <div className="bg-base-100 rounded-lg p-4 text-center">
                <FaStar className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{vehicle.rating}</p>
                <p className="text-sm opacity-70">rating</p>
              </div>
              <div className="bg-base-100 rounded-lg p-4 text-center">
                <FaCalendarAlt className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{vehicle.totalBookings}</p>
                <p className="text-sm opacity-70">bookings</p>
              </div>
            </div>

            {/* Description */}
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-base-content/80 leading-relaxed">{vehicle.description}</p>
            </div>

            {/* Features */}
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Features</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {vehicle.features.map((feature, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <FaCheckCircle className="h-4 w-4 text-success" />
                    <span>{feature}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Categories */}
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">{vehicle.category}</span>
                <span className="badge badge-secondary badge-lg">{vehicle.categories}</span>
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Owner Info */}
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Owner Information</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full">
                    <img src={vehicle.ownerPhoto} alt={vehicle.owner} />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{vehicle.owner}</p>
                  <p className="text-sm opacity-70">{vehicle.userEmail}</p>
                </div>
              </div>
              <div className="text-sm opacity-70">
                <p>Member since {format(new Date(vehicle.createdAt), "MMMM yyyy")}</p>
              </div>
            </div>

            {/* Booking Card */}
            <div className="bg-base-100 rounded-lg p-6 sticky top-4">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">Price per day</span>
                  <span className="text-2xl font-bold text-primary">${vehicle.pricePerDay}</span>
                </div>
                <div className="text-sm opacity-70">
                  <p>Total price will be calculated based on rental period</p>
                </div>
              </div>

              <button
                onClick={handleBookNow}
                disabled={vehicle.availability !== "Available" || bookingLoading}
                className="btn btn-primary w-full"
              >
                {bookingLoading ? (
                  <>
                    <BtnLoader/>
                  </>
                ) : vehicle.availability === "Available" ? (
                  "Book Now"
                ) : (
                  "Not Available"
                )}
              </button>

              {vehicle.availability !== "Available" && (
                <p className="text-sm text-error mt-2 text-center">
                  This vehicle is currently {vehicle.availability.toLowerCase()}
                </p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewDetails;
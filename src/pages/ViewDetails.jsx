import React, { useState, useEffect, memo } from "react";
import { useParams, useNavigate } from "react-router";
import {
  FaMapMarkerAlt,
  FaCalendarAlt,
  FaDollarSign,
  FaCar,
  FaArrowLeft,
} from "react-icons/fa";
import { format } from "date-fns";
import FullLoader from "../components/shared/loader/FullLoader";
import BtnLoader from "../components/shared/loader/BtnLoader";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useSelector } from "react-redux";

const ViewDetails = () => {
  const { user } = useSelector((store) => store.userAuth);
  const { id } = useParams();
  const navigate = useNavigate();
  const [vehicle, setVehicle] = useState({});
  const [loading, setLoading] = useState(true);
  const [isDisable, setIsDisable] = useState(false);
  const [bookingLoading, setBookingLoading] = useState(false);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/checkBooking?email=${user?.email}&&vehicleId=${id}`
        );
        if (data) {
          const bookingId = data.vehicleId === id;
          setIsDisable(bookingId);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, [axiosInstance, id, user]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const { data } = await axiosInstance.get(`/vehicles/${id}`);
        setVehicle(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [id, axiosInstance]);

  // booking
  const handleBookNow = async () => {
    setBookingLoading(true);
    try {
      const bookingInfo = {
        email: user.email,
        owner: vehicle.owner,
        photoURL: vehicle.photoURL,
        vehicleName: vehicle.vehicleName,
        pricePerDay: vehicle.pricePerDay,
        category: vehicle.category,
        booking_date: new Date().toISOString(),
        vehicleId: vehicle._id,
        coverImage: vehicle.coverImage,
      };
      const { data } = await axiosInstance.post("/myBooking", bookingInfo);
      if (data.insertedId) {
        setTimeout(() => {
          toast.success("Booking successfully");
          navigate("/myBookings");
          setBookingLoading(false);
        }, 1500);
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  const createdAtDate = vehicle.createAt ? new Date(vehicle.createAt) : null;

  if (loading) {
    return <FullLoader />;
  }

  if (!vehicle) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Vehicle Not Found</h2>
          <button
            className="btn btn-primary"
            onClick={() => navigate("/all-vehicles")}
          >
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
        <div className="absolute inset-0 bg-linear-to-t from-black/70 to-transparent"></div>

        <button
          onClick={() => navigate(-1)}
          className="absolute top-4 left-4 btn btn-circle btn-ghost text-white hover:bg-white/20"
        >
          <FaArrowLeft className="h-5 w-5" />
        </button>

        <div className="absolute bottom-4 left-4 right-4 text-white">
          <h1 className="text-3xl sm:text-4xl font-bold mb-2">
            {vehicle.vehicleName}
          </h1>
          <div className="flex items-center gap-4 text-sm sm:text-base">
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt />
              <span>{vehicle.location}</span>
            </div>
            <div
              className={`badge ${
                vehicle.availability === "Available"
                  ? "badge-success"
                  : "badge-error"
              }`}
            >
              {vehicle.availability}
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2 space-y-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-4">
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
                <FaCalendarAlt className="h-6 w-6 mx-auto mb-2 text-primary" />
                <p className="text-2xl font-bold">{vehicle.availability}</p>
                <p className="text-sm opacity-70">bookings</p>
              </div>
            </div>

            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Description</h2>
              <p className="text-base-content/80 leading-relaxed">
                {vehicle.description}
              </p>
            </div>

            {/* Categories */}
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Categories</h2>
              <div className="flex flex-wrap gap-2">
                <span className="badge badge-primary badge-lg">
                  {vehicle.category}
                </span>
              </div>
            </div>
          </div>

          <div className="space-y-6">
            <div className="bg-base-100 rounded-lg p-6">
              <h2 className="text-xl font-bold mb-4">Owner Information</h2>
              <div className="flex items-center gap-4 mb-4">
                <div className="avatar">
                  <div className="w-16 h-16 rounded-full border-2 border-green-600">
                    <img src={vehicle.photoURL} alt={vehicle.owner} />
                  </div>
                </div>
                <div>
                  <p className="font-bold">{vehicle.owner}</p>
                  <p className="text-sm opacity-70">{vehicle.email}</p>
                </div>
              </div>
              <div className="text-sm opacity-70">
                <p>Member since {format(createdAtDate, "MMMM yyyy")}</p>
              </div>
            </div>

            <div className="bg-base-100 rounded-lg p-6 sticky top-4">
              <div className="mb-4">
                <div className="flex justify-between items-center mb-2">
                  <span className="text-lg font-bold">Price per day</span>
                  <span className="text-2xl font-bold text-primary">
                    ${vehicle.pricePerDay}
                  </span>
                </div>
                <div className="text-sm opacity-70">
                  <p>Total price will be calculated based on rental period</p>
                </div>
              </div>

              <div className="flex flex-col gap-3">
                <button
                  onClick={() => handleBookNow()}
                  disabled={
                    vehicle.availability !== "Available" ||
                    bookingLoading ||
                    isDisable
                  }
                  className="
                     w-full cursor-pointer 
                     bg-linear-to-r from-emerald-500 to-sky-500 
                    text-white py-3 px-4 rounded-md
                   disabled:bg-gray-400 
                   disabled:from-gray-400 
                    disabled:to-gray-500 
                    disabled:cursor-not-allowed
"
                >
                  {bookingLoading ? (
                    <BtnLoader />
                  ) : isDisable ? (
                    "Already Booked"
                  ) : vehicle.availability === "Available" ? (
                    "Book Now"
                  ) : (
                    "Not Available"
                  )}
                </button>

                <button className=" cursor-pointer rounded-lg bg-linear-to-r from-red-500 to-pink-500 py-3 px-4 text-center font-semibold text-white transition-all duration-200 hover:opacity-90">
                  Add to WishList
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default memo(ViewDetails);

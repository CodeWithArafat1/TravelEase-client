import { FaEye, FaTimesCircle, FaCheckCircle } from "react-icons/fa";
import { FaCarBurst } from "react-icons/fa6";
import { format } from "date-fns";
import { useEffect, useState } from "react";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import Loading from "../components/shared/loader/Loading";
import { Link } from "react-router";
import ConfirmModal from "../components/ConfirmModal";
import { openConfirmModal } from "../redux/features/ConfirmModalSlice";

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [selectProd, setSelectProd] = useState(null);
  const { user } = useSelector((store) => store.userAuth);
  const [loading, setLoading] = useState(false);
  const axiosInstance = useAxios();
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      try {
        const { data } = await axiosInstance.get(
          `/myBooking?email=${user.email}`
        );

        setBookings(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosInstance, user]);

  const handelCancel = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`myBooking/${id}`);
      if (data.deletedCount) {
        toast.success("Cancel successfully!");
        setBookings((prev) => prev.filter((prod) => prod._id !== id));
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">My Bookings</h2>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
        <table className="table table-zebra w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="text-xs sm:text-sm">Vehicle</th>
              <th className="text-xs sm:text-sm">Booking Date</th>
              <th className="text-xs sm:text-sm hidden md:table-cell">Owner</th>
              <th className="text-xs sm:text-sm">Total Price</th>
              <th className="text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings?.map((booking) => (
              <tr key={booking._id}>
                <td>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="avatar">
                      <div className="rounded-md w-10 h-10 sm:w-12 sm:h-12">
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
                      {format(new Date(booking.booking_date), "MMM dd, yyyy")}
                    </div>
                  </div>
                </td>
                <td className="hidden md:table-cell">
                  <div className="flex items-center space-x-2">
                    <div className="avatar">
                      <div className="rounded-full border-2 border-green-600 w-6 h-6 sm:w-8 sm:h-8">
                        <img src={booking.photoURL} alt={booking.owner} />
                      </div>
                    </div>
                    <div>
                      <div className="text-xs sm:text-sm">{booking.owner}</div>
                      <div className="text-xs opacity-70">{booking.email}</div>
                    </div>
                  </div>
                </td>
                <td className="text-xs sm:text-sm">${booking.pricePerDay}</td>

                <td>
                  <div className="flex gap-1 sm:gap-2">
                    <Link
                      to={`/viewDetails/${booking.vehicleId}`}
                      className="btn btn-xs btn-outline btn-info"
                      title="View Details"
                    >
                      <FaEye className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline ml-1">View</span>
                    </Link>

                    <button
                      onClick={() => {
                        dispatch(openConfirmModal());
                        setSelectProd(booking._id);
                      }}
                      className="btn btn-xs btn-outline btn-error"
                      title="Cancel Booking"
                    >
                      <FaTimesCircle className="h-3 w-3 sm:h-4 sm:w-4" />
                      <span className="hidden sm:inline ml-1">Cancel</span>
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {bookings?.length === 0 && (
        <div className="bg-base-100 rounded-lg shadow-sm p-8 text-center">
          <div className="flex justify-center mb-4">
            <FaCarBurst size={100} className="text-6xl text-gray-300" />
          </div>
          <h3 className="text-xl font-semibold mb-2">No bookings found</h3>

          <Link to="/allVehicles" className="btn btn-primary mt-4">
            Browse Vehicles
          </Link>
        </div>
      )}

      <ConfirmModal
        selectProd={selectProd}
        fetchData={handelCancel}
        message={"Cancel this Booking!"}
      />
    </div>
  );
};

export default MyBookings;

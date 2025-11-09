import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import UpdateVehicleModal from "../components/UpdateVehicleModal";
import { updateModalOpen } from "../redux/features/updateModalSlice";
import { useDispatch } from "react-redux";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import FullLoader from "../components/shared/loader/FullLoader";

const MyVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const axiosInstance = useAxios();
  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          "/myVehicles?email=isha@gmail.com"
        );
        setVehicles(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosInstance]);

  if(loading){
    return <FullLoader/>
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className=" mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">My Vehicles</h2>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
        <table className="table table-zebra w-full min-w-[600px]">
          <thead>
            <tr>
              <th className="text-xs sm:text-sm">Vehicle</th>
              <th className="text-xs sm:text-sm">Category</th>
              <th className="text-xs sm:text-sm">Price/Day</th>
              <th className="text-xs sm:text-sm hidden md:table-cell">
                Location
              </th>
              <th className="text-xs sm:text-sm">Status</th>
              <th className="text-xs sm:text-sm">Actions</th>
            </tr>
          </thead>
          <tbody>
            {vehicles.map((vehicle) => (
              <tr key={vehicle._id}>
                <td>
                  <div className="flex items-center space-x-2 sm:space-x-3">
                    <div className="avatar">
                      <div className="rounded-md w-10 h-10 sm:w-12 sm:h-12">
                        <img
                          src={vehicle.coverImage}
                          alt={vehicle.vehicleName}
                        />
                      </div>
                    </div>
                    <div>
                      <div className="font-bold text-xs sm:text-sm">
                        {vehicle.vehicleName}
                      </div>
                      <div className="text-xs opacity-70 sm:hidden">
                        {vehicle.location}
                      </div>
                    </div>
                  </div>
                </td>
                <td className="text-xs sm:text-sm">{vehicle.category}</td>
                <td className="text-xs sm:text-sm">${vehicle.pricePerDay}</td>
                <td className="text-xs sm:text-sm hidden md:table-cell">
                  {vehicle.location}
                </td>
                <td>
                  <div
                    className={`badge badge-xs sm:badge-sm text-white ${
                      vehicle.availability === "Available"
                        ? "badge-success"
                        : "badge-error"
                    }`}
                  >
                    {vehicle.availability}
                  </div>
                </td>
                <td>
                  <div className="flex gap-1 sm:gap-2">
                    <button className="btn btn-xs btn-outline btn-info">
                      <FaEye className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <button
                      className="btn btn-xs btn-outline btn-warning"
                      onClick={() => dispatch(updateModalOpen())}
                    >
                      <FaEdit className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                    <button className="btn btn-xs btn-outline btn-error">
                      <FaTrash className="h-3 w-3 sm:h-4 sm:w-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <UpdateVehicleModal />
    </div>
  );
};

export default MyVehicles;

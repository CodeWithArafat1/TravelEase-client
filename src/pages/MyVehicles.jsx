import React, { useEffect, useState } from "react";
import { FaEye, FaEdit, FaTrash } from "react-icons/fa";
import UpdateVehicleModal from "../components/UpdateVehicleModal";
import { updateModalOpen } from "../redux/features/updateModalSlice";
import { useDispatch, useSelector } from "react-redux";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import FullLoader from "../components/shared/loader/FullLoader";
import { Link } from "react-router";
import ConfirmModal from "../components/ConfirmModal";
import { openConfirmModal } from "../redux/features/ConfirmModalSlice";

const MyVehicles = () => {
  const { user } = useSelector((store) => store.userAuth);
  const [selectProd, setSelectProd] = useState(null);
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/myVehicles?email=${user?.email}`
        );
        setVehicles(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, [axiosInstance, user]);

  const fetchData = async (id) => {
    setLoading(true);
    try {
      const { data } = await axiosInstance.delete(`/vehicles/${id}`);
      if (data.deletedCount) {
        toast.success("Vehicle deleted!");
        setVehicles((prev) => prev.filter((prev) => prev._id !== id));
      }
    } catch (err) {
      toast.error(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return <FullLoader />;
  }

  return (
    <div className="container mx-auto px-4 py-10">
      <div className=" mb-6 gap-4">
        <h2 className="text-xl sm:text-2xl font-bold">My Vehicles</h2>
      </div>

      <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
        {vehicles?.length === 0 ? (
          <div className="h-[60vh] flex justify-center items-center">
            <div className="text-center space-y-10">
              <h1 className="text-3xl text-accent">No Vehicles </h1>
              <Link
                to="/addVehicles"
                className="w-full cursor-pointer py-3 px-4 bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
              >
                Create A Vehicle
              </Link>
            </div>
          </div>
        ) : (
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
              {vehicles?.map((vehicle) => (
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
                      <Link
                        to={`/viewDetails/${vehicle._id}`}
                        className="btn btn-xs btn-outline btn-info"
                      >
                        <FaEye className="h-3 w-3 sm:h-4 sm:w-4" />
                      </Link>
                      <button
                        className="btn btn-xs btn-outline btn-warning"
                        onClick={() => {
                          dispatch(updateModalOpen());
                          setSelectProd(vehicle);
                        }}
                      >
                        <FaEdit className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                      <button
                        onClick={() => {
                          setSelectProd(vehicle._id);
                          dispatch(openConfirmModal());
                        }}
                        className="btn btn-xs btn-outline btn-error"
                      >
                        <FaTrash className="h-3 w-3 sm:h-4 sm:w-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>

      <UpdateVehicleModal
        vehicles={vehicles}
        setVehicles={setVehicles}
        selectProd={selectProd}
      />
      <ConfirmModal fetchData={fetchData} selectProd={selectProd} />
    </div>
  );
};

export default MyVehicles;

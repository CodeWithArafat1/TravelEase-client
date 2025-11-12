import React, { memo, useEffect, useState } from "react";
import { Link } from "react-router";
import { FaEye, FaTrash } from "react-icons/fa";
import { IoHeartDislikeCircleSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import useAxios from "../hooks/useAxios";
import { useDispatch, useSelector } from "react-redux";
import { openConfirmModal } from "../redux/features/ConfirmModalSlice";
import ConfirmModal from "../components/ConfirmModal";

const MyWishlist = () => {
  const [wishList, setWishList] = useState([]);
  const [selectProd, setSelectProd] = useState(null);
  const axiosInstance = useAxios();
  const { user } = useSelector((store) => store.userAuth);
  const dispatch = useDispatch()

  useEffect(() => {
    const fetchWishlist = async () => {
      try {
        const { data } = await axiosInstance.get(
          `/myWishlist?email=${user?.email}`
        );

        if (data) {
          setWishList(data);
        }
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchWishlist();
  }, [axiosInstance, user?.email]);

  const handelDeleteWishlist = async (id) => {
    try {
      const { data } = await axiosInstance.delete(`myWishlist/${id}`);
      if (data.deletedCount) {
        toast.success("Removed Successfully!");
        setWishList((prev) => {
          return prev.filter((item) => item._id !== id);
        });
      }
    } catch (err) {
      toast.error(err.message);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8 min-h-[70vh]">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Wishlist</h2>

      {wishList.length === 0 ? (
        <div className="flex flex-col items-center justify-center h-64 rounded-lg p-6 text-center">
          <IoHeartDislikeCircleSharp className="w-20 h-20  mb-4" />
          <h2 className="text-xl font-semibold mb-2">Your wishlist is empty</h2>
          <p className="text-gray-500 mb-4">
            Looks like you haven't added any vehicles to your wishlist yet.
          </p>
          <Link to="/allVehicles" className="btn btn-primary">
            Browse Vehicles
          </Link>
        </div>
      ) : (
        <div className="overflow-x-auto bg-base-100 rounded-lg shadow-sm">
          <table className="table table-zebra w-full min-w-[600px]">
            <thead>
              <tr>
                <th className="text-xs sm:text-sm">Vehicle</th>
                <th className="text-xs sm:text-sm">Location</th>
                <th className="text-xs sm:text-sm">Price/Day</th>
                <th className="text-xs sm:text-sm">Actions</th>
              </tr>
            </thead>

            <tbody>
              {wishList.map((item) => (
                <tr key={item._id}>
                  <td>
                    <div className="flex items-center space-x-2 sm:space-x-3">
                      <div className="avatar">
                        <div className="rounded-md w-10 h-10 sm:w-12 sm:h-12">
                          <img src={item.coverImage} alt={item.vehicleName} />
                        </div>
                      </div>
                      <div>
                        <div className="font-bold text-xs sm:text-sm">
                          {item.vehicleName}
                        </div>
                        <div className="text-xs opacity-70 sm:hidden">
                          {item.location}
                        </div>
                      </div>
                    </div>
                  </td>

                  <td className="text-xs sm:text-sm hidden md:table-cell">
                    {item.location}
                  </td>

                  <td className="text-xs sm:text-sm">${item.pricePerDay}</td>

                  <td>
                    <div className="flex gap-1 sm:gap-2">
                      <Link
                        to={`/viewDetails/${item.vehicleId}`}
                        className="btn btn-xs btn-outline btn-info"
                        title="View Details"
                      >
                        <FaEye className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline ml-1">View</span>
                      </Link>
                      <button
                        onClick={() => {
                          setSelectProd(item._id)
                          dispatch(openConfirmModal())
                        }}
                        className="btn btn-xs btn-outline btn-error"
                        title="Remove from Wishlist"
                      >
                        <FaTrash className="h-3 w-3 sm:h-4 sm:w-4" />
                        <span className="hidden sm:inline ml-1">Remove</span>
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <ConfirmModal message="Remove the wishlist"
        selectProd={selectProd}
        fetchData={handelDeleteWishlist}
      />
    </div>
  );
};

export default memo(MyWishlist);

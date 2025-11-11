import React, { memo, useEffect, useState } from "react";
import { IoCloseSharp } from "react-icons/io5";
import toast from "react-hot-toast";
import { GrAlert } from "react-icons/gr";
import useAxios from "../hooks/useAxios";

import { useNavigate, useParams } from "react-router";
import { useSelector } from "react-redux";

const UpdateVehicle = () => {
  const { user } = useSelector((store) => store.userAuth);
  const axiosInstance = useAxios();
  const { id } = useParams();
  const [selectProd, setSelectProd] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get(`/vehicles/${id}`);
        setSelectProd(data);
      } catch (err) {
        toast.error(err.message);
      }
    };
    fetchData();
  }, [axiosInstance, id]);

  const handelUpdateVehicle = async (e) => {
    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const vehicleData = Object.fromEntries(formData.entries());
    vehicleData.displayName = user?.displayName;
    vehicleData.photoURL = user?.photoURL;
    vehicleData.email = user?.email;

    if (vehicleData.pricePerDay < 5) {
      return toast("Price muse be greater than 5", {
        style: {
          border: "1px solid #ff0000",
          padding: "16px",
          color: "#ff0000",
        },
        iconTheme: {
          primary: "#ff0000",
          secondary: "#FFFAEE",
        },
        icon: <GrAlert />,
      });
    }
    try {
      const { data } = await axiosInstance.patch(
        `/vehicles/${id}`,
        vehicleData
      );
      if (data.modifiedCount) {
        toast.success("Your vehicles updated!");
        navigate("/myVehicles");
      } else {
        toast.error("Place update something!");
      }
    } catch (err) {
      toast.error(err.message);
    }
  };
  return (
    <>
      <div className={`px-2 `}>
        <div className="max-w-2xl relative my-20 overflow-y-auto mx-auto p-6 bg-base-100 rounded-lg shadow-sm border border-gray-300/20">
          <h2 className="text-2xl font-bold mb-6">Update Vehicle</h2>

          <form className="space-y-4" onSubmit={handelUpdateVehicle}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label htmlFor="vehicleName" className="label">
                  <span className="label-text">Vehicle Name</span>
                </label>
                <input
                  required
                  type="text"
                  id="vehicleName"
                  name="vehicleName"
                  defaultValue={selectProd?.vehicleName}
                  className="input input-bordered w-full focus:outline-none focus:ring-0"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Owner Name</span>
                </label>
                <input
                  required
                  type="text"
                  id="owner"
                  readOnly
                  name="owner"
                  defaultValue={selectProd?.owner}
                  className="input input-bordered w-full focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Category</span>
                </label>
                <select
                  id="category"
                  name="category"
                  defaultValue={selectProd?.category}
                  className="select select-bordered w-full focus:outline-none focus:ring-0"
                >
                  <option value="Sedan">Sedan</option>
                  <option value="SUV">SUV</option>
                  <option value="Electric">Electric</option>
                  <option value="Van">Van</option>
                </select>
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Price Per Day ($)</span>
                </label>
                <input
                  required
                  type="number"
                  id="pricePerDay"
                  defaultValue={selectProd?.pricePerDay}
                  name="pricePerDay"
                  min="0"
                  className="input input-bordered w-full focus:outline-none focus:ring-0"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Location</span>
                </label>
                <input
                  required
                  type="text"
                  id="location"
                  name="location"
                  defaultValue={selectProd?.location}
                  className="input input-bordered w-full focus:outline-none focus:ring-0"
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <span className="label-text">Availability</span>
                </label>
                <select
                  id="availability"
                  name="availability"
                  defaultValue={selectProd?.availability}
                  className="select select-bordered w-full focus:outline-none focus:ring-0"
                >
                  <option value="Available">Available</option>
                  <option value="Booked">Booked</option>
                </select>
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <textarea
                required
                id="description"
                name="description"
                defaultValue={selectProd?.description}
                className="textarea textarea-bordered w-full focus:outline-none focus:ring-0"
                rows="3"
              ></textarea>
            </div>

            <div className="form-control">
              <label className="label">
                <span className="label-text">Cover Image URL</span>
              </label>
              <input
                required
                type="url"
                id="coverImage"
                name="coverImage"
                defaultValue={selectProd?.coverImage}
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="submit"
                className="cursor-pointer btn bg-linear-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
              >
                Update Vehicle
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default memo(UpdateVehicle);

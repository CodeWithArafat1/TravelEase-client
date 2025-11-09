import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { updateModalClose } from "../redux/features/updateModalSlice";

const UpdateVehicleModal = () => {
  const {isOpen} = useSelector(store => store.updateModal)
  const dispatch = useDispatch()
  const handelUpdateVehicle = () => {};
  return (
    <>
      <div className={`fixed ${isOpen ? 'block': 'hidden'} inset-0 bg-black/40 z-99`}>
        <div className="max-w-2xl relative my-20 mx-auto p-6 bg-base-100 rounded-lg shadow-sm border border-gray-300/20">
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
                  defaultValue="Toyota Corolla"
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
                  name="owner"
                  defaultValue="John Doe"
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
                  defaultValue="Sedan"
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
                  defaultValue="Dhaka, Bangladesh"
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
                  defaultValue="Available"
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
                defaultValue="Comfortable 5-seater with A/C and GPS."
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
                defaultValue="https://i.ibb.co/example/image.jpg"
                placeholder="https://example.com/image.jpg"
                className="input input-bordered w-full focus:outline-none focus:ring-0"
              />
            </div>

            <div className="flex justify-end space-x-3 pt-4">
              <button
                type="submit"
                className="cursor-pointer btn bg-gradient-to-r from-emerald-500 to-sky-500 text-white font-semibold rounded-lg"
              >
                Update Vehicle
              </button>
            </div>
          </form>

          <button className="btn absolute top-0 right-0" onClick={()=>dispatch(updateModalClose())}>X</button>
        </div>
      </div>
    </>
  );
};

export default UpdateVehicleModal;

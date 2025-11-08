import React from "react";

const AddVehicle = () => {
  return (
    <div className="max-w-2xl mt-20 mx-auto p-6 bg-base-100 rounded-lg shadow-sm border border-gray-300/20">
      <h2 className="text-2xl font-bold mb-6">Add New Vehicle</h2>

      <form className="space-y-4 ">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="form-control">
            <label className="label">
              <span className="label-text">Vehicle Name</span>
            </label>
            <input
              type="text"
              id="vehicleName"
              defaultValue="Toyota Corolla"
              className="input input-bordered w-full focus:outline-none focus:ring-0"
            />
          </div>

          <div className="form-control">
            <label className="label">
              <span className="label-text">Owner Name</span>
            </label>
            <input
              type="text"
              id="owner"
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
              type="number"
              id="pricePerDay"
              defaultValue="70"
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
              type="text"
              id="location"
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
            id="description"
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
            type="url"
            id="coverImage"
            defaultValue="https://i.ibb.co/example/image.jpg"
            placeholder="https://example.com/image.jpg"
            className="input input-bordered w-full focus:outline-none focus:ring-0"
          />
        </div>

        <div className="form-control">
          <label className="label">
            <span className="label-text">Additional Categories</span>
          </label>
          <input
            type="text"
            id="categories"
            defaultValue="Electric"
            placeholder="e.g., Electric, Hybrid, Luxury"
            className="input input-bordered w-full focus:outline-none focus:ring-0"
          />
        </div>

        <div className="flex justify-end space-x-3 pt-4">
          <button
            type="button"
            className="btn btn-outline focus:outline-none focus:ring-0"
          >
            Reset
          </button>
          <button
            type="submit"
            className="btn btn-primary focus:outline-none focus:ring-0"
          >
            Add Vehicle
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddVehicle;
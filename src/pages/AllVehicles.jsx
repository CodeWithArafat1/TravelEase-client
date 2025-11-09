import React, { useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useAxios from "../hooks/useAxios";

const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const axiosInstance = useAxios();

  useEffect(() => {
    const fetchData = async () => {
      const {data} = await axiosInstance.get("/vehicles");
      setVehicles(data)
      console.log(data)
    };
    fetchData()
  }, [axiosInstance]);
  return (
    <section className="w-full p-4 md:p-8 bg-base-100">
      <div className="container mx-auto">
        {/* === Header & Filters === */}
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-base-content">All Vehicles</h2>

          {/* Filter Dropdowns */}
          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            {/* Categories Filter */}
            <select className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none">
              <option disabled selected>
                All Categories
              </option>
              <option>Sedan</option>
              <option>SUV</option>
              <option>Truck</option>
              <option>Convertible</option>
              <option>Electric</option>
              <option>Van</option>
            </select>

            {/* Location Filter */}
            <select className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none">
              <option disabled selected>
                Location
              </option>
              <option>Barishal</option>
              <option>Dhaka</option>
              <option>Chattogram</option>
            </select>

            {/* Sorting Filter */}
            <select className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none">
              <option disabled selected>
                Sort By: Newest
              </option>
              <option>Oldest</option>
              <option>Price (Low to High)</option>
              <option>Price (High to Low)</option>
            </select>
          </div>
        </div>

        {/* === Vehicle Grid === */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {
            vehicles.map(vehicle => <ProductCard key={vehicle._id} vehicle={vehicle}/>)
          }
          
        </div>

        {/* === Pagination (Optional) === */}
        <div className="flex justify-center mt-12">
          <div className="join">
            <button className="join-item btn">«</button>
            <button className="join-item btn btn-active">1</button>
            <button className="join-item btn">2</button>
            <button className="join-item btn">3</button>
            <button className="join-item btn">»</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AllVehicles;

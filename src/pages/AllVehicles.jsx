import React, { memo, useEffect, useState } from "react";
import ProductCard from "../components/ProductCard";
import useAxios from "../hooks/useAxios";
import toast from "react-hot-toast";
import FullLoader from "../components/shared/loader/FullLoader";
import { AiOutlineFrown } from "react-icons/ai";
const AllVehicles = () => {
  const [vehicles, setVehicles] = useState([]);
  const [loading, setLoading] = useState(false);
  const [priceSort, setPriceSort] = useState("newest");
  const [locationSort, setLocationSort] = useState("all");
  const [categorySort, setCategorySort] = useState("all");
  const axiosInstance = useAxios();

  useEffect(() => {
    setLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axiosInstance.get("/vehicles");
        setVehicles(data);
      } catch (err) {
        toast.error(err.message);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [axiosInstance]);

  const category = [...new Set(vehicles.map((cat) => cat.category))];
  const location = [...new Set(vehicles.map((loc) => loc.location))];
  const handelPriceSort = vehicles
    .filter((vehicle) => {
      if (locationSort === "all") return true;
      return vehicle.location === locationSort;
    })
    .filter((vehicle) => {
      if (categorySort === "all") return true;
      return vehicle.category === categorySort;
    })
    .sort((a, b) => {
      if (priceSort === "newest") return true;
      if (priceSort === "low-high") {
        return a.pricePerDay - b.pricePerDay;
      } else if (priceSort === "high-low") {
        return b.pricePerDay - a.pricePerDay;
      }
    });

  if (loading) {
    return <FullLoader />;
  }
  return (
    <section className="w-full p-4 md:p-8 bg-base-100">
      <div className="container mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center mb-6 gap-4">
          <h2 className="text-3xl font-bold text-base-content">All Vehicles</h2>

          <div className="flex flex-wrap justify-center md:justify-end gap-2">
            <select
              value={categorySort}
              onChange={(e) => setCategorySort(e.target.value)}
              className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none"
            >
              <option value="all">All Categories</option>
              {category.map((cat, ind) => (
                <option key={ind} value={cat}>
                  {cat}
                </option>
              ))}
            </select>

            <select
              value={locationSort}
              onChange={(e) => setLocationSort(e.target.value)}
              className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none"
            >
              <option value={"all"}>All Location</option>
              {location.map((loc, ind) => (
                <option key={ind} value={loc}>
                  {loc}
                </option>
              ))}
            </select>

            <select
              value={priceSort}
              onChange={(e) => setPriceSort(e.target.value)}
              className="select select-bordered bg-base-200 text-base-content w-full sm:w-auto focus:outline-none"
            >
              <option value="newest">Sort By: Newest</option>
              <option value="low-high">Price (Low to High)</option>
              <option value="high-low">Price (High to Low)</option>
            </select>
          </div>
        </div>

        {vehicles.length === 0 ? (
          <div className="flex flex-col items-center justify-center h-64 rounded-lg p-6">
            <AiOutlineFrown className="w-16 h-16 text-gray-400 mb-4" />
            <h2 className="text-xl font-semibold  mb-2">No Vehicles Found</h2>
            <p className="text-gray-500 text-center">
              Sorry, we couldn't find any vehicles matching your criteria.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {handelPriceSort.map((vehicle) => (
              <ProductCard key={vehicle._id} vehicle={vehicle} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default memo(AllVehicles);

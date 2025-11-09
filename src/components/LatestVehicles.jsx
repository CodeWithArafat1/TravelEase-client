import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";
import useAxios from "../hooks/useAxios";

const LatestVehicles = () => {
  const [latest, setLatest] = useState([]);
  const axiosInstance = useAxios()
  useEffect(() => {
    const fetchData = async () => {
      const { data } = await axiosInstance.get("/latestVehicles");
      console.log(data);
      setLatest(data)
    };
    fetchData()
  }, [axiosInstance]);
  return (
    <section className="container mx-auto py-4 md:py-8 ">
      <div className=" mb-6 gap-4">
        <h2 className="text-3xl font-bold">Latest Vehicles</h2>

      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {
          latest.map(vehicle => <ProductCard key={vehicle._id} vehicle={vehicle}/>)
        }
      </div>
    </section>
  );
};

export default LatestVehicles;

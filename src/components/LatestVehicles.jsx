import ProductCard from "./ProductCard";

const LatestVehicles = () => {
  return (
    <section className="container mx-auto py-4 md:py-8 ">
      <div className=" mb-6 gap-4">
        <h2 className="text-3xl font-bold">Latest Vehicles</h2>

        {/* <div className="flex flex-wrap justify-center md:justify-end gap-2">
          <select className="select  focus:ring-0 bg-base-200 text-base-content w-full sm:w-auto">
            <option>All Categories</option>
            <option>Sedan</option>
            <option>SUV</option>
            <option>Truck</option>
            <option>Convertible</option>
          </select>

          <select className="select  focus:ring-0 bg-base-200 text-base-content w-full sm:w-auto">
            <option>All Location</option>
            <option>Rajshahi</option>
            <option>Dhaka</option>
            <option>Bangladesh</option>
          </select>

          <select className="select  focus:ring-0 bg-base-200 text-base-content w-full sm:w-auto">
            <option>Newest</option>
            <option>Price (Low to High)</option>
            <option>Price (High to Low)</option>
          </select>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <ProductCard />
        <ProductCard />
        <ProductCard />
      </div>
    </section>
  );
};

export default LatestVehicles;
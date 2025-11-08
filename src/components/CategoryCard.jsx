import { IoArrowForward } from "react-icons/io5";

const CategoryCard = ({ title, description }) => {
  return (
    <div className="card w-full bg-base-200 shadow-sm p-6">
      <div className="card-body p-0">
        <h2 className="card-title text-2xl font-bold text-base-content mb-2">
          {title}
        </h2>
        <p className="text-base-content text-opacity-80 mb-4">
          {description}
        </p>
        <div className="card-actions justify-start">
          <a href="#" className=" text-lg font-semibold flex items-center gap-1 hover:underline">
            See Vehicles
            <IoArrowForward />
          </a>
        </div>
      </div>
    </div>
  );
};

export default CategoryCard
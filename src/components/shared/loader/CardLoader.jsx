import React from "react";

const CardLoader = ({ count = 1 }) => {
  return (
    <>
      {Array.from({ length: count }).map((_, index) => (
        <div key={index} className="card bg-base-100 shadow-sm animate-pulse">
          <figure>
            <div className="h-48 bg-base-300"></div>
          </figure>
          <div className="card-body p-4">
            <div className="space-y-3">
              <div className="h-4 bg-base-300 rounded w-3/4"></div>
              <div className="h-3 bg-base-300 rounded w-1/2"></div>
              <div className="h-3 bg-base-300 rounded w-full"></div>
              <div className="h-3 bg-base-300 rounded w-5/6"></div>
              <div className="flex justify-between items-center pt-4">
                <div className="h-8 bg-base-300 rounded w-20"></div>
                <div className="h-8 bg-base-300 rounded w-16"></div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
};

export default CardLoader;
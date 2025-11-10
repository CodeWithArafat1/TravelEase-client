import React, { memo } from "react";
import { Link } from "react-router";

const NotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-base-200">
      <div className="text-center px-4">
        <h1 className="text-6xl md:text-8xl font-bold text-primary mb-4">
          404
        </h1>

        <h2 className="text-2xl md:text-3xl font-semibold text-base-content mb-2">
          Page Not Found
        </h2>

        <p className="text-base-content/70 mb-8 max-w-md mx-auto">
          The page you're looking for doesn't exist or has been moved.
        </p>

        <Link to="/" className="btn btn-primary btn-wide">
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default memo(NotFound);

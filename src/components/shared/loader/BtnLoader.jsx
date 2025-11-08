import React from "react";

const BtnLoader = ({text = 'Processing...'}) => {
  return (
    <div>
      <span className="loading loading-spinner loading-sm"></span>
      {text}
    </div>
  );
};

export default BtnLoader;

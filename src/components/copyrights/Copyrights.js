import React from "react";

const Copyrights = () => {
  const currentYear = new Date().getFullYear();
  return (
    <div>
      <p className="text-xs font-normal text-center text-white py-2">
        &#169; {currentYear} NeanderBros&trade;. All Rights Reserved.
      </p>
    </div>
  );
};

export default Copyrights;

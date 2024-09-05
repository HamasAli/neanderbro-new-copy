import React from "react";

const Loader = () => {
  return (
    <div className="fixed inset-0 flex z-50 bg-black bg-opacity-70 justify-center">
      <div className="flex flex-col items-center w-2/3 md:w-1/3 lg:w-1/4 justify-center">
        <img
          src="/assets/loader/loading.gif"
          alt="Loader"
          className="w-[50%] h-80% object-contain"
        />
      </div>
    </div>
  );
};

export default Loader;

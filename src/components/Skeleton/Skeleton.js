import React from "react";
import "./Skeleton.css";

const Skeleton = ({ height, width }) => {
  return (
    <div className="w-full flex flex-wrap">
      <span
        className={`skeleton-box mt-1 inline-block rounded-md`}
        style={{
          height: height ? height : '20px',
          width: width ? width : '80px',
        }}
      ></span>
    </div>
  );
};

export default Skeleton;

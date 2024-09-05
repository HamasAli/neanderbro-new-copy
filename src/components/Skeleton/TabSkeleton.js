import React from "react";
import "./Skeleton.css";

const TabSkeleton = () => {
  return (
    <div class="w-full flex flex-wrap ">
      <span class="skeleton-box h-64 lg:h-24 w-full inline-block rounded-md mt-4"></span>
    </div>
  );
};

export default TabSkeleton;

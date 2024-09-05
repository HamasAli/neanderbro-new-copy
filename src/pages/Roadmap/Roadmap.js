import React from "react";
import RoadmapSection from "../../sections/Roadmap/RoadmapSection";
import RoadmapBoxSection from "../../sections/Roadmap/RoadmapBoxSection";

const Roadmap = () => {
  return (
    <div className="max-w-[100%] mx-auto flex flex-col justify-center items-center">
      <RoadmapSection />
      <RoadmapBoxSection />
    </div>
  );
};

export default Roadmap;

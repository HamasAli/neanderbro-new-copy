import React from "react";
import StyledH1Heading from "../../common/components/styledH1Heading/StyledH1Heading";
import CustomH1Heading from "../../common/components/customH1Heading/CustomH1Heading";

const styles = {
  backgroundImage: "url('/assets/5 roadmap/background image.png')",
};

const Roadmap = () => {
  return (
    <div
      className="flex flex-col lg:flex-row w-[85%] lg:w-[80%] xl:w-[85%] 2xl:w-[80%] py-36 gap-5 justify-between items-center md:mt-10 bg-no-repeat bg-center"
      style={styles}
    >
      <div className="text-center lg:text-start">
        <CustomH1Heading
          fontColor={"text-white"}
          content={"RoadMap"}
          customColor={"outlined-yellow-text"}
          diffText={["RoadMap"]}
        />
        <StyledH1Heading
          fontColor={"text-white"}
          content={"Towards Better Future"}
        />
      </div>
      <div>
        <img
          src="/assets/5 roadmap/banner-image-hd.webp"
          alt="RoadMap"
          width={500}
          height={500}
        />
      </div>
    </div>
  );
};

export default Roadmap;

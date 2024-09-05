import React from "react";
import { content } from "../../../data";
import Steps from "../../../components/steps/Steps";
import StyledH3Heading from "../../../common/components/styledH3Heading/StyledH3Heading";
import StyledLgText from "../../../common/components/styledLgText/StyledLgText";
const StepsSection = () => {
  const steps = content.steps;
  return (
    <div className="relative flex flex-col items-center gap-10 py-20 w-[100%]">
      <img src="/assets/1 Homepage/meat 1.webp" alt="urta dino" className=" w-[5%] md:flex hidden absolute top-10 left-32 "/>
      <img src="/assets/1 Homepage/how-to-mint.GIF" alt="urta dino" className="  w-[20%] md:flex hidden absolute -top-5 right-0 "/>

        <div className="flex flex-col w-[85%] md:w-[80%] xl:w-[65%] justify-center items-center">
          <div>
            <StyledH3Heading
              fontColor={"text-yellow"}
              content={"How To Mint:"}
            />
          </div>
          <div>
            <StyledLgText
              fontColor={"text-gray"}
              content={"Easy Steps To Mint Nft’s"}
            />
          </div>
        </div>
      <div className="flex border-[3px] border-blue bg-white bg-opacity-5 justify-between w-[85%] md:w-[80%] xl:w-[65%] rounded-xl p-8 mx-auto">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 w-[100%]">
          {steps.map((item, index) => (
            <div
              className="grid grid-rows-1 md:justify-center md:grid-rows-1"
              key={index}
            >
              <Steps head={item.head} text={item.text} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default StepsSection;

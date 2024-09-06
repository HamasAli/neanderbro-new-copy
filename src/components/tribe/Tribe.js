import React from "react";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import StyledH4Heading from "../../common/components/styledH4Heading/StyledH4Heading";

const Tribes = ({ heading, text, gif, imageSize, headColor, border }) => {
  return (
    <div
      className={`flex flex-col border-2 rounded-2xl ${border} bg-white bg-opacity-10 relative items-start justify-center px-8  md:min-h-[460px] lg:min-h-[410px] pt-[30%]  lg:pt-[20%] gap-2`}
    >
      <div className={`flex-1 absolute ${imageSize}`}>
        <img src={gif} alt="Tribe Cards Images" />
      </div>
      <div className="flex">
        <StyledH4Heading fontColor={headColor} content={heading} />
      </div>
      <div className="flex mb-[10%]">
        <StyledMdText fontColor={"text-gray"} content={text} fontBold={'font-bold'} />
      </div>
    </div>
  );
};

export default Tribes;

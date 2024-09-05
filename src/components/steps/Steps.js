import React from "react";
import StyledH5Heading from "../../common/components/styledH5Heading/StyledH5Heading";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";

const Steps = ({ head, text }) => {
  return (
    <div className="flex flex-col items-center gap-2 text-center">
      <StyledH5Heading fontColor={"text-blue"} content={head} />
      <StyledMdText fontColor={"text-white"} content={text} />
    </div>
  );
};

export default Steps;

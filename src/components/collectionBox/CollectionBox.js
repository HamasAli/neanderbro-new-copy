import React from "react";
import Button from "../button/Button";
import StyledH4Heading from "../../common/components/styledH4Heading/StyledH4Heading";
import StyledH6Heading from "../../common/components/styledH6Heading/StyledH6Heading";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import StyledSmText from "../../common/components/styledSmText/StyledSmText";
import { Link } from "react-router-dom";

const CollectionBox = ({
  heading,
  text,
  gif,
  imageSize,
  headColor,
  border,
  mint,
  remain,
  mintStyle,
  buttonUrl
}) => {
  return (
    <div className="flex items-center justify-center">
      <div
        className={` lg:w-[75%] xl:w-[60%] flex flex-col border-2 rounded-xl ${border} bg-white bg-opacity-10 items-center min-h-[400px] p-8  `
        }
        style={{
          backgroundImage: "url('/assets/2 Collection/yellow.png')",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "left bottom",
        }}
      >
        <div className={` ${imageSize} lg:w-[50%] pb-6 flex justify-center`}>
          <img src={gif} alt="Logo" />
        </div>
        {/* <div className="flex justify-start">
        <StyledH4Heading fontColor={headColor} content={heading} />
      </div> */}
        <div className="flex text-center lg:w-[60%] justify-center">
          <StyledMdText fontColor={"text-white"} content={text} />
        </div>
        <div
          className={`flex md:flex-row flex-col justify-around ${mintStyle} w-[100%] lg:w-[70%] lg:gap-6 md:items-center items-start 2xl:w-[60%]`}
        >
          <div className="w-[90%]">
            <div className="flex flex-col items-start gap-2 ">
              <StyledSmText fontColor={"text-[#E3E3E3]"} content={"Mint Price"} />
              <StyledH6Heading fontColor={mint === "Free" ? "text-[#01E4A9]" : "text-white"} content={mint} />
              <hr className="w-[80%] md:flex hidden text-white opacity-10 mb-3" />
            </div>
            <hr className="w-[100%] flex md:hidden text-white opacity-10 mb-3" />
          </div>
          <div className="w-[90%]">
            <div className="flex flex-col items-start gap-2">
              <StyledSmText fontColor={"text-[#E3E3E3]"} content={"Minted"} />
              <StyledH6Heading fontColor={"text-white"} content={remain} />
              <hr className="w-[80%] md:flex hidden text-white opacity-10 mb-3" />
            </div>
            <hr className="w-[100%] flex md:hidden text-white opacity-10 mb-3" />
          </div>
        </div>
        <div className="flex flex-col gap-4 w-[100%]">
          <div className="flex md:flex-row flex-col gap-4 w-[100%]">
            <Link className="md:w-[50%]" to={buttonUrl} target="_blank" rel="noopener noreferrer">
              <Button variant={"bg-transparent text-yellow font-montserrat"}>Market Place</Button>
            </Link>
            <Link className="md:w-[50%]" to="/mint">
              <Button variant={"bg-yellow text-dark font-montserrat"}>Mint Now</Button>
            </Link>
          </div>
          <div className="flex justify-center w-full">
            <Link className="w-full" to={"/bridge"}>
              <Button variant={"bg-transparent text-yellow font-montserrat"}>Bridge Your Tokens</Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CollectionBox;

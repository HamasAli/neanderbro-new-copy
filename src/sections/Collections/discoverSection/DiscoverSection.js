import React from "react";
import StyledMdText from "../../../common/components/styledMdText/StyledMdText";
import CustomH1Heading from "../../../common/components/customH1Heading/CustomH1Heading";
import { Link } from "react-router-dom";

const styles = {
  backgroundImage:
    "url('/assets/2 Collection/Collection background image.png')",
};

const DiscoverSection = () => {
  return (
    <div className="pt-[40%] md:pt-[20%] lg:pt-[20%] xl:pt-[8%] 2xl:pt-[5%]">
      <div
        className="w-[100%] h-full xl:min-h-screen bg-no-repeat bg-cover lg:pb-[20%] xl:pb-0 2xl:h-[70vh] 2xl:flex 2xl:justify-center min-h-[500px]"
        style={styles}
      >
        <div className="relative flex items-center justify-center 2xl:w-[70%] 2xl:ml-60">
          <div className="w-[85%] md:w-[80%] 2xl:w-[100%] flex flex-col lg:flex-row justify-center lg:items-center xl:ml-20 xl:mt-32 2xl:ml-0 2xl:mt-0">
            <div className="flex flex-col gap-2 lg:w-[55%] text-center lg:text-left justify-center items-center lg:items-start">
              <div className="w-[15%] md:w-[8%]">
                <Link target="" rel="noopener noreferrer" to="/mint">
                  <img
                    src="/assets/1 Homepage/mint-is-live-500px.gif"
                    alt="Mint Is Live GIF"
                    className="w-[100%]"
                  />
                </Link>
              </div>
              <div>
                <CustomH1Heading
                  fontColor={"text-white"}
                  content={"Discover Our Collection Of Extraordinary NFT’s"}
                  customColor={"outlined-yellow-text"}
                  diffText={["Collection"]}
                />
              </div>
              <div className="md:w-[95%]">
                <StyledMdText
                  fontColor={"text-white"}
                  content={
                    "We are providing worlds first Polygon Blockchain's First Pixelart Caveman NFT Collection"
                  }
                />
              </div>
            </div>
            <div className="xl:w-[45%] xl:relative xl:flex hidden xl:justify-center xl:items-center xl:top-20 xl:left-10 bg-background">
              <div className="absolute left-0 duration-500 scale-90 skew-x-6 skew-y-6 z-1 hover:z-10 hover:rotate-0 hover:scale-110 -rotate-12 hover:skew-x-0 hover:skew-y-0">
                <img
                  className="w-[50%] md:w-[90%]"
                  src="/assets/2 Collection/Group 93.webp"
                  alt="NFT Card#1"
                />
              </div>
              <div className="absolute duration-500 scale-90 skew-x-6 skew-y-6 -top-40 z-2 left-20 z-1 hover:z-10 hover:rotate-0 hover:scale-110 -rotate-12 hover:skew-x-0 hover:skew-y-0">
                <img
                  className="w-[50%] md:w-[90%]"
                  src="/assets/2 Collection/Group 94.webp"
                  alt="NFT Card#2"
                />
              </div>
              <div className="absolute duration-500 scale-90 skew-x-6 skew-y-6 -top-60 z-3 left-40 z-1 hover:z-10 hover:rotate-0 hover:scale-110 -rotate-12 hover:skew-x-0 hover:skew-y-0">
                <img
                  className="w-[50%] md:w-[90%]"
                  src="/assets/2 Collection/Group 96.webp"
                  alt="NFT Card#3"
                />
              </div>
            </div>
            <div className="self-center xl:hidden">
              <img
                src="/assets/2 Collection/banner-image.png"
                alt="NFT Cards Stack"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DiscoverSection;

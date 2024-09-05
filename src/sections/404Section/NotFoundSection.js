import React from "react";
import StyledMdText from "../../common/components/styledMdText/StyledMdText";
import Button from "../../components/button/Button";
import { Link } from "react-router-dom";
const NotFoundSection = () => {
  return (
    <div
      style={{
        backgroundImage: "url('/assets/7 404/3pc-bg-404.png')",
        backgroundRepeat: "no-repeat",
      }}
      className=" flex  justify-center items-center pt-52 relative"
    >
      <div className="flex flex-col items-center justify-center text-center w-[80%] md:w-[50%] gap-10 relative ">
        <div className="relative">
          <img
            className="absolute -top-[75%] left-[16%] w-[45%]"
            src="/assets/7 404/AnimatedPterabird.gif"
            alt="#"
          />
          <img src="/assets/7 404/404.png" alt="#" />
        </div>
        <StyledMdText
          fontColor={"text-white"}
          content={
            "It seems you are on a wrong page, or the link is broken. Go back by clicking the link below before this dinosaur gets angry."
          }
        />
        <div className="pb-4">
          <Link to={"/"}>
            <Button variant={"bg-yellow text-dark"}>Back To Home</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFoundSection;

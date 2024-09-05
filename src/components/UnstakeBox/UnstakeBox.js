import React, { useState } from "react";
import { Link } from "react-router-dom";
import Button from "../button/Button";

const UnstakeBox = ({
  border,
  name,
  name2,
  data1,
  data2,
  ind,
  dataB,
  dataA,
  dataC,
  dontHaveNftText
}) => {
  return (
    <div
      className={`${border} border w-full lg:w-[65%] rounded-xl p-4 bg-black bg-opacity-[30%] `}
    >
      <div className="flex flex-col items-center justify-start w-full lg:gap-4">
        <div className="flex items-center justify-center w-full">
          <p className="mx-auto text-center text-white text:md lg:text-lg">
            {dontHaveNftText} <span className="text-yellow">{name}</span>{" "}
            {data1} <span className="text-yellow">{name2}</span> {data2}{" "}
            {ind === 0 ? <span className="text-yellow">{dataA}</span> : ""}{" "}{dataC}
            {ind === 1 ? <span>{dataB}</span> : ""}
          </p>
        </div>
        <div className="flex items-center justify-center w-full p-5">
          <Link to="/mint" className=" lg:w-1/2">
            <Button variant={"text-dark bg-yellow "}>Mint Now</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default UnstakeBox;

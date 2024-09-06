import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useMintingStateContext } from "../../../context/MintingContract";
import "./mintNow.css"; // Make sure to import the CSS file

const MintNowComponent = () => {
  const { getTotalSupply } = useMintingStateContext();
  const [totalMinted, setTotalMinted] = useState(null);

  useEffect(() => {
    const response = async () => {
      try {
        const minted = await getTotalSupply();
        setTotalMinted(minted);
      } catch (error) {
        return error;
      }
    };
    response();
  }, [getTotalSupply]);

  return (
    <div className="relative top-10 lg:top-0 w-[90%] md:w-[65%] max-w-4xl mx-auto bg-cover bg-center gradient-border rounded-lg">
      <div className="gradient-border-inner p-4 relative flex flex-col md:flex-row justify-between items-center">
        <div className="relative mb-4 md:mb-0">
          <Link to="/mint" target="" rel="noopener noreferrer">
            <img
              src="/assets/11 mintNow/mintNowLeft.png"
              alt="Mint Now Left"
              className="w-full h-auto"
            />
          </Link>
        </div>
        <div className="relative mb-4 md:mb-0">
          <img
            src="/assets/11 mintNow/arrow-left.svg"
            alt="Arrow Left"
            className="w-auto h-auto rotate-90 md:rotate-0"
          />
        </div>
        <div
          className="text-center relative mb-4 md:mb-0 p-[30px] lg:p-[30px] bg-cover bg-center"
          style={{
            backgroundImage: "url('/assets/11 mintNow/strokeBackground.png')",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
          }}
        >
          <span
            className="text-2xl lg:text-4xl font-bold text-stroke"
            style={{ color: "#293626" }}
          >
            {`${totalMinted == null ? "0" : totalMinted}/4000 Minted`}
          </span>
        </div>
        <div className="relative mb-4 md:mb-0">
          <img
            src="/assets/11 mintNow/arrow-right.svg"
            alt="Arrow Right"
            className="w-auto h-auto rotate-90 md:rotate-0"
          />
        </div>
        <div className="relative">
          <Link to="/mint" target="" rel="noopener noreferrer">
            <img
              src="/assets/11 mintNow/mintNowRight.png"
              alt="Mint Now Right"
              className="w-full h-auto"
            />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default MintNowComponent;

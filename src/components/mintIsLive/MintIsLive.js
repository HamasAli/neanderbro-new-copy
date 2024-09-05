import React from "react";
import { content } from "../../data";
import { Link } from "react-router-dom";

const MintIsLive = () => {
  const mintIsLive = content.mintIsLive;
  return (
    <div className="flex justify-center">
      <div className="flex items-end justify-center gap-1 pb-12 md:gap-3 w-[90%] md:w-[80%]">
        {mintIsLive.map((item, index) => (
          <div key={index} style={index === 2 ? { position: 'relative' } : {}}>
            <img src={item.imgUrl} alt="NFT Cards" />
            {index === 2 && (
              <div className="absolute w-[50%] -right-5 -top-4 md:-right-10 md:-top-12 lg:-right-16 lg:-top-12">
              <Link target="" rel="noopener noreferrer" to="/mint">
                <img src="/assets/1 Homepage/mint-is-live-500px.gif" alt="Mint Is Live GIF" className="w-[80%]" />
              </Link>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default MintIsLive;

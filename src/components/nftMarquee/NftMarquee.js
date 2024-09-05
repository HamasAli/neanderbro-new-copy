import React from 'react'
import Marquee from "react-fast-marquee";
import { content } from "../../data";

const NftMarquee = () => {
    const nftCollection = content.nftCollection;

  return (
    <Marquee>
        <div className="flex items-end justify-center gap-1 px-2 pb-14 md:gap-3">
        {nftCollection.map((item, index) => (
          <div key={index} >
            <img src={item.imgUrl} alt="NFT Cards Marquee" />
          </div>
        ))}
      </div>
    </Marquee>
  )
}

export default NftMarquee

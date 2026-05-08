import React, { useState, useEffect } from "react";
import MintIsLiveSection from "../../sections/Home/mintIsLiveSection/MintIsLiveSection";
import MintNowSection from "../../sections/Home/mintNowSection/MintNowSection";
import DinasourSection from "../../sections/Home/dinasourSection/DinasourSection";
import AzkalonSection from "../../sections/Home/azkalonSection/AzkalonSection";
import TribeSection from "../../sections/Home/tribeSection/TribeSection";
import TCGWorldSection from "../../sections/Home/tcgWorldSection/TCGWorldSection";
import SocialCommunitySection from "../../sections/Home/socialCommunitySection/SocialCommunitySection";
import SwiperSection from "../../components/Swiper/Swiper";
import Loader from "../../components/Loader/Loader";
import Carousel from "../../components/carousel/Carousel";

const Homepage = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="max-w-[1440px] mx-auto">
      {showLoader && <Loader />}
      <div className="py-14 lg:pt-32">
        {/*<div
          className=" bg-cover xl:pt-[2%] justify-center items-center "
          
          style={{
            background: `url('/assets/1 Homepage/left-Blue-glow.png') left, url('/assets/1 Homepage/right-yellow-glow.png') right`,
            backgroundRepeat: "no-repeat",
            
          }}
        >
          <Carousel />
        </div>*/}
        <MintNowSection />
        <AzkalonSection />
        <TribeSection />
        <TCGWorldSection />
        <DinasourSection />
        <MintIsLiveSection />
        <SocialCommunitySection />
      </div>
    </div>
  );
};

export default Homepage;

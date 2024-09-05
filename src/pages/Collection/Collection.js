import React, { useState, useEffect } from "react";
import MintSection from "../../sections/Collections/mintSection/MintSection";
import MarqueeSection from "../../sections/Collections/marqueeSection/MarqueeSection";
import DiscoverSection from "../../sections/Collections/discoverSection/DiscoverSection";
import Loader from "../../components/Loader/Loader";

const Collection = () => {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []); 

  return (
    <div className="max-w-[2560px] mx-auto">
    {showLoader &&
      <Loader />}
      <div>

      <DiscoverSection />
      <MintSection />
      <MarqueeSection />
      </div>
    </div>
  );
};

export default Collection;

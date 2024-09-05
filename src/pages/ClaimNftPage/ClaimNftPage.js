import React, { useState, useEffect } from "react";
import Loader from "../../components/Loader/Loader";
import ClaimNftSection from "../../sections/Collections/ClaimNftSection";

const ClainNftPage = () => {
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
   <ClaimNftSection />
    </div>
  );
};

export default ClainNftPage;

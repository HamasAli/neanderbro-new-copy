import React from "react";
import MintSection from "../../sections/MintSection/MintSection";
// import StepsSection from "../../sections/Home/stepsSection/StepsSection";

const styles = {
  backgroundImage: "url('/assets/3 mint/mintbackground.png')"
};

// const styles = {
//   backgroundImage: "url('/assets/9 roadmap comingsoon/background image.png')",
// };

const MintNow = () => {
  return (
    <div
      className="max-w-[100%] mx-auto bg-no-repeat bg-cover bg-center"
      style={styles}
    >
      <MintSection />
    </div>
    // <div
    //   className=" mx-auto flex flex-col items-center justify-center relative h-[100vh] bg-no-repeat	bg-cover bg-center max-w-[100%]"
    //   style={styles}
    // >
    //   <div className="flex flex-col items-center gap-3">
    //     <h5 className="text-2xl font-bold text-center text-white md:text-xl">We're transitioning from the <span className="text-2xl font-bold md:text-xl text-yellow">Ethereum Network</span> to the <span className="text-2xl font-bold md:text-xl text-yellow">Polygon Network</span>.</h5>
    //     <h1 className="text-2xl font-bold md:text-5xl text-yellow">
    //     Stay tuned!
    //     </h1>
    //   </div>
    //   <div>
    //     <img src="/assets/loader/loading1.gif" alt="#" />
    //   </div>
    // </div>
  );
};

export default MintNow;

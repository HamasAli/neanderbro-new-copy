import React, { useState } from "react";
import { CustomConnectButton } from "../../components/CustomConnectButton/CustomConnectbutton";
import CurrentStaking from "../../sections/StakingSection/CurrentStaking";
import PreviousStaking from "../../sections/StakingSection/PreviousStaking"; // Import the component for Previous Staking

const styles = {
  backgroundImage: "url('/assets/staking/stakingimg.png')",
};

// const styles = {
//   backgroundImage: "url('/assets/9 roadmap comingsoon/background image.png')",
// };

const StakingPage = () => {
  const [activeTab, setActiveTab] = useState("current"); // Initialize state for active tab

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div
      className="max-w-[2560px] flex flex-col justify-center gap-4 items-center mx-auto pt-[30%] mb-10 lg:pt-[10%] bg-no-repeat bg-cover bg-center"
      style={styles}
    >
      <div className="flex flex-col items-center gap-3">
        <h1 className="text-2xl font-bold md:text-5xl text-yellow">Staking</h1>
        <h3 className="text-2xl font-bold text-white md:text-2xl">
          Earn POL Rewards
        </h3>
      </div>
      <div className="flex lg:hidden">
        <CustomConnectButton color={"text-black border-yellow bg-yellow"} />
      </div>
      <div className="flex justify-center lg:justify-between  w-[85%] md:w-[60%] lg:w-[80%] bg-transparent font-bold texy-md md:text-lg text-gray-600">
        <div className="flex justify-around lg:justify-start gap-10 w-[100%] md:w-[80%]">
          <button
            className={`text-white hover:underline hover:text-yellow ${activeTab === "current" && "underline text-yellow"
              }`}
            onClick={() => handleTabClick("current")}
          >
            Current Staking
          </button>
          <button
            className={`text-white hover:underline hover:text-yellow ${activeTab === "previous" && "underline text-yellow"
              }`}
            onClick={() => handleTabClick("previous")}
          >
            Previous Staking
          </button>
        </div>
        <div>
          <div className="hidden mb-1 lg:flex">
            <CustomConnectButton color={"text-black bg-yellow"} />
          </div>
        </div>
      </div>
      <hr className="h-[1px] w-[80%] text-white opacity-20" />

      <div className="w-full">
        {activeTab === "current" ? <CurrentStaking /> : <PreviousStaking />}
      </div>
    </div>
  );
};

export default StakingPage;

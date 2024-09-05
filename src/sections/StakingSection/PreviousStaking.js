import React, { useEffect, useState } from "react";
import { content } from "../../data";
import PreviousStakingTabs from "../../components/previousStakingTabs/PreviousStakingTabs";
import { useStakingStateContext } from "../../context/StakingContract";
import Loader from "../../components/Loader/Loader";
import { useStateContext1 } from "../../context";
import TabSkeleton from "../../components/Skeleton/TabSkeleton";

const PreviousStaking = () => {
  const { AllStakingExceptActive } = useStakingStateContext();
  const { metaMaskLoader } = useStateContext1();
  const previous = content.previousData;
  const [details, setDetails] = useState([]);
  const [loading, setLoading] = useState(false);

  const PreviousStaking = async () => {
    setLoading(true);
    try {
      const response = await AllStakingExceptActive();
      if (response?.length > 0) {

        setDetails(response);
      }
    }
    catch (error) {
      return error;
    } finally {
      setLoading(false)
    }
  };

  useEffect(() => {
    PreviousStaking();
  }, []);
  return (
    <div className="w-[100%] py-5 flex flex-col justify-center items-center">
      {metaMaskLoader && <Loader />}
      <div className="w-[80%] py-5 flex flex-col justify-start items-start">
        <div className="flex w-[100%] ">
          <div className="lg:flex hidden justify-between items-center w-[60%] xl:w-[63%]">
            {previous.slice(0, 4).map((item, index) => (
              <div className="flex items-start justify-start ">
                <p className="text-lg text-white text-start">{item.head}</p>
              </div>
            ))}
          </div>
          <div className="lg:flex hidden pl-12 items-center w-[34%] xl:w-[35%]">
            {previous.slice(4, 5).map((item, index) => (
              <div className="flex items-start justify-start">
                <p className="text-lg text-white text-start">{item.head}</p>
              </div>
            ))}
          </div>
        </div>
        <hr className="h-[1px] lg:flex hidden w-[100%] mt-4 text-white opacity-20" />
        {details?.length === 0 || loading ? (
          <TabSkeleton />
        ) : (
          <div className="flex flex-col justify-center w-full gap-3">
            {details
              ?.slice()
              .reverse()
              .map((items, index) => (
                <PreviousStakingTabs key={index} number={index} props={items} />
              ))}
          </div>
        )}
      </div>
      <div className=""></div>
    </div>
  );
};

export default PreviousStaking;

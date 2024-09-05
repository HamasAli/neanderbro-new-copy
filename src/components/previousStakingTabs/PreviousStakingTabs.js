import { React, useEffect, useState } from "react";
import { useAccount } from "wagmi";
import Button from "../button/Button";
import PreviousModal from "../previousModal/PreviousModal";
import { content } from "../../data";
import Skeleton from "../../components/Skeleton/Skeleton";


import { useStakingStateContext } from "../../context/StakingContract";

const PreviousStakingTabs = ({ props, number }) => {
  const [loading, setLoading] = useState(false);
  const account = useAccount();
  const address = account?.address;
  const [isOpen, setIsOpen] = useState(false);
  const [reward, setReward] = useState(null);
  const [nftData, setNftData] = useState([])

  const nftLength = nftData?.stakedNFTsId?.length;

  const { ClaimableReward, StakerDetail } = useStakingStateContext();

  const stakeReward = async () => {
    if (address) {
      try {
        const resp = await ClaimableReward(address, Number(props?.stakingId));
        const detail = await StakerDetail(address, Number(props?.stakingId));
        setNftData(detail);
        setReward(resp);
      } catch (error) {
        return error
      }
    }
  };

  const totalReward = Number(reward);

  const stakingReward = Number(totalReward) / Math.pow(10, 18);

  const tabData = content.previousData;
  const unixTimestampString = `${Number(props?.stakingStartTime)}`;
  const unixTimestamp = parseInt(unixTimestampString, 10);
  const jsTimestamp = unixTimestamp * 1000;
  const startDate = new Date(jsTimestamp);


  const day = startDate.getDate();
  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthAbbreviation = monthNames[startDate.getMonth()];
  const year = startDate.getFullYear();

  const unixEndTimestampString = `${Number(props?.stakingEndTime)}`;
  const unixEndTimestamp = parseInt(unixEndTimestampString, 10);
  const jsEndTimestamp = unixEndTimestamp * 1000;
  const endDate = new Date(jsEndTimestamp);

  const endDay = endDate.getDate();
  const endMonthAbbreviation = monthNames[endDate.getMonth()];
  const endYear = endDate.getFullYear();
  useEffect(() => {
    stakeReward();
  }, [Number(props?.stakingId)]);

  const openModal = () => {
    setIsOpen(true);
  };
  return (
    <div className="w-[100%]  flex mt-5 p-5 border rounded-md border-yellow bg-black bg-opacity-20">

      <div className="w-full hidden lg:flex items-center justify-between text-white">
        <div className="w-[76%] lx:w-[80%] flex justify-between items-center">
          <p className=" text-start text-lg">{Number(props?.stakingId)}</p>
          <p className=" text-start text-lg">
            {Number(day)}-{monthAbbreviation}-{Number(year)}
          </p>
          <p className=" text-start text-lg">
            {Number(endDay)}-{endMonthAbbreviation}-{Number(endYear)}
          </p>
          <div>

            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-start text-lg">{Number(stakingReward).toFixed(6)} POL</p>
            )}
          </div>
          <div >
            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-end text-lg">
                {nftLength}
              </p>
            )}
          </div>
        </div>
        <div className="w-[17%] flex justify-center items-center">
          <Button
            variant={"text-black bg-yellow"}
            children={"View Details"}
            onClick={openModal}
          />
        </div>
      </div>

      <div className="w-full lg:hidden flex flex-col gap-5 justify-center px-4 items-center">
        <div className="w-full  flex justify-between">
          {tabData.slice(0, 3).map((items, index) => (
            <p className="text-white text-md text-left"> {items.head}</p>
          ))}
        </div>
        <div className="flex items-center justify-between  gap-6 md:gap-3 w-full text-white">
          <p className=" text-start text-sm md:text-md">
            {Number(props?.stakingId)}
          </p>
          <p className=" text-start text-sm md:text-md">
            {Number(day)}-{monthAbbreviation}-{Number(year)}
          </p>
          <p className=" text-start text-sm md:text-md">
            {Number(endDay)}-{endMonthAbbreviation}-{Number(endYear)}
          </p>
        </div>
        <div className="w-full hidden md:flex lg:hidden  justify-around">
          {tabData.slice(3, 5).map((items, index) => (
            <p className="text-white text-md text-left"> {items.head}</p>
          ))}
        </div>
        <div className=" items-center justify-around hidden md:flex lg:hidden gap-3 w-full text-white">
          <div>

            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-start text-sm">{Number(stakingReward).toFixed(6)} POL</p>
            )}
          </div>
          <div >
            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-end text-sm">
                {nftLength}
              </p>
            )}
          </div>
        </div>

        <div className="w-full md:hidden flex flex-col gap-3 justify-around">
          {tabData.slice(3, 4).map((items, index) => (
            <p className="text-white text-md text-left"> {items.head}</p>
          ))}
          <div>

            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-start text-white text-sm">{Number(stakingReward).toFixed(6)} POL</p>
            )}
          </div>
        </div>
        <div className="w-full md:hidden flex flex-col gap-3 justify-around">
          {tabData.slice(4, 5).map((items, index) => (
            <p className="text-white text-md text-left"> {items.head}</p>
          ))}
          <div >
            {loading || !address ? (
              <Skeleton />
            ) : (
              <p className=" text-left text-white text-sm">
                {nftLength}
              </p>
            )}
          </div>
        </div>
        <Button
          variant={"text-black bg-yellow"}
          children={"View Details"}
          onClick={openModal}
        />
      </div>

      <PreviousModal
        isOpen={isOpen}
        setIsOpen={setIsOpen}
        modalData={props}
        nftData={nftLength}
        loading={loading}
        sReward={Number(stakingReward)}
        tab={number}
        stakeReward={stakeReward}
      />
    </div>
  );
};

export default PreviousStakingTabs;

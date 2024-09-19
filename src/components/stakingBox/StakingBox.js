import React, { useState, useEffect } from "react";
import EmergencyModal from "../emergancyModal/EmergancyModal";
import { useAccount } from "wagmi";
import Skeleton from "../../components/Skeleton/Skeleton";

import { useStakingStateContext } from "../../context/StakingContract";
import { Tooltip } from "react-tooltip";
const StakingBox = ({ Id, StakingDetails, startTime, endTime, activeStatus, stakingV1 }) => {
  const [loading, setLoading] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [timeOver, setTimeOver] = useState(false);
  const [time, setTime] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });
  const [rewards, setRewards] = useState(null);
  const nftReward = Number(rewards) / Math.pow(10, 18);
  const EthReward = nftReward.toFixed(6);
  const account = useAccount();
  const address = account?.address;
  const { ClaimableReward } = useStakingStateContext();

  const stakingReward = async () => {
    setLoading(true);
    try {
      const response = await ClaimableReward(address, Id);
      setRewards(response);
    } catch (error) {
      return error;
    } finally {
      setLoading(false);
    }
  };


  const openModal = () => {
    setIsOpen(true);
  };

  const formatTimeUnit = (unit) => (unit < 10 ? `0${unit}` : unit);

  useEffect(() => {
    const calculateTimeDifference = () => {
      const currentTime = Math.floor(Date.now() / 1000);
      const totalSeconds = Math.max(0, endTime - currentTime);

      const newTime = {
        days: Math.floor(totalSeconds / (60 * 60 * 24)),
        hours: Math.floor((totalSeconds % (60 * 60 * 24)) / (60 * 60)),
        minutes: Math.floor((totalSeconds % (60 * 60)) / 60),
        seconds: totalSeconds % 60,
      };

      setTime(newTime);

      if (totalSeconds <= 0) {
        setTimeOver(true);
      }
    };

    calculateTimeDifference();

    const timer = setInterval(calculateTimeDifference, 1000);

    return () => clearInterval(timer);
  }, [startTime, endTime]);

  useEffect(() => {
    stakingReward();
  }, [Id, timeOver]);

  const isDisabled = (StakingDetails?.stakedNFTsId?.length) === 0;
  return (
    <div className="w-[80%] lg:pl-[45px] xl:pl-[45px] border border-blue rounded-xl flex lg:flex-row flex-col justify-between m-5 items-center">
      <div className="flex flex-col lg:w-[55%] gap-3 justify-center items-center  lg:items-start p-5">
        <p className="text-4xl font-extrabold text-blue">Summary</p>
        <div className="sm:pl-[24px] md:pl-0">
          <p className="text-white text-md">Summary of your staked NFTs</p>
        </div>
        <div className="flex justify-center lg:justify-between gap-6 w-[40%] lg:w-[30%] ">
          <img src="/assets/staking/logobros.png" alt="bros logo" />
          <img src="/assets/staking/logogals.png" alt="gals logo" />
        </div>
        <div className="flex-col hidden lg:flex">
          <p className="text-white text-md">
            You can unstake your NFTs by clicking{" "}
            <button
              data-tooltip-id="tooltip"
              data-tooltip-content={isDisabled ? "No NeanderBros is Staked yet" : ""}
              disabled={isDisabled}
              onClick={openModal}
              className={`text-red-600 text-md ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}`}
            >
              Emergency Unstake
            </button>
            <Tooltip id="tooltip" />
          </p>
          <p className="text-xs text-white">
            Note: Once you press the button you will not receive any reward and
            you cannot undo this.
          </p>
        </div>

      </div>
      <div className="lg:w-[40%] w-[90%] md:w-[60%] flex flex-col gap-4 m-5 justify-center items-start p-8 border border-blue rounded-xl">
        <p className="text-white text-md">Accumulated Reward</p>
        {loading || !address ? (
          <Skeleton />
        ) : (
          <p className="text-white text-md">
            {Number(rewards) ? EthReward : "0"} POL{" "}
          </p>
        )}
        <hr className="h-[1px]  w-[80%] text-white opacity-20" />
        <p className="text-white text-md">Time Remaining</p>
        {loading ? <Skeleton /> : <div className="flex flex-col text-white">
          <p className="flex gap-2 text-white text-md">
            <span>{formatTimeUnit(time.days)}</span>
            <span>:</span>
            <span>{formatTimeUnit(time.hours)}</span>
            <span>:</span>
            <span>{formatTimeUnit(time.minutes)}</span>
            <span>:</span>
            <span>{formatTimeUnit(time.seconds)}</span>
          </p>
        </div>}
        <div className="flex gap-3 text-sm text-white">
          <p>days</p>
          <p>hrs</p>
          <p>mins</p>
          <p>sec</p>
        </div>

        <hr className="h-[1px]  w-[80%] text-white opacity-20" />
        <p className="text-white text-md">Staked NeanderBros</p>
        {!address || loading ? (
          <Skeleton />
        ) : (
          <p className="text-white w-[80%] text-md break-words ">
            {Number(StakingDetails?.stakedNFTsId?.length) === 0
              ? "-"
              : StakingDetails?.stakedNFTsId
                ? StakingDetails?.stakedNFTsId.join(", ")
                : "-"}
          </p>
        )}
        <hr className="h-[1px]  w-[80%] text-white opacity-20" />
      </div>
      <div className="flex flex-col p-3 lg:hidden">
        <p className="text-white text-md">
          You can Unstake your NFTs by clicking{" "}
          <button data-tooltip-id="tooltip"
            data-tooltip-content={isDisabled ? "No NeanderBros is Staked yet" : ""}
            disabled={isDisabled} onClick={openModal}
            className={`text-red-600 text-md ${isDisabled ? "opacity-60 cursor-not-allowed" : ""}`}>
            Emergency Unstake
          </button>
          <Tooltip id="tooltip" />
        </p>
        <p className="text-xs text-white">
          Note: Once you press the button you will not receive any reward and
          you cannot undo this.
        </p>
      </div>
      <EmergencyModal
        id={Id}
        isOpen={isOpen}
        wallet={address}
        stakingV1={stakingV1}
        setIsOpen={setIsOpen}
      />
    </div>
  );
};

export default StakingBox;

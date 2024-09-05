import React from "react";
import Button from "../button/Button";
import { useStakingStateContext } from "../../context/StakingContract";
import { useAccount, useFeeData } from "wagmi";
import { useStateContext1 } from "../../context";
import { Error } from "../toast/Error";
import { Success } from "../toast/Success";
import { useStakingStateContextV1 } from "../../context/StakingV1Contract";

const UnstakeNft = ({ border, idName, StakingDetails, isDisabled, stakingV1 }) => {
  const { setApiState, setMetaMaskLoader, setNeanderGalsStake } = useStateContext1();
  const account = useAccount();
  const { data } = useFeeData();
  const address = account.address;
  const { UNStakeNG } = useStakingStateContext();
  const { UNStakeNGV1 } = useStakingStateContextV1();
  const handleUnstake = async () => {
    setMetaMaskLoader(true);
    try {
      let response;
      if (stakingV1) {
        response = await UNStakeNGV1(idName, address, data?.formatted?.gasPrice);
      } else {
        response = await UNStakeNG(idName, address, data?.formatted?.gasPrice);
      }
      if (response.status === true) {
        Success({ message1: "Successfully UnStaked", autoClose: true });
        setNeanderGalsStake(false);
        setApiState((prevApiState) => !prevApiState);
        window.location.reload();
      }
    }
    catch (error) {
      Error({ message: "Failed to unstake" });
      return error
    }
    finally {
      setMetaMaskLoader(false);
    }
  };

  const handleClaimCheck = () => {
    Error({ message: "Unstake your BROS First" });
  };


  return (
    <div
      className={`${border} border w-full lg:w-[65%] rounded-xl p-4 bg-black bg-opacity-[30%] `}
    >
      <div className="flex flex-col items-center justify-start w-full lg:gap-4">
        <div className="flex items-center justify-center w-full">
          <p className="mx-auto text-center text-white text-md lg:text-lg">
            NeanderGals NFT <span className="text-yellow">{idName}</span> is
            staked
          </p>
        </div>
        <div className="flex justify-center lg:w-[50%] p-5 items-center">
          <Button
            variant={"text-dark bg-yellow "}
            onClick={
              Number(StakingDetails?.stakedNFTsId?.length) !== 0
                ? handleClaimCheck
                : handleUnstake
            }
            children={"Unstake"}
            disabled={isDisabled}
          />
        </div>
      </div>
    </div>
  );
};

export default UnstakeNft;

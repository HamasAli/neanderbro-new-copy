import React, { useState, useRef } from "react";
import Button from "../button/Button";
import { useAccount } from "wagmi";
import { ContractAddresses } from "../../constants/ContractAdresses";
import StakeModal from "../stakeModal/StakeModal";
import { useStakingStateContext } from "../../context/StakingContract";
import { useMintingStateContext } from "../../context/MintingContract";
import { useNeanderGalsStateContext } from "../../context/NeanderGalsContract";
import { Success } from "../toast/Success";
import { Error } from "../toast/Error";
import { useStateContext1 } from "../../context";

const NftBox = ({
  border,
  boxData,
  gals,
  staking,
  details,
  stakeTime,
  apiNBData,
  apiNGData,
  id,
  NGAlreadyStaked,
}) => {
  const { ApprovedStaking } = useMintingStateContext();
  const { ApprovedNGStaking } = useNeanderGalsStateContext();
  const { Stake, StakeNG } = useStakingStateContext();
  const { setApiState, setMetaMaskLoader, setNeanderGalsStake, } = useStateContext1();
  const [tokenNB, setTokenNB] = useState([]);
  const [tokenNG, setTokenNG] = useState(null);
  const stakingAddress = ContractAddresses?.Staking;
  const account = useAccount();
  const address = account?.address;
  const [isOpen, setIsOpen] = useState(false);
  const buttonsRef = useRef(null);
  const [activeButtons, setActiveButtons] = useState([]);
  const [activeGalsButtons, setActiveGalsButtons] = useState(null);

  const selectedItemsCount = activeButtons?.length;

  const handleButtonClick = (index) => {
    if (activeButtons.includes(index)) {
      setActiveButtons(activeButtons?.filter((i) => i !== index));

      setTokenNB((prevTokenNB) =>
        prevTokenNB?.filter((tokenId) => tokenId !== apiNBData[index].tokenId)
      );
    } else {
      setActiveButtons([...activeButtons, index]);

      setTokenNB((prevTokenNB) => [...prevTokenNB, apiNBData[index].tokenId]);
    }
  };
  const handleGalsButtonClick = (index) => {
    if (activeGalsButtons === index) {
      setActiveGalsButtons(null);
      setTokenNG(() => null);
    } else {
      setActiveGalsButtons(index);
      setTokenNG(apiNGData[index].tokenId);
    }
  };

  const handleSelectAll = () => {
    if (activeButtons?.length === apiNBData?.length) {
      setActiveButtons([]);
      setTokenNB([]);
    } else {
      setActiveButtons([...Array(apiNBData?.length).keys()]);
      setTokenNB(apiNBData?.map((item) => item.tokenId));
    }
  };

  const openModal = () => {
    setIsOpen(true);
  };


  const handleStake = async () => {
    const maxStakingLimit = Number(staking?.maxNFTLimit) - Number(staking?.numberOfNFTsStaked);
    const maxWalletLimit = Number(staking?.maxWalletLimit) - Number(details?.stakedNFTsId?.length);
    let hasError = false;

    if (selectedItemsCount > maxStakingLimit) {
      Error({ message: "Max staking limit reached" });
      hasError = true;
    }

    if (selectedItemsCount > maxWalletLimit) {
      Error({ message: "Max wallet limit reached" });
      hasError = true;
    }

    if (hasError) {
      return;
    }
    setMetaMaskLoader(true);
    try {
      const response = await ApprovedStaking(address, stakingAddress);
      if (response === true) {
        try {
          setMetaMaskLoader(true);
          const resp = await Stake(tokenNB, address);
          if (resp.status === true) {
            Success({ message1: "Successfully Staked", autoClose: true });
            setApiState((prevApiState) => !prevApiState);
            window.location.reload();
          }
        } catch (error) {
          Error({ message: "Failed to stake NFT" });
        } finally {
          setMetaMaskLoader(false);
        }
      } else if (response === false) {
        openModal();
      }
    } catch (error) {
      Error({ message: "Failed to check approval status" });
    } finally {
      setMetaMaskLoader(false);
    }
  };

  const handleNGStake = async () => {
    setMetaMaskLoader(true);
    try {
      const response = await ApprovedNGStaking(address, stakingAddress);
      if (response === true) {
        setMetaMaskLoader(true);
        try {
          const resp = await StakeNG(tokenNG, address);
          if (resp?.status === true) {
            Success({ message1: "Successfully Staked", autoClose: true });
            setNeanderGalsStake(true);
          }
          return resp;
        } catch (error) {
          Error({ message: "Failed to stake NFT" });
          return error;
        } finally {
          setMetaMaskLoader(false);
        }
      } else if (response === false) {
        openModal();
      }
    } catch (error) {
      Error({ message: "Failed to check NG approval status" });
    } finally {
      setMetaMaskLoader(false);
    }
  };


  const scrollButtons = (direction) => {
    if (!buttonsRef.current) {
      return;
    }

    const buttonWidth = 60;

    const scrollOptions = {
      behavior: "smooth",
      block: "nearest",
    };

    if (direction === "left") {
      buttonsRef.current.scrollBy({
        left: -buttonWidth,
        ...scrollOptions,
      });
    } else if (direction === "right") {
      buttonsRef.current.scrollBy({
        left: buttonWidth,
        ...scrollOptions,
      });
    }
  };

  const isDisabled = gals
    ? id === 0 || tokenNG === null
    : stakeTime === false || NGAlreadyStaked === false || tokenNB?.length === 0;

  return (
    <div
      className={`${border} border  w-full lg:w-[65%] rounded-xl p-4 bg-black bg-opacity-[30%] `}
    >
      <div className="flex flex-col items-center justify-start gap-4">
        <p className="text-lg text-white ">{boxData}</p>
        <div className="flex items-center justify-between w-full ">
          {/* Left SVG with onClick handler */}
          <svg
            className="cursor-pointer  w-[20%] h-16 md:h-20 lg:h-[80px]"
            onClick={() => scrollButtons("left")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 66"
            fill="none"
          >
            <rect opacity="0.2" width="20" height="66" rx="4" fill="white" />
            <path
              d="M7.02937 33.7924C6.50936 33.3921 6.50936 32.6079 7.02937 32.2076L11.14 29.0432C11.7976 28.537 12.75 29.0058 12.75 29.8356L12.75 36.1644C12.75 36.9942 11.7976 37.463 11.14 36.9568L7.02937 33.7924Z"
              fill="white"
            />
          </svg>
          {/* Buttons container with horizontal scroll */}

          <div
            className={`grid gap-5 grid-flow-col place-content-start ${apiNBData?.length > 6 ? "grid-rows-2" : "grid-rows-1"
              } w-[100%] overflow-x-auto`}
            ref={buttonsRef}
            style={{ scrollBehavior: "smooth", scrollSnapType: "x mandatory" }}
          >
            {gals === true
              ? apiNGData
                ?.sort((a, b) => a.tokenId - b.tokenId)
                .map((items, index) => (
                  <div className="" key={index}>
                    <Button
                      variant={`text-white  hover:border-yellow hover:text-yellow border-white mx-2 bg-transparent ${activeButtons.includes(index)
                        ? "active text-yellow border-yellow"
                        : ""
                        } ${activeGalsButtons === index
                          ? "active text-yellow border-yellow"
                          : ""
                        }`}
                      children={items.tokenId}
                      onClick={() =>
                        gals
                          ? handleGalsButtonClick(index)
                          : handleButtonClick(index)
                      }
                    />
                  </div>
                ))
              : apiNBData
                ?.sort((a, b) => a.tokenId - b.tokenId)
                .map((items, index) => (
                  <div className="" key={index}>
                    <Button
                      variant={`text-white hover:border-yellow  hover:text-yellow border-white mx-2 bg-transparent ${activeButtons.includes(index)
                        ? "active text-yellow border-yellow"
                        : ""
                        } ${activeGalsButtons === index
                          ? "active text-yellow border-yellow"
                          : ""
                        }`}
                      children={items.tokenId}
                      onClick={() =>
                        gals
                          ? handleGalsButtonClick(index)
                          : handleButtonClick(index)
                      }
                    />
                  </div>
                ))}
          </div>
          {/* Right SVG with onClick handler */}
          <svg
            className="cursor-pointer w-[20%] h-16 md:h-20 lg:h-[80px] "
            onClick={() => scrollButtons("right")}
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 66"
            fill="none"
          >
            <rect opacity="0.2" width="20" height="66" rx="4" fill="white" />
            <path
              d="M12.9706 32.2076C13.4906 32.6079 13.4906 33.3921 12.9706 33.7924L8.85999 36.9568C8.20243 37.463 7.25 36.9942 7.25 36.1644L7.25 29.8356C7.25 29.0058 8.20242 28.537 8.85999 29.0432L12.9706 32.2076Z"
              fill="white"
            />
          </svg>
        </div>
        <hr className="h-[1px] mt-5 w-[80%] text-white opacity-20" />

        <div
          className={` ${gals === true ? "hidden" : "flex"
            } flex justify-between w-[90%] lg:w-[80%]`}
        >
          <div className="flex items-center ">
            <input
              id="default-checkbox"
              type="checkbox"
              value=""
              className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              onChange={handleSelectAll}
              checked={selectedItemsCount === apiNBData?.length}
            />
            <label
              htmlFor="default-checkbox"
              className="text-sm font-medium text-white ms-2"
            >
              Select All
            </label>
          </div>
          <div className="flex items-center ">
            <p className="text-sm font-medium text-white ms-2">
              {selectedItemsCount} Item{selectedItemsCount !== 1 ? "s" : ""}{" "}
              Selected
            </p>
          </div>
        </div>
        <div className="flex justify-center w-[70%] p-5 items-center">
          <Button
            children={"Stake"}
            variant={"text-black border-yellow px-5 text-md bg-yellow"}
            onClick={() => (gals === true ? handleNGStake() : handleStake())}
            disabled={isDisabled}
          />
        </div>
      </div>
      <StakeModal
        isOpen={isOpen}
        gal={gals}
        staking={stakingAddress}
        array={tokenNB}
        setIsOpen={setIsOpen}
        wallet={address}
        units={tokenNG}
      />
    </div>
  );
};

export default NftBox;

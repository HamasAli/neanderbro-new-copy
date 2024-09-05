import React, { useEffect } from "react";
import StyledXsText from "../../common/components/styledXsText/StyledXsText";
import { Link } from "react-router-dom";
import Button from "../../components/button/Button";
import { useState } from "react";
import { CustomConnectButton } from "../../components/CustomConnectButton/CustomConnectbutton";
import StyledH3Heading from "../../common/components/styledH3Heading/StyledH3Heading";
import StyledSmText from "../../common/components/styledSmText/StyledSmText";
import StyledH6Heading from "../../common/components/styledH6Heading/StyledH6Heading";
import { useMintingStateContext } from "../../context/MintingContract";
import { useAccount, useFeeData, useNetwork } from "wagmi";
import Loader from "../../components/Loader/Loader";
import { Success } from "../../components/toast/Success";
import StepsSection from "../Home/stepsSection/StepsSection";
import { useChainModal } from "@rainbow-me/rainbowkit";
import { Error } from "../../components/toast/Error";

const MintSection = () => {
  const account = useAccount();
  const { data } = useFeeData();
  const { openChainModal } = useChainModal();
  const { chain, chains } = useNetwork();
  const chainIds = chains.map(chain => chain.id);
  const [activeClaimData, setActiveClaimData] = useState(null);
  const [totalMinted, setTotalMinted] = useState(null);
  const [loading, setLoading] = useState(false);
  const {
    ActiveClaimConditionById,
    ActiveClaimCondition,
    mintNFT,
    getTotalSupply,
  } = useMintingStateContext();
  const [qty, setQty] = useState(1);
  const handleAddQty = () => {
    setQty(qty + 1);
  };
  const handleRemoveQty = () => {
    if (qty === 1) {
      return false;
    }
    setQty(qty - 1);
  };
  const handleMint = async () => {
    try {
      setLoading(true);
      const res = await mintNFT(
        account?.address,
        qty,
        activeClaimData?.currency,
        activeClaimData?.pricePerToken,
        activeClaimData?.merkleRoot,
        activeClaimData?.quantityLimitPerWallet,
        data?.formatted?.gasPrice
      );
      setLoading(false);
      if (res?.transactionHash) {
        const toastMsg = `https://polygonscan.com/tx/${res.transactionHash}`;
        Success({ message: toastMsg, autoClose: true });
      }
    } catch (error) {
      setLoading(false);
      const toastMsg =
        error?.UserRejectedRequestError || "User denied the request.";
      Error({ message: toastMsg, autoClose: true });
      return error;
    }
  };

  useEffect(() => {
    const res = async () => {
      try {
        const result = await ActiveClaimCondition();
        if (result) {
          const claimConditionResult = await ActiveClaimConditionById(result);
          setActiveClaimData(claimConditionResult);
        }
      } catch (error) {
        return error;
      }
    };

    const response = async () => {
      try {
        const minted = await getTotalSupply();
        setTotalMinted(minted);
      } catch (error) {
        return error;
      }
    };
    res();
    response();
  }, []);


  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      setShowLoader(false);
    }, 1000);

    return () => clearTimeout(timeoutId);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center w-[100%] h-full">
      {showLoader && <Loader />}

      {/* {loading && <Loader />} */}
      <div className="flex flex-col justify-center w-[80%] mt-12 2xl:mt-24 py-14">
        {/* headings section  */}
        <div className="flex flex-col items-center justify-center py-4">
          <StyledH3Heading
            fontColor={"text-yellow "}
            content={"Collect Your NFT"}
          />
        </div>
        {/* card section  */}
        <div className="flex justify-center w-[100%]">
          <div
            className="flex flex-col xl:flex-row w-full md:w-[80%] lg:w-[70%] 2xl:w-[55%] border-2 border-blue rounded-2xl relative 
          items-center xl:items-start justify-center xl:justify-start  gap-2"
          >
            <div className="flex flex-col xl:w-[70%] w-[100%] justify-center items-center h-full rounded-2xl p-6 bg-[#b2ddf51a] bg-opacity-5 xl:backdrop-blur-sm xl:px-10">
              <div className="flex flex-col w-[100%]">
                {/* left section  */}
                <div className="flex flex-col items-start gap-4 xl:flex-row xl:gap-5 xl:justify-between ">
                  {/* mint price section  */}
                  <div className="flex flex-col gap-2 items-start w-[100%]">
                    <StyledSmText
                      fontColor={"text-[#E3E3E3]"}
                      content={"Price"}
                    />

                    <StyledH6Heading
                      fontColor={"text-white"}
                      content={`${activeClaimData == null
                        ? "0"
                        : activeClaimData?.pricePerToken / 10 ** 18
                        } POL`}
                    />

                    <hr className="w-[100%] text-white opacity-20 mb-3" />
                  </div>
                  {/* Remaining  section  */}
                  <div className="flex flex-col gap-2 items-start w-[100%]">
                    <StyledSmText
                      fontColor={"text-[#E3E3E3]"}
                      content={"Remaining"}
                    />

                    <StyledH6Heading
                      fontColor={"text-white"}
                      content={`${totalMinted == null ? "0" : totalMinted
                        }/4000 Minted`}
                    />
                    <hr className="w-[100%] text-white opacity-20 mb-3" />
                  </div>
                </div>
                {/* right section  */}
                <div className="flex flex-col items-start gap-4 xl:flex-row xl:gap-5 xl:justify-between ">
                  {/* quantity section  */}
                  <div className="flex flex-col gap-[9.5px] items-start w-[100%]">
                    <StyledSmText
                      fontColor={"text-[#E3E3E3]"}
                      content={"Quantity:"}
                    />
                    <div className="flex flex-row items-center gap-2">
                      <img
                        alt="remove"
                        src="/assets/3 mint/remove.svg"
                        className="cursor-pointer"
                        onClick={handleRemoveQty}
                      />
                      <StyledSmText fontColor={"text-white"} content={qty} />

                      <img
                        alt="Add"
                        src="/assets/3 mint/add.svg"
                        className="cursor-pointer"
                        onClick={handleAddQty}
                      />
                    </div>
                    <hr className="w-[100%] text-white opacity-20 mb-3" />
                  </div>
                  {/* Total Price section  */}
                  <div className="flex flex-col gap-2 items-start w-[100%]   ">
                    <StyledSmText
                      fontColor={"text-[#E3E3E3]"}
                      content={"Total Price"}
                    />

                    <StyledH6Heading
                      fontColor={"text-white"}
                      content={`${activeClaimData == null
                        ? "0"
                        : (activeClaimData?.pricePerToken / 10 ** 18) * qty
                        } POL`}
                    />
                    <hr className="w-[100%] text-white opacity-20 mb-3" />
                  </div>
                </div>
              </div>
              {/* mint now Button  */}
              <div className="flex flex-col w-[100%] gap-4 pt-6">
                <div className="flex xl:flex-row flex-col  xl:w-[85%] gap-4">
                  <Link className="xl:w-[50%]" to="/mint">
                    <Button
                      disabled={account?.isDisconnected || !chainIds.includes(chain?.id) || qty < 1 || loading}
                      variant={"text-dark border-yellow bg-yellow "}
                      onClick={handleMint}
                    >
                      Mint Now
                    </Button>
                  </Link>
                  {account?.isConnected && !chainIds.includes(chain?.id) ? (
                    <Link className="w-[50%]">
                      <Button
                        variant={
                          "text-white border-red-500 bg-red-500 animate-pulse"
                        }
                        onClick={openChainModal}
                      >
                        Wrong Network
                      </Button>
                    </Link>
                  ) : (
                    <div className="xl:w-[50%]">
                      <CustomConnectButton
                        color={"text-yellow border-yellow bg-transparent "}
                      />
                    </div>
                  )}
                </div>
                <Link to="/bridge" className="xl:w-[80%]">
                  <Button variant={"text-dark border-yellow bg-yellow "}>
                    Bridge Your Tokens
                  </Button>
                </Link>
                <div className="flex flex-row gap-0">
                  {/* <p className="text-xs text-white 2xl:pb-3">
                    By clicking
                    <span className="text-yellow"> “MINT NOW” </span>
                    button, you agree to our{" "}
                    <Link
                      to="/terms-&-conditions"
                      className="underline hover:text-yellow"
                    >
                      Terms of Service
                    </Link>{" "}
                    and our{" "}
                    <Link
                      to={"/privacy-policy"}
                      className="underline hover:text-yellow"
                    >
                      Privacy Policy
                    </Link>
                    .
                  </p> */}
                </div>
              </div>
            </div>
            <div className="flex flex-col xl:w-[34%] items-center justify-center xl:mt-4 p-4 bg-opacity-2 backdrop-blur-5 ">
              <div className="flex flex-col items-center justify-center mb-5">
                <img
                  src="/assets/2 Collection/logo-bros.webp"
                  alt="logo bros"
                />
                <img src="/assets/3 mint/Group 233.png" alt="bros nft group" />
              </div>
              <StyledXsText
                fontColor={"text-white"}
                content={
                  "You need to pay a GAS fee during minting. We allow unlimited mints per wallet."
                }
              />
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col items-center justify-center w-[100%]">
        <StepsSection />
      </div>
    </div>
  );
};

export default MintSection;

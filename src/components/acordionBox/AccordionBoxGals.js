import React, { useState } from "react";
import NftBox from "../nftBox/NftBox";
import { ContractAddresses } from "../../constants/ContractAdresses";
import "animate.css";
import UnstakeBox from "../UnstakeBox/UnstakeBox";
import UnstakeNft from "../UnstakeNFT/UnstakeNft";
import { useAccount } from "wagmi";
import Skeleton from "../Skeleton/Skeleton";

const AccordionBoxGals = ({ time, id, loading, StakingDetails, apiGalsData, galId, NGAlreadyStaked }) => {
  const account = useAccount();
  const [expandedItems, setExpandedItems] = useState({ item1: true });
  const [isOpen, setIsOpen] = useState(true);
  const filteredAddress = apiGalsData?.filter((item) => item?.contractAddress?.toLowerCase() === ContractAddresses?.NeanderGal?.toLowerCase());

  const toggleAccordion = (item) => {
    setIsOpen(!isOpen);
    setExpandedItems((prev) => ({
      ...prev,
      [item]: !prev[item],
    }));
  };

  return (
    <div className="relative font-inter antialiased w-[80%] mx-auto mt-8">
      <main
        className={`border border-blue rounded-xl overflow-hidden relative flex flex-col justify-center`}
      >
        <div className="w-full px-4 mx-auto md:px-6">
          <div className="py-2">
            <h2>
              <button
                id="faqs-title-01"
                type="button"
                className="flex items-center justify-between w-full py-2 font-semibold text-left"
                onClick={() => toggleAccordion("item1")}
                aria-expanded={expandedItems["item1"]}
                aria-controls="faqs-text-01"
              >
                <svg
                  className={`w-10 ${isOpen && NGAlreadyStaked ? "invisible" : "invisible"
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  width="13"
                  height="10"
                  viewBox="0 0 13 10"
                  fill="none"
                >
                  <path
                    d="M1 4.5L4.45 8.05L11.5 1"
                    stroke="white"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <div
                  className={`flex lg:flex-row flex-col gap-3 justify-center items-center animate__animated animate__fadeInDown ${isOpen ? "hidden" : "flex text-2xl"
                    }`}
                >
                  <p className={`font-extrabold text-blue`}>NeanderGals</p>
                  <img
                    src="/assets/staking/galsnfts.png"
                    alt="nft"
                    className="w-[50%] lg:w-[30%] xl:w-[35%] 2xl:w-[40%]"
                  />
                </div>
                {/* <div className="ml-auto"> */}
                <svg
                  className={`w-5 h-5 mr-1 2xl:w-7 2xl:h-7${isOpen
                    ? "transform rotate-180 duration-1000"
                    : "duration-1000 w-9"
                    }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <circle cx="12" cy="12" r="11.5" stroke="white" />
                  <path
                    d="M7.9 11L11.95 14.652L16 11"
                    stroke="white"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                {/* </div> */}
              </button>
            </h2>
            <div
              id="faqs-text-01"
              role="region"
              aria-labelledby="faqs-title-01"
              className="grid overflow-hidden text-sm transition-all duration-500 ease-in-out text-slate-600"
              style={{
                gridTemplateRows: expandedItems["item1"] ? "1fr" : "0fr",
                opacity: expandedItems["item1"] ? 1 : 0,
              }}
            >
              <div
                className={`overflow-hidden flex w-full lg:flex-row gap-3 flex-col items-center justify-between ${isOpen ? "p-6" : "p-0"
                  }`}
              >
                <div className="flex flex-col pl-4 lg:w-[30%] gap-4">
                  <p className={`font-extrabold text-blue text-2xl md:text-4xl`}>NeanderGals</p>
                  <p className="text-white text-md">In order to stake NeanderBros, you need to stake one NeanderGal first.</p>
                  <img src="/assets/staking/galsnfts.png" alt="nfts" className="w-[95%]" />
                </div>
                <div className="flex justify-end md:justify-center lg:justify-end w-full lg:w-[70%]">
                  {account?.isConnected ? (
                    loading ?
                      <div className="w-full lg:w-[65%]">
                        <Skeleton width="100%" height="190px" />
                      </div> :
                      NGAlreadyStaked ? (
                        <UnstakeNft StakingDetails={StakingDetails} idName={galId} border={"border-blue"} />
                      ) : filteredAddress && filteredAddress?.length === 0 ? (
                        <UnstakeBox
                          dontHaveNftText={"You don't have any"}
                          name={"NeanderGals."}
                          name2={"NeanderBro"}
                          gals={true}
                          ind={0}
                          border="border-blue"
                          data1="Please mint two"
                          data2="NFTs and get a"
                          dataA={"NeanderGal"}
                          dataC={"airdrop for FREE."}
                        />
                      ) : filteredAddress ? filteredAddress?.length > 0 && (
                        <NftBox
                          gals={true}
                          border="text-blue"
                          stakeTime={time}
                          apiNGData={filteredAddress}
                          id={id}
                          data={"Choose your NeanderGal to stake"}
                        />
                      ) : ''
                  ) : (
                    <div className="flex flex-col py-10 w-full md:w-[90%] xl:w-[65%] items-center justify-center h-full gap-8 bg-transparent border rounded-xl border-blue p-[1rem]">
                      <div>
                        <img src="/assets/staking/lock.png" alt="Lock NFT" />
                      </div>
                      <div className="w-[80%] text-center">
                        <h6 className="font-bold text-white text-md">Please Connect your wallet to continue.</h6>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
export default AccordionBoxGals;

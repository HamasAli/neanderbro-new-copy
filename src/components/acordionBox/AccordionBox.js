import React, { useState } from "react";
import NftBox from "../nftBox/NftBox";
import { ContractAddresses } from "../../constants/ContractAdresses";
import "animate.css";
import UnstakeBox from "../UnstakeBox/UnstakeBox";
import UnstakeNft from "../UnstakeNFT/UnstakeNft";

const AccordionBox = ({ border, title, dataC, img, color, i, time, id, StakingDetails, apiBrosData, apiGalsData, galId, neanderGalsStake }) => {
  const [expandedItems, setExpandedItems] = useState({ item1: true });
  const [isOpen, setIsOpen] = useState(true);
  const filteredAddress = apiBrosData.filter((item) => item?.token_address?.toLowerCase() === ContractAddresses?.NeanderBROS?.toLowerCase());

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
        className={`border ${border} rounded-xl overflow-hidden relative flex flex-col justify-center`}
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
                {neanderGalsStake && i == 0 ? (
                  <svg
                    className={`w-10 ${!isOpen && neanderGalsStake ? "flex" : "flex"
                      }`}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                  >
                    <circle cx="12" cy="12" r="12" fill="#05FF00" />
                    <path
                      d="M7 12.5L10.45 16.05L17.5 9"
                      stroke="black"
                      stroke-width="2"
                      stroke-miterlimit="10"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    />
                  </svg>
                ) : i === 0 ? (
                  <svg
                    className={`w-10 ${isOpen && neanderGalsStake ? "flex" : "flex"
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
                ) : (
                  <svg
                    className={`w-10 ${isOpen && neanderGalsStake ? "invisible" : "invisible"
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
                )}
                <div
                  className={`flex lg:flex-row flex-col gap-3 justify-center items-center animate__animated animate__fadeInDown ${isOpen ? "hidden" : "flex text-2xl"
                    }`}
                >
                  <p className={`font-extrabold ${color}`}>{title}</p>
                  <img
                    src={img}
                    alt="nft"
                    className="w-[50%] lg:w-[30%] xl:w-[35%] 2xl:w-[40%]"
                  />
                </div>
                <svg
                  className={`w-5 h-5 mr-1 2xl:w-7 2xl:h-7 ${isOpen
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
                <div className="flex flex-col pl-4 lg:w-[50%] gap-4">
                  <p className={`font-extrabold ${color} text-4xl`}>{title}</p>
                  <p className="text-white text-md">{dataC}</p>
                  <img src={img} alt="nfts" className="w-[95%]" />
                </div>
                <div className="flex justify-end w-full">
                  {i == 0 && (apiGalsData?.length == 0 || []) ? (
                    <UnstakeBox
                      dontHaveNftText={"You don't have any"}
                      name={"NeanderGals."}
                      name2={i == 0 ? "NeanderBros" : ""}
                      gals={i == 0}
                      ind={i}
                      border={border}
                      data1={i == 0 ? "Please Mint 10" : ""}
                      data2={i == 0 ? "to Get a Free" : ""}
                      dataB={"Please Mint."}
                    />
                  ) : i === 1 && StakingDetails?.stakedNFTsId?.length > 0 ?
                    <UnstakeBox
                      dontHaveNftText={"You have staked all your "}
                      name2={i == 1 ? "NeanderBros." : ""}
                      ind={i}
                      border={border}
                      dataB={"Please Mint."}
                    /> :
                    i == 1 && (filteredAddress?.length == 0) ? (
                      <UnstakeBox
                        dontHaveNftText={"You don't have any"}
                        name={"NeanderBros."}
                        name2={i == 0 ? "NeanderBros" : ""}
                        ind={i}
                        gals={i == 0}
                        border={border}
                        dataB={"Please Mint."}
                      />
                    ) :
                      i == 0 && (neanderGalsStake == true && galId) ? (
                        <UnstakeNft idName={galId} border={"border-blue"} />
                      ) : (
                        <NftBox
                          gals={i == 0}
                          border={border}
                          stakeTime={time}
                          apiNBData={filteredAddress}
                          apiNGData={apiGalsData}
                          id={id}
                          data={
                            i == 0
                              ? "Choose your NeanderGal to stake"
                              : "Select NFTs to stake"
                          }
                        />
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
export default AccordionBox;

import React, { useEffect, useState } from "react";
import CollectionBox from "../../../components/collectionBox/CollectionBox";
import { content } from "../../../data";
import { useMintingStateContext } from "../../../context/MintingContract";

const MintSection = () => {
  const mint = content.mintCollect;

  const [activeClaimData, setActiveClaimData] = useState(null);
  const [totalMinted, setTotalMinted] = useState(null);
  const { ActiveClaimConditionById, ActiveClaimCondition, getTotalSupply } =
    useMintingStateContext();

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


  return (
    <div className="flex flex-col items-center justify-center">
      <div className="flex items-center justify-center py-6 gap-10 md:gap-4 xl:py-10 w-[100%] md:w-[80%]">
        {mint.map((item, index) => (
          <div key={index} className="w-[90%] flex-wrap ">
            <CollectionBox
              gif={item.url}
              border={"border-yellow"}
              text={item.text}
              imageSize={"w-[140px] "}
              mintStyle={"pt-10 pb-4"}
              buttonUrl={"https://opensea.io/collection/neanderbros"}
              mint={`${activeClaimData?.pricePerToken / 10 ** 18} POL`}
              remain={`${totalMinted}/4000 Minted`}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default MintSection;

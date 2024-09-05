/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import { useAccount, useNetwork } from "wagmi";
import { useStateContext1 } from "../../context";
import React, { useEffect, useState } from "react";
import Loader from "../../components/Loader/Loader";
import Skeleton from "../../components/Skeleton/Skeleton";
import StakingBox from "../../components/stakingBox/StakingBox";
import { ContractAddresses } from "../../constants/ContractAdresses";
import { useStakingStateContext } from "../../context/StakingContract";
import AccordionBoxGals from "../../components/acordionBox/AccordionBoxGals";
import AccordionBoxBros from "../../components/acordionBox/AccordionBoxBros";

const CurrentStaking = () => {
  const {
    StakerDetail,
    StakingDetails,
    CurrentStaking,
    stakedNeanderGal,
    neanderGalStakeStatus,
  } = useStakingStateContext();

  const { chain } = useNetwork();
  const { neanderGalsStake } = useStateContext1();
  const { metaMaskLoader, apiState } = useStateContext1();

  const chainId = chain?.id;
  const account = useAccount();
  const [id, setId] = useState();
  const address = account?.address;
  const [galId, setGalId] = useState();
  const [details, setDetails] = useState([]);
  const [staking, setStaking] = useState(null);
  const [loading, setLoading] = useState(true);
  const [stakeTime, setSakeTime] = useState(false);
  const [apiBrosData, setBrosApiData] = useState([]);
  const [apiGalsData, setApiGalsData] = useState([]);
  const [showContent, setShowContent] = useState(false);
  const [activeStatus, setActiveStatus] = useState(true);
  const [NGAlreadyStaked, setNGAlreadyStaked] = useState(false);

  const CurrentId = async () => {
    setLoading(true);
    try {
      const resp = await CurrentStaking();
      setId(resp);
      if (resp !== 0) {
        const stakingResponse = await StakingDetails(resp);
        setStaking(stakingResponse);
        const detail = await StakerDetail(account?.address, resp);
        setDetails(detail);
        setLoading(false);
      } else {
        setLoading(false);
        setId(resp);
      }
    }
    catch (error) {
      setLoading(false);
      return error;
    }
  };

  useEffect(() => {
    if (account?.address) {
      CurrentId();
    }
  }, [apiState, account?.status]);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const checkActiveStatus = (stakingEndTime) => {
    const currentTime = Math.floor(new Date().getTime() / 1000);
    if (currentTime > Number(stakingEndTime)) {
      setActiveStatus(false);
      setSakeTime(false);
    } else if (currentTime < Number(stakingEndTime)) {
      setActiveStatus(true);
      setSakeTime(true);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (staking) {
        checkActiveStatus(staking.stakingEndTime);
      }
    }, 1000);
    return () => clearInterval(interval);
  }, [staking]);

  const totalReward = `${Number(staking?.stakingTotalReward)}`;
  const reward = `${Number(staking?.rewardPerNFTPerDay)}`;
  const perDayReward = (((reward / Math.pow(10, 18)) * 365) / 50) * 100;

  const unixTimestampString = `${Number(staking?.stakingStartTime)}`;
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

  const unixEndTimestampString = `${Number(staking?.stakingEndTime)}`;
  const unixEndTimestamp = parseInt(unixEndTimestampString, 10);
  const jsEndTimestamp = unixEndTimestamp * 1000;
  const endDate = new Date(jsEndTimestamp);

  const endDay = endDate.getDate();
  const endMonthAbbreviation = monthNames[endDate.getMonth()];
  const endYear = endDate.getFullYear();
  const tablesData = [
    {
      body: `${Number(staking?.stakingId)}`,
      head: "ID",
    },
    {
      body: `${Number(day)}-${monthAbbreviation}-${Number(year)}`,
      head: "Start Time",
    },
    {
      body: `${Number(endDay)}-${endMonthAbbreviation}-${Number(endYear)}`,
      head: "End Time",
    },
    {
      body: `${perDayReward.toFixed(2)} %`,
      head: "APY",
    },
    {
      body: `${Number(staking?.numberOfNFTsStaked)}/${Number(staking?.maxNFTLimit)}`,
      head: "Max staking limit",
    },
    {
      body: `${Number(staking?.maxWalletLimit) > 100000
        ? "Unlimited"
        : `${Number(details?.stakedNFTsId?.length)}/${Number(staking?.maxWalletLimit)}`
        }`,
      head: "Max Wallet limit",
    },
  ];

  const fetchBrosNFTs = async () => {
    try {
      let data = JSON.stringify({
        wallet_address: address,
        chainId: chainId,
        contractAddresses: [ContractAddresses.NeanderBROS],
        // collection: "bros",
      });

      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://nfts.codeencoders.com/get_wallet_nfts",
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          setBrosApiData(response?.data?.result);
        })
        .catch((error) => {
          return error
        });
    } catch (error) {
      // Handle fetch error
      return error
    }
  };
  const fetchGalsNFTs = async () => {
    try {
      let data = JSON.stringify({
        wallet_address: address,
        chainId: chainId,
        contractAddresses: [ContractAddresses.NeanderGal],
        // collection: "gals",
      });
      let config = {
        method: "post",
        maxBodyLength: Infinity,
        url: "https://nfts.codeencoders.com/get_wallet_nfts",
        data: data,
      };
      axios
        .request(config)
        .then((response) => {
          setApiGalsData(response?.data?.result);
        })
        .catch((error) => {
          return error;
        });
    } catch (error) {
      return error;
    }
  };

  const handleStatus = async () => {
    try {
      const resp = await neanderGalStakeStatus(address);
      setNGAlreadyStaked(resp);
    } catch (error) {
      return error;
    }
  };

  useEffect(() => {
    if (account?.isConnected) {
      fetchGalsNFTs();
      fetchBrosNFTs();
    }
  }, [account?.address, neanderGalsStake, account?.isConnected, apiState]);

  useEffect(() => {
    if (account?.isConnected) {
      handleStatus();
      StakedGal();
    }
  }, [neanderGalsStake, account?.isConnected]);

  const StakedGal = async () => {
    try {
      const resp = await stakedNeanderGal(address);
      setGalId(resp);
    } catch (error) {
      return error
    }
  };

  return (
    <div className="w-[100%] py-5  flex flex-col justify-center items-center">
      {
        activeStatus === false ? (
          <p className="mb-6 text-lg text-center w-[80%] font-bold text-yellow">
            There is No Active Staking
          </p>
        ) : (
          ""
        )}
      {metaMaskLoader && <Loader />}
      <div className="w-[80%] flex flex-col p-5 border justify-center items-center rounded-md border-yellow bg-black bg-opacity-20">
        <div className="grid w-full grid-cols-2 gap-3 text-white lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 lg:gap-0 place-content-start xl:place-content-center">
          {tablesData?.map((items, index) => {
            return (
              <div
                className="grid flex-col gap-3 grid-flow-cols place-content-center place-items-center"
                key={index}
              >
                <p
                  className={`
                    font-bold text-center text-md `}
                >
                  {items.head}
                </p>
                {(
                  <p
                    className={`text-center`}
                  >
                    {activeStatus === false || loading === true || typeof items.body !== "string" || items.body === undefined || !items.body || staking?.stakingId === 0 || items.body.includes('NaN') || !showContent ? (
                      <Skeleton />
                    ) : (
                      items.body
                    )}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>

      <AccordionBoxGals
        id={id}
        galId={galId}
        time={stakeTime}
        loading={loading}
        StakingDetails={details}
        apiGalsData={apiGalsData}
        neanderGalsStake={neanderGalsStake}
        NGAlreadyStaked={NGAlreadyStaked}
      />
      <AccordionBoxBros
        id={id}
        galId={galId}
        time={stakeTime}
        staking={staking}
        loading={loading}
        StakingDetails={details}
        apiBrosData={apiBrosData}
        NGAlreadyStaked={NGAlreadyStaked}
        neanderGalsStake={neanderGalsStake}
      />
      <StakingBox
        Id={id}
        StakingDetails={details}
        stakingReward={totalReward}
        activeStatus={activeStatus}
        neanderGalsStake={neanderGalsStake}
        endTime={Number(staking?.stakingEndTime) ? Number(staking?.stakingEndTime) : 0}
        startTime={Number(staking?.stakingEndTime) ? Number(staking?.stakingEndTime) : 0}
      />
    </div>
  );
};

export default CurrentStaking;

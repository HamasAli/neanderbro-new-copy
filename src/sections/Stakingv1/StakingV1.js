// /* eslint-disable react-hooks/exhaustive-deps */
// import { useAccount } from 'wagmi';
// import { useStateContext1 } from '../../context';
// import React, { useEffect, useState } from 'react'
// import Loader from '../../components/Loader/Loader';
// import Button from '../../components/button/Button';
// import { Success } from '../../components/toast/Success';
// import Skeleton from '../../components/Skeleton/Skeleton';
// import UnstakeNft from '../../components/UnstakeNFT/UnstakeNft';
// import StakingBox from '../../components/stakingBox/StakingBox';
// import { useStakingStateContextV1 } from '../../context/StakingV1Contract';
// import { CustomConnectButton } from '../../components/CustomConnectButton/CustomConnectbutton'
// import { Error } from '../../components/toast/Error';

// const styles = {
//     backgroundImage: "url('/assets/staking/stakingimg.png')",
// };

// const StakingV1 = () => {

//     const [stakingData, setStakingData] = useState({
//         id: null,
//         details: [],
//         nftData: [],
//         galId: null,
//         reward: null,
//         staking: null,
//         modalData: [],
//         NGAlreadyStaked: false,
//     });

//     const account = useAccount();
//     const wallet = account.address
//     const address = account?.address;
//     const [loading, setLoading] = useState(true);
//     const [showContent, setShowContent] = useState(false);
//     const [activeStatus, setActiveStatus] = useState(true);

//     const {
//         StakerDetailV1,
//         CurrentStakingV1,
//         StakingDetailsV1,
//         ClaimableRewardV1,
//         ClaimAndUnstakeV1,
//         stakedNeanderGalV1,
//         neanderGalStakeStatusV1,
//         AllStakingExceptActiveV1
//     } = useStakingStateContextV1();

//     const { apiState, metaMaskLoader, neanderGalsStake, setMetaMaskLoader } = useStateContext1();
//     const { id, details, nftData, staking, reward, galId, modalData, NGAlreadyStaked } = stakingData;

//     useEffect(() => {
//         const timer = setTimeout(() => {
//             setShowContent(true);
//         }, 3000);
//         return () => clearTimeout(timer);
//     }, []);

//     // Fetches the current staking ID and its details...
//     const CurrentId = async () => {
//         setLoading(true);
//         try {
//             const resp = await CurrentStakingV1();
//             if (resp !== 0) {
//                 const stakingResponse = await StakingDetailsV1(resp);
//                 const detail = await StakerDetailV1(account?.address, resp);
//                 setStakingData((prev) => ({
//                     ...prev,
//                     id: resp,
//                     staking: stakingResponse,
//                     details: detail,
//                 }));
//             } else {
//                 setStakingData((prev) => ({
//                     ...prev,
//                     id: resp,
//                 }));
//             }
//         } catch (error) {
//             return error
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         if (account?.address) {
//             CurrentId();
//         }
//     }, [apiState, account?.status]);

//     // Checks whether the staking is active based on the staking end time...
//     const checkActiveStatus = (stakingEndTime) => {
//         const currentTime = Math.floor(new Date().getTime() / 1000);
//         if (currentTime > Number(stakingEndTime)) {
//             setActiveStatus(false);
//         } else {
//             setActiveStatus(true);
//         }
//     };

//     // Periodically checks if the staking status is active or inactive every second...
//     useEffect(() => {
//         const interval = setInterval(() => {
//             if (staking) {
//                 checkActiveStatus(staking.stakingEndTime);
//             }
//         }, 1000);

//         return () => clearInterval(interval);
//     }, [staking]);

//     // Retrieves the ID of the NeanderGals staked by the user...
//     const StakedGal = async () => {
//         try {
//             const resp = await stakedNeanderGalV1(address);
//             setStakingData((prev) => ({
//                 ...prev,
//                 galId: resp,
//             }));
//         } catch (error) {
//             return error;
//         }
//     };


//     // Checks if the user has already staked any NeanderGals and updates the state accordingly...
//     const handleStatus = async () => {
//         try {
//             const resp = await neanderGalStakeStatusV1(address);
//             setStakingData((prev) => ({
//                 ...prev,
//                 NGAlreadyStaked: resp,
//             }));
//         } catch (error) {
//             return error;
//         }
//     };

//     // Runs the handleStatus and StakedGal functions when the user's account is connected...
//     useEffect(() => {
//         if (account?.isConnected) {
//             handleStatus();
//             StakedGal();
//         }
//     }, [neanderGalsStake, account?.isConnected]);

//     // Fetches all previous staking sessions and updates the modal data...
//     const PreviousStaking = async () => {
//         setLoading(true);
//         try {
//             const response = await AllStakingExceptActiveV1();
//             if (response.length > 0) {
//                 setStakingData((prev) => ({
//                     ...prev,
//                     modalData: response,
//                 }));
//             }
//         } catch (error) {
//             return error
//         } finally {
//             setLoading(false);
//         }
//     };

//     useEffect(() => {
//         PreviousStaking();
//     }, []);

//     // Handles the claim and unstake process...
//     const handleClaimAndUnstake = async () => {
//         try {
//             setMetaMaskLoader(true);
//             if (modalData.length > 0) {
//                 const latestModalData = modalData[modalData.length - 1];
//                 const stakingId = Number(latestModalData?.stakingId);
//                 if (isNaN(stakingId)) {
//                     Error('Failed to unstake, reload and try again');
//                 }
//                 const response = await ClaimAndUnstakeV1(stakingId, wallet);
//                 if (response.status === true) {
//                     setMetaMaskLoader(false);
//                     Success({ message1: "Successfully Claimed & Unstaked", autoClose: true });
//                     stakeReward();
//                     window.location.reload();
//                     return response;
//                 }
//             }
//         } catch (error) {
//             setMetaMaskLoader(false);
//             Error({ message: "Failed to unstake" });
//             return error;
//         } finally {
//             setMetaMaskLoader(false);
//         }
//     };

//     // Calculates the rewards earned from staking and updates the relevant state...
//     const stakeReward = async () => {
//         const latestModalData = stakingData.modalData[stakingData.modalData.length - 1];
//         const stakingId = Number(latestModalData?.stakingId);

//         if (address && !isNaN(stakingId)) {
//             try {
//                 const detailResponse = await StakerDetailV1(address, stakingId);
//                 const rewardResponse = await ClaimableRewardV1(address, stakingId);
//                 setStakingData((prev) => ({
//                     ...prev,
//                     reward: rewardResponse,
//                     nftData: detailResponse?.stakedNFTsId,
//                 }));
//             } catch (error) {
//                 return error
//             }
//         }
//     };


//     useEffect(() => {
//         if (stakingData.modalData.length > 0) {
//             stakeReward();
//         }
//     }, [stakingData.modalData]);


//     // Disable Logic for Buttons...
//     const isDisabledGal = !account?.isConnected || activeStatus === true;
//     const isDisabled = !account?.isConnected || activeStatus || nftData?.length === 0;

//     const totalReward = Number(reward);
//     const stakingReward = Number(totalReward) / Math.pow(10, 18);

//     const perDayReward = (((reward / Math.pow(10, 18)) * 365) / 50) * 100;

//     const unixTimestampString = `${Number(staking?.stakingStartTime)}`;
//     const unixTimestamp = parseInt(unixTimestampString, 10);
//     const jsTimestamp = unixTimestamp * 1000;
//     const startDate = new Date(jsTimestamp);

//     const day = startDate.getDate();

//     // Months
//     const monthNames = [
//         "Jan",
//         "Feb",
//         "Mar",
//         "Apr",
//         "May",
//         "Jun",
//         "Jul",
//         "Aug",
//         "Sep",
//         "Oct",
//         "Nov",
//         "Dec",
//     ];

//     const monthAbbreviation = monthNames[startDate.getMonth()];
//     const year = startDate.getFullYear();

//     const unixEndTimestampString = `${Number(staking?.stakingEndTime)}`;
//     const unixEndTimestamp = parseInt(unixEndTimestampString, 10);
//     const jsEndTimestamp = unixEndTimestamp * 1000;
//     const endDate = new Date(jsEndTimestamp);

//     const endDay = endDate.getDate();
//     const endMonthAbbreviation = monthNames[endDate.getMonth()];
//     const endYear = endDate.getFullYear();

//     // Table Data
//     const tablesData = [
//         {
//             body: `${Number(staking?.stakingId)}`,
//             head: "ID",
//         },
//         {
//             body: `${Number(day)}-${monthAbbreviation}-${Number(year)}`,
//             head: "Start Time",
//         },
//         {
//             body: `${Number(endDay)}-${endMonthAbbreviation}-${Number(endYear)}`,
//             head: "End Time",
//         },
//         {
//             body: `${perDayReward.toFixed(2)} %`,
//             head: "APY",
//         },
//         {
//             body: `${Number(staking?.numberOfNFTsStaked)}/${Number(staking?.maxNFTLimit)}`,
//             head: "Max staking limit",
//         },
//         {
//             body: `${Number(staking?.maxWalletLimit) > 100000
//                 ? "Unlimited"
//                 : `${Number(details?.stakedNFTsId?.length)}/${Number(staking?.maxWalletLimit)}`
//                 }`,
//             head: "Max Wallet limit",
//         },
//     ];
//     return (
//         <>
//             <div
//                 className="w-full flex flex-col justify-center gap-4 items-center mx-auto pt-[30%] mb-10 lg:pt-[10%] bg-no-repeat bg-cover bg-center"
//                 style={styles}
//             >
//                 <div className="flex flex-col items-center gap-3">
//                     <h1 className="text-2xl font-bold md:text-5xl text-yellow">Staking V1</h1>
//                     <h3 className="text-2xl font-bold text-white md:text-2xl">
//                         Claim Rewards From Staking V1
//                     </h3>
//                 </div>
//                 <div className="flex">
//                     <CustomConnectButton color={"text-black border-yellow bg-yellow"} />
//                 </div>
//                 <div className="w-[100%] py-5 flex flex-col justify-center items-center">
//                     {metaMaskLoader && <Loader />}
//                     <div className="w-[80%] flex flex-col p-5 border justify-center items-center rounded-md border-yellow bg-black bg-opacity-20">
//                         <div className="grid w-full grid-cols-2 gap-3 text-white lg:grid lg:grid-cols-6 md:grid md:grid-cols-3 lg:gap-0 place-content-start xl:place-content-center">
//                             {tablesData?.map((items, index) => {
//                                 return (
//                                     <div
//                                         className="grid flex-col gap-3 grid-flow-cols place-content-center place-items-center"
//                                         key={index}
//                                     >
//                                         <p className="font-bold text-center text-md">
//                                             {items.head}
//                                         </p>
//                                         <p className="text-center">
//                                             {activeStatus === false || loading === true || !showContent || typeof items.body !== "string" || items.body === undefined || !items.body || staking?.stakingId === 0 || items.body.includes('NaN') ? (
//                                                 <Skeleton />
//                                             ) : (
//                                                 items.body
//                                             )}
//                                         </p>
//                                     </div>
//                                 );
//                             })}
//                         </div>
//                     </div>

//                     <StakingBox
//                         Id={id}
//                         stakingV1
//                         StakingDetails={details}
//                         stakingReward={totalReward}
//                         activeStatus={activeStatus}
//                         neanderGalsStake={neanderGalsStake}
//                         endTime={Number(staking?.stakingEndTime) ? Number(staking?.stakingEndTime) : 0}
//                         startTime={Number(staking?.stakingEndTime) ? Number(staking?.stakingEndTime) : 0}
//                     />
//                     <div className="w-[80%] flex flex-col gap-4 mx-auto md:flex-row md:justify-between">
//                         {loading ? (
//                             <>
//                                 <div className="w-full lg:w-[65%]">
//                                     <Skeleton width="100%" height="190px" />
//                                 </div>
//                                 <div className="w-full lg:w-[65%]">
//                                     <Skeleton width="100%" height="190px" />
//                                 </div>
//                             </>
//                         ) : (
//                             <>
//                                 {NGAlreadyStaked ? (
//                                     <UnstakeNft stakingV1 isDisabled={isDisabledGal} StakingDetails={details} idName={galId} border={"border-blue"} />
//                                 ) : (
//                                     <div className="w-full lg:w-[65%] rounded-xl p-4 bg-black bg-opacity-[30%] border border-yellow flex items-center justify-center">
//                                         <p className="text-center text-white text-md lg:text-lg">
//                                             No NeanderGals Staked
//                                         </p>
//                                     </div>
//                                 )}
//                                 <div className="w-full lg:w-[65%] rounded-xl p-4 bg-black bg-opacity-[30%] border border-yellow">
//                                     <div className="flex flex-col items-center justify-start w-full lg:gap-4">
//                                         <div className="flex items-center justify-center w-full">
//                                             <p className="mx-auto text-center text-white text-md lg:text-lg">
//                                                 Claim Rewards: {stakingReward ? Number(stakingReward).toFixed(4) : 0} POL
//                                             </p>
//                                         </div>
//                                         <div className="flex justify-center xs:w-[50%] p-5 items-center">
//                                             <Button
//                                                 disabled={isDisabled}
//                                                 variant={"text-yellow"}
//                                                 onClick={handleClaimAndUnstake}
//                                                 children={"Claim Rewards and Unstake Bros"}
//                                                 tooltip={!account?.isConnected ? "" : "Claim your rewards & Unstake NFT"}
//                                             />
//                                         </div>
//                                     </div>
//                                 </div>
//                             </>
//                         )}
//                     </div>
//                 </div>
//             </div>
//         </>
//     );

// }

// export default StakingV1

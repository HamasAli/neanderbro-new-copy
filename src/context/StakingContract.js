import { useContext, createContext } from "react";
import Web3 from "web3";
import { useWalletClient } from "wagmi";
import StakingABI from "../ABIs/StakingABI";
import { ContractAddresses } from "../constants/ContractAdresses";

// Creating a new context
const StateStakingContext = createContext();
export const StateStakingContextProvider = ({ children }) => {
  const { data: walletClient } = useWalletClient();
  const web3Pro = walletClient
    ? walletClient
    // : "https://polygon-mainnet.infura.io/v3/7a6a4b893bfe4325aed8a527215570f6";
    : "https://sepolia.infura.io/v3/72b85b515f1a4c98b2667acf92b6276b";

  const web3 = new Web3(web3Pro);
  const StakingInstance = new web3.eth.Contract(
    StakingABI,
    ContractAddresses.Staking
  );

  //Current Staking Call function
  const CurrentStaking = async () => {
    try {
      const response = await StakingInstance?.methods?.currentStakingId().call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // All Staking Expect Active
  const AllStakingExceptActive = async () => {
    try {
      const response = await StakingInstance.methods
        .allStakingExceptActive()
        .call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  //Staker Details
  const StakerDetail = async (address, id) => {
    try {
      const response = await StakingInstance?.methods
        ?.stakerDetails(address, id)
        ?.call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // Staking Details
  const StakingDetails = async (id) => {
    try {
      const response = await StakingInstance?.methods?.stakingDetails(id)?.call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // Claimed Rewards
  const ClaimableReward = async (address, id) => {
    try {
      const response = await StakingInstance.methods
        .claimableReward(address, id)
        .call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // This code is used when stacking contract live
  const neanderGalStakeStatus = async (address) => {
    try {
      const response = await StakingInstance.methods
        .hasStakedNeanderGal(address)
        .call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const stakedNeanderGal = async (address) => {
    try {
      const response = await StakingInstance.methods
        .stakedNeanderGalId(address)
        .call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // Stake NB Function
  const Stake = async (array, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .stake(array)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const StakeNG = async (unit, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .stakeNeanderGal(unit)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      console.log("🚀 ~ StakeNG ~ response:", response)
      return response;
    } catch (error) {
      console.log("🚀 ~ StakeNG ~ error:", error)
      throw error;
    }
  };

  const UNStakeNG = async (unit, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .unstakeNeanderGal(unit)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const Claim = async (Id, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .claim(Id)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const ClaimAndUnstake = async (Id, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .claimRewardAndUnstake(Id)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const ClaimAndTransfer = async (Id, senderWalletAddress) => {
    try {
      const response = await StakingInstance.methods
        .claimRewardAndtransferNFTsToNextStaking(Id)
        .send({ from: senderWalletAddress });
      return response;
    } catch (error) {
      throw error;
    }
  };

  const Emergency = async (Id, senderWalletAddress, gasFee) => {
    try {
      const response = await StakingInstance.methods
        .emergencyUnstake(Id)
        .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <StateStakingContext.Provider
      value={{
        Stake,
        Claim,
        StakeNG,
        UNStakeNG,
        Emergency,
        StakerDetail,
        CurrentStaking,
        StakingDetails,
        ClaimAndUnstake,
        ClaimAndTransfer,
        ClaimableReward,
        stakedNeanderGal,
        neanderGalStakeStatus,
        AllStakingExceptActive,
      }}
    >
      {children}
    </StateStakingContext.Provider>
  );
};

export const useStakingStateContext = () => useContext(StateStakingContext);

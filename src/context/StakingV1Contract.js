import { useContext, createContext } from "react";
import Web3 from "web3";
import { useWalletClient } from "wagmi";
import StakingABI from "../ABIs/StakingABI";
import { ContractAddresses } from "../constants/ContractAdresses";

// Creating a new context
const StateStakingV1Context = createContext();
export const StateStakingContextProviderV1 = ({ children }) => {
    const { data: walletClient } = useWalletClient();
    const web3Pro = walletClient
        ? walletClient
        : "https://polygon-mainnet.infura.io/v3/7a6a4b893bfe4325aed8a527215570f6";
        // : "https://sepolia.infura.io/v3/72b85b515f1a4c98b2667acf92b6276b";

    const web3 = new Web3(web3Pro);

    const StakingInstanceV1 = new web3.eth.Contract(
        StakingABI,
        ContractAddresses.Staking
    );

    //  Staking Version 1 Contract

    const CurrentStakingV1 = async () => {
        try {
            const response = await StakingInstanceV1?.methods?.currentStakingId().call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const StakingDetailsV1 = async (id) => {
        try {
            const response = await StakingInstanceV1?.methods?.stakingDetails(id)?.call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const stakedNeanderGalV1 = async (address) => {
        try {
            const response = await StakingInstanceV1.methods
                .stakedNeanderGalId(address)
                .call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const StakerDetailV1 = async (address, id) => {
        try {
            const response = await StakingInstanceV1?.methods
                ?.stakerDetails(address, id)
                ?.call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const ClaimableRewardV1 = async (address, id) => {
        try {
            const response = await StakingInstanceV1.methods
                .claimableReward(address, id)
                .call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const ClaimAndUnstakeV1 = async (Id, senderWalletAddress, gasFee) => {
        try {
            const response = await StakingInstanceV1.methods
                .claimRewardAndUnstake(Id)
                .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee / 3) });
            return response;
        } catch (error) {
            throw error;
        }
    };

    const neanderGalStakeStatusV1 = async (address) => {
        try {
            const response = await StakingInstanceV1.methods
                .hasStakedNeanderGal(address)
                .call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const AllStakingExceptActiveV1 = async () => {
        try {
            const response = await StakingInstanceV1.methods
                .allStakingExceptActive()
                .call();
            return response;
        } catch (error) {
            throw error;
        }
    };

    const UNStakeNGV1 = async (unit, senderWalletAddress, gasFee) => {
        try {
            const response = await StakingInstanceV1.methods
                .unstakeNeanderGal(unit)
                .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee / 3) });
            return response;
        } catch (error) {
            throw error;
        }
    };

    const EmergencyV1 = async (Id, senderWalletAddress, gasFee) => {
        try {
            const response = await StakingInstanceV1.methods
                .emergencyUnstake(Id)
                .send({ from: senderWalletAddress, gasPrice: Number(gasFee + gasFee / 3) });
            return response;
        } catch (error) {
            throw error;
        }
    };

    return (
        <StateStakingV1Context.Provider
            value={{
                EmergencyV1,
                UNStakeNGV1,
                CurrentStakingV1,
                StakerDetailV1,
                StakingDetailsV1,
                ClaimAndUnstakeV1,
                ClaimableRewardV1,
                AllStakingExceptActiveV1,
                neanderGalStakeStatusV1,
                stakedNeanderGalV1,
            }}
        >
            {children}
        </StateStakingV1Context.Provider>
    );
};

export const useStakingStateContextV1 = () => useContext(StateStakingV1Context);

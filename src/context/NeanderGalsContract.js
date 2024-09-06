import { useContext, createContext } from "react";
import Web3 from "web3";
import { useWalletClient } from "wagmi";
import MintingABI from "../ABIs/MintingABI";
import { ContractAddresses } from "../constants/ContractAdresses";
// Creating a new context
const StateNeanderGalsContext = createContext();

export const StateNeanderGalsContextProvider = ({ children }) => {
  const { data: walletClient } = useWalletClient();

  const web3Pro = walletClient
    ? walletClient
    // : "https://polygon-mainnet.infura.io/v3/7a6a4b893bfe4325aed8a527215570f6";
    : "https://sepolia.infura.io/v3/72b85b515f1a4c98b2667acf92b6276b";
  const web3 = new Web3(web3Pro);

  const NeanderGalsInstance = new web3.eth.Contract(
    MintingABI,
    ContractAddresses.NeanderGal
  );
  // staking approve call function

  const ApprovedNGStaking = async (wallet, StakingAddress) => {
    try {
      const response = await NeanderGalsInstance.methods
        .isApprovedForAll(wallet, StakingAddress)
        .call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  const SetApprovalNG = async (StakingAddress, senderAddress, gasFee) => {
    try {
      const response = await NeanderGalsInstance.methods
        .setApprovalForAll(StakingAddress, true)
        .send({ from: senderAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <StateNeanderGalsContext.Provider
      value={{
        ApprovedNGStaking,
        SetApprovalNG,
      }}
    >
      {children}
    </StateNeanderGalsContext.Provider>
  );
};

export const useNeanderGalsStateContext = () =>
  useContext(StateNeanderGalsContext);

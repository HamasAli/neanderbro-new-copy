import { useContext, createContext } from "react";
import Web3 from "web3";
import { useNetwork, useWalletClient } from "wagmi";
import MintingABI from "../ABIs/MintingABI";
import { ContractAddresses } from "../constants/ContractAdresses";
import { Error } from "../components/toast/Error";
// Creating a new context
const StateMintingContext = createContext();

export const StateMintingContextProvider = ({ children }) => {
  const { chain, chains } = useNetwork();
  const chainIds = chains.map((chain) => chain.id);
  const { data: walletClient } = useWalletClient();

  const web3Pro = walletClient && chainIds.includes(chain?.id)
    ? walletClient
    : "https://polygon-mainnet.infura.io/v3/7a6a4b893bfe4325aed8a527215570f6";
    // : "https://sepolia.infura.io/v3/72b85b515f1a4c98b2667acf92b6276b";

  const web3 = new Web3(web3Pro);

  const MintingInstance = new web3.eth.Contract(
    MintingABI,
    ContractAddresses.NeanderBROS
  );


  // getting total minted nfts count
  const getTotalSupply = async () => {
    try {
      const response = await MintingInstance.methods.totalMinted().call();
      return response;
    } catch (error) {
      throw error;
    }
  };

  // get total supply of token against user
  const ActiveClaimCondition = async () => {
    try {
      const response = await MintingInstance.methods
        .getActiveClaimConditionId()
        .call();

      return response;
    } catch (error) {
      throw error;
    }
  };

  const ActiveClaimConditionById = async (val) => {
    try {
      const response = await MintingInstance.methods
        .getClaimConditionById(val)
        .call();

      return response;
    } catch (error) {
      throw error;
    }
  };

  const mintNFT = async (
    walletAddress,
    qty,
    currency,
    pricePerToken,
    merkleRoot,
    quantityLimitPerWallet,
    gasFee
  ) => {
    try {
      const response = await MintingInstance.methods
        .claim(
          walletAddress,
          qty,
          currency,
          pricePerToken,
          [[merkleRoot], quantityLimitPerWallet, pricePerToken, currency],
          "0x"
        )
        .send({
          from: walletAddress,
          value: (pricePerToken * qty).toString(),
          gasPrice: Number(gasFee + gasFee),
        });

      return response;
    } catch (error) {
      throw error;
    }
  };

  // staking approve call function
  const ApprovedStaking = async (wallet, StakingAddress) => {
    try {
      const response = MintingInstance.methods
        .isApprovedForAll(wallet, StakingAddress)
        .call();
      return response;
    } catch (error) {
      Error({ message: error?.message });
      throw error;
    }
  };

  const SetApproval = async (StakingAddress, senderAddress, gasFee) => {
    try {
      const response = await MintingInstance.methods
        .setApprovalForAll(StakingAddress, true)
        .send({ from: senderAddress, gasPrice: Number(gasFee + gasFee) });
      return response;
    } catch (error) {
      throw error;
    }
  };

  return (
    <StateMintingContext.Provider
      value={{
        ActiveClaimCondition,
        ActiveClaimConditionById,
        mintNFT,
        getTotalSupply,
        ApprovedStaking,
        SetApproval,
      }}
    >
      {children}
    </StateMintingContext.Provider>
  );
};

export const useMintingStateContext = () => useContext(StateMintingContext);

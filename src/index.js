import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
} from "@rainbow-me/rainbowkit";

import { configureChains, createConfig, WagmiConfig } from "wagmi";

import { polygon } from "wagmi/chains";

import { alchemyProvider } from "wagmi/providers/alchemy";

import { publicProvider } from "wagmi/providers/public";
import { StateMintingContextProvider } from "./context/MintingContract";
import { StateStakingContextProvider } from "./context/StakingContract";
import { ToastContainer } from "react-toastify";
import { StateNeanderGalsContextProvider } from "./context/NeanderGalsContract";
import { StateContextProvider } from "./context";
import { StateStakingContextProviderV1 } from "./context/StakingV1Contract";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

const { chains, publicClient } = configureChains(
  [polygon],
  [
    alchemyProvider({
      apiKey: "IV2z-pKhdZA-M7UR1h0Z9azePHSDHyze",
    }),
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain?.id === polygon?.id) {
          return { http: "https://polygon-rpc.com" };
        }
        return null;
      },
    }),
    publicProvider(),
  ]
);
// connectors
const { connectors } = getDefaultWallets({
  appName: "",
  projectId: "7e6a5b6e8f0867ebaa7c1dda9af12924",
  chains,
});

const wagmiConfig = createConfig({
  autoConnect: true,
  connectors,
  publicClient,
});

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  // <React.StrictMode>
  <StateContextProvider>
    <WagmiConfig config={wagmiConfig}>
      <RainbowKitProvider
        chains={chains}
        theme={darkTheme()}
        modalSize="compact"
      >
        <StateStakingContextProviderV1>
          <StateStakingContextProvider>
            <StateNeanderGalsContextProvider>
              <StateMintingContextProvider>
                <App />
                <ToastContainer />
              </StateMintingContextProvider>
            </StateNeanderGalsContextProvider>
          </StateStakingContextProvider>
        </StateStakingContextProviderV1>
      </RainbowKitProvider>
    </WagmiConfig>
  </StateContextProvider>
  // </React.StrictMode>
);

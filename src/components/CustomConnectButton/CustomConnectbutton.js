import React, { useEffect } from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import Button from "../button/Button";
import { useNetwork, useDisconnect, useAccount } from "wagmi";
import { Error } from "../toast/Error";

export const CustomConnectButton = ({ color }) => {
  const account = useAccount();
  const { chain, chains } = useNetwork();
  const chainIds = chains.map(chain => chain.id);
  const { disconnect } = useDisconnect();

  useEffect(() => {
    const disconnectIfWrongChain = async () => {
      if (account?.address) {
        if (!chainIds.includes(chain?.id)) {
          const toastMsg = "Wrong Network";
          // Assuming Error is a function that displays an error message
          Error({ message: toastMsg });
          disconnect();
        } else {
          return;
        }
      }
    };
    disconnectIfWrongChain();
  }, [chain]);


  return (
    <ConnectButton.Custom>
      {({
        account,
        chain,
        openAccountModal,
        openChainModal,
        openConnectModal,
        authenticationStatus,
        mounted,
      }) => {
        const ready = mounted && authenticationStatus !== "loading";
        const connected =
          ready &&
          account &&
          chain &&
          (!authenticationStatus || authenticationStatus === "authenticated");

        return (
          <div
            {...(!ready && {
              "aria-hidden": true,
              style: {
                opacity: 0,
                pointerEvents: "none",
                userSelect: "none",
              },
            })}
          >
            {(() => {
              if (!connected) {
                return (
                  <Button
                    variant={color}
                    onClick={openConnectModal}
                    type="button"
                  >
                    Connect wallet
                  </Button>
                );
              }
              if (chain?.unsupported) {
                return (
                  <button
                    onClick={openChainModal}
                    type="button"
                    className="hover:scale-60 shadow-xl hover:duration-200 text-white bg-red-700 text-sm md:text-md p-[12px] rounded-md font-bold border border-red-700 animate-pulse"
                  >
                    Wrong network
                  </button>
                );
              }

              return (
                <div style={{ display: "flex", gap: 12 }}>
                  <Button
                    variant={"bg-transparent border-yellow text-yellow"}
                    onClick={openAccountModal}
                  >
                    {account.displayName}
                  </Button>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

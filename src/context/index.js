"use client";
import { useContext, createContext, useState, useMemo } from "react";
// Creating a new context
const StateContext = createContext();
export const StateContextProvider = ({ children }) => {
  // dashboard
  const [metaMaskLoader, setMetaMaskLoader] = useState(false);
  const [neanderGalsStake, setNeanderGalsStake] = useState(false);
  const [apiState, setApiState] = useState(false);
  const value = useMemo(() => {
    return {
      apiState,
      setApiState,
      neanderGalsStake,
      setNeanderGalsStake,
      metaMaskLoader,
      setMetaMaskLoader,
    };
  }, [metaMaskLoader, neanderGalsStake, apiState]);

  return (
    <StateContext.Provider value={value}>{children}</StateContext.Provider>
  );
};

export const useStateContext1 = () => useContext(StateContext);

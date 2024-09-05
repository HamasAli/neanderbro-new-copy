import React, { createContext, useContext, useState, useEffect } from "react";
import { useLocation } from "react-router-dom";

const PathContext = createContext();

export const PathProvider = ({ children }) => {
  const location = useLocation();
  const [path, setPath] = useState(location.pathname);

  useEffect(() => {
    setPath(location.pathname);
  }, [location.pathname]);

  return (
    <PathContext.Provider value={{ path, setPath }}>
      {children}
    </PathContext.Provider>
  );
};

export const usePath = () => {
  const context = useContext(PathContext);

  return context;
};

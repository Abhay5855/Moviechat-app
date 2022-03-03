import React, { createContext, useContext } from "react";

export const useAuthContextProvider = ({ children }) => {
  const useAuthContext = createContext();
  return (
    <div>
      <useAuthContext.Provider value={{ id: 1 }}>
        {children}
      </useAuthContext.Provider>
    </div>
  );
};

export const useAuth = () => {
  return useContext(useAuthContext);
};

import React, { createContext, useContext } from "react";


const useAuthContext = createContext();

export const useAuthContextProvider = ({ children }) => {
  
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

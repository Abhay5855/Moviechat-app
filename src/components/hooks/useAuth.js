import React, { createContext, useContext, useState, useEffect } from "react";
import { auth } from "../../firebase/firebase";
import {
  GoogleAuthProvider,
  signInWithPopup,
  onAuthStateChanged,
  signOut,
} from "firebase/auth";


const useAuthContext = createContext();

export const UseAuthContextProvider = ({ children }) => {
   

  // state to set the user
  const [user , setUser] = useState(null);

    

  //Function to handle google signin
  const GoogleSignIn = () => {
    const provider = new GoogleAuthProvider();

    return signInWithPopup(auth, provider);
  };

  //google signuout
 
  const GoogleSignOut = () => {

        signOut(auth).then(() => {
            
          localStorage.removeItem('user')
            setUser(null);
            
             
        })
        .catch((err) => {
            console.log(err);
        })
  }

  // check for user
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setUser(user);

      } else {
        setUser(null);
      }
    });

    return () => user;
  }, [user]);

  return (
    <div>
      <useAuthContext.Provider value={{user, GoogleSignOut, GoogleSignIn , setUser}}>
        {children}
      </useAuthContext.Provider>
    </div>
  );
};

export const useAuth = () => {
  return useContext(useAuthContext);
};

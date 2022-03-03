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
        console.log('user');
      } else {
        setUser(null);
      }
    });
  }, []);

  return (
    <div>
      <useAuthContext.Provider value={{user, GoogleSignOut, GoogleSignIn }}>
        {children}
      </useAuthContext.Provider>
    </div>
  );
};

export const useAuth = () => {
  return useContext(useAuthContext);
};

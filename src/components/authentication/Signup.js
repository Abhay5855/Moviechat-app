import React from "react";
import "./signup.css";
import GoogleButton from "react-google-button";
import { useAuth } from "../hooks/useAuth";
import {useNavigate } from "react-router-dom";



const Signup = () => {
  const { GoogleSignIn} = useAuth();
  const navigate = useNavigate();

  const handleSignup = async (e) => {
    e.preventDefault();

    try {
      await GoogleSignIn();
      // const profile = {
      //     photo : user.photoURL,
      // }
      // localStorage.setItem('user', JSON.stringify(profile))
    } catch (err) {
      console.log(console.log(err));
    }

    navigate('/home');

    
  };

  return (
    <div className="signup__container">
      <div className="btn">
        <h2 className="info">
          Unlimited movies, and have discussions about movies, Tv shows all at
          one place, Signup to enjoy!
        </h2>
        
        <div className="google-btn">
          <GoogleButton onClick={(e) => handleSignup(e)} />
        </div>
      </div>
    </div>
  );
};

export default Signup;

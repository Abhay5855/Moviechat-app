import React from "react";
import "./signup.css";

const Signup = () => {
  return (
    <div className="signup__container">
      <div className="btn">
       
          <form  className="input__data">
            <h2>Sign In</h2>
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <button className="submit" type="submit">Sign In</button>

            <p className="not__account">Don't have a account? <span className="signup">Signup</span></p>
          </form>
        
      </div>
    </div> 
  );
};

export default Signup;

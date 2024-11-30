import React, { useState } from "react";
import "./Signup.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Signup = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="signup-container">
      <form className="signup-form">
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="first-name">First name</label>
            <input type="text" id="first-name" placeholder="Enter your first name" />
          </div>
          <div className="form-group">
            <label htmlFor="last-name">Last name</label>
            <input type="text" id="last-name" placeholder="Enter your last name" />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Enter your mail" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <div className="password-wrapper">
            <input
              type={showPassword ? "text" : "password"}
              id="password"
              placeholder="Create own Password"
            />
            <span
              className="toggle-password"
              onClick={togglePasswordVisibility}
              role="button"
              aria-label="Toggle Password Visibility"
            >
              {showPassword ? <VisibilityOffIcon /> : <VisibilityIcon />}
            </span>
          </div>
        </div>

        <div className="login-link">
          Already have an account? <Link to="/login">Login</Link>
        </div>

        <button className="google-signup" type="button">
          Sign up with Google
        </button>

        <Link to="/selectrole"><button className="sign-in" type="submit">
          Sign Up
        </button></Link>
      </form>
    </div>
  );
};

export default Signup;

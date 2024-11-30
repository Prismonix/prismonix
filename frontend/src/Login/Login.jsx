import React, { useState } from "react";
import "./Login.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import { Link } from "react-router-dom";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="Login-container">
      <form className="Login-form">
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
              placeholder="Enter Password"
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

        <div className="SignUp-link">
          Don't have an account? <Link to="/signup">Join us</Link>
        </div>

        <button className="google-Login" type="button">
          Sign In with Google
        </button>

        <button className="Login" type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;

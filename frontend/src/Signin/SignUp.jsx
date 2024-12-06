import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GoogleOAuthProvider, GoogleLogin } from "@react-oauth/google";
import "./Signup.css";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const Signup = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const validatePassword = (password) => {
    return password.length >= 6;
  };

  const handleSignup = async (e) => {
    e.preventDefault();

    if (!validateEmail(email)) {
      setErrorMessage("Please enter a valid email address.");
      return;
    }

    if (!validatePassword(password)) {
      setErrorMessage("Password must be at least 6 characters long.");
      return;
    }

    setIsLoading(true);
    setErrorMessage("");

    try {
      const response = await fetch("http://localhost:5000/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ firstName, lastName, email, password }),
      });

      const data = await response.json();
      setIsLoading(false);

      if (response.ok) {
        alert("Signup successful! Redirecting to login page...");
        window.location.href = "/login";
      } else {
        setErrorMessage(data.message || "Failed to sign up. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      setErrorMessage("An error occurred. Please check your connection and try again.");
    }
  };

  const handleGoogleSuccess = (credentialResponse) => {
    const { credential } = credentialResponse;

    fetch("http://localhost:5000/auth/google-signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ tokenId: credential }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.token) {
          localStorage.setItem("token", data.token); // Store JWT token
          alert("Google signup successful! Redirecting to home page...");
          window.location.href = "/selectrole"; // Redirect to homepage
        } else {
          setErrorMessage(data.message || "Failed to sign up with Google.");
        }
      })
      .catch((error) => {
        console.error("Error with Google signup:", error);
        setErrorMessage("An error occurred while signing up with Google.");
      });
  };

  const handleGoogleFailure = () => {
    setErrorMessage("Google signup failed. Please try again.");
  };

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <div className="signup-container">
        <form className="signup-form" onSubmit={handleSignup}>
          <h2 className="heading2">Create an Account</h2>

          <div className="form-row">
            <div className="form-group">
              <label htmlFor="first-name" style={{ color: "white" }} >First Name</label>
              <input
                type="text"
                id="first-name"
                placeholder="Enter your first name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                style={{ width: "165px"  }}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last-name" style={{ color: "white" }}>Last Name</label>
              <input
                type="text"
                id="last-name"
                placeholder="Enter your last name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                style={{ width: "165px"  }}
              />
            </div>
          </div>

          <div className="form-group">
            <label  style={{ color: "white"  }} htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={{ width: "380px"  }}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password" style={{ color: "white" }}> Password</label>
            <div className="password-wrapper">
              <input
                type={showPassword ? "text" : "password"}
                id="password"
                placeholder="Create your password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
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

          {errorMessage && <p className="error">{errorMessage}</p>}

          {isLoading ? (
            <button className="sign-in" type="button" disabled>
              Signing up...
            </button>
          ) : (
            <button className="sign-in" type="submit">
              Sign Up
            </button>
          )}

          <div className="google-signup">
            <GoogleLogin
              onSuccess={handleGoogleSuccess}
              onError={handleGoogleFailure}
            />
          </div>

          <div className="login-link">
           Already have an account? <Link to="/login">Login</Link>
          </div>
        </form>
      </div>
    </GoogleOAuthProvider>
  );
};

export default Signup;

import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode"; // To decode JWT and check expiration

const GoogleCallback = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const processGoogleCallback = async () => {
      // Get the token from URL parameters
      const urlParams = new URLSearchParams(window.location.search);
      const token = urlParams.get("token");

      if (token) {
        try {
          // Decode the token to check expiration (if it's a JWT)
          const decodedToken = jwt_decode(token);
          const currentTime = Date.now() / 1000; // Current time in seconds

          if (decodedToken.exp < currentTime) {
            // Token has expired
            alert("Session expired. Please log in again.");
            navigate("/login");
            return;
          }

          // Token is valid, save it to localStorage
          localStorage.setItem("token", token); 

          // Optionally, store user info
          // localStorage.setItem("userInfo", JSON.stringify(decodedToken));

          // Inform the user of success and redirect to SelectRole page
          alert("Google authentication successful! Redirecting to role selection...");
          navigate("/selectrole"); // Redirect to SelectRole page
        } catch (error) {
          // Handle token decoding error or any other error
          console.error("Error decoding token", error);
          alert("Google authentication failed! Invalid token.");
          navigate("/login"); // Redirect to login page
        }
      } else {
        // Handle case where token is missing or invalid
        alert("Google authentication failed! No token found.");
        navigate("/login"); // Redirect to login page
      }
    };

    processGoogleCallback();
  }, [navigate]);

  return <div>Processing Google Authentication...</div>;
};

export default GoogleCallback;

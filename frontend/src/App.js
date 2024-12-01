import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation, BrowserRouter } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUp from './Signin/SignUp';
import Login from "./Login/Login";
import SelectRole from "./SelectRole/SelectRole";
import DeveloperProfileCreation from "./ProfilecreationPages/DeveloperProfileCreation";
import Messaging from "./messaging/messaging";
import Chatbot from "./chatbot/chatbot";
import DeveloperProfilePage from "./Profilepages/DeveloperProfilePage";
import DeveloperHome from "./homepages/DeveloperHome";
import InnovatorProfileCreation from "./InnovatorProfileCreation/InnovatorProfileCreation";
import { GoogleOAuthProvider } from "@react-oauth/google";
const App = () => {
  const location = useLocation();

  useEffect(() => {
    // Clear previous classes and add a new one based on the current route
    document.body.className = ""; // Reset previous classes
    if (location.pathname === "/signup") {
      document.body.classList.add("signup-body");
    } else if (location.pathname === "/") {
      document.body.classList.add("landing-body");
    }else if (location.pathname === "/login") {
      document.body.classList.add("login-body");
    }else if (location.pathname === "/selectrole") {
      document.body.classList.add("selectrole-body");
    }else if (location.pathname === "/developerprofilecreation") {
      document.body.classList.add("developerprofilecreation-body");
    }else if (location.pathname === "/developerhome") {
      document.body.classList.add("developerhome-body");
    }else if (location.pathname === "/chatbot") {
      document.body.classList.add("chatbot-body");
    }else if (location.pathname === "/developerprofilepage") {
      document.body.classList.add("developerprofilepage-body");
    }else if (location.pathname === "/innovatorprofilecreation") {
      document.body.classList.add("innovatorprofilecreation-body");
    }
  }, [location]);

  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/login" element={<Login/>} />
          <Route path="/selectrole" element={<SelectRole/>}/>
          <Route path="/developerprofilecreation" element={<DeveloperProfileCreation/>}/>
          <Route path="/developerhome" element={<DeveloperHome/>}/>
          <Route path="/messaging" element={<Messaging />}/>
          <Route path="/chatbot" element={<Chatbot/>}/>
          <Route path="/developerprofilepage" element={<DeveloperProfilePage/>}/>
          <Route path="/innovatorprofilecreation"element={<InnovatorProfileCreation/>}/>
        </Routes>
    </GoogleOAuthProvider>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;


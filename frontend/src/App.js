import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import SignUp from './Signin/SignUp';
import Login from "./Login/Login";
import SelectRole from "./SelectRole/SelectRole";
import DeveloperProfile from "./ProfilecreationPages/DeveloperProfile";
import InvestorProfile from "./ProfilecreationPages/InvestorProfile";
import InnovatorProfile from "./ProfilecreationPages/InnovatorProfile";
import InnovatorHome from "./homepages/InnovatorHome";
import Messaging from "./messaging/messaging";
import Chatbot from "./chatbot/chatbot";
import DeveloperProfilePage from "./Profilepages/DeveloperProfilePage";
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
    }else if (location.pathname === "/developerprofile") {
      document.body.classList.add("developerprofile-body");
    }else if (location.pathname === "/investorprofile") {
      document.body.classList.add("investorprofile-body");
    }else if (location.pathname === "/innovatorprofile") {
      document.body.classList.add("innovatorprofile-body");
    }else if (location.pathname === "/innovatorhome") {
      document.body.classList.add("innovatorhome-body");
    }else if (location.pathname === "/chatbot") {
      document.body.classList.add("chatbot-body");
    }else if (location.pathname === "/developerprofilepage") {
      document.body.classList.add("developerprofilepage-body");
    }
  }, [location]);

  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login/>} />
      <Route path="/selectrole" element={<SelectRole/>}/>
      <Route path="/developerprofile" element={<DeveloperProfile/>}/>
      <Route path="/investorprofile" element={<InvestorProfile/>}/> 
      <Route path="/innovatorprofile" element={<InnovatorProfile/>}/>
      <Route path="/innovatorhome" element={<InnovatorHome/>}/>
      <Route path="/messaging" element={<Messaging />}/>
      <Route path="/chatbot" element={<Chatbot/>}/>
      <Route path="/developerprofilepage" element={<DeveloperProfilePage/>}/>
    </Routes>
  );
};

const RootApp = () => (
  <Router>
    <App />
  </Router>
);

export default RootApp;


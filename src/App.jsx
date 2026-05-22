import React from "react";
import Home from "./Pages/Home.jsx";
import Pickup from "./Pages/Pickup.jsx";
import { HashRouter, Routes, Route } from "react-router-dom";
import ServiceAndPricing from "./Pages/ServiceAndPricing.jsx";
import Signup from "./Pages/Auth/Signup.jsx";
import SignupEmailverify from "./Pages/Auth/SignupEmailverify.jsx"
import Login from "./Pages/Auth/Login.jsx";
import LoginForgetpassword from "./Pages/Auth/LoginForgetpassword.jsx"
import LoginEmailverify from "./Pages/Auth/LoginEmailverify.jsx"
import LoginResetpassword from "./Pages/Auth/LoginResetpassword.jsx"

const App = () => {
  return (
    <>
      <HashRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/pick" element={<Pickup />} />
          <Route path="/service" element={<ServiceAndPricing />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/Signupemailverify" element={<SignupEmailverify />} />
          <Route path="/login" element={<Login />} />
          <Route path="/loginForgetpassword" element={<LoginForgetpassword />} />
          <Route path="/loginemailverify" element={<LoginEmailverify />} />
          <Route path="/loginresetpassword" element={<LoginResetpassword />} />
        </Routes>
      </HashRouter>
    </>
  );
};

export default App;

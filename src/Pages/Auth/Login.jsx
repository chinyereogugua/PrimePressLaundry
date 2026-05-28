import React, { useState } from "react";
import "./Css/Login.css";

import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";

import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

import { loginAdmin } from "../../API/AdminApi.js";
import { toast } from "react-toastify"; 

const Login = () => {
  const nav = useNavigate();

  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prev) => !prev);
  };

  const handleLogin = async (e) => {
    if (e && e.preventDefault) e.preventDefault();

    try {
      setLoading(true);
      setMessage("");

      if (!emailAddress || !password) {
        setMessage("Email and password are required");
        return;
      }
      const data = {
        emailAddress,
        password,
      };

      console.log("LOGIN REQUEST:", data);

      const res = await loginAdmin(data);
      console.log("USER OBJECT FROM LOGIN:", res);

      const token = res?.token || res?.data?.token || res?.data?.data?.token;
      console.log("EXTRACTED TOKEN VALUE:", token);

      if (!token || token === "" || token === "undefined") {
        setMessage("Wrong email or password");
        return;
      }

      localStorage.setItem("token", token);
      localStorage.setItem("user",JSON.stringify({emailAddress,}));

      toast.success(res.message || "Login successful!");

      setMessage(res.message || "Login successful");

      nav("/dashboard"); 

    } catch (err) {
      console.log("LOGIN ERROR DETAILS:", err);
      
      const errMsg = err.response?.data?.message || "Wrong email or password";
      toast.error(errMsg);
      setMessage(errMsg);

      return;
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="login-container">
      <section className="login-wrapperlogo">
        <Primepresslaundrylogo />
      </section>

      <section className="login-wrappertext">
        <section className="login-wrappertext-holder">

          <article className="login-heading">
            <p>Sign in to PrimePress</p>
          </article>

          <article className="login-email">
            <p>Email</p>
            <Input
              placeholder="Email"
              className="login-email-input"
              value={emailAddress}
              onChange={(e) => setEmailAddress(e.target.value)}
            />
          </article>

          <article className="login-password">
            <p>Password</p>

            <article className="login-password-holder">
              <Input
                type={showPassword ? "text" : "password"} 
                placeholder="Password"
                className="login-password-input"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />

              <span onClick={togglePasswordVisibility}>
                {showPassword ? (
                  <FaEyeSlash className="login-password-icon" />
                ) : (
                  <FaEye className="login-password-icon" />
                )}
              </span>
            </article>
          </article>

          <article
            className="login-forgetpassword"
            onClick={() => nav("/loginForgetpassword")}
          >
            <p>Forgot password?</p>
          </article>

          <article className="login-button">
            <Button
              btnText={loading ? "Logging in..." : "Login"}
              className="login-btn"
              onClick={handleLogin}
            />
          </article>

          <article
            className="login-resignup"
            onClick={() => nav("/signup")}
          >
            <p>
              Don’t have an account? <span>Sign up</span>
            </p>
          </article>

          {message && (
            <p style={{ textAlign: "center", marginTop: "10px", color: "red" }}>
              {message}
            </p>
          )}

        </section>
      </section>
    </main>
  );
};

export default Login;

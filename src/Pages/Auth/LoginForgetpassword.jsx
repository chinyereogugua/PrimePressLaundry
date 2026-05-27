import React, { useState } from "react";
import "./Css/LoginForgetpassword.css"
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { useNavigate } from "react-router-dom";
import {  forgetPassword } from "../../API/AdminApi.js";
import { toast } from "react-toastify";


const LoginForgetpassword = () => {
const nav = useNavigate()

const [email, setEmail] = useState("");

const handleForgetPassword = async (e) => {
  e.preventDefault();

  try {
    const data = {
      emailAddress: email,
    };
    console.log("SUBMIT DATA", data);

    const res = await forgetPassword(data);
    localStorage.setItem("resetEmail", email);
    console.log("RESPONSE", res);
    console.log("MESSAGE:", res.message);

    toast.success(res.message);
    nav("/forgetpasswordverify")

  } catch (error) {
    console.log(error);
    toast.error(
      error.response?.data?.message ||
      error.message
    );
  }
};


  return (
    <main className="loginForgetpassword-container">
      <section className="loginForgetpassword-wrapperlogo">
        <Primepresslaundrylogo />
      </section>
      <form className="loginForgetpassword-wrappertext" onSubmit={handleForgetPassword}>
        <section className="loginForgetpassword-wrappertext-holder">

          <article className="loginForgetpassword-heading">
            <h4>Forget Password</h4>
            <p>Enter your email address to receive one time password</p>
          </article>

          <article className="loginForgetpassword-email">
            <p> Email</p>
            <Input 
            placeholder="Email" 
            className="loginForgetpassword-email-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            />
          </article>

          <article className="loginForgetpassword-button" >
            <Button 
            // onClick={()=> nav("/loginresetpassword")} 
            btnText="Continue" 
            className="loginForgetpassword-btn" 
            type="submit"
             />
          </article>
        </section>
      </form>
    </main>
  );
};

export default LoginForgetpassword;

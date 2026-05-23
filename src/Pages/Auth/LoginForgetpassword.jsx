import React from "react";
import "./Css/LoginForgetpassword.css"
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { useNavigate } from "react-router-dom";
const LoginForgetpassword = () => {
const nav = useNavigate()
  return (
    <main className="loginForgetpassword-container">
      <section className="loginForgetpassword-wrapperlogo">
        <Primepresslaundrylogo />
      </section>
      <section className="loginForgetpassword-wrappertext">
        <section className="loginForgetpassword-wrappertext-holder">
          <article className="loginForgetpassword-heading">
            <h4>Forget Password</h4>
            <p>Enter your email address to receive one time password</p>
          </article>
          <article className="loginForgetpassword-email">
            <p> Email</p>
            <Input placeholder="Email" className="loginForgetpassword-email-input" />
          </article>
          <article className="loginForgetpassword-button" >
            <Button onClick={()=> nav("/login")} btnText="Login" className="loginForgetpassword-btn"  />
          </article>
        </section>
      </section>
    </main>
  );
};

export default LoginForgetpassword;

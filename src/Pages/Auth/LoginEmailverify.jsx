import React from "react";
import "./Css/LoginEmailverify.css";
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
const LoginEmailverify = () => {
  return (
    <main className="loginEmailverify-container">
      <section className="loginEmailverify-wrapperlogo">
        <Primepresslaundrylogo />
      </section>
      <section className="loginEmailverify-wrappertext">
        <section className="loginEmailverify-wrappertext-holder">
          <article className="loginEmailverify-heading">
            <h4>Forget Password</h4>
            <p>
              A 6 digit code has been sent to your email address, <br />
              nter the code to reset password
            </p>
          </article>
          <article className="loginEmailverify-otp">
            <h4>OTP</h4>
            <article className="loginEmailverify-otp1">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </article>
          </article>
          <article className="loginEmailverify-button">
            <Button btnText="Continue" className="loginEmailverify-btn" />
          </article>
          <article className="loginEmailverify-otp-expires">
            <p>
              OTP Expires in <span>3:00</span>{" "}
            </p>
            <p>
              {" "}
              Didin’t receive any code? <span> Click Me</span>to resend{" "}
            </p>
          </article>
        </section>
      </section>
    </main>
  );
};

export default LoginEmailverify;
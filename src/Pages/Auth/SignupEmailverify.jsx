import React from "react";
import "./Css/SignupEmailverify.css";
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
const SignupEmailverify = () => {
  return (
    <main className="signupEmailverify-container">
      <section className="signupEmailverify-wrapperlogo">
        <Primepresslaundrylogo />
      </section>
      <section className="signupEmailverify-wrappertext">
        <section className="signupEmailverify-wrappertext-holder">
          <article className="signupEmailverify-heading">
            <h4>Verify Your Email</h4>
            <p>
              A 6 digit code has been sent to your email address, <br />
              enter the code to verify your email
            </p>
          </article>
          <article className="signupEmailverify-otp">
            <h4>OTP</h4>
            <article className="signupEmailverify-otp1">
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
              <Input />
            </article>
          </article>
          <article className="signupEmailverify-button">
            <Button btnText="Continue" className="signupEmailverify-btn" />
          </article>
          <article className="signupEmailverify-otp-expires">
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

export default SignupEmailverify;
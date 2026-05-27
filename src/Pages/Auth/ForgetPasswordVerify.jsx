import React, { useState } from "react";
import "./Css/SignupEmailverify.css";
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Input from "../../Components/Input.jsx";
import Button from "../../Components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { forgetPasswordOTP } from "../../API/AdminApi.js";



const ForgetPasswordVerify = () => {
    const nav = useNavigate();
    const [otp, setOtp] = useState({
    otp1: "",
    otp2: "",
    otp3: "",
    otp4: "",
    otp5: "",
    otp6: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setOtp({...otp, [name]: value,});
    console.log("VALUE", value)

    if (value.length === 1) {
        const nextInput =  e.target.nextElementSibling;

        if (nextInput) {
            nextInput.focus();
        }
    }
  };

  const handleVerifyOTP = async (e) => {
    e.preventDefault();

    try {
        console.log("OTP STATE:", otp);
        const fullOTP =(
        otp.otp1 +
        otp.otp2 +
        otp.otp3 +
        otp.otp4 +
        otp.otp5 +
        otp.otp6).trim();

        const email = localStorage.getItem("resetEmail");
        console.log("EMAIL:", email);

        const data = {
            emailAddress: email,
            otp: fullOTP
        };
        console.log("SUBMIT DATA", data)

        const res = await forgetPasswordOTP(data);
        console.log("FULL RESPONSE:", res);
        toast.success(res.message);
        nav("/loginresetpassword");
        
    } catch (error) {
        console.log("ERROR RESPONSE:", error.response);
        console.log("ERROR DATA:", error.response?.data);
        
        toast.error(
            error.response?.data?.message ||
            error.message
        )
    }
  }

  return (
    <main className="signupEmailverify-container">
      <section className="signupEmailverify-wrapperlogo">
        <Primepresslaundrylogo />
      </section>
      <form className="signupEmailverify-wrappertext" onSubmit={handleVerifyOTP}>
        <section className="signupEmailverify-wrappertext-holder">
          <article className="signupEmailverify-heading">
            <h4>Forget Password</h4>
            <p>
              A 6 digit code has been sent to your email address, <br />
              enter the code to reset your password
            </p>
          </article>
          <article className="signupEmailverify-otp">
            <h4>OTP</h4>
            <article className="signupEmailverify-otp1">
              <Input 
              name="otp1"
              value={otp.otp1}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
              <Input 
              name="otp2"
              value={otp.otp2}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
              <Input 
              name="otp3"
              value={otp.otp3}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
              <Input 
              name="otp4"
              value={otp.otp4}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
              <Input 
              name="otp5"
              value={otp.otp5}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
              <Input 
              name="otp6"
              value={otp.otp6}
              onChange={handleChange}
              maxLength={1}
              inputMode="numeric"
              />
            </article>
          </article>

          <article className="signupEmailverify-button">
            <Button btnText="Continue"
             className="signupEmailverify-btn" 
             type="submit"
             />
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
      </form>
    </main>
  );
};

export default ForgetPasswordVerify;
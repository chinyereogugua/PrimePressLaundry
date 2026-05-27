import React, { useState, useRef } from "react"; // Removed useEffect import
import "./Css/SignupEmailverify.css";
import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo.jsx";
import Button from "../../Components/Button.jsx";
import { useNavigate } from "react-router-dom";
import { verifySignupEmail, resendOtp } from "../../API/AdminApi.js";

const SignupEmailverify = () => {
  const [otp, setOtp] = useState(["", "", "", "", "", ""]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  const navigate = useNavigate();
  const inputsRef = useRef([]);

  const email = localStorage.getItem("adminEmail");

  const handleChange = (value, index) => {
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleVerify = async () => {
    try {
      setLoading(true);
      setMessage("");

      if (!email) {
        setMessage("Email not found");
        return;
      }

      const otpCode = otp.join("");

      if (otpCode.length !== 6) {
        setMessage("Enter full OTP");
        return;
      }

      const data = {
        emailAddress: email,
        otp: otpCode,
      };

      const res = await verifySignupEmail(data); 

      setMessage(res.message || "Verified");

      localStorage.removeItem("adminEmail");

      setTimeout(() => {
        navigate("/login");
      }, 1000);

    } catch (err) {
      setMessage(err.response?.data?.message || "Invalid OTP");
    } finally {
      setLoading(false);
    }
  };

  const handleResend = async () => {
    try {
      setLoading(true);
      setMessage(""); 

      const res = await resendOtp(email); 

      setMessage(res.message || "OTP resent successfully");

      setOtp(["", "", "", "", "", ""]);
    } catch (err) {
      setMessage(err.response?.data?.message || "Resend failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="signupEmailverify-container">
      <section className="signupEmailverify-wrapperlogo">
        <Primepresslaundrylogo />
      </section>

      <section className="signupEmailverify-wrappertext">
        <div className="signupEmailverify-wrappertext-holder">
          
          <article className="signupEmailverify-heading">
            <h4>Verify Email</h4>
            <p>Please enter the 6-digit verification code sent to your email.</p>
          </article>

          <article className="signupEmailverify-otp">
            <div className="signupEmailverify-otp1">
              {otp.map((digit, i) => (
                <input
                  key={i}
                  maxLength={1}
                  value={digit}
                  ref={(el) => (inputsRef.current[i] = el)}
                  onChange={(e) => handleChange(e.target.value, i)}
                />
              ))}
            </div>
          </article>

          <article className="signupEmailverify-button">
            <Button
              className="signupEmailverify-btn"
              btnText={loading ? "Checking..." : "Continue"}
              onClick={handleVerify}
            />
          </article>

          <article className="signupEmailverify-otp-expires">
            <p onClick={handleResend} style={{ cursor: "pointer" }}>
              Didn't get code? <span>Resend OTP</span>
            </p>

            <p>
              OTP expires in 3:00
            </p>

            {message && (
              <p style={{ color: message.includes("failed") || message.includes("Cast") || message.includes("Invalid") ? "red" : "green", fontSize: "14px", marginTop: "10px", textAlign: "center" }}>
                {message}
              </p>
            )}
          </article>

        </div>
      </section>
    </main>
  );
};

export default SignupEmailverify;

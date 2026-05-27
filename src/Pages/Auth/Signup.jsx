import React, { useState } from "react";
import "./Css/Signup.css";

import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo";
import Input from "../../Components/Input";
import Button from "../../Components/Button.jsx";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "../../schemas/signupSchema";
import { signupAdmin } from "../../API/AdminApi.js";

import { toast } from "react-toastify";

import { Eye, EyeOff } from "lucide-react";

const Signup = () => {
  const nav = useNavigate();

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm({
    resolver: zodResolver(signupSchema),
  });

  const onSubmit = async (data) => {
    try {
      const response = await signupAdmin(data);

      console.log("SIGNUP RESPONSE:", response);

      // store email for OTP verification
      localStorage.setItem("adminEmail", data.emailAddress);

      toast.success(response?.message || "Signup successful");

      nav("/signupemailverify");
    } catch (error) {
      console.log("SIGNUP ERROR:", error);

      toast.error(
        error.response?.data?.message ||
          "Signup failed"
      );
    }
  };

  return (
    <main className="signup-container">
      <section className="signup-wrapperlogo">
        <Primepresslaundrylogo />
      </section>

      <section className="signup-wrappertext">
        <form
          className="signup-wrappertext-holder"
          onSubmit={handleSubmit(onSubmit)}
        >

          {/* FULL NAME */}
          <article className="signup-fullname">
            <p>Full Name</p>
            <Input
              placeholder="Full Name"
              {...register("fullName")}
              className="signup-fullname-input"
            />
            <small className="error-text">
              {errors.fullName?.message}
            </small>
          </article>

          {/* EMAIL */}
          <article className="signup-email">
            <p>Email</p>
            <Input
              placeholder="Email"
              {...register("emailAddress")}
              className="signup-email-input"
            />
            <small className="error-text">
              {errors.emailAddress?.message}
            </small>
          </article>

          {/* PASSWORD */}
          <article className="signup-password">
            <p>Password</p>

            <div className="password-wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password")}
                className="signup-password-input"
              />

              <span className="eye-icon" onClick={() => setShowPassword(!showPassword)}>
                {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <small className="error-text">
              {errors.password?.message}
            </small>
          </article>

          {/* CONFIRM PASSWORD */}
          <article className="signup-confirmpassword">
            <p>Confirm Password</p>

            <div className="password-wrapper">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                {...register("confirmPassword")}
                className="signup-confirmpassword-input"
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <EyeOff size={18} /> : <Eye size={18} />}
              </span>
            </div>

            <small className="error-text">
              {errors.confirmPassword?.message}
            </small>
          </article>

          {/* BUTTON */}
          <article className="signup-button">
            <Button
              type="submit"
              btnText={
                isSubmitting ? "Creating Account..." : "Sign Up"
              }
              className="signup-btn"
            />
          </article>

        </form>
      </section>
    </main>
  );
};

export default Signup;
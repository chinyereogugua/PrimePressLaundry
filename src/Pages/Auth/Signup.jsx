import React, { useState } from "react";
import "./Css/Signup.css";

import Primepresslaundrylogo from "../../Components/Primepresslaundrylogo";
import Input from "../../Components/Input";
import Button from "../../Components/Button.jsx";

import { useNavigate } from "react-router-dom";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { signupSchema } from "../../schemas/signupSchema";
import { signupAdmin } from "../../api/adminApi";

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
      console.log("SUBMIT DATA:", data);

      const response = await signupAdmin(data);

      console.log("RESPONSE:", response);

      toast.success("Signup successful");

      nav("/signupemailverify");

    } catch (error) {
  console.log(error);
  toast.error(
    error.response?.data?.message ||
    error.message ||
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

          <article className="signup-fullname">
            <p>Full Name</p>

            <Input
              placeholder="Full Name"
              className="signup-fullname-input"
              {...register("fullName")}
            />

            <small className="error-text">
              {errors.fullName?.message}
            </small>
          </article>

          <article className="signup-email">
            <p>Email</p>

            <Input
              placeholder="Email"
              className="signup-email-input"
              {...register("emailAddress")}
            />

            <small className="error-text">
              {errors.emailAddress?.message}
            </small>
          </article>

          <article className="signup-password">
            <p>Password</p>

            <div className="password-wrapper">
              <Input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                className="signup-password-input"
                {...register("password")}
              />

              <span
                className="eye-icon"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <small className="error-text">
              {errors.password?.message}
            </small>
          </article>

          <article className="signup-confirmpassword">
            <p>Confirm Password</p>

            <div className="password-wrapper">
              <Input
                type={showConfirmPassword ? "text" : "password"}
                placeholder="Confirm Password"
                className="signup-confirmpassword-input"
                {...register("confirmPassword")}
              />

              <span
                className="eye-icon"
                onClick={() =>
                  setShowConfirmPassword(!showConfirmPassword)
                }
              >
                {showConfirmPassword ? <EyeOff size={20} /> : <Eye size={20} />}
              </span>
            </div>

            <small className="error-text">
              {errors.confirmPassword?.message}
            </small>
          </article>

          <article className="signup-button">
            <Button
              className="signup-btn"
              btnText={
                isSubmitting
                  ? "Creating Account..."
                  : "Sign up"
              }
            />
          </article>

        </form>

      </section>
    </main>
  );
};

export default Signup;
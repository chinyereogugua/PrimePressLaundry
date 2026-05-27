import React, { useState } from 'react'
import "./Css/LoginResetpassword.css"
import Primepresslaundrylogo from '../../Components/Primepresslaundrylogo'
import Input from "../../Components/Input.jsx"
import Button from "../../Components/Button.jsx"
import { FaEye } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { resetPassword } from '../../API/AdminApi.js'

const LoginResetpassword = () => {
const nav = useNavigate();

const [passwordInfo, setPasswordInfo] = useState({
    password: "",
    confirmPassword: "",
});

const handleChange = (e) => {
    const {name, value} = e.target;

    setPasswordInfo({...passwordInfo, [name]: value})
    console.log("name", name)
    console.log("value", value)
};

   const handleResetPassword = async (e) => {
    e.preventDefault();

    try {
      if (passwordInfo.password !== passwordInfo.confirmPassword) {
        toast.error("Passwords do not match");
        return;
      }
      const email = localStorage.getItem("resetEmail");

      const data = {
        emailAddress: email,
        password: passwordInfo.password,
        confirmPassword: passwordInfo.confirmPassword,
      };
      console.log ("SUBMIT DATA:", data);

      const res = await resetPassword(data);
      console.log("FULL RESPONSE:", res);
      console.log("MESSAGE:", res.message);

      toast.success(res.message);
      localStorage.removeItem("resetEmail");
      nav("/login")
      
    } catch (error) {
      console.log("ERROR RESPONSE:", error.response);
      console.log("ERROR DATA:", error.response?.data);

      toast.error(
        error.response?.data?.message ||
        error.message
      );
    }
   };

  return (
   <main className='loginResetpassword-container'>
    <section className='loginResetpassword-wrapperlogo'>
          <Primepresslaundrylogo />
         </section>
         <form className='loginResetpassword-wrappertext' onSubmit={handleResetPassword}>
          <section className='loginResetpassword-wrappertext-holder'>
            <article className='loginResetpassword-heading'>
            <p>Reset password</p>
          </article>
          <article className='loginResetpassword-password'>
            <p> Enter New password</p>
            <article className='loginResetpassword-password-holder'>
            <Input 
            placeholder="New password" 
            className="loginResetpassword-password-input"
            name="password"
            value={passwordInfo.password}
            onChange={handleChange}
            />
            <FaEye className='loginResetpassword-password-icon'/>
            </article>
          </article>
          <article className='loginResetpassword-newpassword'>
            <p> Confirm New password</p>
            <article className='loginResetpassword-newpassword-holder'>
            <Input 
            placeholder="Confirm new password" 
            className="loginResetpassword-newpassword-input"
            name="confirmPassword"
            value={passwordInfo.confirmPassword}
            onChange={handleChange}
            />
            <FaEye className='loginResetpassword-newpassword-icon'/>
            </article>
          </article>
          <article className='loginResetpassword-button'>
             <Button 
            //  onClick={()=> nav("/login")} 
             btnText="Reset" 
             className="loginResetpassword-btn" 
             type="submit"
             />
          </article>
            </section>
          </form>
   </main>
  )
}

export default LoginResetpassword

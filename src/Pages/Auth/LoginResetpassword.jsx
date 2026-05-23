import React from 'react'
import "./Css/LoginResetpassword.css"
import Primepresslaundrylogo from '../../Components/Primepresslaundrylogo'
import Input from "../../Components/Input.jsx"
import Button from "../../Components/Button.jsx"
import { FaEye } from "react-icons/fa6";
import { useNavigate } from 'react-router-dom'

const LoginResetpassword = () => {
const nav = useNavigate()
  return (
   <main className='loginResetpassword-container'>
    <section className='loginResetpassword-wrapperlogo'>
          <Primepresslaundrylogo />
         </section>
         <section className='loginResetpassword-wrappertext'>
          <section className='loginResetpassword-wrappertext-holder'>
            <article className='loginResetpassword-heading'>
            <p>Reset password</p>
          </article>
          <article className='loginResetpassword-password'>
            <p> Enter New password</p>
            <article className='loginResetpassword-password-holder'>
            <Input placeholder="New password" className="loginResetpassword-password-input"/>
            <FaEye className='loginResetpassword-password-icon'/>
            </article>
          </article>
          <article className='loginResetpassword-newpassword'>
            <p> Confirm New password</p>
            <article className='loginResetpassword-newpassword-holder'>
            <Input placeholder="Confirm new password" className="loginResetpassword-newpassword-input"/>
            <FaEye className='loginResetpassword-newpassword-icon'/>
            </article>
          </article>
          <article className='loginResetpassword-button'>
             <Button onClick={()=> nav("/login")} btnText="Reset" className="loginResetpassword-btn" />
          </article>
            </section>
          </section>
   </main>
  )
}

export default LoginResetpassword

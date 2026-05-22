import React from 'react'
import "./Css/Login.css"
import Primepresslaundrylogo from '../../Components/Primepresslaundrylogo'
import Input from "../../Components/Input.jsx"
import Button from "../../Components/Button.jsx"
import { FaEye } from "react-icons/fa6";

const Login = () => {
  return (
       <main className='login-container'>
        <section className='login-wrapperlogo'>
          <Primepresslaundrylogo />
         </section>
         <section className='login-wrappertext'>
          <section className='login-wrappertext-holder'>
          <article className='login-heading'>
            <p>Sign up to PrimePress</p>
          </article>
          <article className='login-email'>
             <p> Email</p>
            <Input placeholder="Email" className="login-email-input"/>
          </article>
          <article className='login-password'>
            <p> Password</p>
            <article className='login-password-holder'>
            <Input placeholder="Password" className="login-password-input"/>
            <FaEye className='login-password-icon'/>
            </article>
          </article>
          <article className='login-forgetpassword'>
            <p>Forgot password?</p>
          </article>
          <article className='login-button'>
             <Button btnText="Login" className="login-btn" />
          </article>
          <article className='login-resignup'>
            <p>Don’t have an account? <span> Sign up</span></p>
            </article>
         </section>
         </section>
    </main>
  )
}

export default Login

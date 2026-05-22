import React from 'react'
import "./Css/Signup.css"
import Primepresslaundrylogo from '../../Components/Primepresslaundrylogo'
import Input from "../../Components/Input"
import Button from "../../Components/Button.jsx"
import { useNavigate } from 'react-router-dom'

const Signup = () => {
const nav = useNavigate()
  return (
    <main className='signup-container'>
         <section className='signup-wrapperlogo'>
          <Primepresslaundrylogo />
         </section>
         <section className='signup-wrappertext'>
          <section className='signup-wrappertext-holder'>
          <article className='signup-heading'>
            <p>Sign up to PrimePress</p>
          </article>
          <article className='signup-fullname'>
            <p> Full Name</p>
            <Input placeholder="Full Name" className="signup-fullname-input"/>
          </article>
          <article className='signup-email'>
             <p> Email</p>
            <Input placeholder="Email" className="signup-email-input"/>
          </article>
          <article className='signup-password'>
            <p> Password</p>
            <Input placeholder="Password" className="signup-password-input"/>
          </article>
          <article className='signup-confirmpassword'>
            <p> Confirm Password</p>
            <Input placeholder="Password" className="signup-confirmpassword-input"/>
          </article>
          <article className='signup-button'>
            <Button className="signup-btn" onClick={()=> nav ("/signupemailverify")} btnText="Sign up" />
          </article>
          </section>
         </section>
    </main>
  )
}

export default Signup

import React from 'react'
import "./Css/Input.css"

const Input = (props) => {
  return (
    <input className={`input ${props.className}`}
     onChange={props.onChange}
     placeholder={props.placeholder}
     type={props.type}
      />
  )
}

export default Input

import React from 'react'
import "./Input.css"

const Input = ({className,placeholder,name,id,type}) => {
  return (
    <>
        <input className={className} id={id} name={name} type={type} placeholder={placeholder} />
    </>
  )
}

export default Input
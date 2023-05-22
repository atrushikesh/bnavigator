import React from 'react'
import './Btn.css'


const Btn = ({btn_txt,className}) => {
  return (
    <>
      <button className={className} type="submit" name={btn_txt} value={btn_txt} >{btn_txt}</button>
    </>
  )
}

export default Btn
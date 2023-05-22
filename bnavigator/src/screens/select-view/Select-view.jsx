import React from 'react'
import './Select-view.css'

import {Btn} from "../../components"
import select_view_img from "../../assets/Select-view-img.png"

const Select_view = () => {
  return (
    <div className='container-2475-dark'>
      <div className="container-view">
        <div className="section section-view">
            <h1 className="title-default-xxl">Continue as</h1>
            <h1 className="title-default-xl">Toggle</h1>
            <img className='banner-img-l' src={select_view_img} alt="Navigator" />
        </div>

        <div className="section">
            <Btn className="btn-primary" btn_txt="Proceed" />
        </div>
      </div>
    </div>
  )
}

export default Select_view

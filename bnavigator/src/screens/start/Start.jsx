import {React, useState} from 'react';
import './Start.css';
import {Link, useNavigate} from 'react-router-dom'
import axios from 'axios';

import img from '../../assets/start-img.jpg';
import logo from '../../assets/logo.png';
import hero_img from '../../assets/hero-img.png';

import {Btn} from '../../components'

const Start = () => {
  let navigate = useNavigate();
  const [ inputs, setInputs] = useState({})

  const handleChange = (e) =>{
    const name = e.target.name;
    const value = e.target.value;
    setInputs(values => ({...values, [name]: value}));
  }

  const handleSubmit = (e) =>{
    e.preventDefault();

    const setInputs = {
      wl_name: inputs.wl_name,
      wl_phone: inputs.wl_phone,
      wl_email: inputs.wl_email,
      wl_gender: inputs.wl_gender,
      wl_course: inputs.wl_course,
      wl_role: inputs.wl_role,
    }
    console.log(setInputs)

    axios.post('http://localhost:8888/api/user/save', inputs).then(function(response){
      console.log(response.inputs);
      navigate('/');
    })
  }

  return (
    <>
    <div className="desktop-view">
      <div className="container-desktop">
        <nav className="navbar">
          <div className="section-flex-row">
            <img className='logo' src={logo} alt="Logo" />
            <h1 className="title-dark-xs l0">B-Navigator</h1>
          </div>

          <div className="btn-mini-yellow">
            <a className='nav-link' href="#wl"><p className="body-dark-l l1">Join waitlist ⏱️</p></a>
          </div>
        </nav>

        <div className="desktop-content">
          <div className="desktop-section">
            <div className="section-flex-row-sb hero-section">
              <div className="section mt-32">
                <h1 className="hero-text-primary">GHAR SE COLLEGE COLLEGE SE GHAR</h1>
                <p className="body-primary-m b2 mt-32 mb-0">Ab hoga Affordable & Enjoyable !!</p>
                <p className="body-secondary-m">Save by pooling with your local college mates. </p>
                <div className="btn-mini-yellow mt-24">
                  <p className="body-dark-m l1">Switch to Mobile for App Preview</p>
                </div>
              </div>
              <img className='hero-img mt-32' src={hero_img} alt="illustration" />
            </div>

            <div className="section-flex-row-sb">
              <div className="section mt-32 ">
                <h3 id='wl' className="title-default-m">Join waitlist ⤵️</h3>
                <p className="body-secondary-m">Enter your details and join the waitlist to get access ASAP!</p>
                <p className="body-secondary-l sub-btn-nude mt-32">
                  Frontend by 
                  <a href="xyz.com" className="nav-link"><p className="body-primary-l l1 b2">Rushikesh B ↗</p></a>
                </p>
                <p className="body-secondary-l sub-btn-nude">
                  Backend by 
                  <a href="abc.com" className="nav-link"><p className="body-primary-l l1 b2">Avanthika B ↗</p></a>
                </p>
              </div>
              <form onSubmit={handleSubmit} >
              <div className="section form mt-32 gap2">
                <div className="section">
                  <label className='body-primary-l' htmlFor="wl_name">Enter your Name</label>
                  <input className={"input-default mt-8"} name="wl_name" id={"wl_name"} type={"text"} placeholder={"Ex: Rushikesh"} onChange={handleChange} value={inputs.wl_name} />
                </div>              

                <div className="section">
                  <label className='body-primary-l' htmlFor="wl_number">Mobile Number</label>
                  <input className={"input-default mt-8"} name={"wl_phone"} id={"wl_phone"} type={"tel"} placeholder={"+91 9876543210"} onChange={handleChange} value={inputs.wl_phone} />
                </div>

                <div className="section">
                  <label className='body-primary-l' htmlFor="wl_email">Email Address</label>
                  <input className={"input-default mt-8"} name={"wl_email"} id={"wl_email"} type={"text"} placeholder={"example@gmail.com"} onChange={handleChange} value={inputs.wl_email} />
                </div>

                  <div className="section">
                    <label className='body-primary-l' htmlFor="wl-gender">Gender</label>
                    <input className={"input-default mt-8"} name={"wl_gender"} id={"wl_gender"} type={"text"} placeholder={"Male / Female"} onChange={handleChange} value={inputs.wl_gender} />
                  </div>
                  <div className="section">
                  <label className='body-primary-l' htmlFor="wl_course">Enter your Course</label>
                    <input className={"input-default mt-8"} name="wl_course" id={"wl_course"} type={"text"} placeholder={"BSc MPCS / B.Tech CSE"} onChange={handleChange} value={inputs.wl_course} />
                  </div>

                <div className="section">
                  <label className='body-primary-l' htmlFor="wl_role">Choose your Role</label>
                  <input className={"input-default mt-8"} name="wl_role" id={"wl_role"} type={"text"} placeholder={"Navigator / Partner"} onChange={handleChange} value={inputs.wl_role} />
                  <p className="body-secondary-m mt-18">Navigator is one who owns the vehicle | Partner is the pavillion.</p>
                </div>

                <input className='btn-primary mt-32' onChange={handleChange} type="submit" value="Submit" />
              </div>
              </form>
            </div>
          </div>
        </div>

        <div className="section-flex-row-sb-center">
          <div className="section-flex-col-sb-center">
            <p className="body-secondary-m mt-32 mb-8">Made in Bharat 🇮🇳</p>
            <p className="body-secondary-m mb-24">All rights reserved @ Bhartanve</p>
          </div>
        </div>
      </div>
    </div>

    <div className="mobile-view">
      <div className='start-page'>
          <img src={img} alt="img" className="bg" />
          <div className="start-page-container">
            <div className="section-flex-col-sb" id='logo_waitlist'>
              <h1 className='title-default-m'>B-Navigator</h1>
              <Btn className="btn-nude-primary" btn_txt="⏱️ JOIN WAITLIST" />
            </div>
              <div className="spc-content">

                  <h1 className='tagline'>The ride, you and Nature needs..</h1>
                  
                  <Link to="Login">
                    <Btn className="btn-primary" btn_txt={"Let's go!"}/>
                    </Link>
              </div>
          </div>
      </div>
    </div>
    </>
  )
}

export default Start

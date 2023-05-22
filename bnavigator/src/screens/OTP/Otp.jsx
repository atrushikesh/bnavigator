import React from 'react'
import './Otp.css';
import { Link } from 'react-router-dom';
import { Input, Btn } from '../../components';
import login_img from "../../assets/login-img.png";

const Otp = () => {
  return (
    <div className='container-32-dark section-flex-col-sb'>
        <div className="section-flex-col-sb">
            <h1 className='title-default-m'>Enter your OTP 🔑</h1>
            <p className="body-primary-m">An SMS is sent to your number, please enter it to continue securely</p>

            <form className="form-login">
                <Input className={"input-default"} type={"tel"} name={"phone_number"} id={"phone_number"} placeholder="Enter OTP" />
            </form>

        </div>
            <img className='banner-img-l' src={login_img} alt="Login Image" />

        <div className='section'>
            <Link to={"/Home"}>
            <Btn className="btn-primary" btn_txt="Proceed" />
            </Link>
        </div>
    </div>
  )
}

export default Otp

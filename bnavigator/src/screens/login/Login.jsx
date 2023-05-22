import React from "react";
import './Login.css';
import {Link} from 'react-router-dom'

import { Btn, Input } from "../../components";
import opposite_arrows from "../../assets/opposite-arrows.png";
import login_img from "../../assets/login-img.png"


const Login = () => {
    return (
<>
        <hr className="hr-1" />
        <div className="container-32-dark">
            <div className="container-login">
                <div>
                    <div className="login-hero-box">

                    <div className="title-box">
                        <h1 className="title-default-s">Ghar</h1>
                        <img className="opposite-arrows-img" src={opposite_arrows} alt="arrows" />
                        <h1 className="title-default-s">College</h1>
                    </div>
                    <p className="title-desc-primary">Ab hoga Affordable & Enjoyable</p>

                    <p className="body-primary-m">Turning your daily journey from boring to memorable and money saving</p>
                    </div>
                    
                    <h1 className="title-default-s" id="lets-get-started">Let's get started 💨</h1>

                    <p className="title-desc-primary">Verify your account using <strong>OTP</strong></p>

                </div>

                <div className="section-flex-col-sb" id="login-content-box">
                        <form className="form-login">
                            <Input className={"input-default"} type={"tel"} name={"phone_number"} id={"phone_number"} placeholder="Enter your phone number" />
                        </form>

                    <img className='banner-img-l' src={login_img} alt="Secure login with Phone Number "/>

                    <div className="section cta-login">
                        <Link to={"/get-OTP"}><Btn className="btn-secondary" to={"/home"} btn_txt={"Continue"} /></Link>
                        <span className="caption-txt">By clicking "Continue" you agree to the <a className="caption-txt" href="#">user agreement</a> and <a className="caption-txt" href="#">privacy policy</a></span>
                    </div>

                </div>

            </div>
        </div>
</>
        );
}

export default Login
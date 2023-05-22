import React from "react";

import {Link} from 'react-router-dom'

import { Btn, Input } from "../../components";
import opposite_arrows from "../../assets/opposite-arrows.png";


const Test = () => {
    return (
<>
                {/* <hr className="hr-1" /> */}

        <div className="container-24x24-white">
            <div className="container-login">
                    <div className="title-box">
                        <h1 className="title-dark-s">Ghar</h1>
                        <img className="opposite-arrows-img" src={opposite_arrows} alt="arrows" />
                        <h1 className="title-dark-s">College</h1>
                    </div>
                    <p className="title-dark-desc">Ab hoga Affordable & Enjoyable</p>

                    <p className="body-dark-m">Turning your daily journey from boring to memorable and money saving</p>
                    </div>
        </div>


                    <div className="container-24x40-dark">

                    {/* <h1 className="title-default-s" id="lets-get-started">Let's get started 💨</h1> */}

                    <p className="title-desc-primary">Verify your account using <strong>OTP</strong></p>

                    <div className="section">
                        <form className="form-login">
                            <Input className={"input-default"} type={"tel"} name={"phone_number"} id={"phone_number"} placeholder="Enter your phone number" />
                        </form>
                    </div>


                {/* <img className='banner-img-l' src={login_img} alt="Secure login with Phone Number "/> */}

                <div className="section cta-login">
                    <Link to={"/Select-view"}><Btn className="btn-secondary" to={"/home"} btn_txt={"Continue"} /></Link>
                </div>

            </div>
</>
        );
}

export default Test
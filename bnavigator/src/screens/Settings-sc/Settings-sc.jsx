import React from 'react'
import './Settings-sc.css'
import { Link } from 'react-router-dom'

const Settings_sc = () => {
    return(
        <>
        <div className="container-2475-dark">
            <Link to={"/Home"}>
            <div className="section-flex-row">
                <svg width="35" height="35" viewBox="0 0 35 35" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M7.09766 17.0566C7.09766 17.3862 7.24048 17.7158 7.49316 17.9575L14.7441 25.1975C15.0078 25.4502 15.2935 25.571 15.6121 25.571C16.3042 25.571 16.8096 25.0767 16.8096 24.4065C16.8096 24.0549 16.6777 23.7583 16.447 23.5386L13.9751 21.0337L10.7891 18.1223L13.3489 18.2761H26.6643C27.3894 18.2761 27.8948 17.7708 27.8948 17.0566C27.8948 16.3315 27.3894 15.8262 26.6643 15.8262H13.3489L10.8 15.98L13.9751 13.0686L16.447 10.5637C16.6777 10.344 16.8096 10.0474 16.8096 9.6958C16.8096 9.02563 16.3042 8.53125 15.6121 8.53125C15.2935 8.53125 14.9968 8.6521 14.7112 8.92676L7.49316 16.1448C7.24048 16.3865 7.09766 16.7161 7.09766 17.0566Z" fill="#FAFDFD"/>
                </svg>
                <h1 className="title-default-m">Settings</h1>
            </div>
            </Link>

            <div className="section-flex-col">
                <p className="title-desc-primary">Account Info</p>
                <div className="content-section-s">
                <p className="body-primary-l">Personal Information</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">My Ride Locations</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">Contact Details</p>
                </div>
            </div>

            <div className="section-flex-col">
                <p className="title-desc-primary">Privacy</p>
                <div className="content-section-s">
                <p className="body-primary-l">Push Notifications</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">Email Notifications</p>
                </div>
            </div>

            <div className="section-flex-col">
                <p className="title-desc-primary">Security</p>
                <div className="content-section-s">
                <p className="body-primary-l">2 Step Verification</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">Change Password</p>
                </div>
            </div>

            <div className="section-flex-col">
                <p className="title-desc-primary">Legal</p>
                <div className="content-section-s">
                <p className="body-primary-l">Privacy Policy</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">Terms & Conditions</p>
                    <hr className='hr mt-16 mb-8' />
                    <p className="body-primary-l">V.0.1</p>
                </div>
            </div>

            <div className="section-flex-row btn-mini-secondary mt-32">
                <svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6.44043 15.6758V21.2305C6.44043 22.7598 7.47754 23.7529 9.05078 23.7529H18.9385C20.5117 23.7529 21.5488 22.7598 21.5488 21.2305V6.06934C21.5488 4.54883 20.5117 3.54688 18.9385 3.54688H9.05078C7.47754 3.54688 6.44043 4.54883 6.44043 6.06934V11.6328H8.16309V6.35059C8.16309 5.66504 8.56738 5.26953 9.28809 5.26953H18.7012C19.4219 5.26953 19.8262 5.66504 19.8262 6.35059V20.9492C19.8262 21.6348 19.4219 22.0303 18.7012 22.0303H9.28809C8.56738 22.0303 8.16309 21.6348 8.16309 20.9492V15.6758H6.44043ZM4.62109 14.3838H10.4043L12.1006 14.2959L10.3604 15.8252L9.88574 16.3174C9.75391 16.458 9.66602 16.6514 9.66602 16.8623C9.66602 17.2754 9.96484 17.5654 10.3691 17.5654C10.5713 17.5654 10.7559 17.4863 10.8965 17.3457L14.0078 14.252C14.1924 14.0586 14.2979 13.8477 14.2979 13.6455C14.2979 13.4434 14.1924 13.2236 14.0078 13.0391L10.8965 9.94531C10.7559 9.80469 10.5713 9.72559 10.3691 9.72559C9.96484 9.72559 9.66602 10.0156 9.66602 10.4287C9.66602 10.6396 9.75391 10.833 9.88574 10.9736L10.3604 11.4658L12.1006 12.9951L10.4043 12.9072H4.62109C4.17285 12.9072 3.88281 13.25 3.88281 13.6455C3.88281 14.041 4.17285 14.3838 4.62109 14.3838Z" fill="#1C1C1E"/>
                </svg>
                <p className="body-dark-l b2 l1">Log Out</p>
            </div>
        </div>
        </>
    )
}

export default Settings_sc
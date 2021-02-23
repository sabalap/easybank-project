import React from 'react'
import "./Section.css";
import mobilesImg from "../../../images/image-mockups.png";
function Section() {
    return (
        <div className="section">
            <div className="container">
                <div className="text">
                    <h1>Next generation digital banking</h1>
                    <p>
                        Take your financial life online.
                        Your Easybank account will be a one-stop-shop for spending,
                        saving, budgeting, investing, and much more.
                 </p>
                    <button className="request-button">Request Invite</button>
                </div>
                <div className="image-container">
                    <img className="mobiles-img" src={mobilesImg} alt="Mobile Img" />
                </div>
            </div>
        </div>
    )
}

export default Section

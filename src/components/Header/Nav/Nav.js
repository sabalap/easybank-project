import React from 'react'
import Logo from "../../../images/logo.svg";
import "./Nav.css";
function Nav() {
    return (
        <div className="nav">
            <img src={Logo} alt="logo" className="Logo" />
            <ul className="nav-ul">
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Blog</li>
                <li>Careers</li>
            </ul>
            <button className="request-button">Request Invite</button>
        </div>
    )
}

export default Nav;

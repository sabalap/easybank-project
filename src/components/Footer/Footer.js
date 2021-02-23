import React from 'react'
import "./Footer.css";
import Logo from "../../images/logo.svg";
import FacebookLogo from "../../images/icon-facebook.svg";
import YoutubeLogo from "../../images/icon-youtube.svg";
import TwitterLogo from "../../images/icon-twitter.svg";
import PinterestLogo from "../../images/icon-pinterest.svg";
import InstagramLogo from "../../images/icon-instagram.svg";
function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="column">
                        <div className="footer-logo">
                            <img className="white-logo" src={Logo} alt="Logo" />
                            <h3 className="white-text">easybank</h3>
                        </div>
                        <div className="footer-socials">
                            <img src={FacebookLogo} alt="FacebookLogo" />
                            <img src={YoutubeLogo} alt="YoutubeLogo" />
                            <img src={TwitterLogo} alt="TwitterLogo" />
                            <img src={PinterestLogo} alt="PinterestLogo" />
                            <img src={InstagramLogo} alt="InstagramLogo" />
                        </div>
                    </div>
                    <ul className="column">
                        <li>About Us</li>
                        <li>Contact</li>
                        <li>Blog</li>
                    </ul>
                    <ul className="column">
                        <li>Careers</li>
                        <li>Support</li>
                        <li>Privacy Policy</li>
                    </ul>
                    <div className="column">
                        <button className="request-button">Request Invite</button>
                        <p>&copy;Easybank. All Rights Reserved</p>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer;

import React, { useState } from 'react'
import Nav from "./Nav/Nav";
import Section from "./Section/Section";
import "./Header.css";
import MenuIcon from "../../images/icon-hamburger.svg";
import Logo from "../../images/logo.svg";
import CloseBtn from "../../images/icon-close.svg";
function Header() {
    const [mobile, setMobile] = useState(false);
    const [icon, setIcon] = useState(false);
    const toggle = () => {
        setIcon(!icon);
    }
    window.addEventListener("resize", () => {
        if (window.innerWidth < 1020) {
            setMobile(true);
        }
        else {
            setMobile(false)
        }
    })
    return (
        <header>
            <div className="container">
                {mobile ?
                    <div className="mobile-nav">
                        <img src={Logo} alt="Logo" />
                        {icon ? <img src={CloseBtn} alt="closeBtn" onClick={toggle} /> :
                            <img src={MenuIcon} alt="MenuIcon" onClick={toggle} />
                        }
                    </div> : <Nav />}
                {icon && <div style={{ background: "darkcyan", marginTop: "22px", color: "white", borderRadius: "10px", padding: "20px" }}>
                    <ul style={{ listStyle: "none", textAlign: "center" }}>
                        <li style={{ marginBottom: "10px" }}>Home</li>
                        <li style={{ marginBottom: "10px" }}>About</li>
                        <li style={{ marginBottom: "10px" }}>Contact</li>
                        <li style={{ marginBottom: "10px" }}>Blog</li>
                        <li style={{ marginBottom: "10px" }}>Careers</li>
                    </ul>
                </div>}
            </div>
            <Section />
        </header>
    )
}

export default Header

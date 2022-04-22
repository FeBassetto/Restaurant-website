import React from "react";
import './Footer.css'
import FooterBottom from "./FooterBottomDesktop/FooterBottomDesktop";
import FooterTop from "./FooterTopDesktop/FooterTopDesktop";


const Footer = () => {


    return (
        <footer className="footer">
            <div className="desktop__footer">
                <FooterTop/>
                <FooterBottom/>
            </div>
            <div className="mobile__footer">
                
            </div>
        </footer>
    )
}

export default Footer
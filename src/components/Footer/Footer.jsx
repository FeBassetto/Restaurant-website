import React from "react";
import './Footer.css'
import FooterBottomDesktop from "./FooterBottomDesktop/FooterBottomDesktop";
import FooterTopDesktop from "./FooterTopDesktop/FooterTopDesktop";
import FooterTopMobile from './FooterTopMobile/FooterTopMobile';


const Footer = () => {


    return (
        <footer className="footer">
            <div className="desktop__footer">
                <FooterTopDesktop/>
                <FooterBottomDesktop/>
            </div>
            <div className="mobile__footer">
                <FooterTopMobile/>
            </div>
        </footer>
    )
}

export default Footer
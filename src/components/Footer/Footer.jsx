import React from "react";
import './Footer.css'
import FooterBottomDesktop from "./FooterBottomDesktop/FooterBottomDesktop";
import FooterTopDesktop from "./FooterTopDesktop/FooterTopDesktop";
import FooterTopMobile from './FooterTopMobile/FooterTopMobile';
import FooterBottomMobile from './FooterBottomMobile/FooterBottomMobile';


const Footer = () => {


    return (
        <footer className="footer">
            <div className="desktop__footer">
                <FooterTopDesktop/>
                <FooterBottomDesktop/>
            </div>
            <div className="mobile__footer">
                <FooterTopMobile/>
                <FooterBottomMobile/>
            </div>
        </footer>
    )
}

export default Footer
import React from "react";
import "./Footer.css"
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import YouTubeIcon from '@mui/icons-material/YouTube';
import VisaImg from "./Footer Image/visa.png"
import PayPalImg from "./Footer Image/paypal.png"
import MasterCardImg from "./Footer Image/master-card.png"
import AppleImg from "./Footer Image/apple-pay.png"
import GoogleImg from "./Footer Image/google-pay.png"

const Footer = () => {
    return (

        
        <div className="Footer ">
            <div className="container">
            <div className="Border-Bottom">
            <div className="row mb-4 margin-bottom">
                <div className="mt-5 mb-4 row custom-footer">
            <div className="col-sm-12 col-md-3 col-lg-2 Footer-Content">
                <div className="Footer-Heading">
                <h5>Contact Us</h5>
                </div>
                <div><a href="">Customer Support</a></div>
                <div><a href="">Service Guarantee</ a></div>
                <div><a href="">Website Feedback</a></div>
                <div className="Footer-Icons pt-1">
                    <a href=""><FacebookIcon className="Facebook-Icon"></FacebookIcon></a>
                    <a href=""> <InstagramIcon className="Icon"></InstagramIcon></a>
                    <a href=""><LinkedInIcon className="Icon"></LinkedInIcon></a>
                    <a href=""><YouTubeIcon className="Icon"></YouTubeIcon></a>
                </div>
                
            </div>

            <div className="col-sm-12 col-md-3 col-lg-2 Footer-Content">
            <div className="Footer-Heading">
                <h5>About</h5>
                </div>
            <div><a href="">About Trip.com</a></div>
            <div><a href="">News</a></div>
            <div><a href="">Careers</a></div>
            <div><a href="">Terms & Conditions</a></div>
            <div><a href="">Privacy Statement</a></div>
            <div><a href="">About Trip.com Group</a></div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-2 Footer-Content">
            <div className="Footer-Heading">
                <h5>Other Services</h5>
                </div>
            <div><a href="">Investor Relations</a></div>
            <div><a href="">Trip.com Rewards</a></div>
            <div><a href="">Affiliate Program</a></div>
            <div><a href="">List My Hotel</a></div>
            <div><a href="">All Hotels</a></div>
            </div>
           
            <div className="col-sm-12 col-md-3 col-lg-2 Footer-Content">
            <div className="Footer-Heading">
                <h5>Partners</h5>
                </div>
            <div><a href="">All Partner Programs</a></div>
            <div><a href="">Solutions Partner Program</a></div>
            <div><a href="">App Partner Program</a></div>
            <div><a href="">HubSpot for Startups</a></div>
            <div><a href="">Affiliate Program</a></div>
            </div>

            <div className="col-sm-12 col-md-3 col-lg-4 Payment-method-mt Footer-Content">
            <div className="Footer-Heading">
                <h5>Payment Method</h5>
                </div>
                <div className="d-flex Footer-Mathed-image">
            <div><img className="Visa-Margin" src={VisaImg} alt="" /></div>
            <div><img src={PayPalImg} alt="" /></div>
            <div><img src={MasterCardImg} alt="" /></div>
            <div><img src={AppleImg} alt="" /></div>
            <div><img src={GoogleImg} alt="" /></div>
            </div>
            </div>
            </div>
            
        </div>
        </div>
        </div>
        <div className="Footer-Bottom-Content">
            <div className="Footer-Para mt-3">
                <p>Copyright © 2023 Nexus.com Travel United State Pte. Ltd. All rights reserved
                   Site Operator: Nexus.com Travel United State. Ltd.</p>
            </div>
        </div>
            </div>
    )
}

export default Footer;
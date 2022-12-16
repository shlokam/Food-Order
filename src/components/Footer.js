import React from "react";
import TwitterIcon from '@mui/icons-material/Twitter';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import '../styles/Footer.css'

function Footer(){
    return(
        <div className="footer">
            <div className="socialMedia">
                <FacebookIcon/>
                <InstagramIcon/>
                <TwitterIcon/>
            </div>
                <p>&copy; IndianFood.com</p>
        </div>
    )
}

export default Footer;
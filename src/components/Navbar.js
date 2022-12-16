import React from "react";
import logo from '../assests/logo.jpeg';
import { Link } from 'react-router-dom';
import '../styles/Navbar.css'

function Navbar(){
    return(
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} />
            </div>
            <div className="rightSide">
                <Link to= "/">Home</Link>
                <Link to= "/">Menu</Link>
                <Link to= "/">About Us</Link>
                <Link to= "/">Contact</Link>
            </div>

        </div>
    )
}

export default Navbar;
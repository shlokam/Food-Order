import React from "react";
import logo from '../assests/logo.jpeg';


function Navbar(){
    return(
        <div className="navbar">
            <div className="leftSide">
                <img src={logo} />
            </div>
            <div className="rightSide">right side </div>

        </div>
    )
}

export default Navbar;
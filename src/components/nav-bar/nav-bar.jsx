import React from "react";
import "./nav-bar.css";
function Navbar(){
    return (
        <div className="nav-bar-container">
            <div className="nav-bar-left-container">
                <img className="nav-logo" src="https://ieeevbitsb.in/wp-content/uploads/2019/11/ieee-vbit-sb.png" alt=""/>
            </div>
            <div className="nav-bar-right-container">
                <a href="#" className="nav-bar-links">HOME</a>
                <a href="#" className="nav-bar-links">ABOUT</a>
                <a href="#" className="nav-bar-links">SOCITIES</a>
                <a href="#" className="nav-bar-links">EXE-COM</a>
                <a href="#" className="nav-bar-links">EVENTS</a>
                <a href="#" className="nav-bar-links">ACHIVEMENTS</a>
                <a href="#" className="nav-bar-links">CONTACTS</a>
                <a href="#" className="nav-bar-links">SITE MAP</a>
            </div>
        </div>
    )
}
export default Navbar;

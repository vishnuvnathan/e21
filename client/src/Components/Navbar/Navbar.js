import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <div className="navbar-container">
            <div className="logo-container">
                <img className="logo" src={"/kerala.png"}/>
                <h1>
                    Virtual Election 
                    <br/>
                    <small>Kerala 2021</small>
                    
                </h1>
            </div>
            <span className="branding">
                <a href="http://rsoclabs.com/">
                    Powered by <b>RSOCLabs</b>
                </a>
            </span>
        </div>
    )
}

export default Navbar

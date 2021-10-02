import React from 'react';
import logo from '../images/cv.png'
import '../styles/Header.css'

function Header() {
    return(
        <div className="header">
            <img className="logo" src={logo} alt="Logo" />
            <h1 className="title">Resume Creator</h1>
        </div>
    )
}

export default Header;
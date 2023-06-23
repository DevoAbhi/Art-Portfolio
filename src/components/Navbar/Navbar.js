import { React, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showHamburger, setShowHamburger] = useState(false);

    const hamburgerHandler = () => {
        setShowHamburger(!showHamburger);
    }

    return (
        <div className='top-container'>

            <div className="brand">Debajyoti Sarkar</div>
            <nav className="navbar-container">

                <div className={`nav-links ${showHamburger ? "active" : ""}`}>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/' onClick={() => hamburgerHandler}>Home</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/artwork' onClick={() => hamburgerHandler}>Artwork</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/events' onClick={hamburgerHandler}>Events</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/contactme' onClick={hamburgerHandler}>Contact me</Link>
                </div>

                <div className={`hamburger ${showHamburger ? "active" : ""}`} onClick={hamburgerHandler}>
                    <span className='bar'></span>
                    <span className='bar'></span>
                    <span className='bar'></span>
                </div>
            </nav>

        </div>
    )
}

export default Navbar
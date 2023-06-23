import { React, useState } from 'react'
import './Navbar.css'
import { Link } from 'react-router-dom';

const Navbar = () => {

    const [showHamburger, setShowHamburger] = useState(false);
    const [activeLink, setActiveLink] = useState(null);

    const hamburgerHandler = () => {
        setShowHamburger(!showHamburger);
    }

    const handleLink = (link) => {
        setActiveLink(link);
        setShowHamburger(!showHamburger);
    }

    const navLinks = [
        { id: 1, text: 'Home', link: '/' },
        { id: 2, text: 'Artwork', link: '/artwork' },
        { id: 3, text: 'Events', link: '/events' },
        { id: 4, text: 'Buy Paintings', link: '/buy' },
        { id: 5, text: 'Contact Me', link: '/contactme' },

      ];

    return (
        <div className='top-container'>

            <div className="brand">Debajyoti Sarkar</div>
            <nav className="navbar-container">

                <div className={`nav-links ${showHamburger ? "active" : ""}`}>

                    {navLinks.map(navLink => (
                        <Link key={navLink.id} className={`nav-item ${activeLink === navLink.link ? "active": ""}`} to={navLink.link} onClick={() => handleLink(navLink.link)}>{navLink.text}</Link>
                    ))}


                    {/* <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/artwork' onClick={hamburgerHandler}>Artwork</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/events' onClick={hamburgerHandler}>Events</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/buy' onClick={hamburgerHandler}>Buy Paintings</Link>
                    <Link className={`nav-item ${showHamburger ? "active" : ""}`} to='/contactme' onClick={hamburgerHandler}>Contact me</Link> */}
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
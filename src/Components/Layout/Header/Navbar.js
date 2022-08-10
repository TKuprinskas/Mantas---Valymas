import React, { useState } from 'react';
import { MenuItems } from './MenuItems';
import './Navbar.css';
import logo from '../../../Assets/Images/svarius.png';
// import { Link } from 'react-scroll';
import { Link } from 'react-router-dom';
import { ButtonToolbar } from 'rsuite';
import { Paslaugos, Prekes } from './MenuDropdown';

const NavBar = () => {
    const [clicked, setClicked] = useState(false);

    const handleMobileClick = () => {
        setClicked((clicked) => !clicked);
    };

    return (
        <div className="navContainer">
            <nav className="NavbarItems">
                <h1 className="navbar-logo">
                    <div className="logo">
                        <Link to="/">
                            {' '}
                            <img src={logo} alt=""></img>
                        </Link>
                    </div>
                </h1>
                <div className="menu-icon" onClick={handleMobileClick}>
                    <i className={clicked ? 'fas fa-times' : 'fas fa-bars'}></i>
                </div>
                <ul className={clicked ? 'nav-menu active' : 'nav-menu'}>
                    <Paslaugos title="Paslaugos" trigger="click" onClick={() => handleMobileClick()} />
                    <Prekes title="Prekes" trigger="click" />
                    <Link to="/galerija" className="nav-links" onClick={handleMobileClick}>
                        Galerija
                    </Link>
                    <Link to="/kainos" className="nav-links" onClick={handleMobileClick}>
                        Kainos
                    </Link>
                    <Link to="/kontaktai" className="nav-links" onClick={handleMobileClick}>
                        Kontaktai
                    </Link>
                </ul>
            </nav>
        </div>
    );
};

export default NavBar;

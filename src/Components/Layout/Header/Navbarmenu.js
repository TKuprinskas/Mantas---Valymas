import React, { useState } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { FiAlignRight, FiXCircle, FiChevronDown } from 'react-icons/fi';
import logo from '../../../Assets/Images/svarius.png';
import { PaslaugosMenu, PrekesMenu, MenuItems } from './MenuItems';
import './style.css';

const Navbarmenu = () => {
    const [isMenu, setisMenu] = useState(false);
    const [isResponsiveclose, setResponsiveclose] = useState(false);

    const toggleClass = () => {
        setisMenu(isMenu === false ? true : false);
        setResponsiveclose(isResponsiveclose === false ? true : false);
    };

    let boxClass = ['main-menu menu-right menuq1'];

    if (isMenu) {
        boxClass.push('menuq2');
    } else {
        boxClass.push('');
    }

    const [paslaugosMenu, setPaslaugosMenu] = useState(false);
    const togglePaslaugosMenu = () => {
        setPaslaugosMenu(paslaugosMenu === false ? true : false);
    };

    const [prekesMenu, setPrekesMenu] = useState(false);
    const togglePrekesMenu = () => {
        setPrekesMenu(prekesMenu === false ? true : false);
    };

    let paslaugosSubMenu = ['sub__menus'];
    let prekesSubMenu = ['sub__menus'];

    if (paslaugosMenu) {
        paslaugosSubMenu.push('sub__menus__Active');
    } else {
        paslaugosSubMenu.push('');
    }

    if (prekesMenu) {
        prekesSubMenu.push('sub__menus__Active');
    } else {
        prekesSubMenu.push('');
    }

    return (
        <header className="header__middle">
            <div className="navbar__container">
                <div className="row">
                    <div className="header__middle__logo">
                        <NavLink className={(navData) => (navData.isActive ? 'is-active' : '')} to="/">
                            <img src={logo} alt="logo" />
                        </NavLink>
                    </div>
                    <div className="header__middle__menus">
                        <nav className="main-nav ">
                            {isResponsiveclose === true ? (
                                <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                                        <FiXCircle />
                                    </span>
                                </>
                            ) : (
                                <>
                                    <span className="menubar__button" style={{ display: 'none' }} onClick={toggleClass}>
                                        <FiAlignRight />
                                    </span>
                                </>
                            )}
                            <ul className={boxClass.join(' ')}>
                                <li onClick={togglePaslaugosMenu} className="menu-item sub__menus__arrows">
                                    <Link to="#">
                                        Paslaugos <FiChevronDown />
                                    </Link>
                                    <ul className={paslaugosSubMenu.join(' ')}>
                                        {PaslaugosMenu.map((item, i) => (
                                            <li key={i}>
                                                <NavLink
                                                    onClick={toggleClass}
                                                    className={(navData) => (navData.isActive ? item.cName : '')}
                                                    to={item.url}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                <li onClick={togglePrekesMenu} className="menu-item sub__menus__arrows">
                                    <Link to="#">
                                        Prekės <FiChevronDown />
                                    </Link>
                                    <ul className={prekesSubMenu.join(' ')}>
                                        {PrekesMenu.map((item, j) => (
                                            <li key={j}>
                                                <NavLink
                                                    onClick={toggleClass}
                                                    className={(navData) => (navData.isActive ? item.cName : '')}
                                                    to={item.url}
                                                >
                                                    {item.title}
                                                </NavLink>
                                            </li>
                                        ))}
                                    </ul>
                                </li>
                                {MenuItems.map((item, k) => (
                                    <li className="menu-item " key={k}>
                                        <NavLink
                                            onClick={toggleClass}
                                            className={(navData) => (navData.isActive ? item.cName : '')}
                                            to={item.url}
                                        >
                                            {item.title}
                                        </NavLink>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                </div>
            </div>
        </header>
    );
};
export default Navbarmenu;

import React from 'react';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h3>Kontaktai</h3>
                    <ul>
                        <li>MB Švarius</li>
                        <li>
                            <a href="tel:+37066444444">+370 600 34478</a>
                        </li>
                        <li>
                            <a href="mailto:svariusvalymopaslaugos@gmail.com">svariusvalymopaslaugos@gmail.com</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="footer-content-center">
                        <h3>Mus galite sekti</h3>
                        <ul>
                            <li>
                                <a
                                    href="https://www.facebook.com/svariusvalymas"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className="fab fa-facebook" />
                                </a>{' '}
                                <a
                                    href="https://www.instagram.com/svarius_valymas/"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className="fab fa-instagram-square" />
                                </a>{' '}
                                <a
                                    href="https://www.youtube.com/channel/UC47WP-dm4sJU_3FBQ-PJZsQ"
                                    target="_blank"
                                    rel="noreferrer noopener"
                                >
                                    <i className="fab fa-youtube" />
                                </a>{' '}
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="footer-content-right">
                    <h3>Daugiau</h3>
                    <ul>
                        <li>
                            <Link to="/galerija">Galerija</Link>
                        </li>
                        <li>
                            <Link to="/kainos">Kainos</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;

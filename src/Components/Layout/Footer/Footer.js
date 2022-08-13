import React, { useState, useEffect } from 'react';
import sanityClient from '../../../client';
import './Footer.css';
import { Link } from 'react-router-dom';

const Footer = () => {
    const [loaded, setLoaded] = useState(false);
    const [pageData, setData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "kontaktai"]{
                    title,
                    content,
                    social,
                    telemail
                }`
            )
            .then((data) => {
                setData(data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <div className="footer">
            <div className="footer-content">
                <div className="footer-content-left">
                    <h3>Kontaktai</h3>
                    <ul>
                        <li>MB Švarius</li>
                        <li>
                            <a href={'tel:' + pageData[0].telemail.telefonas}>{pageData[0].telemail.telefonas}</a>
                        </li>
                        <li>
                            <a href={'mailto:' + pageData[0].telemail.email}>labas@svarius.lt</a>
                        </li>
                    </ul>
                </div>
                <div>
                    <div className="footer-content-center">
                        <h3>Mus galite sekti</h3>
                        <ul>
                            <li>
                                <a href={pageData[0].social.facebook} target="_blank" rel="noreferrer noopener">
                                    <i className="fab fa-facebook" />
                                </a>{' '}
                                <a href={pageData[0].social.instagram} target="_blank" rel="noreferrer noopener">
                                    <i className="fab fa-instagram-square" />
                                </a>{' '}
                                <a href={pageData[0].social.youtube} target="_blank" rel="noreferrer noopener">
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

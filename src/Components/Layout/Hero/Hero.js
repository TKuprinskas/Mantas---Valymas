import React from 'react';
import './Hero.css';
import image from '../../../Assets/Images/hero.webp';

const Hero = (props) => {
    return (
        <div className="hero">
            <div className="banner">
                {/* <img src={image} alt="hero" /> */}
                <div className="blurr">Profesionalios valymo paslaugos</div>
            </div>
        </div>
    );
};

export default Hero;

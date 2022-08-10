import React, { Component } from 'react';
import { Carousel } from 'react-responsive-carousel';
import baldai from '../../../Assets/Images/furniture.jpg';
import kilimai from '../../../Assets/Images/carpet.jpg';
import ciuziniai from '../../../Assets/Images/mattress.jpg';
import langai from '../../../Assets/Images/glass.jpg';
import generalinis from '../../../Assets/Images/general.jpg';

const Gallery = () => (
    <Carousel autoPlay infiniteLoop>
        <div>
            <img src={baldai} />
        </div>
        <div>
            <img src={kilimai} />
        </div>
        <div>
            <img src={ciuziniai} />
        </div>
        <div>
            <img src={langai} />
        </div>
        <div>
            <img src={generalinis} />
        </div>
    </Carousel>
);

export default Gallery;

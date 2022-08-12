import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import f1 from '../../../Assets/Images/galerija/1.jpg';
import f2 from '../../../Assets/Images/galerija/2.jpg';
import f3 from '../../../Assets/Images/galerija/3.jpg';
import f4 from '../../../Assets/Images/galerija/4.jpg';
import f5 from '../../../Assets/Images/galerija/5.jpg';
import f6 from '../../../Assets/Images/galerija/6.jpg';
import f7 from '../../../Assets/Images/galerija/7.jpg';
import f8 from '../../../Assets/Images/galerija/8.jpg';
import f9 from '../../../Assets/Images/galerija/9.jpg';
import f10 from '../../../Assets/Images/galerija/10.jpg';
import f11 from '../../../Assets/Images/galerija/11.jpg';
import f12 from '../../../Assets/Images/galerija/12.jpg';
import f13 from '../../../Assets/Images/galerija/13.jpg';
import f14 from '../../../Assets/Images/galerija/14.jpg';
import f15 from '../../../Assets/Images/galerija/15.jpg';
import f16 from '../../../Assets/Images/galerija/16.jpg';
import f17 from '../../../Assets/Images/galerija/17.jpg';

const Gallery = () => (
    <Carousel autoPlay infiniteLoop>
        <ImgBox>
            <img src={f1} />
        </ImgBox>
        <ImgBox>
            <img src={f2} />
        </ImgBox>
        <ImgBox>
            <img src={f3} />
        </ImgBox>
        <ImgBox>
            <img src={f4} />
        </ImgBox>
        <ImgBox>
            <img src={f5} />
        </ImgBox>
        <ImgBox>
            <img src={f6} />
        </ImgBox>
        <ImgBox>
            <img src={f7} />
        </ImgBox>
        <ImgBox>
            <img src={f8} />
        </ImgBox>
        <ImgBox>
            <img src={f9} />
        </ImgBox>
        <ImgBox>
            <img src={f10} />
        </ImgBox>
        <ImgBox>
            <img src={f11} />
        </ImgBox>
        <ImgBox>
            <img src={f12} />
        </ImgBox>
        <ImgBox>
            <img src={f13} />
        </ImgBox>
        <ImgBox>
            <img src={f14} />
        </ImgBox>
        <ImgBox>
            <img src={f15} />
        </ImgBox>
        <ImgBox>
            <img src={f16} />
        </ImgBox>
        <ImgBox>
            <img src={f17} />
        </ImgBox>
    </Carousel>
);

export default Gallery;

const ImgBox = styled.div`
    width: 100%;
    height: 100%;

    img {
        width: 500px;
        height: 500px;
        object-fit: contain;
    }

    @media (max-width: 768px) {
        img {
            width: 100%;
            height: 300px;
        }
    }
`;

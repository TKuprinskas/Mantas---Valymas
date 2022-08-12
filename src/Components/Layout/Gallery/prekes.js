import React, { Component } from 'react';
import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';
import f1 from '../../../Assets/Images/prekes/R1.jpg';
import f2 from '../../../Assets/Images/prekes/R2.jpg';
import f3 from '../../../Assets/Images/prekes/R3.jpg';
import f4 from '../../../Assets/Images/prekes/R4.jpg';
import f5 from '../../../Assets/Images/prekes/R5.jpg';
import f6 from '../../../Assets/Images/prekes/R6.jpg';

const Prekes = () => (
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
    </Carousel>
);

export default Prekes;

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

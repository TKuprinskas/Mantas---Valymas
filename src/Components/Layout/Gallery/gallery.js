import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import sanityClient from '../../../client';
import { Carousel } from 'react-responsive-carousel';

const Gallery = () => {
    const [loaded, setLoaded] = useState(false);
    const [galleryData, setData] = useState();

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "galerija"]{
                    images[] {
                    asset->{
                        _id,
                        url,
                    },
                    alt,
                },
            }`
            )
            .then((data) => {
                setData(data[0]);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!loaded) {
        return null;
    }

    return (
        <Carousel autoPlay infiniteLoop showThumbs={false}>
            {galleryData.images.map((item, i) => {
                return (
                    <ImgBox key={i}>
                        <img src={item.asset.url} alt={item.alt} />
                    </ImgBox>
                );
            })}
        </Carousel>
    );
};

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

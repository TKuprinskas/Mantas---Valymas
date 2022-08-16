import React, { Suspense, useState, useEffect } from 'react';
import sanityClient from '../../client';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Prekes from '../Layout/Gallery/prekes';
import * as S from '../../styles/styles';

const EkoPriemones = () => {
    const [loaded, setLoaded] = useState(false);
    const [pageData, setData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "prekes"]{
                    title,
                    content,
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
        return null;
    }

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>{pageData[0].title}</S.Title>
                <S.PaslaugosInfo>
                    <S.StyledBlockContent blocks={pageData[0].content} projectId="0cvz2s8c" dataset="production" />
                </S.PaslaugosInfo>
                <S.PrekiuGalerija>
                    <Prekes />
                </S.PrekiuGalerija>
            </Suspense>
        </main>
    );
};

export default EkoPriemones;

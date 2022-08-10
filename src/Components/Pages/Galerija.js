import React, { Suspense } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Gallery from '../Layout/Gallery/gallery';
import * as S from '../../styles/styles';

const Galerija = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Galerija TEST</S.Title>
                <S.Galerija>
                    <Gallery />
                </S.Galerija>
            </Suspense>
        </main>
    );
};

export default Galerija;

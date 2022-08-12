import React, { Suspense } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Prekes from '../Layout/Gallery/prekes';
import * as S from '../../styles/styles';

const EkoPriemones = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Ekologiškos Valymo Priemonės</S.Title>
                <S.PaslaugosInfo>
                    Valymas be chemijos - misija (ne)įmanoma? Atvyksime pas jus, patarsime kurios priemonės labiausiai
                    tinka jūsų namams, leisime išbandyti.
                </S.PaslaugosInfo>
                <S.PrekiuGalerija>
                    <Prekes />
                </S.PrekiuGalerija>
            </Suspense>
        </main>
    );
};

export default EkoPriemones;

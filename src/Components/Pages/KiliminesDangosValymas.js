import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const KiliminesDangosValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Kiliminės Dangos Valymas</S.Title>
                <S.PaslaugosInfo>
                    Kiliminė danga - biuro vizitinė kortelė. Stengiamės, kad jūsų klientai ir svečiai jaustųsi jaukiai,
                    neskaičiuotų dėmių ir visą dėmesį skirtų jums!
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default KiliminesDangosValymas;

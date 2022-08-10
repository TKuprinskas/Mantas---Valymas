import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const Galerija = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Galerija</S.Title>
            </Suspense>
        </main>
    );
};

export default Galerija;

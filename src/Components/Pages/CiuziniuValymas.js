import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const CiuziniuValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Čiužinių Valymas</S.Title>
                <S.PaslaugosInfo>
                    Čiužinio švara yra labai svarbi geram poilsiui ir sveikatai. Tam, kad nesapnuotumėte košmarų, ramiai
                    miegotumėte ir atsibustumėte sveiki, žvalūs bei energingi, siūlome čiūžinių valymo paslaugą!
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default CiuziniuValymas;

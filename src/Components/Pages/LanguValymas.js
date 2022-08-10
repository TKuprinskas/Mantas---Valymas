import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const LanguValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Langų Valymas</S.Title>
                <S.PaslaugosInfo>
                    Pasirūpinsime, kad daugiau šviesos ir spalvų patektų į Jūsų namus ar biurą. Išvalysime palanges,
                    langų rėmus, stiklo pertvaras ir veidrodžius!
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default LanguValymas;

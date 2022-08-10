import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const BalduValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Baldų Valymas</S.Title>
                <S.PaslaugosInfo>
                    Užsukus svečiams puolate dangstyti baldus plėduku? Atsirado nemalonus kvapas? Atliksime baldų SPA
                    procedūras Jūsų namuose ar biure.
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default BalduValymas;

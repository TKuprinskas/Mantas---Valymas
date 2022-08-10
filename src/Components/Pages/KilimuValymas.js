import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const KilimuValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Kilimų Valymas</S.Title>
                <S.PaslaugosInfo>
                    Kilimai puošia namus, bet tik tuomet, kai yra švarūs. Valome įvairių tipų kilimus. Gal jau metas
                    jais pasirūpinti?
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default KilimuValymas;

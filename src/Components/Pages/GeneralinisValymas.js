import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const GeneralinisValymas = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Generalinis Valymas</S.Title>
                <S.PaslaugosInfo>
                    Parduodant ar įsigijus būstą, po nuomininkų ar svečių apsilankymo, prieš atvykstant uošviams -
                    generalinis valymas visiems gyvenimo atvejams!
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default GeneralinisValymas;

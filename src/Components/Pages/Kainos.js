import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const Kainos = () => {
    return (
        <main style={{ borderBottom: '1px solid #59bfff' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <S.H1>Valymo Paslaugų Kainos</S.H1>
                <S.Container>
                    <S.PaslauguKainos>
                        <div>
                            <S.Paslauga>Sofos valymas</S.Paslauga>
                            <S.Paslauga>Minkšto kampo valymas</S.Paslauga>
                            <S.Paslauga>Čiužinio valymas </S.Paslauga>
                            <S.Paslauga>Antčiužinio valymas</S.Paslauga>
                            <S.Paslauga>Lovos galvūgalio valymas</S.Paslauga>
                            <S.Paslauga>Odinių baldų valymas (ir impregnavimas)</S.Paslauga>
                            <S.Paslauga>Fotelio valymas</S.Paslauga>
                            <S.Paslauga>Pufo valymas</S.Paslauga>
                            <S.Paslauga>Kėdės valymas</S.Paslauga>
                            <S.Paslauga>Kilimo valymas</S.Paslauga>
                            <S.Paslauga>Kiliminės dangos valymas</S.Paslauga>
                            <S.Paslauga>Langų valymas</S.Paslauga>
                            <S.Paslauga>Generalinis valymas</S.Paslauga>
                        </div>
                        <div>
                            <S.Kaina>30 - 50 Eur</S.Kaina>
                            <S.Kaina>50 - 80 Eur</S.Kaina>
                            <S.Kaina>20 - 60 Eur</S.Kaina>
                            <S.Kaina>15 - 30 Eur</S.Kaina>
                            <S.Kaina>20 - 30 Eur</S.Kaina>
                            <S.Kaina>50 - 100 Eur</S.Kaina>
                            <S.Kaina>15 - 20 Eur</S.Kaina>
                            <S.Kaina>10 - 15 Eur</S.Kaina>
                            <S.Kaina>5 - 10 Eur</S.Kaina>
                            <S.Kaina>
                                5 - 7 Eur/m<span>2</span>
                            </S.Kaina>
                            <S.Kaina>
                                3 - 5 Eur/m<span>2</span>
                            </S.Kaina>
                            <S.Kaina>
                                1 - 2 Eur/m<span>2</span>
                            </S.Kaina>
                            <S.Kaina>
                                1.5 - 2.5 Eur/m<span>2</span>
                            </S.Kaina>
                        </div>
                    </S.PaslauguKainos>
                    <S.Note>*Kaina gali kisti dėl užterštumo lygio.</S.Note>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Kainos;

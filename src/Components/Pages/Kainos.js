import React, { Suspense, useState, useEffect } from 'react';
import sanityClient from '../../client';
import * as S from '../../styles/styles';

const Kainos = () => {
    const [loaded, setLoaded] = useState(false);
    const [kainosData, setData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "kainos"]{
                title,
                price,
                priceType,
            }`
            )
            .then((data) => {
                setData(data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    return (
        <main style={{ borderBottom: '1px solid #59bfff' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <S.H1>Valymo Paslaugų Kainos</S.H1>
                <S.Container>
                    <S.PaslauguKainos>
                        <div>
                            {kainosData.map(({ title }, i) => (
                                <S.Paslauga key={i}>{title}</S.Paslauga>
                            ))}
                        </div>
                        <div>
                            {kainosData.map(({ price, priceType }, j) => (
                                <S.Kaina key={j}>
                                    {price}
                                    {priceType === 'taip' ? '/m' : ''}
                                    <span>{priceType === 'taip' ? 2 : ''}</span>
                                </S.Kaina>
                            ))}
                        </div>
                    </S.PaslauguKainos>
                    <S.Note>*Kaina gali kisti dėl užterštumo lygio.</S.Note>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Kainos;

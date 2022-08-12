import React, { Suspense } from 'react';
import * as S from '../../styles/styles';

const Kontaktai = () => {
    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Mūsų Kontaktai</S.Title>
                <S.Container>
                    <S.KontaktaiText>
                        Jeigu negalite rasti paslaugos, kurios norite, arba jeigu turite klausimų, prašome susisiekti su
                        mumis ir mes mielai atsakysime į visus Jūsų klausimus, ir tikrai rasime sprendimą tenkinantį
                        Jūsų poreikius.
                    </S.KontaktaiText>
                    <S.Kontaktai>
                        <S.KontaktaiText>Mus galite rasti socialiniuose tinkluose:</S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href="https://www.facebook.com/">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href="https://www.instagram.com/">
                                <i className="fab fa-instagram-square" />
                            </a>
                            <a href="https://www.youtube.com/">
                                <i className="fab fa-youtube" />
                            </a>
                        </S.KontaktaiText>
                    </S.Kontaktai>
                    <S.Kontaktai>
                        <S.KontaktaiText>Mus galite pasiekti telefonu:</S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href="tel:+37066444444">+370 600 34478</a>
                        </S.KontaktaiText>
                    </S.Kontaktai>
                    <S.Kontaktai>
                        <S.KontaktaiText>Arba el.paštu:</S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href="mailto:svariusvalymopaslaugos@gmail.com">labas@svarius.lt</a>
                        </S.KontaktaiText>
                    </S.Kontaktai>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Kontaktai;

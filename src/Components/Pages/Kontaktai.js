import React, { Suspense, useState, useEffect } from 'react';
import sanityClient from '../../client';
import * as S from '../../styles/styles';

const Kontaktai = () => {
    const [loaded, setLoaded] = useState(false);
    const [pageData, setData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "kontaktai"]{
                    title,
                    content,
                    social,
                    telemail
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
        return null;
    }

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>{pageData[0].title}</S.Title>
                <S.Container>
                    <S.KontaktaiText>
                        <S.StyledBlockContent blocks={pageData[0].content} projectId="0cvz2s8c" dataset="production" />
                    </S.KontaktaiText>
                    <S.Kontaktai>
                        <S.KontaktaiText>{pageData[0].social.tekstas}</S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href={pageData[0].social.facebook} target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-facebook" />
                            </a>
                            <a href={pageData[0].social.instagram} target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-instagram-square" />
                            </a>
                            <a href={pageData[0].social.youtube} target="_blank" rel="noreferrer noopener">
                                <i className="fab fa-youtube" />
                            </a>
                        </S.KontaktaiText>
                    </S.Kontaktai>
                    <S.Kontaktai>
                        <S.KontaktaiText>{pageData[0].telemail.tekstas}</S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href={'tel:' + pageData[0].telemail.telefonas}>{pageData[0].telemail.telefonas}</a>
                        </S.KontaktaiText>
                        <S.KontaktaiText>
                            <a href={'mailto:' + pageData[0].telemail.email}>labas@svarius.lt</a>
                        </S.KontaktaiText>
                    </S.Kontaktai>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Kontaktai;

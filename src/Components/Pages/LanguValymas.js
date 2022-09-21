import React, { Suspense, useState, useEffect } from 'react';
import sanityClient from '../../client';
import * as S from '../../styles/styles';

const LanguValymas = () => {
    const [loaded, setLoaded] = useState(false);
    const [pageData, setData] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "puslapiai"]{
                    title,
                    content,
                    link,
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

    const filteredData = pageData.filter((item) => item.link === 'langu valymas');

    return (
        <main>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>{filteredData[0].title}</S.Title>
                <S.PaslaugosInfo>
                    <S.StyledBlockContent blocks={filteredData[0].content} projectId="0cvz2s8c" dataset="production" />
                </S.PaslaugosInfo>
            </Suspense>
        </main>
    );
};

export default LanguValymas;

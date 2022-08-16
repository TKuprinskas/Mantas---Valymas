import React, { Suspense, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import sanityClient from '../../client';
import * as S from '../../styles/styles';

const Home = () => {
    const [loaded, setLoaded] = useState(false);
    const [paslaugosData, setData] = useState([]);
    const [youtube, setYoutube] = useState([]);

    useEffect(() => {
        sanityClient
            .fetch(
                `*[_type == "paslaugos"]{
                    paslauga,
                    image {
                        asset->{
                            _id,
                            url,
                        },
                    },
                    link,
                }`
            )
            .then((data) => {
                setData(data);
            })
            .catch((err) => {
                console.log(err);
            });
        sanityClient
            .fetch(
                `*[_type == "youtube"]{
                    title,
                    link,
                }`
            )
            .then((data) => {
                setYoutube(data);
                setLoaded(true);
            })
            .catch((err) => {
                console.log(err);
            });
    }, []);

    if (!loaded) {
        return <div>Loading...</div>;
    }

    const filteredYoutube = youtube ? youtube.filter((item) => item.title === 'Home') : [];

    return (
        <main style={{ borderBottom: '1px solid #59bfff' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Apie mus</S.Title>
                <S.H5>Mes mylime švarą! Kviečiame susipažinti!</S.H5>
                <S.Container>
                    <S.Paslaugos>
                        {paslaugosData.map((item, i) => (
                            <S.PaslaugosBox key={i}>
                                <Link to={'/' + item.link}>
                                    <S.PaslaugosImg src={item.image.asset.url} />
                                    <S.PaslaugosTitle>{item.paslauga}</S.PaslaugosTitle>
                                </Link>
                            </S.PaslaugosBox>
                        ))}
                    </S.Paslaugos>
                    <S.YoutubeVideo>
                        <iframe
                            title="youtube"
                            width="560"
                            height="315"
                            src={
                                'https://www.youtube.com/embed/' +
                                filteredYoutube[0].link +
                                '?autoplay=1&mute=1&enablejsapi=1'
                            }
                            frameBorder="0"
                            allow="accelerometer; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </S.YoutubeVideo>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Home;

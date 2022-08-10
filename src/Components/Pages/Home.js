import React, { Suspense } from 'react';
import * as S from '../../styles/styles';
import baldai from '../../Assets/Images/furniture.jpg';
import kilimai from '../../Assets/Images/carpet.jpg';
import ciuziniai from '../../Assets/Images/mattress.jpg';
import langai from '../../Assets/Images/glass.jpg';
import generalinis from '../../Assets/Images/general.jpg';

const Home = () => {
    return (
        <main style={{ borderBottom: '1px solid #59bfff' }}>
            <Suspense fallback={<div>Loading...</div>}>
                <S.Title>Apie Mus</S.Title>
                <S.H5>Mes mylime švarą! Kviečiame susipažinti!</S.H5>
                <S.Container>
                    <S.Paslaugos>
                        <S.PaslaugosBox>
                            <S.PaslaugosImg src={baldai} />
                            <S.PaslaugosTitle>Baldų Valymas</S.PaslaugosTitle>
                        </S.PaslaugosBox>
                        <S.PaslaugosBox>
                            <S.PaslaugosImg src={ciuziniai} />
                            <S.PaslaugosTitle>Čiužinių Valymas</S.PaslaugosTitle>
                        </S.PaslaugosBox>
                        <S.PaslaugosBox>
                            <S.PaslaugosImg src={kilimai} />
                            <S.PaslaugosTitle>Kilimų Valymas</S.PaslaugosTitle>
                        </S.PaslaugosBox>
                        <S.PaslaugosBox>
                            <S.PaslaugosImg src={langai} />
                            <S.PaslaugosTitle>Langų Valymas</S.PaslaugosTitle>
                        </S.PaslaugosBox>
                        <S.PaslaugosBox>
                            <S.PaslaugosImg src={generalinis} />
                            <S.PaslaugosTitle>Generalinis Valymas</S.PaslaugosTitle>
                        </S.PaslaugosBox>
                    </S.Paslaugos>
                    <S.YoutubeVideo>
                        <iframe
                            title="youtube"
                            width="560"
                            height="315"
                            src="https://www.youtube.com/embed/oVgBuSglSy0"
                            frameBorder="0"
                            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </S.YoutubeVideo>
                </S.Container>
            </Suspense>
        </main>
    );
};

export default Home;

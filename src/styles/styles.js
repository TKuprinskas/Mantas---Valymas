import styled from 'styled-components';

export const H1 = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #59bfff;
    margin-bottom: 1rem;
    text-align: center;
`;

export const H5 = styled.h5`
    font-size: 1.1rem;
    font-weight: bold;
    color: #59bfff;
    margin-bottom: 1rem;
    text-align: center;
`;

export const Container = styled.div`
    display: flex;
    flex-direction: column;
`;

export const PaslauguKainos = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 50%;
    margin: 0 auto 1rem auto;

    //phone screen
    @media (max-width: 479px) {
        width: 80%;
    }

    //large mobile
    @media (min-width: 480px) and (max-width: 768px) {
        width: 65%;
    }

    //ipad view
    @media (min-width: 769px) and (max-width: 1024px) {
        width: 55%;
    }
`;

export const Paslauga = styled.div`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    padding: 5px;

    @media (max-width: 340px) {
        font-size: 12px;
        height: 40px;
        width: 100px;
    }

    @media (min-width: 341px) and (max-width: 479px) {
        font-size: 12px;
        height: 40px;
        width: 120px;
    }

    @media (min-width: 480px) and (max-width: 768px) {
        font-size: 15px;
        height: 60px;
        width: 160px;
    }

    // ipad viewport
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 15px;
        height: 60px;
        width: 160px;
    }
`;

export const Kaina = styled.div`
    font-size: 18px;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 5px;

    span {
        vertical-align: super;
        font-size: 10px;
    }

    @media (max-width: 340px) {
        font-size: 12px;
        height: 40px;
    }

    @media (min-width: 341px) and (max-width: 479px) {
        font-size: 12px;
        height: 40px;
    }

    @media (min-width: 480px) and (max-width: 768px) {
        font-size: 15px;
        height: 60px;
    }

    // ipad viewport
    @media (min-width: 769px) and (max-width: 1024px) {
        font-size: 15px;
        height: 60px;
    }
`;

export const Note = styled.div`
    text-align: center;
    font-size: 0.8rem;
    font-family: 'Roboto', sans-serif;
    margin-bottom: 1rem;
`;

export const Paslaugos = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin: 0 auto 1rem auto;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PaslaugosBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 5 - 0.5rem);
    margin: 1rem 0;
    position: relative;
    text-align: center;

    a {
        text-decoration: none;
        color: white;
    }

    @media (max-width: 768px) {
        width: 100%;
        margin: 0.5rem 0;
    }
`;

export const PaslaugosImg = styled.img`
    width: 300px;
    height: 140px;
    border-radius: 5px;
    opacity: 0.8;
`;

export const PaslaugosTitle = styled.div`
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 5px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 100%;
    max-width: 300px;
    background-color: rgba(0, 0, 0, 0.2);

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const YoutubeVideo = styled.div`
    width: 100%;
    overflow: hidden;
    padding-bottom: 56.25%;
    position: relative;
    height: 0;

    iframe {
        left: 0;
        top: 0;
        height: 100%;
        width: 100%;
        position: absolute;
    }
`;

export const Title = styled.h1`
    font-size: 2.5rem;
    font-weight: bold;
    color: #59bfff;
    padding-bottom: 1rem;
    border-bottom: 1px solid #59bfff;

    @media (max-width: 768px) {
        font-size: 1.5rem;
    }
`;

export const PaslaugosInfo = styled.div`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Kontaktai = styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
        margin-top: 1rem;
    }
`;

export const KontaktaiText = styled.div`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    margin: 0.5rem 0;

    a {
        margin-left: 1rem;
    }

    i {
        font-size: 2rem;
        color: #59bfff;
    }

    i:hover {
        color: #ccc;
    }

    @media (max-width: 768px) {
        margin: 0.5rem 0 0 0;
        text-align: justify;
    }
`;

export const Galerija = styled.div`
    margin: 0 auto;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const PrekiuGalerija = styled.div`
    margin: 4rem auto 0 auto;
    width: 50%;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

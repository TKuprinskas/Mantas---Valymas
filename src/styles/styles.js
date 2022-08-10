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
    width: 30%;
    margin: 0 auto 1rem auto;

    @media (max-width: 768px) {
        width: 100%;
    }
`;

export const Paslauga = styled.div`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    padding: 5px;

    @media (max-width: 768px) {
        font-size: 1rem;
        height: 50px;
        width: 200px;
    }
`;

export const Kaina = styled.div`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 5px;

    @media (max-width: 768px) {
        font-size: 1rem;
        height: 50px;
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
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    width: 100%;

    @media (max-width: 768px) {
        flex-direction: column;
    }
`;

export const PaslaugosBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: calc(100% / 3 - 3rem);
    margin: 1rem;

    @media (max-width: 768px) {
        width: 100%;
        margin: 0.5rem 0;
    }
`;

export const PaslaugosImg = styled.img`
    width: 300px;
    height: 140px;
    border-radius: 5px;
`;

export const PaslaugosTitle = styled.div`
    font-size: 1.2rem;
    font-family: 'Roboto', sans-serif;
    font-weight: bold;
    padding: 5px;
    color: #59bfff;
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

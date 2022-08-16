import React, { Suspense } from 'react';
import { Routes, Route } from 'react-router-dom';
import ReactGA from 'react-ga';
import './App.css';
import Navbarmenu from './Components/Layout/Header/Navbarmenu';
import Hero from './Components/Layout/Hero/Hero';
import Home from './Components/Pages/Home';
import EkoPriemones from './Components/Pages/EkoPriemones';
import Kontaktai from './Components/Pages/Kontaktai';
import BalduValymas from './Components/Pages/BalduValymas';
import Galerija from './Components/Pages/Galerija';
import Kainos from './Components/Pages/Kainos';
import Container from './Components/Utils/Container';
import Footer from './Components/Layout/Footer/Footer';
import LanguValymas from './Components/Pages/LanguValymas';
import KiliminesDangosValymas from './Components/Pages/KiliminesDangosValymas';
import KilimuValymas from './Components/Pages/KilimuValymas';
import GeneralinisValymas from './Components/Pages/GeneralinisValymas';
import CiuziniuValymas from './Components/Pages/CiuziniuValymas';

const TRACKING_ID = 'UA-213425407-1';
ReactGA.initialize(TRACKING_ID);

function App() {
    useEffect(() => {
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, []);

    return (
        <div className="App">
            <Suspense fallback={<div>Loading...</div>}>
                <Navbarmenu />
                <Hero />
                <Container>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/kainos" element={<Kainos />} />
                        <Route path="/kontaktai" element={<Kontaktai />} />
                        <Route path="/balduvalymas" element={<BalduValymas />} />
                        <Route path="/galerija" element={<Galerija />} />
                        <Route path="/ekologisvalymopriemones" element={<EkoPriemones />} />
                        <Route path="/languvalymas" element={<LanguValymas />} />
                        <Route path="/kiliminesdangosvalymas" element={<KiliminesDangosValymas />} />
                        <Route path="/kilimuvalymas" element={<KilimuValymas />} />
                        <Route path="/generalinisvalymas" element={<GeneralinisValymas />} />
                        <Route path="/ciuziniuvalymas" element={<CiuziniuValymas />} />
                    </Routes>
                </Container>
                <Footer />
            </Suspense>
        </div>
    );
}

export default App;

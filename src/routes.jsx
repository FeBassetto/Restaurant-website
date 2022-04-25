import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SaltyProvider } from './common/context/salty';
import { SnackProvider } from './common/context/snacks';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';

const Routing = () => {


    return (
        <Router>
            <Header />
            <SnackProvider>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
                <SaltyProvider>
                    <Routes>
                        <Route path='/nossomenu' element={<OurMenu />} />
                    </Routes>
                </SaltyProvider>
            </SnackProvider>
            <Footer />
        </Router>
    )
}

export default Routing
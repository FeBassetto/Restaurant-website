import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SaltyProvider } from './common/context/salty';
import { SnackProvider } from './common/context/snacks';
import { SweetProvider } from './common/context/sweet';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';
import OurMenu from './pages/OurMenu';
import Page404 from './pages/Page404';

const Routing = () => {


    return (
        <Router>
            <Header />

            <SnackProvider>
                <SaltyProvider>
                    <SweetProvider>
                        <Routes>
                            <Route exact path='/' element={<Home />} />
                            <Route path='/nossomenu' element={<OurMenu />} />
                            
                            <Route path='*' element={<Page404/>} />
                        </Routes>
                    </SweetProvider>
                </SaltyProvider>
            </SnackProvider>
            <Footer />
        </Router>
    )
}

export default Routing
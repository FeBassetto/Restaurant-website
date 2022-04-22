import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { SnackProvider } from './common/context/snacks';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Home from './pages/Home';

const Routing = () => {


    return (
        <Router>
            <Header />
            <SnackProvider>
                <Routes>
                    <Route exact path='/' element={<Home />} />
                </Routes>
            </SnackProvider>
            <Footer/>
        </Router>
    )
}

export default Routing
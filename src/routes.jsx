import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header/Header';
import Home from './pages/Home';

const Routing = () => {


    return (
        <Router>
            <Header />
            <Routes>
                <Route exact path='/' element={<Home />} />
            </Routes>
        </Router>
    )
}

export default Routing
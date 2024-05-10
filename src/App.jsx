import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import './App.css';
import Navbar from './components/Navbar';

function App() {



    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Dictionary />} />
            </Routes>
        </Router>
    );
}

export default App;

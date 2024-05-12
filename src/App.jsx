import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Dictionary from './pages/Dictionary';
import './App.css';
import Navbar from './components/Navbar';
import WordForm from './pages/WordForm';
import Home from './pages/Home';

function App() {



    return (
        <Router>
            <Navbar/>
            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/dictionary" element={<Dictionary />} />
                <Route path="/dictionarycontribute" element={<WordForm/>} />
            </Routes>
        </Router>
    );
}

export default App;

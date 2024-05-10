import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
function Navbar() {
    useEffect(() => {
        // Initialize Bootstrap components after the component mounts
        const toggleButton = document.querySelector('.navbar-toggler');
        const navbarCollapse = document.querySelector('.navbar-collapse');

        const handleToggleClick = () => {
            navbarCollapse.classList.toggle('show');
        };

        toggleButton.addEventListener('click', handleToggleClick);

        return () => {
            // Clean up event listeners when the component unmounts
            toggleButton.removeEventListener('click', handleToggleClick);
        };
    }, []);
  return (
      <nav className="navbar navbar-expand-lg navbar-dark">
          <div className="container">
              <Link className="navbar-brand" to="/">Ilonggo Gid</Link>
              <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                  <span className="navbar-toggler-icon"></span>
              </button>

              <div className="collapse navbar-collapse" id="navbarSupportedContent">
                  <ul className="navbar-nav mr-auto">
                      <li className="nav-item">
                          <Link className="nav-link" to="/">Dictionary</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/grammar">Grammar</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/grammar">Archives</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/messages">Messages</Link>
                      </li>
                      <li className="nav-item">
                          <Link className="nav-link" to="/about">About</Link>
                      </li>
                  </ul>
              </div>
          </div>
      </nav>
  );
}

export default Navbar;
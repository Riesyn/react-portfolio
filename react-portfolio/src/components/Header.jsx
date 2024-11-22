import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => (
    <header className="bg-dark text-white py-3">
        <div className="container">
            <h1 className="mb-0">Robby Henderson</h1>
            <nav>
                <ul className="nav">
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/">About Me</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/portfolio">Portfolio</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/contact">Contact</Link>
                    </li>
                    <li className="nav-item">
                        <Link className="nav-link text-white" to="/resume">Resume</Link>
                    </li>
                </ul>
            </nav>
        </div>
    </header>
);

export default Header;

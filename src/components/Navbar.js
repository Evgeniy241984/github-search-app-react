import React from 'react';
import {NavLink} from 'react-router-dom';
import './Navbar.scss'
import logo from '../logo.jpg';

export const Navbar = () => (
    <nav className="navigation">
        <div>
            <img src={logo} className="navigation__logo" alt="Github search logo" />
        </div>
        <ul className="navigation__link-section">
            <li>
                <NavLink 
                    className=""
                    to="/"
                >
                    Home
                </NavLink>
            </li>
            <li>
            <NavLink 
                    className=""
                    to="/about"
                >
                    About
                </NavLink>
            </li>
        </ul>

    </nav>
)
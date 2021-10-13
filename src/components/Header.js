import React from 'react';
import {NavLink} from 'react-router-dom';
import './Header.scss';
import { VscGithub } from 'react-icons/vsc'

export const Header = () => (
    <div className="header">
        <div className="header__logo">
            <NavLink 
                    className="navbar__link"
                    to="/github-search-app-react"
                >
                <VscGithub className="header__logo_main" />
            </NavLink>         
        </div>
       
        <nav className="navbar"> 
            <ul className="navbar__list">
                <li>
                <NavLink 
                        className="navbar__link"
                        to="/about"
                    >
                        About
                </NavLink>
                </li>
            </ul>

        </nav>
    </div> 
)
import React from 'react';
import {NavLink} from 'react-router-dom';
import './SplashScreen.scss';

export const SplashScreen = () => (
    <div className="splashscreen">
        <h1 className="splashscreen_title">
            Hello, Friend! 
        </h1>
        <h2 className="splashscreen_subtitle">
        Click the button to start searching for GitHub repositories.
        </h2>
        <NavLink 
                    className="splashscreen_button"
                    to="/main-search"
                >
                    Start Search
        </NavLink>  
    </div>
)
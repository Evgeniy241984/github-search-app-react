import React from 'react';
import {NavLink} from 'react-router-dom';
import './SplashScreen.scss';

export const SplashScreen = () => (
    <div className="splashscreen">
        <h2>
            Hello, Friend! 
        </h2>
        <h3>
        Click the button to start searching for GitHub repositories.
        </h3>
        <NavLink 
                    className="splashscreen_button"
                    to="/main-search"
                >
                    Start Search
        </NavLink>  
    </div>
)
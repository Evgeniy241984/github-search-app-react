import React from 'react';
import {NavLink} from 'react-router-dom';

export const SplashScreen = () => (
    <div className="splashscreen">
        <NavLink 
                    className=""
                    to="/main-search"
                >
                    Start Search
        </NavLink>  
    </div>
)
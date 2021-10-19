import React from 'react';
import './About.scss';

export const About = () => {
     return (
        <div className="about-page">
            <h2 className="about__title">
                Web application, which lists GitHub repositories by search term.
            </h2>
            <p className="about__text">
                GitHub repo:&nbsp; 
                <a href="https://github.com/Evgeniy241984/github-search-app-react" target="_blank" rel="noreferrer"> 
                    github-search-app-react 
                </a>
            </p>
            <p className="about__text">
                Used API:&nbsp;
                <a href="https://api.github.com" target="_blank" rel="noreferrer">
                    https://api.github.com 
                </a>
            </p>
            <p className="about__text">Features: </p>
            <ol className="featuresList" type="1">
                <li className="featuresList__item">
                    <p>The project was developed as a single page application on React</p>
                </li>
                <li className="featuresList__item">
                    <p>Has Redux State management</p>
                </li>
                <li className="featuresList__item">
                    <p>Used SCSS and responsive styles</p>
                    <p>(TODO: @mixins, variables, responsive design)</p>
                </li>
                <li className="featuresList__item">
                    <p>Search has debounce input 500 ms</p>
                </li>
                <li className="featuresList__item">
                    <p>
                        Previous requests are shown in the history module (status: in development)
                    </p> 
                    <p>
                        History should be available after reloading the page or mobile application <br/> 
                            (will implement using Local Storage)
                    </p>    
                </li>
            </ol>
        </div>
    )
}
 
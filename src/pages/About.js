import React from 'react';

export const About = () => {
     return (
        <>
            <h3>Web application, which lists GitHub repositories by search term.</h3>
            <p>GitHub repo: <a href="https://github.com/Evgeniy241984/github-search-app-react" target="_blank" rel="noreferrer"> Github-search-app-react </a></p>
            <p>Used API: <a href="https://api.github.com" target="_blank" rel="noreferrer">https://api.github.com </a></p>
            <p>Features: </p>
            <ol>
                <li>
                    <p>The project was developed as a single page application on React</p>
                </li>
                <li>
                    <p>Has Redux State management</p>
                </li>
                <li>
                    <p>Used SCSS and responsive styles</p>
                </li>
                <li>
                    <p>Search has debounce input 500 ms</p>
                </li>

            </ol>
        </>
    )
}
 
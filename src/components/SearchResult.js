import React from 'react';
import { useSelector } from 'react-redux';
import { getDateTimeFromUTC } from '../utils'
import { RiGitRepositoryLine } from 'react-icons/ri';
import { IoStarOutline } from 'react-icons/io5';
import './SearchResult.scss';

export const SearchResult = () => {
    const repositories = useSelector((state) => state.allGitHubRepos.repositories);
    console.log(repositories);
    const repositoriesList = repositories.map((repo) => {
        const {id, html_url, full_name, owner, topics, watchers, license, pushed_at} = repo;

        const updateTime = getDateTimeFromUTC(pushed_at);

        const topicsList = topics.map((topic, key) => {

            return (
                <a key={key} href={`https://github.com/topics/${topic}`} className="search-item__topic">{topic}</a>
            )
        })

        return (
            <li className="search-result__item" key={id}>
                    <div className="search-item__icon">
                        <RiGitRepositoryLine className="search-item__icon_repo"/>
                    </div>
                    <div className="search-item__description">
                        <div >
                            <a className="search-item__repo-name" href={html_url}>{full_name}</a>   
                        </div>

                        <p className="search-item__owner">
                            <img className="search-item__owner_img" src={owner.avatar_url} alt={owner.login} />
                            <strong>{owner.login}</strong> 
                        </p>
                        <div className="search-item__topicList">
                            {topicsList}
                        </div>
                        <div className="search-item__meta">
                            <div className="meta__stargazers">
                                <IoStarOutline className="meta__stargazers_icon"/>
                                {watchers}
                            </div>
                            <div className="meta__license">
                                {license == null ? 
                                    'No license' : license.name}
                            </div>
                            <div className="meta__last-update">  
                                <span>    
                                    Updated on {" "} 
                                </span> 
                                <time dateTime={pushed_at}>
                                    {updateTime}
                                </time> 
                            </div>
                        </div>
                    </div> 
            </li>           
        )
    })

    return (
        <ul> 
            {repositoriesList}
        </ul>  
    )

}


import React from 'react';
import { useSelector } from 'react-redux';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { IoLocationOutline } from "react-icons/io5";
import './SearchResult.scss';

export const SearchResult = () => {
    const repositories = useSelector((state) => state.allGitHubRepos.repositories);
    const repositoriesList = repositories.map((repo) => {
        const {id, html_url, full_name} = repo;
        return (
            <li className="search-result__item" key={id}>
                    <div>
                        <RiGitRepositoryLine />
                    </div>
                    <div>
                        <a href={html_url}>{full_name}</a>   
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
                    <div>
                    </div>
            </li>           
        )
    })
    return (
        <div> 
        <ul> 
            <>
              {repositoriesList}
            </> 
        </ul> 
            <section>
                <ul> 
                       {/*  <li>
                            <a href={organization.html_url}>{organization.name}</a>
                        </li> 
                        <li>
                            {!organization.avatar_url ? "" : (
                            <img src={organization.avatar_url} alt={organization.name} />
                            )}
                        </li>
                        <li>
                            {organization.description}
                        </li>   
                        <li>     
                            {organization.location}
                        </li> */}
                </ul>    
            </section>
            
        </div>
    )

}


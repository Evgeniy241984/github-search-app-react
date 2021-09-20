import React from 'react';
import { useSelector } from 'react-redux';
import { RiGitRepositoryLine } from 'react-icons/ri';
import { IoLocationOutline } from "react-icons/io5";

export const Results = () => {
        const repositories = useSelector((state) => state.items)
    return (
        <>  
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
            <section>
                 <ul>{repositories.map(repo => (  
                                <li key={repo.id}>
                                    <ul>
                                        <li>
                                            <RiGitRepositoryLine />
                                        </li>
                                        <li>
                                            <a href={repo.html_url}>{repo.full_name}</a>   
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                        </li>
                                        <li>
                                        </li>
                                    </ul>
                                </li>
                        ))
                    } 
                </ul>                     
            </section>
        </>
    )

}


import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrgData } from '../data/gitHubAPI';
import fetchRepositories from '../data/gitHubAPI';
import { useDebounce } from '../customHooks';
import {setRepositories} from '../redux/actions/reposAction';
import { Results } from './Results';



export const SearchForm = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const debouncedSearchTerm = useDebounce(searchPhrase, 500);
    const repositories = useSelector((state) => state.allGitHubRepos.repositories);
    const dispatch = useDispatch();
    

      useEffect(
        () => {  
          if (debouncedSearchTerm !== '') {  
            const response = fetchRepositories(debouncedSearchTerm);
            dispatch(setRepositories(response))
          }  
        },
        [debouncedSearchTerm]
      );

      console.log(repositories);

     
      
    return (
      <>
          <form className="search-form"> 
              <div className="search-form__group">
                  <input 
                      type="text"
                      className="search-form__input"
                      placeholder="GitHub organizations"
                      value={searchPhrase}
                      onChange={(e) => setSearchPhrase(e.target.value)}
                  />
              </div>
              <div>
                {isSearching && <div>Searching ...</div>}
              </div>
          </form>  
          
      </>         
    )
}
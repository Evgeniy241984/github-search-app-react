import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrgData } from '../data/gitHubAPI';
import fetchRepositories from '../data/gitHubAPI';
import { useDebounce } from '../customHooks';
import {setRepositories} from '../redux/actions/reposAction';
import { Results } from './Results';



export const SearchForm = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
   /*  const [repositories, setRepositories] = useState(''); */
    const [isSearching, setIsSearching] = useState(false);
    const repositories = useSelector((state) => state.allGitHubRepos.repositories);
    const dispatch = useDispatch();

    const debouncedGetResponse = useCallback(
      useDebounce( 
      value => fetchRepositories(value), 500),
      []
    );

    const getResponse = async param => {
      const result = await fetchRepositories(param);
      
      if (result) {
        setRepositories(result.items)
        console.log(result.items)
      }
    }

    useEffect(() => {  
        getResponse('');
      },[]
    );

    const handleInputChange = (event) => {
      const value = event.target.value;

      dispatch(setSearchPhrase(value))
      debouncedGetResponse(value);     
    }

    return (
      <>
          <form className="search-form"> 
              <div className="search-form__group">
                  <input 
                      type="text"
                      className="search-form__input"
                      placeholder="GitHub organizations"
                      value={searchPhrase}
                      onChange={handleInputChange}
                  />
              </div>
              <div>
                {isSearching && <div>Searching ...</div>}
              </div>
          </form>  
          
      </>         
    )
}
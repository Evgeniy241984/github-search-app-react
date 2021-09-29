import React, {useState, useEffect, useCallback} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loadOrgData } from '../data/gitHubAPI';
import fetchRepositories from '../data/gitHubAPI';
import { useDebounce } from '../customHooks';
import {setRepositories} from '../redux/actions/reposAction';
import { Results } from './Results';



export const SearchForm = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const [isSearching, setIsSearching] = useState(false);
    const repositories = useSelector((state) => state.allGitHubRepos.repositories);
    const dispatch = useDispatch();

    console.log("Start SearchFrom")

    const debouncedValue = useDebounce( searchPhrase, 5000);
    
    const getResponse = async param => {
      const result = await fetchRepositories(param);  
      dispatch(setRepositories(result.items));
      console.log("GetResponse result -> " + result.items)
    }

    useEffect(() => {
      console.log("UseEffect function started")
        if (debouncedValue) {
          console.log("useEffect -> getREsponse started")
          getResponse(debouncedValue);
        }  
      },[debouncedValue]
    );

    const handleInputChange = (event) => {
      const value = event.target.value;

      setSearchPhrase(value) 
    }

    console.log("SearchForm End");
    console.log(repositories)

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
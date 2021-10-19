import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRepositories from '../data/gitHubAPI';
import { useDebounce } from '../customHooks';
import {setIsFetching, setRepositories, setNothingWasFound} from '../redux/actions/reposAction';
import { SearchResult } from './SearchResult';
import './SearchForm.scss'


export const SearchForm = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const isFetching = useSelector(state => state.allGitHubRepos.isFetching);
    const nothingWasFound = useSelector(state => state.allGitHubRepos.nothingWasFound);
    const dispatch = useDispatch();

    const debouncedValue = useDebounce( searchPhrase, 500);
    
    useEffect(() => {

      const getResponse = async param => {
        dispatch(setIsFetching(true));
        const result = await fetchRepositories(param);
        if (result.total_count !== 0) {
          dispatch(setRepositories(result.items));
        } 
        else {
          dispatch(setNothingWasFound(true))
          dispatch(setIsFetching(false))
        }
      }

        if (debouncedValue) {
          getResponse(debouncedValue);
        }  
      },[dispatch, debouncedValue]
    );

    const handleInputChange = (event) => {
      const value = event.target.value;

      setSearchPhrase(value) 
    }

    const preventEnterKeyDown = (event) => {
      if(event.keyCode === 13) {
        event.preventDefault(); 
      }
    }

    return (
      <>
        <div className="search-container">
            <form className="search-form"> 
                    <input 
                        type="text"
                        className="search-form__input"
                        placeholder="Search repositories"
                        value={searchPhrase}
                        onChange={handleInputChange}
                        onKeyDown={preventEnterKeyDown}
                    />
            </form>
        </div> 
        <div className="search-result">
          {isFetching === true
            ? 
               <div className="search-result__isFetching">Searching...</div>
            :
              nothingWasFound === true
            ?
              <p className="search-result__nothingFound"> 
                  Nothing was found, please make sure that the entered request is correct. 
              </p>
            :
              <SearchResult />
          }
        </div> 
      </>       
    )
}
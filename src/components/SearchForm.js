import React, {useState, useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import fetchRepositories from '../data/gitHubAPI';
import { useDebounce } from '../customHooks';
import {setIsFetching, setRepositories} from '../redux/actions/reposAction';
import { SearchResult } from './SearchResult';
import './SearchForm.scss'


export const SearchForm = () => {
    const [searchPhrase, setSearchPhrase] = useState('');
    const isFetching = useSelector(state => state.allGitHubRepos.isFetching); 
    const dispatch = useDispatch();

    const debouncedValue = useDebounce( searchPhrase, 500);
    
    useEffect(() => {

      const getResponse = async param => {
        dispatch(setIsFetching(true));
        const result = await fetchRepositories(param);
        dispatch(setRepositories(result.items));
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

    return (
      <>
        <div className="main-search">
            <form className="search-form"> 
                    <input 
                        type="text"
                        className="search-form__input"
                        placeholder="Search repositories"
                        value={searchPhrase}
                        onChange={handleInputChange}
                    />
            </form>
        </div> 
        <div className="search-result">
          {isFetching === true
              ? 
                <div className="search-form__fetching">Searching...</div>
              :
                <SearchResult />
            }
        
      </div> 
    </>       
    )
}
import React, {useReducer} from 'react'
import GithubContext from './GithubContext'
import GithubReducer from './GithubReducer'
import axios from 'axios'

import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SET_USER,
    SET_REPOS
} from '../types'


const GithubState = props => {
    const initialState = {
        users: [],
        repos: [],
        user: {},
        loading: false
    }
    
    const [state, dispatch] = useReducer(GithubReducer, initialState);

    //SEARCH_USERS
    const searchUsers = async (text) => {

        setLoading();

        const res = await axios.get(`https://api.github.com/search/users?q=${text}&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        
        return dispatch({type:SEARCH_USERS, payload: res.data});

    }

    //CLEAR_USERS
    const clearUsers = () => dispatch({type: CLEAR_USERS});

    const setLoading = () => {
        return dispatch({type: SET_LOADING})
    }

    //SET_USER
    const getUser = async username => {
        setLoading()

        const res = await axios.get(`https://api.github.com/users/${username}?client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        return dispatch({type:SET_USER, payload: res.data});
    }

    //SET_REPOS
    const getUserRepos = async username => {
        setLoading();

        const res = await axios.get(`https://api.github.com/users/${username}/repos?per_page=5&sort=create:asc&client_id=${process.env.REACT_APP_GITHUB_CLIENT_ID}&client_secret=${process.env.REACT_APP_GITHUB_CLIENT_SECRET}`);

        return dispatch({type:SET_REPOS, payload: res.data})
        
    }


    return <GithubContext.Provider
        value = {{
            users: state.users,
            repos: state.repos,
            user: state.user,
            loading: state.loading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos
        }}
    >
        {props.children}
    </GithubContext.Provider>
}

export default GithubState
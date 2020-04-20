import {
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    SET_USER,
    SET_REPOS
} from '../types'

export default (state, action) => {
    switch(action.type) {
        case SET_LOADING: 
            return {
                ...state,
                loading: true
            }
        case SEARCH_USERS:
            return {
                ...state,
                loading: false,
                users: action.payload.items
            }

        case CLEAR_USERS:
            return {
                ...state,
                loading:false,
                users: []
            }
        case SET_USER: 
            return {
                ...state,
                loading: false,
                user: action.payload
            }
        case SET_REPOS: 
            return {
                ...state,
                loading: false,
                repos: action.payload
            }
        default :
            return state;
    }
}
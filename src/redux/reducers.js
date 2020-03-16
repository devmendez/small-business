import { combineReducers } from 'redux'

const user = (state = null, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {
                ...action.value,
                loggedIn: true
            }
        case 'LOGOUT':
            return {
                ...state,
                user: null,
                loggedIn: false,
            }
        case 'LOGOUT':
            return{
                username: false
            }
        default:
            return state
    }
}

const listings = (state = [], action) => {
    switch(action.type) {
        case 'ADD_LISTING':
            return [ ...state, action.value ]
        case 'REMOVE_LISTING':
            const listings = [ ...state ]
            listings.splice(action.value, 1)
            return listings
        default:
            return state
    }
}

const map = (state = null) => state

export default combineReducers({ user, listings, map }) 
export const addListing = (listing) => {
    return {
        type: 'ADD_LISTING',
        value: listing
    }
}

export const removeListing = (index) => {
    return {
        type: 'REMOVE_LISTING',
        value: index
    }
}

export const loginUser = (user) => {
    return {
        type: 'LOGIN',
        value: user
    }
}

export const logoutUser = (username) => {
    return {
        type: 'LOGOUT',
        value: username
    }
}

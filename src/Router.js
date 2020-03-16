import React from 'react'
import { Switch, Route, Redirect } from 'react-router'
import cookie from 'cookie'
import Listings from './containers/Listings'
import Details from './containers/Details'
import AddListing from './containers/AddListing'
import Login from './containers/Login'

const checkAuth = () => {
    const cookies = cookie.parse(document.cookie)
    return cookies["loggedIn"] ? true : false
}

const ProtectedRoute = ({component: Component, ...rest}) => {
    return (
        <Route 
        {...rest}
        render={(props) => checkAuth() 
            ? <Component {...props}/>
        : <Redirect to="/login" />}
        />
        )
     }


const Router = () => {
    return (
        <Switch>
            <Route exact path="/" component={Listings} />
            <Route path="/details/:id" component={Details} />
            <Route path="/login" component={Login} />
            <ProtectedRoute path="/addListing" component={AddListing}/>
        </Switch>
    )
}

export default Router
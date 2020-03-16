import React from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography } from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent'

const Navigation = () => {
        return (
        <div>
            <AppBar style={{ background: "#3CB371", position: "relative" }}>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Austin Small Business
                    </Typography>
                    <ul className="nav-list">
                        <li className="nav-list-item">
                            <Link to="/">Listings</Link>
                        </li>
                        <li className="nav-list-item">
                            <Link to="/login">Login</Link>
                        </li>
                        {/* {this.props.user.loggedIn ? (<li className="nav-list-item">
                        <Link onClick={this.userClick} to="/AddListing">Add</Link>
                        </li>):(null)} */}
                    </ul>
                </Toolbar>
            </AppBar>
            {/* {this.props.user.username ? <SnackbarContent  message={`logged out as: ${this.props.user.username}`}  /> : 
    <SnackbarContent  message={`logged in as: ${this.props.user.username}`}  />} */}
        </div>
        )    
    }

export default Navigation
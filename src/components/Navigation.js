import React, { Component } from 'react'
import { AppBar, Toolbar, IconButton, 
    Typography, List, ListItem} from '@material-ui/core'
import MenuIcon from '@material-ui/icons/Menu'
import { Link } from 'react-router-dom'
import SnackbarContent from '@material-ui/core/SnackbarContent'

class Navigation extends Component {

    logOutUser = (e) => {
        e.preventDefault()
        document.cookie = "loggedIn=true;max-age=0*0"
        window.location.replace("/login")
        }
    
    render(){
        return (        
            <AppBar style={{ background: "#3CB371", position: "relative"}}>
                <Toolbar>
                    <IconButton color="inherit">
                        <MenuIcon />
                    </IconButton>
                    <Typography variant="h6" style={{ flexGrow: "1" }}>
                        Austin Small Business
                    </Typography>               
                    <List className="nav-list">
                    <ListItem className="nav-list-item">
                        <Link style={{ textDecoration: 'none' }} to="/">Listings</Link>
                    </ListItem>
                    <ListItem className="nav-list-item">
                        {document.cookie === "loggedIn=true" ? (null) : (<Link style={{ textDecoration: 'none' }} to="/login"> Login </Link>)}
                    </ListItem>
                    <ListItem className="nav-list-item">
                    {document.cookie === "loggedIn=true" ? (<Link style={{ textDecoration: 'none' }} to="/AddListing">Add</Link>) :(null)}
                    </ListItem>
                    <ListItem className="nav-list-item">
                    {document.cookie === "loggedIn=true" ? (<Link style={{ textDecoration: 'none' }} to="/logout" onClick={this.logOut}>Logout</Link>):(null)}
                    </ListItem>
                    </List>              
                </Toolbar>
            {document.cookie === "loggedIn=true" ? (<SnackbarContent style={{backgroundColor:"#D3D3D3", color:"#959595", fontSize:'15px'}} message="Logged In as: username" />) : (null)}
            </AppBar>
       
        )
    }
}

export default Navigation

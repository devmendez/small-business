import React, { Component, Fragment } from 'react'
import { Button, TextField } from '@material-ui/core'


class AddListing extends Component {
    state = {
        name: '',
        description: '',
        address: '', 
        hours: '' 
    }

    toggleDialog = () => this.setState({ open: !this.state.open })

    handleTextChange = (e) => {
        const newState = { ...this.state }
        newState[e.target.id] = e.target.value
        this.setState(newState)
    }

    handleSubmit = (e) => {
        e.preventDefault()
        const newListing = { ...this.state }
        newListing.id = this.props.newListing + 1
        this.props.addListing(newListing)
        this.props.history.push("/listings")
    }


    componentDidUpdate = (prevProps, prevState) => {
        if (prevState.open !== this.state.open) {
            this.setState({
                Name: '',
                Description: '',
                Address: '',
                Hours: ''
            })
        }
    }

    render() {
        return (
            <div>
            <form 
                onSubmit={this.handleSubmit}
                style={{ display: 'flex', flexDirection: 'column', width: '300px' }}>
            <TextField 
                id="Name" 
                placeholder="Name" 
                value={this.state.Name} 
                onChange={this.handleTextChange} 
                required
                />
            <TextField 
                id="Address" 
                placeholder="Address" 
                value={this.state.Address} 
                onChange={this.handleTextChange}
                required
                />
            <TextField 
                id="Hours" 
                placeholder="Hours (ex. 8AM - 9PM)" 
                value={this.state.Hours} 
                onChange={this.handleTextChange} 
                required
                />
            <TextField 
                id="Description" 
                placeholder="Description" 
                value={this.state.Description} 
                onChange={this.handleTextChange} 
                required
                />
                <Button variant="contained" color="primary" type="submit">SAVE</Button>
            </form>
        </div>
        )
    }
    }
    

export default AddListing
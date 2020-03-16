import React, { Component } from 'react'
import { TextField, Button, Container } from '@material-ui/core'
import { withRouter } from 'react-router-dom'


class App extends Component {
  state = {
    username: "",
    password: ""
  }

  handleTextChange = e => {
    const state = { ...this.state }
    state[e.target.name] = e.target.value
    this.setState(state)
  }

  login = e => {
    e.preventDefault()
    const { history } = this.props
    document.cookie = "loggedIn=true;max-age = 60*1000"
    this.props.loginUser("loggedin")
    history.push("/listings")
  }

  render() {
    return (
      <div className="App">
        <Container maxWidth="sm">
          <form className="login-form" onSubmit={this.login}>
            <TextField
              onChange={this.handleTextChange}
              value={this.state.username}
              name="username"
              label="Username"
              type="text"
            />
            <TextField
              onChange={this.handleTextChange}
              value={this.state.password}
              name="password"
              label="Password"
              type="password"
            />
            <Button
              onClick={this.login}
              type="submit"
              className="login-button"
              variant="contained"
              color="primary"
            >
              Login
            </Button>
          </form>
        </Container>
      </div>
    )
  }
}

export default withRouter(App)
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import UserShow from './components/UserShow';
import ListShow from './components/ListShow';
import axios from "axios"


class App extends Component {
  state = {
    users: [],
    user: {}

  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get("/api/users/").then((res) => {
      this.setState({ users: res.data })
    })
  }

  render() {
    const homeComponent = () =>
      <Home
        users={this.state.users}
      />

    const userShowComponent = (props) =>
      <UserShow
        {...props}

      />

    const listShowComponent = (props) =>
      <ListShow
        {...props}

      />
    return (
      <Router>
        <div>
          <h1>Fest Pack</h1>
          <Switch>
            <Route exact path="/" render={homeComponent} ></Route>
            <Route exact path="/user/:id" render={userShowComponent}></Route>
            <Route exact path="/list/:id" render={listShowComponent}></Route>
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;

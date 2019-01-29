import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import UserShow from './components/UserShow';
import ListShow from './components/ListShow';
import axios from "axios"


class App extends Component {
  state = {
    users: [],
    user: {},
    list: {
      items: []
    },

  }

  componentDidMount() {
    this.getUsers()
  }

  getUsers = () => {
    axios.get("/api/users/").then((res) => {
      this.setState({ users: res.data })
    })
  }

  addUser = (newUser) => {
    axios.post("/api/users/", newUser, { new: true }).then(() => {
      this.getUsers()
    })
  }

  setUser = (userSet) => {
    this.setState({ user: userSet })
  }

  setList = (listSet) => {
    this.setState({ list: listSet })
  }

  render() {
    const homeComponent = () =>
      <Home
        users={this.state.users}
        addUser={this.addUser}
      />

    const userShowComponent = (props) =>
      <UserShow
        {...props}
        setUser={this.setUser}

      />

    const listShowComponent = (props) =>
      <ListShow
        {...props}
        userId={this.state.user._id}
        setList={this.setList}
        list={this.state.list}

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

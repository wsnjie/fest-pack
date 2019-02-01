import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Home from './components/Home';
import UserShow from './components/UserShow';
import ListShow from './components/ListShow';
import axios from "axios"
import posed, { PoseGroup } from "react-pose";

import styled from "styled-components"

const RoutesContainer = posed.div({
  enter: { opacity: 1, delay: 300, beforeChildren: true },
  exit: { opacity: 0 }
});


const StyledHeader = styled.div`
width:100vw;
height: 45px;
h1 {
  font-size:50px;
  text-align:center;
}
margin-bottom: 50px;
`

const StyledContainer = styled.div`
/* display: flex;
flex-direction: column;
justify-content: space-between; */
`
const StyledBody = styled.div`
width:100vw;
height: auto;
`


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

  getSingleUser = (name) => {

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
        setList={this.setList}
        list={this.state.list}
      />



    return (
      <Route render={({ location }) => (
        <StyledContainer>
          <StyledHeader >
            <h1 >Fest Pack</h1>
          </StyledHeader>
          <StyledBody>
            <PoseGroup>
              <RoutesContainer key={location.pathname}>
                <Switch location={location}>
                  <Route exact path="/" render={homeComponent} key="home" ></Route>
                  <Route exact path="/user/:id" render={userShowComponent} key="user"></Route>
                  <Route exact path="/user/:userId/list/:id" render={listShowComponent} key="list"></Route>
                </Switch>
              </RoutesContainer>
            </PoseGroup>
          </StyledBody>
        </StyledContainer>
      )} />

    );
  }
}

export default App;

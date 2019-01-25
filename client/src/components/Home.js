import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AddUser from './AddUser';

class Home extends Component {
    render() {
        const userList = this.props.users.map((user, i) => {
            return (<div key={i}>
                <Link to={`/user/${user._id}`}><h2>{user.name}</h2></Link>
            </div>

            )
        })
        return (
            <div>
                <AddUser addUser={this.props.addUser}></AddUser>
                <h1>{userList}</h1>
            </div>
        );
    }
}

export default Home;
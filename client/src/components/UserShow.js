import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"

class UserShow extends Component {
    state = {
        user: {
            lists: []
        }
    }

    componentDidMount() {
        this.getUser()

    }

    getUser = () => {
        axios.get(`/api/users/${this.props.match.params.id}`).then((res) => {
            this.setState({ user: res.data })
        })
    }
    render() {
        let lists = this.state.user.lists.map((list, i) => {
            return (<div key={i}>
                <Link to={`/list/${list._id}`}>{list.name}</Link>
            </div>)
        })
        return (
            <div>
                <h1>{this.state.user.name}</h1>
                {lists}
            </div>
        );
    }
}

export default UserShow;
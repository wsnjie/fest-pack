import React, { Component } from 'react';
import axios from 'axios';
import { Link } from "react-router-dom"
import AddList from './AddList';

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

    addList = (newList) => {
        axios.post("/api/lists/", newList, { new: true }).then((res) => {
            let update = { ...this.state.user }
            update.lists.push(res.data)
            this.setState({ user: update })
            axios.put(`/api/users/${this.state.user._id}`, update, { new: true })
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
                <AddList addList={this.addList} />
                {lists}
            </div>
        );
    }
}

export default UserShow;
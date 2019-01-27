import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import AddItem from './AddItem';
import Item from './Item';


class ListShow extends Component {
    state = {
        list: {
            items: []
        }
    }

    componentDidMount() {
        this.getList()

    }

    getList = () => {
        axios.get(`/api/lists/${this.props.match.params.id}`).then((res) => {
            console.log("get list")
            console.log(res.data)
            this.setState({ list: res.data })
            console.log(this.state.list.items)
        })
    }

    addItem = (newItem) => {
        axios.post("/api/items/", newItem, { new: true }).then((res) => {
            let update = { ...this.state.list }
            update.items.push(res.data)
            this.setState({ list: update })
            axios.put(`/api/lists/${this.state.list._id}`, update, { new: true })
        })
    }

    editItem = (itemOID, update) => {
        return axios.put(`/api/items/${itemOID}`, update, { new: true }).then(() => {
            return this.getList()
        })
    }

    deleteItem = (itemOID, index) => {
        axios.delete(`/api/items/${itemOID}`).then((res) => {
            return axios.get(`/api/lists/${this.state.list._id}`).then((res) => {
                return this.setState({ list: res.data })
            })
        })
    }


    render() {
        let items = this.state.list.items.map((item, i) => {
            return <Item
                key={i}
                item={item}
                index={i}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                getList={this.getList}
            />
        })
        return (
            <div>
                <h1>{this.state.list.name}</h1>
                <Link to={`/user/${this.props.userId}`}><button>All Lists</button></Link>
                <AddItem addItem={this.addItem}></AddItem>
                {items}
            </div >
        );
    }
}

export default ListShow;
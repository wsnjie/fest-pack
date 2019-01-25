import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import AddItem from './AddItem';
import Item from './Item';
import { timingSafeEqual } from 'crypto';

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
            this.setState({ list: res.data })
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

    deleteItem = (itemOID, index) => {
        axios.delete(`/api/items/${itemOID}`).then((res) => {
            let update = { ...this.state.list }
            update.items.splice(index, 1)
            this.setState({ list: update })
            axios.put(`/api/lists/${this.state.list._id}`, update, { new: true })
        })
    }

    editItem = () => {
        console.log("clicked")
    }
    render() {
        let items = this.state.list.items.map((item, i) => {
            return <Item
                key={i}
                id={item._id}
                index={i}
                qty={item.qty}
                name={item.name}
                deleteItem={this.deleteItem}
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
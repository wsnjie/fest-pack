import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import AddItem from './AddItem';
import Item from './Item';
import PlanningView from './PlanningView';
import ShoppingView from './ShoppingView';
import PackingView from './PackingView';


class ListShow extends Component {
    state = {
        list: {
            items: []
        },
        view: "planning"
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

    switchView = (e) => {
        this.setState({ view: e.target.name })
    }


    render() {
        let view = this.state.view
        let currentView = ""
        if (view === "planning") {
            currentView = <PlanningView
                list={this.state.list}
                deleteItem={this.deleteItem}
                editItem={this.editItem}
                getList={this.getList} />
        } else if (view === "shopping") {
            currentView = <ShoppingView
                list={this.state.list}
            />
        } else if (view === "packing") {
            currentView = <PackingView
                list={this.state.list}
            />
        }

        return (
            <div>

                <button name="planning" onClick={this.switchView}>Planning</button>
                <button name="shopping" onClick={this.switchView}>Shopping</button>
                <button name="packing" onClick={this.switchView}>Packing</button>
                <h1>{this.state.list.name}</h1>
                <Link to={`/user/${this.props.userId}`}><button>All Lists</button></Link>
                <AddItem addItem={this.addItem}></AddItem>
                {currentView}
            </div >
        );
    }
}

export default ListShow;
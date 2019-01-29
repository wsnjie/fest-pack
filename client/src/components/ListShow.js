import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"
import AddItem from './AddItem';
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
        this.getList(this.props.match.params.id)
    }

    getList = (listId) => {
        axios.get(`/api/lists/${listId}`).then((res) => {
            this.setState({ list: res.data })
            this.props.setList(res.data)
            console.log(this.state.list.items)

        })
    }

    addItem = (newItem) => {
        axios.post("/api/items/", newItem, { new: true }).then((res) => {
            let update = { ...this.state.list }
            update.items.push(res.data)
            this.setState({ list: update })
            return axios.put(`/api/lists/${this.state.list._id}`, update, { new: true })
        }).then(() => {
            this.getList(this.state.list._id)
        })
    }

    editItem = (itemOID, update) => {
        return axios.put(`/api/items/${itemOID}`, update, { new: true }).then(() => {
            console.log("Updated database")
            this.getList(this.props.match.params.id)
        })
    }

    deleteItem = (itemOID) => {
        axios.delete(`/api/items/${itemOID}`).then((res) => {
            this.getList(this.state.list._id)
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
                getList={this.getList}
                view={this.state.view} />
        } else if (view === "shopping") {
            currentView = <ShoppingView
                editItem={this.editItem}
                getList={this.getList}
                list={this.state.list}
                view={this.state.view}
            />
        } else if (view === "packing") {
            currentView = <PackingView
                editItem={this.editItem}
                getList={this.getList}
                list={this.state.list}
                view={this.state.view}
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
import React, { Component } from 'react';
import { Link } from "react-router-dom"
import axios from "axios"

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
    render() {
        let items = this.state.list.items.map((item, i) => {
            return (<div key={i}>
                {item.name}
            </div>)
        })
        return (
            <div>
                <h1>{this.state.list.name}</h1>
                {items}
            </div>
        );
    }
}

export default ListShow;
import React, { Component } from 'react';

class Item extends Component {
    state = {
        item: {},
        editQty: false,
        editName: false
    }

    componentDidMount() {
        this.setState({ item: this.props.item })
    }



    toggleEditName = () => {
        let toggle = !this.state.editName
        this.setState({ editName: toggle })
    }

    toggleEditQty = () => {
        let toggle = !this.state.editQty
        this.setState({ editQty: toggle })
    }
    handleChange = (e) => {
        let item = { ...this.state.item }
        item[e.target.name] = e.target.value
        this.setState({ item: item })

    }

    updateName = () => {
        this.props.editItem(this.state.item._id, this.state.item).then(() => {

            this.toggleEditName()
        })
    }

    updateQty = () => {
        this.props.editItem(this.state.item._id, this.state.item).then(() => {

            this.toggleEditQty()
        })
    }

    deleteItem = () => {
        this.props.deleteItem(this.state.item._id).then(() => {
            return this.setState({ item: this.props.item })
        })
    }

    addToShopping = () => {
        let item = this.state.item
        item.buy = true
        this.setState({ item: item })
        this.props.editItem(this.state.item._id, this.state.item)
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.state.item._id)}>X</button>
                    {this.state.editQty
                        ? <input onBlur={this.updateQty} name="qty" onChange={this.handleChange} defaultValue={this.props.item.qty} autoFocus={true} />
                        : <span onClick={this.toggleEditQty}>{this.props.item.qty}</span>
                    }:
                {this.state.editName
                        ? <input onBlur={this.updateName} name="name" onChange={this.handleChange} defaultValue={this.props.item.name} autoFocus={true} />
                        : <span onClick={this.toggleEditName}>{this.props.item.name}</span>}
                    <button onClick={this.addToShopping}>$</button>
                </span>

            </div>
        );
    }
}


export default Item;
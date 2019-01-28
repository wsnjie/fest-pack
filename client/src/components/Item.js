import React, { Component } from 'react';

class Item extends Component {
    state = {
        item: {},
        editQty: false,
        editName: false,
        view: "",
        nameField: <span>{this.props.item.name}</span>,
        shopButton: null
    }

    componentDidMount() {
        this.setState({ item: this.props.item })
        this.viewCheck()
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

    viewCheck = () => {
        if (this.props.view === "planning") {
            const shoppingButton = <button onClick={this.addToShopping}>$</button>
            this.setState({ shopButton: shoppingButton })
            const nameView = "Blahhh"
            console.log(nameView)
            this.setState({ nameField: nameView })
        } else if (this.props.view === "shopping") {
            this.setState({ shopButton: null })
            this.setState({ nameField: <span>{this.props.item.name}</span> })
        } else if (this.props.view === "packing") {
            this.setState({ shopButton: null })
            this.setState({ nameField: <span>{this.props.item.name}</span> })
        }
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.state.item._id)}>X</button>
                    {this.state.editQty
                        ? <input onBlur={this.updateQty} name="qty" onChange={this.handleChange} defaultValue={this.props.item.qty} autoFocus={true} />
                        : <span onClick={this.toggleEditQty}>{this.props.item.qty}</span>
                    }:
                {this.state.nameField}

                </span>
                {this.state.shopButton}
            </div>
        );
    }
}


export default Item;
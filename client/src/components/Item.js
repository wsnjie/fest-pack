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

        this.setView()
    }

    async setView() {
        await this.setState({ item: this.props.item })
        this.viewCheck()
    }

    toggleEditName = async () => {

        let toggle = !this.state.editName
        await this.setState({ editName: toggle })
        this.viewCheck()
    }

    toggleEditQty = async () => {
        let toggle = !this.state.editQty
        await this.setState({ editQty: toggle })
        this.viewCheck()
    }
    handleChange = (e) => {
        let item = { ...this.state.item }
        item[e.target.name] = e.target.value
        this.setState({ item: item })

    }

    updateName = async () => {
        this.props.editItem(this.state.item._id, this.state.item)
        await this.props.getList()
        this.toggleEditName()
    }

    updateQty = () => {
        this.props.editItem(this.state.item._id, this.state.item).then(() => {

            this.toggleEditQty()
        })
    }

    deleteItem = async () => {
        await this.props.deleteItem(this.state.item._id)
        return this.props.getList()

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
            let nameView = () => {
                if (this.state.editName === true) {
                    console.log("edit")
                    return <input onBlur={this.updateName} name="name" onChange={this.handleChange} defaultValue={this.state.item.name} autoFocus={true} />
                } else {
                    console.log("display")
                    return <span onClick={this.toggleEditName}>{this.state.item.name}</span>
                }
            }
            this.setState({ nameField: nameView() })
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
                <span><button onClick={() => this.props.deleteItem(this.props.item._id)}>X</button>
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
import React, { Component } from 'react';

class Item extends Component {
    state = {
        item: {},
        editQty: false,
        editName: false,
        view: "",
        qtyField: <span>{this.state.item.qty}</span>,
        nameField: <span>{this.props.item.name}</span>,
        shopButton: null
    }

    componentDidMount() {

        this.setView()
    }

    componentWillReceiveProps() {
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
        await this.props.editItem(this.props.item._id, this.state.item)
        this.toggleEditName()
    }

    updateQty = async () => {
        await this.props.editItem(this.props.item._id, this.state.item)
        this.toggleEditQty()

    }

    deleteItem = () => {
        this.props.deleteItem(this.props.item._id)


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
            let qtyView = () => {
                if (this.state.editQty === true) {

                    return <input onBlur={this.updateQty} name="qty" onChange={() => this.handleChange()} defaultValue={this.state.item.qty} autoFocus={true} />
                } else {
                    return <span onClick={this.toggleEditQty}>{this.state.item.qty}</span>
                }

            }
            let nameView = () => {
                if (this.state.editName === true) {

                    return <input onBlur={() => this.updateName()} name="name" onChange={this.handleChange} defaultValue={this.state.item.name} autoFocus={true} />
                } else {
                    return <span onClick={(e) => this.toggleEditName(e)}>{this.state.item.name}</span>
                }
            }
            this.setState({ qtyField: qtyView() })
            this.setState({ nameField: nameView() })
        } else if (this.props.view === "shopping") {
            this.setState({ shopButton: null })
            this.setState({ qtyField: <span>{this.state.item.qty}</span> })
            this.setState({ nameField: <span>{this.props.item.name}</span> })
        } else if (this.props.view === "packing") {
            this.setState({ shopButton: null })
            this.setState({ qtyField: <span>{this.state.item.qty}</span> })
            this.setState({ nameField: <span>{this.props.item.name}</span> })
        }
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.props.item._id)}>X</button>
                    {this.state.qty}
                    {this.state.nameField}
                    {this.state.item.name}

                </span>
                {this.state.shopButton}
            </div>
        );
    }
}


export default Item;
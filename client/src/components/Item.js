import React, { Component } from 'react';
import styled from "styled-components"
import { Button } from "react-bulma-components/full"



const PackedItem = styled.span`
text-decoration-line: line-through;
`

class Item extends Component {
    state = {
        item: {},
        editQty: false,
        editName: false,
        view: "",
        qtyField: <span>{this.props.item.qty}</span>,
        nameField: <span>{this.props.item.name}</span>,
        shopButton: null,
        boughtButton: null,
        bought: false,
        packed: false
    }

    componentDidMount() {

        this.setView()
    }

    componentWillReceiveProps() {
        this.setView()
    }

    async setView() {
        await this.setState({ item: this.props.item })
        this.setState({ bought: this.props.item.bought })
        this.setState({ packed: this.props.item.packed })
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

    buyToggle = async () => {
        console.log(this.state.bought)
        let item = this.state.item
        let bought = !item.bought
        item.bought = bought

        this.setState({ bought: bought })
        await this.setState({ item: item })
        this.buyCheck()
        this.props.editItem(this.state.item._id, this.state.item)
    }

    buyCheck = () => {
        if (this.state.bought === true) {
            const boughtButton = <Button size="small" color="success" onClick={this.buyToggle}>Got It!</Button>
            this.setState({ boughtButton: boughtButton })
        } else {
            const buyButton = <Button size="small" color="info" onClick={this.buyToggle}>Get It?</Button>
            this.setState({ boughtButton: buyButton })
        }
    }

    packedCheck = () => {
        if (this.state.packed === true) {
            const packedItem = <PackedItem onClick={this.togglePacked} >{this.state.item.name}</PackedItem>
            this.setState({ nameField: packedItem })
        } else {
            const item = <span onClick={this.togglePacked}>{this.state.item.name}</span>
            this.setState({ nameField: item })
        }
    }

    togglePacked = async () => {
        let item = this.state.item
        let packed = !item.packed
        item.packed = packed

        this.setState({ packed: packed })
        await this.setState({ item: item })
        this.packedCheck()
        this.props.editItem(this.state.item._id, this.state.item)
    }
    viewCheck = () => {
        if (this.props.view === "planning") {
            const shoppingButton = <button onClick={this.addToShopping}>$</button>
            this.setState({ shopButton: shoppingButton })
            this.setState({ boughtButton: null })
            let qtyView = () => {
                if (this.state.editQty === true) {

                    return <input onBlur={this.updateQty} name="qty" onChange={this.handleChange} defaultValue={this.state.item.qty} autoFocus={true} />
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
            this.buyCheck()
            this.setState({ shopButton: null })
            this.setState({ qtyField: <span>{this.state.item.qty}</span> })
            this.setState({ nameField: <span>{this.props.item.name}</span> })
        } else if (this.props.view === "packing") {
            this.setState({ boughtButton: null })
            this.setState({ shopButton: null })
            this.setState({ qtyField: <span>{this.state.item.qty}</span> })
            this.packedCheck()
        }
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.props.item._id)}>X</button>
                    <span>{this.state.qtyField}:  {this.state.nameField}</span>

                </span>
                {this.state.shopButton}
                {this.state.boughtButton}
            </div>
        );
    }
}


export default Item;
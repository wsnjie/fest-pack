import React, { Component } from 'react';
import styled from "styled-components"
import { Button } from "react-bulma-components/full"
import posed from "react-pose"

const PosedItem = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});





const StyledInput = styled.input`
    width: 25px;
`

const ItemBox = styled.div`
margin: 0 auto;
width: 50vw;
display: flex;
justify-content: space-between;
@media (max-width: 500px){
    width:100vw;
}

`

const DeleteButton = styled.button`
background-color: #AD343E;
color: #959B99;
`
const NotOnListButton = styled.button`
background-color: #9CFFFA;
color: #959B99;
`


const OnListButton = styled.button`
background-color: #B3F4A5;
color: #959B99;
`
const NotBought = styled.button`
background-color: #9CFFFA;
color: #959B99;
`

const Bought = styled.button`
background-color: #B3F4A5;
color: #959B99;
`



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

    shoppingToggle = () => {
        let item = this.state.item
        item.buy = !item.buy
        this.setState({ item: item })
        this.setView()
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
            const boughtButton = <Bought onClick={this.buyToggle}>Got It!</Bought>
            this.setState({ boughtButton: boughtButton })
        } else {
            const buyButton = <NotBought onClick={this.buyToggle}>Get It?</NotBought>
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
            const needToBuy = <NotOnListButton onClick={this.shoppingToggle}>$</NotOnListButton>
            const onShoppingList = <OnListButton onClick={this.shoppingToggle}>$</OnListButton>
            const shopButtonView = () => {
                const buyBool = this.state.item.buy
                if (buyBool === true) {
                    return onShoppingList
                } else {
                    return needToBuy
                }
            }

            this.setState({ shopButton: shopButtonView() })
            this.setState({ boughtButton: null })
            let qtyView = () => {
                if (this.state.editQty === true) {

                    return <StyledInput onBlur={this.updateQty} name="qty" onChange={this.handleChange} defaultValue={this.state.item.qty} autoFocus={true} />
                } else {
                    return <span onClick={this.toggleEditQty}>{this.state.item.qty}: </span>
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
            this.setState({ qtyField: <span>{this.state.item.qty}:</span> })
            this.packedCheck()
        }
    }
    render() {
        return (
            <ItemBox>
                <div><DeleteButton onClick={() => this.props.deleteItem(this.props.item._id)}>X</DeleteButton></div>
                <div>    {this.state.qtyField}  {this.state.nameField}</div>

                <div>
                    {this.state.shopButton}
                    {this.state.boughtButton}
                </div>
            </ItemBox>
        );
    }
}


export default Item;
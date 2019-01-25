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

    // toggleEditQty = () => {
    //     let toggle = !this.state.editQty
    //     this.setState({ editQty: toggle })
    // }
    handleChange = (e) => {
        let item = { ...this.state.item }
        item[e.target.name] = e.target.value
        this.setState({ item: item })
    }

    updateName = () => {
        this.props.editItem(this.props.item._id, this.state.item).then(() => {

            this.toggleEditName()
        })
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.props.item._id, this.props.index)}>X</button>
                    {this.state.editQty
                        ? null
                        : <span onClick={this.toggleEditQty}>{this.props.item.qty}</span>
                    }:
                {this.state.editName
                        ? <input onBlur={this.updateName} name="name" onChange={this.handleChange} defaultValue={this.props.item.name} autoFocus={true} />
                        : <span onClick={this.toggleEditName}>{this.state.item.name}</span>}
                </span>

            </div>
        );
    }
}


export default Item;
import React, { Component } from 'react';

class Item extends Component {
    state = {
        item: {},
        editQty: false,
        editName: false
    }

    toggleEditName = () => {
        let toggle = !this.state.editName
        this.setState({ editName: toggle })
    }

    updateName = () => {
        console.log("blurred")
        this.toggleEditName()
    }
    render() {
        return (
            <div>
                <span><button onClick={() => this.props.deleteItem(this.props.id, this.props.index)}>X</button>
                    {this.props.qty}:
                {this.state.editName
                        ? <input onBlur={this.updateName} defaultValue={this.props.name} autofocus="true" />
                        : <span onClick={this.toggleEditName}>{this.props.name}</span>}
                </span>
            </div>
        );
    }
}

export default Item;
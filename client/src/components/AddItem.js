import React, { Component } from 'react';


class AddItem extends Component {
    state = {
        name: "",
        qty: 0,
    }

    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    numberChange = (e) => {
        this.setState({ qty: e.target.value })
    }




    render() {
        return (
            <div>
                <input placeholder="Qty?" onChange={this.numberChange} defaultValue={1}></input>
                <input placeholder="Item?" onChange={this.nameChange}></input>

                <button onClick={() => this.props.addItem(this.state)}>Submit</button>
            </div>
        );
    }
}
export default AddItem;
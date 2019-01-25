import React, { Component } from 'react';

class AddList extends Component {
    state = {
        name: ""
    }

    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }


    render() {
        return (
            <div>
                <input placeholder="New List?" onChange={this.nameChange}></input>
                <button onClick={() => this.props.addList(this.state)}>Submit</button>
            </div>
        );
    }
}

export default AddList
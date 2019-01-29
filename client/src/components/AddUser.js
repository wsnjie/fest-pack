import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: ""
    }

    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }


    render() {
        return (
            <div>
                <input placeholder="Name" onChange={this.nameChange}></input>
                <button onClick={() => this.props.addUser(this.state)}>Submit</button>
            </div>
        );
    }
}

export default AddForm;
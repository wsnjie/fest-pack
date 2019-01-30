import React, { Component } from 'react';

class AddForm extends Component {
    state = {
        name: ""
    }

    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    addUser = async () => {
        await this.props.addUser(this.state)
        this.props.toggleForm()
    }

    render() {
        return (
            <div>
                <input placeholder="Name" onChange={this.nameChange}></input>
                <button onClick={this.addUser}>Submit</button>
            </div>
        );
    }
}

export default AddForm;
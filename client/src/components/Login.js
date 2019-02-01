import React, { Component } from 'react';

class Login extends Component {
    state = {
        value: {
            name: "",
            password: ""
        }
    }

    handleChange = (e) => {
        let value = { ...this.state.value }
        value[e.target.name] = e.target.value
        this.setState({ value: value })
        console.log(this.state)

    }
    submitLogin = () => {

    }
    render() {
        return (
            <div>
                <form onSubmit={this.submitLogin}>
                    <input name="name" onChange={this.handleChange}></input>
                    <input name="password" type="password" onChange={this.handleChange}></input>
                    <button type="submit">Submit</button>

                </form>
            </div>
        );
    }
}

export default Login;
import React, { Component } from 'react';
import Auth from "../Auth/Auth"

const auth = new Auth()

class Login extends Component {
    render() {
        return (
            <div>
                {auth.login()}
            </div>
        );
    }
}

export default Login;
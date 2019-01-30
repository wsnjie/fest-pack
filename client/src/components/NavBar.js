import React, { Component } from 'react';
import { Button } from "react-bulma-components"

class NavBar extends Component {
    goTo(route) {
        this.props.history.replace(`/${route}`)
    }

    login() {
        this.props.auth.login();
    }

    logout() {
        this.props.auth.logout();
    }

    componentDidMount() {
        const { renewSession } = this.props.auth;

        if (localStorage.getItem('isLoggedIn') === 'true') {
            renewSession();
        }
    }

    render() {
        const { isAuthenticated } = this.props.auth
        return (
            <div>
                NavBar

                {!isAuthenticated() && (
                    <Button
                        onClick={this.login.bind(this)}
                    >
                        Log In
                  </Button>
                )}
                {
                    isAuthenticated() && (
                        <Button
                            onClick={this.logout.bind(this)}
                        >
                            Log Out
                  </Button>
                    )
                }
            </div>
        );
    }
}

export default NavBar;
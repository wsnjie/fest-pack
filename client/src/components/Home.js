import React, { Component } from 'react'
import { Link } from "react-router-dom"
import AddUser from './AddUser';
import { Tile, Heading, Section, Box } from "react-bulma-components/full"
import styled from "styled-components"


const UserBox = styled.div`
display: flex;
flex-direction:row;
align-content:space-between;

`
const AddUserButton = styled.button`
margin: 0 auto;
`
const AddUserRow = styled.div`
display:flex;
flex-direction: row;
align-content:space-between;
`

class Home extends Component {
    state = {
        toggleAdd: false
    }

    toggleForm = () => {
        this.setState({ toggleAdd: !this.state.toggleAdd })
    }

    render() {

        const userList = this.props.users.map((user, i) => {
            return (<div key={i}>
                <Box>
                    <Heading><Link to={`/user/${user._id}`}><h2>{user.name}</h2></Link></Heading>
                </Box>

            </div>

            )
        })
        return (
            <div >
                <Section>
                    <AddUserRow><AddUserButton onClick={this.toggleForm}>Sign Up Here!</AddUserButton>{this.state.toggleAdd
                        ? <AddUser toggleForm={this.toggleForm} addUser={this.props.addUser}></AddUser>
                        : null}</AddUserRow>



                    <Box>
                        <Tile kind="ancestor">
                            <Tile kind="parent">
                                <UserBox>{userList}</UserBox>

                            </Tile>

                        </Tile>
                    </Box>
                </Section>


            </div>
        );
    }
}

export default Home;
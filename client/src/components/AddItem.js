import React, { Component } from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    display: inline-block;
`


class AddItem extends Component {
    state = {
        name: "",
        qty: 1,
    }



    nameChange = (e) => {
        this.setState({ name: e.target.value })
    }

    numberChange = (e) => {
        this.setState({ qty: e.target.value })
    }

    submit = (e) => {
        e.preventDefault()
        this.props.addItem(this.state)
    }




    render() {
        return (
            <div>
                <form onSubmit={this.submit}>
                    <StyledInput placeholder="Qty?" onChange={this.numberChange} defaultValue={1} />
                    <StyledInput placeholder="Item?" onChange={this.nameChange} />

                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}
export default AddItem;
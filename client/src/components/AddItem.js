import React, { Component } from 'react';
import styled from 'styled-components'

const StyledInput = styled.input`
    display: inline-block;
`
const StyledDiv = styled.div`
display: flex;
flex-direction: column;
`
const StyledFormRow = styled.div`
display: flex;
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

    submit = async (e) => {
        e.preventDefault()
        await this.props.addItem(this.state)
        this.setState({ name: "" })
        this.setState({ qty: 1 })
    }




    render() {
        return (
            <div>
                <form onSubmit={(e) => this.submit(e)}>
                    <StyledFormRow>
                        <StyledDiv>
                            <div>Quantity</div>
                            <StyledInput placeholder="Qty?" onChange={this.numberChange} value={this.state.qty} />
                        </StyledDiv>
                        <StyledDiv>
                            <div>Item Name</div>
                            <StyledInput placeholder="Item?" onChange={this.nameChange} value={this.state.name} />
                        </StyledDiv>
                        <button type="submit">Submit</button>
                    </StyledFormRow>
                </form>
            </div>
        );
    }
}
export default AddItem;
import React, { Component } from 'react';
import Item from "../components/Item"
import styled from "styled-components"

const ListDisplay = styled.div`
display: flex;
flex-direction: column-reverse;
`

class PackingView extends Component {
    render() {
        let items = this.props.list.items.map((item, i) => {
            return <Item
                key={i}
                item={item}
                index={i}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
                getList={this.props.getList}
                view={this.props.view}
            />
        })

        return (
            <ListDisplay>
                {items}
            </ListDisplay>
        );
    }
}

export default PackingView;
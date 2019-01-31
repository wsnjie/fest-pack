import React, { Component } from 'react';
import Item from './Item';
import styled from "styled-components"

const ListDisplay = styled.div`
display: flex;
flex-direction: column-reverse;
`

class ShoppingView extends Component {
    render() {
        let items = this.props.list.items.map((item, i) => {
            if (item.buy === true) {
                return <Item
                    key={i}
                    item={item}
                    index={i}
                    deleteItem={this.props.deleteItem}
                    editItem={this.props.editItem}
                    getList={this.props.getList}
                    view={this.props.view}
                />
            }
            return null

        })

        return (
            <div>
                <ListDisplay>
                    {items}
                </ListDisplay>

            </div>
        );
    }
}

export default ShoppingView;
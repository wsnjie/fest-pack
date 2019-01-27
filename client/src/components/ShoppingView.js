import React, { Component } from 'react';
import Item from './Item';

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
                />
            }

        })

        return (
            <div>
                {items}
            </div>
        );
    }
}

export default ShoppingView;
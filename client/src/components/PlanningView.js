import React, { Component } from 'react';
import Item from "../components/Item"

class PlanningView extends Component {
    render() {
        let items = this.props.list.items.map((item, i) => {
            return <Item
                key={i}
                item={item}
                index={i}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
                getList={this.props.getList}
            />
        })
        return (
            <div>
                {items}
            </div>
        );
    }
}

export default PlanningView;
import React, { Component } from 'react';
import Item from "../components/Item"
import styled from "styled-components"
import posed from "react-pose"

const PosedItem = posed.p({
    enter: { x: 0, opacity: 1 },
    exit: { x: 50, opacity: 0 }
});

const PosedContainer = posed.div({
    enter: { staggerChildren: 50 }
});

const ListDisplay = styled.div`
display: flex;
flex-direction: column-reverse;
`

class PlanningView extends Component {
    render() {
        let items = this.props.list.items.map((item, i) => {
            return (<PosedItem><Item
                key={i}
                item={item}
                index={i}
                deleteItem={this.props.deleteItem}
                editItem={this.props.editItem}
                getList={this.props.getList}
                view={this.props.view}
                listId={this.props.list._id}
            /></PosedItem>)
        })
        return (
            <div>
                <ListDisplay>
                    <PosedContainer>
                        {items}
                    </PosedContainer>
                </ListDisplay>

            </div>
        );
    }
}

export default PlanningView;
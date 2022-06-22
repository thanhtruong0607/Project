import React, { useState, useEffect } from "react";
import './Column.scss';
import Card from "../Card/Card";
import { mapOrder } from "../../utils/sorts";
import { Container, Draggable } from "react-smooth-dnd";
import service from "../../service/axios";

const Column = (props) => {

    const { column, onCardDrop } = props;

    console.log(column);


    return (
        <>
            <div className='column'>
                <header className="column-drag-handle">{column.title}</header>
                <div className="card-list">
                    <Container
                        groupName="col"
                        // onDrop={dropResult => onCardDrop(column.id, dropResult)}
                        // getChildPayload={index => column[id]}
                        dragClass="card-ghost"
                        dropClass="card-ghost-drop"
                        dropPlaceholder={{
                            animationDuration: 150,
                            showOnTop: true,
                            className: 'card-drop-preview'
                        }}
                        dropPlaceholderAnimationDuration={200}
                    >

                        {column.data && column.data.length > 0 && column.data.map((card, index) => {
                            return (
                                <Draggable key={card.id}>
                                    <Card card={card} />
                                </Draggable>
                            )
                        })}

                    </Container>

                </div>
                <footer>
                    <div className="footer-action">
                        <i className="fa fa-plus icon"></i> Add another card
                    </div>
                </footer>
            </div>
        </>
    )
}

export default Column;
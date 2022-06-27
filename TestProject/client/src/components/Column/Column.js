import React, { useState, useEffect } from "react";
import './Column.scss';
import Card from "../Card/Card";
import { Container, Draggable } from "react-smooth-dnd";
import Form from 'react-bootstrap/Form'

const Column = (props) => {

    const { column, onCardDrop } = props;

    const [titleColumn, setTitleColumn] = useState("");

    const selectAllText = (e) => {
        e.target.focus();
        e.target.select();
    }

    useEffect(() => {
        if (column && column.title) {
            setTitleColumn(column.title)
        }
    }, [column])

    console.log(column);

    return (
        <>
            <div className='column'>
                <header className="column-drag-handle">
                    <div>
                        <Form.Control
                            size={"sm"}
                            type="text"
                            value={titleColumn}
                            className='customize-column'
                            onClick={selectAllText}
                            onChange={(e) => setTitleColumn(e.target.value)}
                            spellCheck='false'
                            onMouseDown={(e) => e.preventDefault()}
                        />
                    </div>
                </header>
                <div className="card-list">
                    <Container
                        groupName="col"
                        onDrop={dropResult => onCardDrop(column.title, dropResult)}
                        getChildPayload={index => column.data[index]}
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
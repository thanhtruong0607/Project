import React, { useState, useEffect, useRef, useCallback } from "react";
import './BoardContent.scss';
import Column from "../Column/Column";
import { initData } from "../../actions/initData";
import _ from 'lodash';
import { mapOrder } from "../../utils/sorts";
import { applyDrag } from "../../utils/dragDrop";
import { Container, Draggable } from "react-smooth-dnd";
import service from "../../service/axios";
import { Container as BootstrapContainer, Row, Col, Form, Button } from "react-bootstrap";

const BoardContent = () => {

    const [board, setBoard] = useState({});
    const [columns, setColumns] = useState([]);
    const [openNewColumn, setOpenNewColumn] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    const newColumInputRef = useRef(null);

    const onNewColumnTitleChange = useCallback((e) => setNewColumnTitle(e.target.value), []);

    useEffect(() => {
        let fetchAPI = async () => {
            let params = {
                model: "project.project",
                method: "search_read",
                args: [
                    [["active", "=", true]],
                    ["name", "user_id", "type_id", "members", "task_count", "tasks"],
                    0,
                    0,
                    "",
                ],
                kwargs: {},
                context: {
                    tz: "Asia/Ho_Chi_Minh",
                    lang: "en_US",
                },
            };

            const response = await service.post(params);

            console.log(`3 -------`, response);

            return response.data;


        };
        fetchAPI();
        const boardInitData = initData.boards.find(item => item.id === 'board-1');
        if (boardInitData) {
            setBoard(boardInitData);

            // sort column 
            // boardInitData.columns.sort((a, b) => 
            // boardInitData.columnOrder.indexOf(a.id) - boardInitData.columnOrder.indexOf(b.id))
            setColumns(mapOrder(boardInitData.columns, boardInitData.columnOrder, 'id'));

        }
    }, []);

    useEffect(() => {
        if (newColumInputRef && newColumInputRef.current) {
            newColumInputRef.current.focus();
            newColumInputRef.current.select();
        }
    }, [openNewColumn])

    if (_.isEmpty(board)) {
        return (
            <>
                <div className="not-found">Board not found</div>
            </>
        )
    }

    const onColumnDrop = (dropResult) => {

        let newColumns = [...columns];
        newColumns = applyDrag(newColumns, dropResult);

        let newBroad = { ...board };
        newBroad.columnOrder = newColumns.map(c => c.id);
        newBroad.columns = newColumns;

        console.log(newBroad);

        setColumns(newColumns);
        setBoard(newBroad);
    }

    const onCardDrop = (columnId, dropResult) => {

        if (dropResult.removedIndex !== null || dropResult.addedIndex !== null) {

            let newColumns = [...columns];

            let currentColumn = newColumns.find(c => c.id === columnId);

            currentColumn.cards = applyDrag(currentColumn.cards, dropResult);

            currentColumn.cardOrder = currentColumn.cards.map(i => i.id);

            console.log(currentColumn);
            setColumns(newColumns);
        }
    }

    const toggleOpenNewColumn = () => {
        setOpenNewColumn(!openNewColumn);
    }


    const addNewColumn = () => {
        if (!newColumnTitle) {
            newColumInputRef.current.focus();
            return
        }

        const addColumnToAdd = {
            id: Math.random().toString(36).substring(2, 5),
            boardId: board.id,
            title: newColumnTitle.trim(),
            cardOrder: [],
            cards: []
        }

        let newColumns = [...columns]
        newColumns.push(addColumnToAdd);
        let newBroad = { ...board };
        newBroad.columnOrder = newColumns.map(c => c.id);
        newBroad.columns = newColumns;

        console.log(newBroad);

        setColumns(newColumns);
        setBoard(newBroad);
        setNewColumnTitle('');
        toggleOpenNewColumn();
    }

    return (
        <>
            <div className='board-columns'>
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={index => columns[index]}
                    dragHandleSelector=".column-drag-handle"
                    dragClass="column-ghost"
                    dropClass="column-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                >
                    {columns && columns.length > 0 && columns.map((column, index) => {
                        return (
                            <Draggable key={column.id}>
                                <Column
                                    column={column} onCardDrop={onCardDrop}
                                />
                            </Draggable>
                        )
                    })}
                </Container>
                <BootstrapContainer className="trello-container">
                    {!openNewColumn &&
                        <Row>
                            <Col className="add-column" onClick={toggleOpenNewColumn}>
                                <i className="fa fa-plus icon"></i> Add another column
                            </Col>
                        </Row>
                    }
                    {openNewColumn &&
                        <Row>
                            <Col className="enter-new-column">
                                <Form.Control
                                    size="sm" type="text" placeholder="Enter column title ..."
                                    className="input-enter-new-column"
                                    ref={newColumInputRef}
                                    value={newColumnTitle}
                                    onChange={onNewColumnTitleChange}
                                    onKeyDown={event => (event.key === 'Enter') && addNewColumn()}
                                />
                                <Button variant="primary" size="sm" onClick={addNewColumn}>Add column</Button>{' '}
                                <span className="cancel-new-column" onClick={toggleOpenNewColumn}>
                                    <i className="fa fa-trash icon"></i>
                                </span>
                            </Col>
                        </Row>
                    }

                </BootstrapContainer>
            </div>
        </>
    )
}
export default BoardContent;
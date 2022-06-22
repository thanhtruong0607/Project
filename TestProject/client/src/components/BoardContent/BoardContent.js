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

const BoardContent = ({ project_id }) => {

    const [board, setBoard] = useState([]);
    const [columns, setColumns] = useState([]);
    const [openNewColumn, setOpenNewColumn] = useState(false);
    const [newColumnTitle, setNewColumnTitle] = useState('');

    const newColumInputRef = useRef(null);

    const onNewColumnTitleChange = useCallback((e) => setNewColumnTitle(e.target.value), []);

    useEffect(() => {
        let fetchTaskAPI = async () => {
            let params = {
                model: "project.task",
                method: "search_read",
                args: [
                    [
                        ["project_id", "=", project_id]
                    ],
                    [
                        "message_needaction",
                        "sequence",
                        "task_number",
                        "create_date",
                        "priority",
                        "name",
                        "creator_id",
                        "write_date",
                        "date_deadline",
                        "date_end",
                        "product_backlog_id",
                        "sprint_id",
                        "release_id",
                        "project_id",
                        "user_id",
                        "milestone_id",
                        "planned_hours",
                        "remaining_hours",
                        "effective_hours",
                        "stage_id",
                        "duration",
                        "progress",
                        "checklist_task_instance_ids"
                    ],
                    0,
                    0,
                    ""
                ],
                kwargs: {},
                context: {
                    "tz": "Asia/Ho_Chi_Minh",
                    "lang": "en_US"
                }
            };
            const response = await service.post(params);

            let dataTask = response && response.data.result ? response.data.result : [];

            let board = _.map(_.groupBy(dataTask, (task) => {
                return task.stage_id;
            }), (column, key) => {

                return {
                    id: key.split(',')[0],
                    title: key.split(',')[1], data: column
                }
            })
            setBoard(board);
        }
        fetchTaskAPI();
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
                <div className="not-found"></div>
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
        console.log(dropResult);
    }

    // const onColumnDrop = (dropResult => {
    //     console.log(dropResult);
    // })

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
            {console.log(board)}
            <div className='board-columns'>
                <Container
                    orientation="horizontal"
                    onDrop={onColumnDrop}
                    getChildPayload={index => board[index]}
                    dragHandleSelector=".column-drag-handle"
                    dragClass="column-ghost"
                    dropClass="column-ghost-drop"
                    dropPlaceholder={{
                        animationDuration: 150,
                        showOnTop: true,
                        className: 'column-drop-preview'
                    }}
                >
                    {board && board.length > 0 && board.map((column, index) => {
                        return (
                            <Draggable key={column.id}>
                                <Column
                                    column={column}
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
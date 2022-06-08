import React from 'react';
import AppBar from '../components/AppBar/AppBar';
import BoardBar from '../components/BoardBar/BoardBar';
import BoardContent from '../components/BoardContent/BoardContent';

const Task = () => {
    return (
        <div className='trello-master'>
            <AppBar />
            <BoardBar />
            <BoardContent />
        </div>
    )
}
export default Task;
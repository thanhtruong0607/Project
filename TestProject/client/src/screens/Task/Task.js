import React from "react";
import { useParams } from 'react-router-dom'
import './Task.scss';
import AppBar from '../../components/AppBar/AppBar';
import BoardBar from '../../components/BoardBar/BoardBar'
import BoardContent from '../../components/BoardContent/BoardContent'

const Task = () => {

    let route_params = useParams();
    console.log(`gfg:`, route_params)
    return (
        <>

            <div className="trello-master">
                <AppBar />
                <BoardBar />
                <BoardContent project_id={parseInt(route_params.id)} />
            </div>
        </>

    )
}
export default Task;
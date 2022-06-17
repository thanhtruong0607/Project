import React, { useState, useEffect } from "react";
import service from "../../service/axios";
import { Container, Draggable } from "react-smooth-dnd";
import { applyDrag } from "../../utils/dragDrop";
import { FaStar } from 'react-icons/fa'
import _ from 'lodash';
import './Task.scss';

const Task = () => {

    const [board, setBoard] = useState([]);

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);

    useEffect(() => {
        let fetchTaskAPI = async () => {
            let params = {
                model: "project.task",
                method: "search_read",
                args: [
                    [],
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

            setBoard(dataTask);


        }
        fetchTaskAPI();
    }, []);

    return (
        <>
            <div>
                {console.log(board)}
                <div className='trello-master'>
                    <nav className='navbar app'>Task</nav>
                    <nav className='navbar board'>Column</nav>
                    <div className='board-columns'>
                        {board && board.length > 0 && board.map((item, index) => {
                            return (
                                <div className='column' key={item.id}>
                                    <header>{item.stage_id[1]}</header>
                                    <div className="card-list">
                                        <div className="card-item">
                                            <a href="/detail">
                                                <header className="header-card">
                                                    <span className='title-card'>{item.name}</span>
                                                    <span>
                                                        {[...Array(3)].map((star, i) => {

                                                            const ratingValue = i + 1;

                                                            return (
                                                                <label>
                                                                    <input
                                                                        type='radio'
                                                                        name='rating'
                                                                        value={ratingValue}
                                                                        onClick={() => setRating(ratingValue)}
                                                                    />
                                                                    <FaStar
                                                                        className='star'
                                                                        color={ratingValue <= (hover || rating) ? "#ffc107" : "#e4e5e9"}
                                                                        onMouseEnter={() => setHover(ratingValue)}
                                                                        onMouseLeave={() => setHover(null)}
                                                                    />
                                                                </label>
                                                            )
                                                        })}
                                                    </span>
                                                </header>
                                            </a>
                                            <span><i className="fa fa-circle icon"></i>
                                                {item.project_id[1]}
                                            </span>
                                            <span><i className="fa fa-circle icon"></i>
                                                {item.user_id[1]}
                                            </span>
                                            <div>
                                                <span>
                                                    <a className="fa fa-paper-plane-o" href="/next"></a>
                                                </span>
                                                <span>
                                                    <a className="fa fa-check-square-o" href="/check"></a>
                                                </span>
                                                <span className="avatar fa fa-circle">{item.checklist_task_instance_ids.length}</span>
                                                <span className="avatars fa fa-angle-right"></span>
                                            </div>
                                        </div>
                                    </div>
                                    <footer>
                                        <div className="footer-action">
                                            <i className="fa fa-plus icon"></i> Add another card
                                        </div>
                                    </footer>
                                </div>


                            )
                        })}

                        {/* <div className='column'>
                            <header>Todo</header>
                            <ul>
                                <li>
                                    <img src='https://amia.vn/wp-content/uploads/2017/10/tranh-phong-canh-nuoc-ngoai-ngoi-nha-mo-uoc-654.jpg' />
                                </li>
                                <li>đasdsđ</li>
                                <li>ggcxvx</li>
                            </ul>
                            <footer>Add another card</footer>
                        </div> */}
                    </div>

                </div>
            </div>
        </>
    )
}
export default Task;
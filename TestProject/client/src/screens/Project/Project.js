import React, { useEffect, useState } from "react";
import service from "../../service/axios";
import './Project.scss';
import { FaStar } from "react-icons/fa";
import NavBar from "../Navbar";

const HomeScreen = () => {

    const [board, setBoard] = useState({});

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);

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

            let data = response && response.data.result ? response.data.result : [];

            setBoard(data);

        };
        fetchAPI();

    }, []);

    return (
        <>
            {console.log(board)}
            <div>
                <div className="project-card">
                    <nav><NavBar /></nav>
                    <nav className="navbar board">Project</nav>
                    <div className="project-columns">
                        {board && board.length > 0 && board.map(item => {
                            return (
                                <a className="project" href="/task" key={item.id}>
                                    <header>
                                        <span className="span_star">
                                            {[...Array(1)].map((star, i) => {

                                                const ratingValue = i + 1;

                                                return (
                                                    <label key={i}>
                                                        <input
                                                            type='radio'
                                                            name='rating'
                                                            value={ratingValue}
                                                            onClick={() => setRating(ratingValue)}
                                                        />
                                                        <FaStar
                                                            className='star'
                                                            color={ratingValue <= (hover || rating) ? "#ffc107" : "#888888"}
                                                            onMouseEnter={() => setHover(ratingValue)}
                                                            onMouseLeave={() => setHover(null)}
                                                        />
                                                    </label>
                                                )
                                            })}
                                        </span>
                                        <span>{item.name}</span>
                                    </header>
                                    <ul>
                                        <div>{item.user_id[1]}</div>
                                        <div>(Đang thực hiện)</div>
                                        <span>{item.tasks.length} Tasks</span>
                                        <span className="scss">Bảng chấm công</span>
                                    </ul>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </div>

        </>

    );
}
export default HomeScreen;
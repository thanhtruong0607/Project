import React, { useEffect, useState } from "react";
import service from "../../service/axios";
import './Project.scss';
import { FaStar } from "react-icons/fa";
import NavBar from "../Navbar";

const HomeScreen = () => {

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

            console.log(`3 -------`, response);

            return response.data;


        };
        fetchAPI();

    }, []);

    return (
        <>
            <div>
                <div className="project-card">
                    <nav><NavBar /></nav>
                    <nav className="navbar board">Project</nav>
                    <div className="project-columns">
                        <a className="project" href="/task">
                            <header>
                                <span className="span_star">
                                    {[...Array(1)].map((star, i) => {

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
                                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#888888"}
                                                    onMouseEnter={() => setHover(ratingValue)}
                                                    onMouseLeave={() => setHover(null)}
                                                />
                                            </label>
                                        )
                                    })}
                                </span>
                                <span>XBOSS MOBILE ERP</span>
                            </header>
                            <ul>
                                <div>Nguyễn Thành Đông</div>
                                <div>(Đang thực hiện)</div>
                                <span>Tasks</span>
                                <span>Bảng chấm công</span>
                            </ul>
                        </a>
                        <a className="project" href="/task">
                            <header>
                                <span className="span_star">
                                    {[...Array(1)].map((star, i) => {

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
                                                    color={ratingValue <= (hover || rating) ? "#ffc107" : "#888888"}
                                                    onMouseEnter={() => setHover(ratingValue)}
                                                    onMouseLeave={() => setHover(null)}
                                                />
                                            </label>
                                        )
                                    })}
                                </span>
                                <span>XBOSS MOBILE ERP</span>
                            </header>
                            <ul>
                                <div>Nguyễn Thành Đông</div>
                                <div>(Đang thực hiện)</div>
                                <span>Tasks</span>
                                <span>Bảng chấm công</span>
                            </ul>
                        </a>

                    </div>
                </div>
            </div>

        </>

    );
}
export default HomeScreen;
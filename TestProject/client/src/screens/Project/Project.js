import React, { useEffect, useState } from "react";
import service from "../../service/axios";
import './Project.scss';
import { FaStar } from "react-icons/fa";

const HomeScreen = () => {

    const [rating, setRating] = useState(null);

    const [hover, setHover] = useState(null);

    return (
        <div>
            {/* <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/project"><img alt='Logo'
                    src='https://www.xboss.com/web/image/res.company/3/logo?unique=cecfb71'>
                </img></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/task"> Task </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/">Login</a>
                        </li>
                    </ul>
                </div>
            </nav> */}
            <div className="project-card">
                <nav className="navbar app">
                    <a href="/">Login</a>
                </nav>
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
    );
}
export default HomeScreen;
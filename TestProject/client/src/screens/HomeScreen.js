import React, { useEffect } from "react";
import service from "../service/axios";

const HomeScreen = () => {

    return (
        <div>
            <nav className="navbar navbar-expand-lg shadow-lg p-3 mb-5 bg-white rounded">
                <a className="navbar-brand" href="/"><img alt='Logo'
                    src='https://www.xboss.com/web/image/res.company/3/logo?unique=cecfb71'>
                </img></a>

                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav ms-auto">
                        <li className="nav-item active">
                            <a className="nav-link" href="/project"> Project </a>
                        </li>

                        <li className="nav-item active">
                            <a className="nav-link" href="/all"> All Tasks</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/login">Login</a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="text-center">
                <h1>Home</h1>
            </div>
        </div>
    );
}
export default HomeScreen;
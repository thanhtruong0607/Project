import React, { useState, useEffect } from "react";
import './StatusBar.scss'

const StatusBar = ({ stages }) => {
    return (
        <nav className="form-status navbar-expand-lg shadow-lg p-2 mb-4 rounded">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="btn o_arrow_button btn-success todo " type="button" >
                            {stages[1]}
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default StatusBar;
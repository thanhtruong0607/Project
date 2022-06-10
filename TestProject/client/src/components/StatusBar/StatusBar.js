import React from "react";
import './StatusBar.scss'

const StatusBar = () => {
    return (
        <nav className="form-status navbar-expand-lg shadow-lg p-2 mb-4 rounded">
            <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="btn o_arrow_button btn-secondary " type="button">
                            NEW
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn o_arrow_button btn-secondary " type="button">
                            IMPLEMENTING
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn o_arrow_button btn-secondary " type="button">
                            REVIEW CODE
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn o_arrow_button btn-secondary " type="button">
                            BETA TESTING
                        </a>
                    </li>
                    <li className="nav-item">
                        <a className="btn o_arrow_button btn-secondary " type="button">
                            DEVELOPER TESTING
                        </a>
                    </li>
                </ul>
            </div>
        </nav>

    )
}

export default StatusBar;
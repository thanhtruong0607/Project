
import React from "react";


const NavBar = () => {
    return (

        <nav className="navbar navbar-expand-lg shadow-lg p-2 mb-4 bg-dark rounded">
            <a className="navbar-brand" href="/project"><img alt='Logo'
                src='https://www.xboss.com/web/image/res.company/3/logo?unique=cecfb71'>
            </img></a>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item">
                        <a className="nav-link" href="/task"> Task </a>
                    </li>

                    <li className="nav-item">
                        <a className="nav-link" href="/">Back</a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default NavBar;
import React from 'react'
import { Link } from 'react-router-dom'

export default props =>
    <ul>
        <li>
            <Link className="link" to="/profile">profile</Link>
        </li>
        <li>
            <Link className="link" to="/technical-skills">technical skills</Link>
        </li>
        <li>
            <Link className="link" to="/experience">experience</Link>
        </li>
        <li>
            <Link className="link" to="/education">education</Link>
        </li>
        <li>
            <Link className="link" to="/">contact</Link>
        </li>
    </ul>
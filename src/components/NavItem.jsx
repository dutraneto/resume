import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem'

export default props =>
    <ul>
        <li>
            <Link className="link" to="/">about</Link>
        </li>
        <li>
            <Link className="link" to="/">skills</Link>
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
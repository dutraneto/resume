import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem'

export default props =>
    <ul>
        <li>
            <Link to="/">about</Link>
        </li>
        <li>
            <Link to="/">skills</Link>
        </li>
        <li>
            <Link to="/">experience</Link>
        </li>
        <li>
            <Link to="/">education</Link>
        </li>
        <li>
            <Link to="/">contact</Link>
        </li>
    </ul>
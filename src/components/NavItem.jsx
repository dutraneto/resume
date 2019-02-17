import React from 'react'
import { Link } from 'react-router-dom'
import './NavItem'

export default props =>
    <ul>
        <li>
            <Link class="link" to="/">about</Link>
        </li>
        <li>
            <Link class="link" to="/">skills</Link>
        </li>
        <li>
            <Link class="link" to="/">experience</Link>
        </li>
        <li>
            <Link class="link" to="/">education</Link>
        </li>
        <li>
            <Link class="link" to="/">contact</Link>
        </li>
    </ul>
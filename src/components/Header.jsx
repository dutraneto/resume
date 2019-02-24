import './Header.scss'
import React from 'react'
import Nav from './Nav'

export default props =>
    <header className="header">
        <h1>{props.author.name}</h1>
        <p>{props.author.role}</p>

        <Nav className="nav" />
    </header>


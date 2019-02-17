import './Header.scss'
import React from 'react'
import Nav from './Nav'

export default props =>
    <header className="header">
        <h1>{props.name}</h1>
        <p>{props.position}</p>

        <Nav className="nav" />
    </header>


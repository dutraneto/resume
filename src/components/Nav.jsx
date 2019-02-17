import './Nav.scss'
import React from 'react'
import NavItem from './NavItem'

export default props =>
    <nav className="nav">
        <NavItem {...props}/>
    </nav>
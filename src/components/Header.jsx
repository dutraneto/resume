import './Header.scss'
import React from 'react'
import Nav from './Nav'


export default props => {
    let {name, role} = props.author
    console.log(name, role)
    return (
        <header className="header">

            <h1>{name}</h1>
            <p>{role}</p>

            <Nav className="nav" {...props} />
        </header>
    )
}



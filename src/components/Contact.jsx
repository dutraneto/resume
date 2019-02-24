import React from 'react'
import './Contact.scss'
import Icons from './Icons'

export default props =>
    <aside className="contact">
        <div className="about">
            <h2 className="skew">about me</h2>
        </div>
        <p>{props.author.address}</p>
        <p>{props.author.phone}</p>
        <p><a href="mailto:contact@dutraneto.com">{props.author.email}</a></p>
        <p>
            <a href="https://dutraneto.com/portfolio"
               target="_blank"
               rel="noopener noreferrer">
               {props.author.website}
            </a>
        </p>

        <Icons {...props}/>

        <div className="about">
            <h2 className="skew">skill Set</h2>
        </div>
    </aside>
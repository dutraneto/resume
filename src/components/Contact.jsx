import React from 'react'
import './Contact.scss'
import Icons from './Icons'

export default props =>
    <aside className="contact">
        <div className="about">
            <h2 className="skew">about me</h2>
        </div>
        <p>420.2401 Gloucester St, Ottawa, ON, CA</p>
        <p>+1 (613)400.4801</p>
        <p><a href="mailto:contact@dutraneto.com">contact@dutraneto.com</a></p>
        <p><a href="https://dutraneto.com/portfolio" target="_blank" rel="noopener noreferrer">https://dutraneto.com/portfolio</a></p>

        <Icons />

        <div className="about">
            <h2 className="skew">skill Set</h2>
        </div>
    </aside>
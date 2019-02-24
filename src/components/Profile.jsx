import React from 'react'
import './Profile.scss'
import img from '../assets/img/author-image.png'

export default props =>
    <aside className="profile">
        <figure className="img">
            <img src={img} alt=""/>
        </figure>
        <p>
            {props.author.greeting}
        </p>
    </aside>
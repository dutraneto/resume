import React from 'react'
import './Profile.scss'
import img from '../assets/img/author-image.png'

export default props =>
    <aside className="profile">
        <figure className="img">
            <img src={img} alt=""/>
        </figure>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempore quaerat eos possimus, pariatur, eius quisquam non eveniet porro fugit facere eum, corrupti adipisci distinctio ad. Minus repellendus officia voluptatem!Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eaque tempore quaerat eos possimus, pariatur, eius quisquam non eveniet porro fugit facere eum, corrupti adipisci distinctio ad. Minus repellendus officia voluptatem!</p>
    </aside>
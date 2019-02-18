import React from 'react'
import './Profile.scss'
import img from '../assets/img/author-image.png'

export default props =>
    <aside className="profile">
        <figure className="img">
            <img src={img} alt=""/>
        </figure>
        <p>Hi, my name is José Dutra. My passion for programming have got me following a new career
            change as a Web Developer. My interest programming languages, such as JavaScript,
            droves me specialising currently in Front-end Development.
            I have experience building and maintaining websites and a great knowledge in responsive, mobile-first development as well.
            My solid understanding of HTML5, CSS3 and JavaScript has strengthened my ability to produce a coded website from a PSD or mockups.
        </p>
    </aside>
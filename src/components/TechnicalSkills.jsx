import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'

export default props =>
    <section className="cv">
        <div className="container">

            <h2 className="h2">technical skills</h2>
            <div className="line"></div>
        </div>
        <article>
            <div id="skills" className="role-container">
                <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Experience building and maintaining websites</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Strong understanding of HTML5, CSS3 and JavaScript</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Great knowledge in responsive, mobile-first development</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Ability to produce a coded website from a PSD or mockups</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Experience with CSS frameworks and preprocessors like Bootstrap and SASS</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Solid understanding of Git</p>
            </div>
        </article>
    </section>
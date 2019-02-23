import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'

export default props =>
    <section className="cv">
        <div className="container">

            <h2 className="h2">profile</h2>
            <div className="line"></div>
        </div>
        <article>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Versatile Front-end Web Developer with 2+ years of experience leveraging JavaScript to build UI interfaces</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Strong interpersonal and communication skills; collaborative team member</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Comfortable to work independently as well as part of a team</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Solid analysis, troubleshooting and problem-solving skills</p>
            </div>
        </article>



    </section>
import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'

// TODO: Refact
export default props =>
    <section className="cv">
        <div className="container">
        {/* EMPLOYMENT */}
            <h2 className="h2">employment experience</h2>
            <div className="line"></div>
        </div>
        <article>
            <h3 className="h3">Front-end Developer, Freelancer <span className="year">2016 - Current</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Translated design UX wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Developed mobile and responsive websites</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Implemented a logo for a Canadian company using CSS</p>
            </div>
        </article>
        <article>
            <h3 className="h3">Front-end Web Developer at Brazilian Army Forces, Brazil <span className="year">2016 to 2017</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Developed an IoT system for monitoring weather conditions in a storehouse of ammunition using prototype boards and C++</p>
            </div>
        </article>
        <article>
            <h3 className="h3">Front-end Developer, IFPI, Brazil <span className="year">2016</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Implemented a Python Backend integrated with Django Framework and Postgres database allowing patients to search for doctors, clinics and medical specialities in a given region</p>
            </div>
        </article>
        {/* VOLUNTEERING */}
        <div className="container">
            <h2 className="h2">volunteering</h2>
            <div className="line"></div>
        </div>
        <article>
            <h3 className="h3">Voluntary Work at Lifecentre Church, Ottawa, ON <span className="year">Jan 2019 - Current</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <FaCircle/>
                </IconContext.Provider>
                <p className="p">Collaborated to IT Support and Check-in Team solving system problems and subscribing new users</p>
            </div>
        </article>

    </section>
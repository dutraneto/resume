import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { TiMediaRecord } from 'react-icons/ti'

export default props =>
    <section className="experience">
        <div className="container">
            <h2 className="h2">experience</h2>
            <div className="line"></div>
        </div>
        <article>
            <h3 className="h3">Front-end Developer, Freelancer <span className="year">2016 - Current</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <TiMediaRecord/>
                </IconContext.Provider>
                <p className="p">Translated design UX wireframes and mockups into responsive, interactive features, using HTML/CSS and JavaScript</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <TiMediaRecord/>
                </IconContext.Provider>
                <p className="p">Developed mobile and responsive websites</p>
            </div>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <TiMediaRecord/>
                </IconContext.Provider>
                <p className="p">Implemented a logo for a Canadian company using CSS</p>
            </div>
        </article>
        <article>
            <h3 className="h3">Front-end Web Developer at Brazilian Army Forces, Brazil <span className="year">2016 to 2017</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <TiMediaRecord/>
                </IconContext.Provider>
                <p className="p">Developed an IoT system for monitoring weather conditions in a storehouse of ammunition using prototype boards and C++</p>
            </div>
        </article>
        <article>
            <h3 className="h3">Front-end Developer, Freelancer <span className="year">2016 - Current</span></h3>
            <div className="role-container">
                <IconContext.Provider value={{ className: "bullet" }}>
                    <TiMediaRecord/>
                </IconContext.Provider>
                <p className="p">Implemented a Python Backend integrated with Django Framework and Postgres database allowing patients to search for doctors, clinics and medical specialities in a given region</p>
            </div>

        </article>

    </section>
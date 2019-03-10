import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'
import jobs from '../state/experiences'

// TODO: Refact
console.log(jobs)

export default props =>
    <section className="cv">
        <div className="container">
        {/* EMPLOYMENT */}
            <h2 className="h2">employment experience</h2>
            <div className="line"></div>
        </div>
        <article id="experience">
            {
                jobs.map((job, index) => (
                    <div key={index}>
                        <h3 className="h3">{job.position}, {job.company}, {job.location}<span className="year">{job.date}</span></h3>
                            {
                                job.duties.map((duty, i) => (
                                    <div key={i} className="role-container">
                                        <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                                            <FaCircle/>
                                        </IconContext.Provider>
                                        <p className="p">{duty}</p>
                                    </div>
                                ))
                            }
                    </div>
                ))
            }
        </article>
    </section>
import React from 'react'
// import resume from '../assets/img/resume.png'
import './Download.scss'

export default props =>
    <section className="cv">
        <div className="container">
            <h2 className="h2">Download this resume</h2>
            <div className="line"></div>
        </div>
        <div className="resume">
            <a  href="../assets/img/jose_dutra_resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled="false"
            >.PDF</a>
        </div>
    </section>
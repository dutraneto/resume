import React from 'react'
import './Download.scss'
import author from '../state/author'

export default class Download extends React.Component {
    state = {
        author: author
    }
    render() {
        return (
            <section className="cv">
        <div className="container">
            <h2 className="h2">Download this resume</h2>
            <div className="line"></div>
        </div>
        <div className="resume" id="download">
            <a  href={this.state.author.resume}
                target="_blank"
                rel="noopener noreferrer"
                aria-disabled="false"
            >.PDF</a>
        </div>
    </section>
        )
    }
}
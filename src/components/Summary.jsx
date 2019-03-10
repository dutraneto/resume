import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'
import skillSets from '../state/skillSets'

export default class Summary extends React.Component {
    state = {
        skillSets: skillSets,
    }
    render () {
        return (
            <section className="cv">
            <div className="container">
                <h2 className="h2">profile</h2>
                <div className="line"></div>
            </div>
            <article id="profile">
                {
                    this.state.skillSets.skillSets.softSkills.map((skill, index) => {
                        return (
                            <div className="role-container" key={index}>
                                <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                                    <FaCircle/>
                                </IconContext.Provider>
                                <p className="p">{skill}</p>
                            </div>
                        )
                        })
                }
            </article>
         </section>
        )
    }
}

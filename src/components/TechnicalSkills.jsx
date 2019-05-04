import React from 'react'
import './Experience.scss'
import {IconContext} from 'react-icons'
import { FaCircle } from 'react-icons/fa'
import skillSets from '../state/skillSets'

export default class TechnicalSkills extends React.Component {
    static defaultProps = {
        techSkills: [...skillSets.skillSets.techSkills]
    }
    render() {
        return (
            <section className="cv">
                <div className="container">
                    <h2 className="h2">technical skills</h2>
                    <div className="line"></div>
                </div>

                <article>
                    {
                        this.props.techSkills.map((techSkill, index) => {
                            return (
                                <div key={index} id="skills">
                                    <div className="role-container">
                                        <IconContext.Provider value={{ className: "bullet", size: "1em" }}>
                                            <FaCircle />
                                        </IconContext.Provider>
                                        <p className="p">{techSkill}</p>
                                    </div>
                                </div>
                            )
                        })
                    }
                </article>
            </section>
        )
    }
}
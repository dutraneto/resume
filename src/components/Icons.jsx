import React, {Component} from 'react'
import { Link } from 'react-router-dom'
import {IconContext} from 'react-icons'
import {FaLinkedin, FaGitlab, FaFacebook, FaGithub, FaCodepen} from 'react-icons/fa'
import './Icons.scss'

class Icons extends Component {
    render() {
        return(
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <ul className="icons">
                    <li>
                        <Link className="in" to="/"><FaLinkedin /></Link>
                    </li>
                    <li>
                        <Link className="gitlab" to="/"><FaGitlab /></Link>
                    </li>
                    <li>
                        <Link className="github" to="/"><FaGithub /></Link>
                    </li>
                    <li>
                        <Link className="codepen" to="/"><FaCodepen /></Link>
                    </li>
                    <li>
                        <Link className="face" to="/"><FaFacebook /></Link>
                    </li>
                </ul>
            </IconContext.Provider>
        )
    }
}

export default Icons
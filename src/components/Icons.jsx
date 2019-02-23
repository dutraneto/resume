import React, {Component} from 'react'
import {IconContext} from 'react-icons'
import {FaLinkedin, FaGitlab, FaFacebook, FaGithub, FaCodepen} from 'react-icons/fa'
import './Icons.scss'

class Icons extends Component {
    render() {
        return(
            <IconContext.Provider value={{ className: 'react-icons' }}>
                <ul className="icons">
                    <li>
                        <a className="in" href="https://www.linkedin.com/in/dutraneto/" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    </li>
                    <li>
                        <a className="gitlab" href="https://gitlab.com/users/dutraneto/projects" target="_blank" rel="noopener noreferrer"><FaGitlab /></a>
                    </li>
                    <li>
                        <a className="github" href="https://github.com/dutraneto" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    </li>
                    <li>
                        <a className="codepen" href="https://codepen.io/dutraneto/" target="_blank" rel="noopener noreferrer"><FaCodepen /></a>
                    </li>
                    <li>
                        <a className="face" href="https://www.facebook.com/dudutraneto" target="_blank" rel="noopener noreferrer"><FaFacebook /></a>
                    </li>
                </ul>
            </IconContext.Provider>
        )
    }
}

export default Icons
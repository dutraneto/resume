import React from 'react'
import {IconContext} from 'react-icons'
import {FaLinkedin, FaGitlab, FaFacebook, FaGithub, FaCodepen} from 'react-icons/fa'
import './Icons.scss'

export default props =>
    <IconContext.Provider value={{ className: 'react-icons' }}>
        <ul className="icons">
            <li>
                <a className={props.socialProfiles.classNames.linkedin}
                    href={props.socialProfiles.links.linkedin}
                    target="_blank" rel="noopener noreferrer">
                    <FaLinkedin/>
                </a>
            </li>
            <li>
                <a className={props.socialProfiles.classNames.gitlab}
                    href={props.socialProfiles.links.gitlab}
                    target="_blank" rel="noopener noreferrer">
                    <FaGitlab/>
                </a>
            </li>
            <li>
                <a className={props.socialProfiles.classNames.github}
                    href={props.socialProfiles.links.github}
                    target="_blank" rel="noopener noreferrer">
                    <FaGithub/>
                </a>
            </li>
            <li>
                <a className={props.socialProfiles.classNames.codepen}
                    href={props.socialProfiles.links.codepen}
                    target="_blank" rel="noopener noreferrer">
                    <FaCodepen/>
                </a>
            </li>
            <li>
                <a className={props.socialProfiles.classNames.facebook}
                    href={props.socialProfiles.links.facebook}
                    target="_blank" rel="noopener noreferrer">
                    <FaFacebook/>
                </a>
            </li>
        </ul>
    </IconContext.Provider>

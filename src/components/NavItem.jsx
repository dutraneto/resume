import React from 'react'
import { HashLink as Link } from 'react-router-hash-link'

export default props =>
    <ul>
        {
            props.paths.path.map((item, i) => {
                return (
                    <li key={i}>
                        <Link className="link"
                              to={`${item}#${item}`}
                        >
                            {item}
                        </Link>
                    </li>
                )
            })
        }
    </ul>
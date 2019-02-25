import React from 'react'
import { Link } from 'react-router-dom'

export default props =>

    <ul>
        {
            props.paths.path.map((item, i) => {
                return (
                    <li key={i}>
                        <Link className="link"
                              to={item.split(" ").join("-")}
                        >
                            {item.split(" ").join(" ")}
                        </Link>
                    </li>
                )
            })
        }
    </ul>
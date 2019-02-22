import React from 'react'
import './Skills.scss'
import './Icons.scss'
import { Circle } from 'rc-progress'
import {FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa'

export default class Skills extends React.Component {
    constructor() {
        super()
        this.state = {
            percent: 0,
        }
        this.increase = this.increase.bind(this);
    }

    increase() {
        const percent = this.state.percent + 1;
        if (percent >= 100) {
            clearTimeout(this.tm);
            return;
        }
        this.setState({ percent });
        this.tm = setTimeout(this.increase, 15);
    }
    componentDidMount() {
        this.increase();
    }

    render() {
        // '#1572B6', '#F7DF1E', '#61DAFB'
        // "FaCss3Alt", "FaJs", "FaReact"
        const circles = [
            {
                id: 1,
                className: "html",
                color: '#E34F26',
                svg: FaHtml5,
                containerStyle: {width: '120px'},
                circleContainerStyle: {
                    width: '120px',
                    height: '120px',
                    position: 'relative'
                },
                svgStyle: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                }
            },
            {
                id: 2,
                className: "css",
                color: '#1572B6',
                svg: FaCss3Alt,
                containerStyle: {width: '120px'},
                circleContainerStyle: {
                    width: '120px',
                    height: '120px',
                    position: 'relative'
                },
                svgStyle: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                }
            },
            {
                id: 3,
                className: "js",
                color: '#F7DF1E',
                svg: FaJs,
                containerStyle: {width: '120px'},
                circleContainerStyle: {
                    width: '120px',
                    height: '120px',
                    position: 'relative'
                },
                svgStyle: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                }
            },
            {
                id: 4,
                className: "react",
                color: '#61DAFB',
                svg: FaReact,
                containerStyle: {width: '120px'},
                circleContainerStyle: {
                    width: '120px',
                    height: '120px',
                    position: 'relative'
                },
                svgStyle: {
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '4rem',
                    height: '4rem',
                }
            },

        ]
        return (
            <div className="skills">
            {/* TODO: refactoring to DRY */}
                {
                    circles.map(function (circle) {

                        return (
                            <div key={circle.id} style={circle.circleContainerStyle}>
                                <circle.svg style={circle.svgStyle} className={circle.className}/>
                                <Circle style={circle.containerStyle}
                                        percent={this.state.percent}
                                        strokeWidth="10"
                                        trailWidth="10"
                                        strokeLinecap="square"
                                        strokeColor={circle.color}
                                />
                            </div>
                        )
                    })
                }
                {/* <div style={circleContainerStyle}>
                    <FaHtml5 style={svgStyles} className="html"/>
                    <Circle style={containerStyle}
                        // percent={this.state.percent}
                        percent={percent/1.2}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={html}
                    />
                </div> */}
                {/* <div style={circleContainerStyle}>
                    <FaCss3Alt style={svgStyles} className="css"/>
                    <Circle style={containerStyle}
                        // percent={this.state.percent}
                        percent={percent/1.2}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={css}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <FaJs style={svgStyles} className="js"/>
                    <Circle style={containerStyle}
                        // percent={this.state.percent}
                        percent={percent/1.9}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={js}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <FaReact style={svgStyles} className="react"/>
                    <Circle style={containerStyle}
                        // percent={this.state.percent}
                        percent={percent/10}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={react}
                    />
                </div> */}
            </div>
        )
    }
}
import React from 'react'
import './Skills.scss'
import './Icons.scss'
import { Circle } from 'rc-progress'
import {FaHtml5, FaCss3Alt, FaJs, FaReact} from 'react-icons/fa'

export default class Skills extends React.Component {
    constructor() {
        super()
        this.state = {
            percent: [70, 80, 50, 10],
            html: '#E34F26',
            css: '#1572B6',
            js: '#F7DF1E',
            react: '#61DAFB',
        }
    }

    // componentDidMount() {
    //     this.increase();
    // }

    // increase() {
    //     const percent = this.state.percent + 1;
    //     if (percent >= 100) {
    //         clearTimeout(this.tm);
    //         return;
    //     }
    //     this.setState({ percent });
    //     this.tm = setTimeout(this.increase, 10);
    // }

    render() {
        const { percent, html, css, js, react } = this.state;
        const containerStyle = {
            width: '120px',
        };
        const circleContainerStyle = {
            width: '120px',
            height: '120px',
            position: 'relative'
        };

        const svgStyles = {
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '4rem',
            height: '4rem',
        }

        return (
            <div className="skills">
                <div style={circleContainerStyle}>
                    <FaHtml5 style={svgStyles} className="html"/>
                    <Circle style={containerStyle}
                        percent={percent[0]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={html}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <FaCss3Alt style={svgStyles} className="css"/>
                    <Circle style={containerStyle}
                        percent={percent[1]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={css}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <FaJs style={svgStyles} className="js"/>
                    <Circle style={containerStyle}
                        percent={percent[2]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={js}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <FaReact style={svgStyles} className="react"/>
                    <Circle style={containerStyle}
                        percent={percent[3]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={react}
                    />
                </div>
            </div>
        )
    }
}
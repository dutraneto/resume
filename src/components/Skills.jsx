import React from 'react'
import './Skills.scss'
import { Circle } from 'rc-progress'

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
        };

        return (
            <div className="skills">
                <div style={circleContainerStyle}>
                    <Circle style={containerStyle}
                        percent={percent[0]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={html}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <Circle style={containerStyle}
                        percent={percent[1]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={css}
                    />
                </div>
                <div style={circleContainerStyle}>
                    <Circle style={containerStyle}
                        percent={percent[2]}
                        strokeWidth="10"
                        trailWidth="10"
                        strokeLinecap="square"
                        strokeColor={js}
                    />
                </div>
                <div style={circleContainerStyle}>
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
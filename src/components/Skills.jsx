import React from 'react'
import './Skills.scss'
import './Icons.scss'
import { Circle } from 'rc-progress'
import {classNames, colors, svgs, percents, containerStyle, circleContainerStyle, svgStyle} from '../state/circle'

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
        this.tm = setTimeout(this.increase, 10);
    }
    componentDidMount() {
        this.increase();
    }

    render() {
        // objs
        const circles = []
        for (let i in classNames) {
                const objTemp = {
                    percent: this.state.percent/percents[i],
                    className: classNames[i],
                    color: colors[i],
                    svg: svgs[i],
                    containerStyle: containerStyle,
                    circleContainerStyle: circleContainerStyle,
                    svgStyle: svgStyle
                }
                circles.push(objTemp)
        }
        return (
            <div className="skills">
                {
                    circles.map((circle, index) => {
                        return (
                            <div key={index} style={circle.circleContainerStyle}>
                                <circle.svg style={circle.svgStyle} className={circle.className}/>
                                <Circle style={circle.containerStyle}
                                        percent={circle.percent}
                                        strokeWidth="10"
                                        trailWidth="10"
                                        strokeLinecap="square"
                                        strokeColor={circle.color}
                                />
                            </div>
                        )
                    })
                }

            </div>
        )
    }
}
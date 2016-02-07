'use strict';

import React, { Component } from 'react'
import Slide from './slide'

export default class Slider extends Component {
    constructor(props) {
        super(props);

        this.state = {
            centerSlide: 0,
            leftDisabled: true,
            rightDisabled: false
        }
    }
    handleLeftClick() {
        const centerSlide = this.state.centerSlide - 1;
        this.setState({
            centerSlide: centerSlide,
            leftDisabled: centerSlide === 0 ? true : false,
            rightDisabled: false
        })
    }
    handleRightClick() {
        const centerSlide = this.state.centerSlide + 1;
        this.setState({
            centerSlide: centerSlide,
            leftDisabled: false,
            rightDisabled: centerSlide === this.props.slides.length - 1 ? true : false
        })
    }
    render() {
        return (
            <div className="slider">
                <div className="slider-content">
                    {this.props.slides.map((slideContent, index) => {
                        const Content = slideContent;
                        return (
                            <Slide key={index} position={index - this.state.centerSlide}>
                                <Content />
                            </Slide>
                        )
                    })}
                </div>
                <div className="left-arrow">
                    <button
                        disabled={this.state.leftDisabled}
                        onClick={e => this.handleLeftClick()}
                        dangerouslySetInnerHTML={{__html: '<'}}
                    />
                </div>
                <div className="right-arrow">
                    <button
                        disabled={this.state.rightDisabled}
                        onClick={e => this.handleRightClick()}
                        dangerouslySetInnerHTML={{__html: '>'}}
                    />
                </div>
            </div>
        )
    }
}

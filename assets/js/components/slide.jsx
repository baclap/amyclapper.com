'use strict';

import React, { Component } from 'react'

export default class Slide extends Component {
    render() {
        return (
            <div className="slide" style={{transform: 'translateX(' + this.props.position * 100 + '%)'}}>
                {this.props.children}
            </div>
        )
    }
}
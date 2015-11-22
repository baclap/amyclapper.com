'use strict';

import React, { Component } from 'react'

export default class BlocksContainer extends Component {
    render() {
        return (
            <div className="blocks-container-outer">
                <div className="blocks-container-inner">
                    {this.props.children}
                </div>
            </div>
        )
    }
}

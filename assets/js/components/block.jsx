'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Block extends Component {
    render() {
        return (
            <Link className="block" to={this.props.to}>{this.props.children}</Link>
        )
    }
}

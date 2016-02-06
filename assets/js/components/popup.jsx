'use strict';

import React, {Component} from 'react'

export default class Popup extends Component {
    render() {
        return (
            <div>
                <div className="backdrop" />
                <div onClick={e => this.props.history.goBack()} className="popup-container">
                    <div className="popup">
                        {this.props.children}
                    </div>
                </div>
            </div>
        )
    }
}

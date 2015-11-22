'use strict';

import React, { Component } from 'react'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="logo">Amy Clapper</span>
                <nav className="nav">
                    <ul>
                        <li className="link">
                            <a href="#">About Me</a>
                        </li>
                        <li className="link">
                            <a href="#">Contact Info</a>
                        </li>
                        <li className="link">
                            <a href="#">Download Portfolio</a>
                        </li>
                    </ul>
                </nav>
            </header>
        )
    }
}

'use strict';

import React, { Component } from 'react'
import { Link } from 'react-router'

export default class Header extends Component {
    render() {
        return (
            <header className="header">
                <span className="logo">
                    <Link to="/">AmyClapper</Link>
                </span>
                <nav className="nav">
                    <ul>
                        <li>
                            <a href="#">About Me</a>
                        </li>
                        <li className="divider">|</li>
                        <li>
                            <a href="#">Contact Info</a>
                        </li>
                        <li className="divider">|</li>
                        <li>
                            <a href="#">Download Portfolio</a>
                        </li>
                    </ul>
                </nav>
                <div className="hamburger-wrap">
                    <div className="hamburger">
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </header>
        )
    }
}

'use strict';

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import classnames from 'classnames'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            drawerOpen: false,
            showDrawerBackdrop: false
        }

        this._drawerTransitionEnd = this.drawerTransitionEnd.bind(this)
    }
    componentDidMount() {
        findDOMNode(this.refs.navUl).addEventListener('transitionend', this._drawerTransitionEnd)
    }
    componentWillUnmount() {
        findDOMNode(this.refs.navUl).removeEventListener('transitionend', this._drawerTransitionEnd)
    }
    drawerTransitionEnd() {
        if (!this.state.drawerOpen && this.state.showDrawerBackdrop) {
            this.setState({
                showDrawerBackdrop: false
            })
        }
    }
    toggleDrawer() {
        if (!this.state.drawerOpen) {
            this.setState({
                drawerOpen: true,
                showDrawerBackdrop: true
            })
        } else {
            this.setState({
                drawerOpen: false
            })
        }
    }
    handleNavClick(e) {
        if (
            this.state.drawerOpen
            && e.target.classList.contains('nav')
        ) {
            this.setState({drawerOpen: false})
        }
    }
    render() {
        return (
            <header className="header">
                <span className="logo">
                    <Link to="/">
                        <img src="/img/logo.svg" />
                    </Link>
                </span>
                <nav onClick={e => this.handleNavClick(e)}
                    className={classnames([
                        'nav',
                        {
                            'open': this.state.drawerOpen,
                            'show-backdrop': this.state.showDrawerBackdrop
                        }
                    ])}>
                    <ul ref="navUl">
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
                    <div className="hamburger" onClick={e => this.toggleDrawer()}>
                        <div />
                        <div />
                        <div />
                    </div>
                </div>
            </header>
        )
    }
}

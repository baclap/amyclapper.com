'use strict';

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import classnames from 'classnames'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
            mobileNavOpen: false,
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
        if (!this.state.mobileNavOpen && this.state.showDrawerBackdrop) {
            this.setState({
                showDrawerBackdrop: false
            })
        }
    }
    toggleDrawer() {
        if (this.state.mobileNavOpen) { // then close
            this.setState({
                mobileNavOpen: false
            })
            document.body.classList.remove('no-scroll')
        } else { // open
            this.setState({
                mobileNavOpen: true,
                showDrawerBackdrop: true
            })
            document.body.classList.add('no-scroll')
        }
    }
    handleNavClick(e) {
        // if backdrop was clicked then close, otherwise ignore
        if (
            this.state.mobileNavOpen
            && e.target.classList.contains('nav')
        ) {
            this.setState({mobileNavOpen: false})
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
                            'open': this.state.mobileNavOpen,
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
                        <li className="close">
                            <a href="javascript:void(0)" onClick={e => this.toggleDrawer()}>Close</a>
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

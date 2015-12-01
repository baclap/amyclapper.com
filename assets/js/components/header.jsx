'use strict';

import React, { Component } from 'react'
import { findDOMNode } from 'react-dom'
import { Link } from 'react-router'
import classnames from 'classnames'
import { actions } from '../flux'

export default class Header extends Component {
    constructor(props) {
        super(props)

        this.state = {
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
    componentWillReceiveProps(nextProps) {
        if (!this.props.mobileNavOpen && nextProps.mobileNavOpen) {
            this.setState({showDrawerBackdrop: true})
        }
    }
    drawerTransitionEnd() {
        if (!this.props.mobileNavOpen && this.state.showDrawerBackdrop) {
            this.setState({
                showDrawerBackdrop: false
            })
        }
    }
    toggleDrawer() {
        actions.toggleMobileNav()
    }
    handleNavClick(e) {
        if (
            this.props.mobileNavOpen
            && e.target.classList.contains('nav')
        ) {
            actions.closeMobileNav()
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
                            'open': this.props.mobileNavOpen,
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

'use strict';

import Block from './components/block'
import BlocksContainer from './components/blocks-container'
import Footer from './components/footer'
import Header from './components/header'

import classnames from 'classnames'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import React, { Component } from 'react'
import { render, findDOMNode } from 'react-dom'
import { Router, Route } from 'react-router'

class Main extends Component {
    render() {
        return (
            <div>
                <div className="layout-container">
                    <div className="layout-bar">
                        <Header />
                    </div>
                    <div className="layout-content">
                        <BlocksContainer>
                            <Block to="/section">Retail Design</Block>
                            <Block to="/section">Brand Development</Block>
                            <Block to="/section">Editorial</Block>
                            <Block to="/section">Typography</Block>
                            <Block to="/section">Abstract</Block>
                            <Block to="/section">Window Display</Block>
                            <Block to="/section">Hand Drawn To Digital</Block>
                            <Block to="/section">Set Design</Block>
                        </BlocksContainer>
                    </div>
                    <div className="layout-bar">
                        <Footer />
                    </div>
                </div>
                {this.props.children}
            </div>
        )
    }
}

class Popup extends Component {
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

render((
    <Router history={createBrowserHistory()}>
        <Route path="/" component={Main}>
            <Route path="section" component={Popup} />
        </Route>
    </Router>
), document.querySelector('#app'))

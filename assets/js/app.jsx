'use strict';

import { React, Base } from './components/base'
import { render, findDOMNode } from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import classnames from 'classnames'

class Main extends Base {
    render() {
        return (
            <div className="container">
                <header className="header">
                    <span className="logo">Amy Clapper</span>
                    <nav className="site-nav">
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
                <nav className="home-blocks">
                    <Link className="block" to="/section">Retail Design</Link>
                    <Link className="block" to="/section">Brand Development</Link>
                    <Link className="block" to="/section">Editorial</Link>
                    <Link className="block" to="/section">Typography</Link>
                    <Link className="block" to="/section">Abstract</Link>
                    <Link className="block" to="/section">Window Display</Link>
                    <Link className="block" to="/section">Hand Drawn To Digital</Link>
                    <Link className="block" to="/section">Set Design</Link>
                </nav>
                <footer className="footer">
                    <span className="copyright" dangerouslySetInnerHTML={{__html: '&copy; Copyright ' + new Date().getFullYear()}} />
                    <span className="divider">|</span>
                    <span className="created-by">Webpage created by <a href="http://brettclapper.com">Brett Clapper</a></span>
                </footer>
                {this.props.children}
            </div>
        )
    }
}

class Popup extends Base {
    render() {
        return (
            <div>
                <div className="backdrop" />
                <div onClick={this.props.history.goBack} className="popup-container">
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

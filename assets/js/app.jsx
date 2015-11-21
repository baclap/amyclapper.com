'use strict';

import { React, Base } from './components/base'
import { render, findDOMNode } from 'react-dom'
import { Router, Route, IndexRoute, Link } from 'react-router'
import createBrowserHistory from 'history/lib/createBrowserHistory'
import classnames from 'classnames'

class Main extends Base {
    render() {
        return (
            <div>
                <nav className="home-blocks">
                    <Link className="block" to="/section">Section</Link>
                    <Link className="block" to="/section">Section</Link>
                    <Link className="block" to="/section">Section</Link>
                    <Link className="block" to="/section">Section</Link>
                    <Link className="block" to="/section">Section</Link>
                    <Link className="block" to="/section">Section</Link>
                </nav>
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

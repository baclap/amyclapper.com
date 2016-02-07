'use strict';

import React, {Component} from 'react'
import { Link } from 'react-router'

export default class Popup extends Component {
    componentDidMount() {
        document.body.classList.add('no-scroll');
    }
    componentWillUnmount() {
        document.body.classList.remove('no-scroll');
    }
    handleOuterClick(e) {
        if (e.target === this.refs.container) {
            this.props.history.pushState('/')
        }
    }
    render() {
        return (
            <div>
                <div className="backdrop" />
                <div ref="container" onClick={e => this.handleOuterClick(e)} className="popup-container">
                    <section className="popup">
                        <header>
                            <h1>{this.props.title}</h1>
                        </header>
                        <main className="popup-content">
                            {this.props.children}
                        </main>
                        <Link to="/" className="close-x"><span dangerouslySetInnerHTML={{__html: "&times;"}} /></Link>
                    </section>
                </div>
            </div>
        )
    }
}

'use strict';

import React, { Component } from 'react'

export default class Footer extends Component {
    render() {
        return (
            <footer className="footer">
                <span className="copyright" dangerouslySetInnerHTML={{__html: '&copy; Copyright ' + new Date().getFullYear()}} />
                <span className="divider">|</span>
                <span className="created-by">Webpage created by <a href="http://brettclapper.com">Brett Clapper</a></span>
            </footer>
        )
    }
}

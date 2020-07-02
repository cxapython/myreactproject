// layout.js
import React, { Component } from 'react'
import Header from '../components/header'

export default class Layout extends Component {
    render() {
        const { children } = this.props
        return (
            <div>
                <Header />
                <div style={{ background: '#fff', padding: 24 }}>{children}</div>
            </div>
        )
    }
}
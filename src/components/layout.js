// layout.js
import React, { Component } from 'react'
import { connect } from 'dva';
import Header from '../components/header'

class Layout extends Component {
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

export default Layout;

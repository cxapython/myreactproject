// aaa.js
import React, { Component } from 'react'
import { connect } from 'dva'

class AAA extends Component {
    render() {
        return (
            <div>
               <h1>AAA</h1>
            </div>
        )
    }
}

AAA.propsTypes = {}
export default connect()(AAA)

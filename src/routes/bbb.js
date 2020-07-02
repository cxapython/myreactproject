// aaa.js
import React, { Component } from 'react'
import { connect } from 'dva'

@connect()
export default class BBB extends Component {
    render() {
        return (
            <div>
               <h1>这是另一个Tab</h1>
            </div>
        )
    }
}


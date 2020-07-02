// aaa.js
import React, { Component } from 'react'
import { connect } from 'dva'

@connect()
export default class AAA extends Component {
    render() {
        return (
            <div>
               <h1>这是一个Tab</h1>
            </div>
        )
    }
}



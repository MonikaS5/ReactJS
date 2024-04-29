import React, { Component } from 'react'

export class ElementVariable extends Component {
    constructor(props) {
        super(props)

        this.state = {
            logInn: false
        }
    }
    render() {

        let mytext;
        if (this.state.logInn) {
            mytext = <h2>This is Conditional rendering by ElementVariable</h2>
        } else {
            mytext = <h2>This is else block ElementVariable</h2>
        }
        return (
            <h1>{mytext}</h1>
        )
    }
}

export default ElementVariable
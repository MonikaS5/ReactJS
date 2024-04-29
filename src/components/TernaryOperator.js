import React, { Component } from 'react'

export class TernaryOperator extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn: true
      }
    }
  render() {
    return (
      this.state.logInn?<h2>I am True - TernaryOperator</h2>: <h2>False statement - TernaryOperator</h2>
    )
  }
}

export default TernaryOperator
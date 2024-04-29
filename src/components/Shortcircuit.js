import React, { Component } from 'react'

export class Shortcircuit extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn: true
      }
    }
  render() {
    return (
      this.state.logInn && <h2>Login Successful</h2>
    )
  }
}

export default Shortcircuit
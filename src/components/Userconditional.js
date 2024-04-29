import React, { Component } from 'react'

export class Userconditional extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         logInn: false
      }
    }
  render() {
    if(this.state.logInn){
        return <h3>User conditional Statement, true statement</h3>
    }else{
        return<h2>Hello World, False statement</h2>
    }
    
  }
}

export default Userconditional
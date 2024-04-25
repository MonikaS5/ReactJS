import React, { Component } from 'react'

 class ViewToCompntBind extends Component {
    constructor() { 
        super(); 
        this.state = { 
          subject: ""
        }; 
    }
    handleChange = event => { 
        this.setState({ 
          subject: event.target.value 
        }) 
      } 
  render() {
    return (
      <>
      <hr/>
      <h1>View to Component data Binding</h1>
      <div> 
        <h4 style={{ color: "#68cf48" }}>View to Component data Binding</h4> 
        <input placeholder="Enter Subject here" 
        onChange={this.handleChange}></input> 
        <p>This is <b>{this.state.subject}</b> Tutorial</p> 
  
      </div> 
      </>
    )
  }
}

export default ViewToCompntBind
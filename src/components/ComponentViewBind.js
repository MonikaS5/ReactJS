import React, { Component } from 'react'

 class ComponentViewBind extends Component {
    constructor() { 
        super(); 
        this.state = { 
          subject: "ReactJS"
        }; 
    }
  render() {
    return (
        <>
        <hr/>
        <h2>Component to View Data binding</h2>
        <div style={{ textAlign: "center" }}> 
        <h4 style={{ color: "#68cf48" }}>Component to View Binding</h4> 
        <p><b>{this.state.subject}</b> Tutorial</p> 
  
      </div> 
      </>
    )
  }
}

export default ComponentViewBind
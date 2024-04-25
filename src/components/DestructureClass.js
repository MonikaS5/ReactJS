import React, { Component } from 'react'

 class DestructureClass extends Component {
    
  render() {

    const{name, courseName}= this.props;
    return (
        <>
        
            <div>Destructuring in Class Component</div>
            
            <h2>Hello, My name is {name} and my course name is {courseName}</h2>

            <hr/>
    
        </>
    )
  }
}

export default DestructureClass
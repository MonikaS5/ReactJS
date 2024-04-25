import React, { Component } from 'react'

export class ArrayDestructClass extends Component {

  render() {
    
    const colors = ['Yellow', 'Green', 'Pink'];
    const [firstColor, secondColor, thirdColor] = colors;
    
    
    return (
        <>
        <div>
            <h1>Array Destructuring using Class component</h1>
        </div>
        <div>
            <h2>First Color is : {firstColor}</h2>
            <h2>Second Color is : {secondColor}</h2>
            <h2>third Color is : {thirdColor}</h2>
        </div>
    </>
    )
  }
}

export default ArrayDestructClass
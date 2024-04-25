import React from 'react'

function Greet(props) {
  return (
    <div>
      <p>*****Hello, This is my first React App using functional component</p>
      <h2>My name is {props.name} and my skill is {props.skills}</h2>
      {props.children}
    </div>
    
  )
}

export default Greet

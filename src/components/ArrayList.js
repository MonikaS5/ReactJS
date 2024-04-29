import React from 'react'

function ArrayList() {
    const name1= ["Ron", "John", "Bob"]
  return (
    <>
    <div>Array List Rendering</div>
    <h3>{name1[0]}</h3>
    <h3>{name1[1]}</h3>
    <h3>{name1[2]}</h3>
    </>
    
  )
}

export default ArrayList
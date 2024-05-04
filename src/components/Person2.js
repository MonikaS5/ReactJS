import React from 'react'

function Person2({person}) {
  return (
    
    <div>
        <hr/>
        <ul style={{listStyleType: 'none', color:"red", fontSize:"30px"}}>
          <li> Name : {person.name}</li>
          <li> Age : {person.age}</li>
          <li> Course Name : {person.courseName}</li>
        </ul>
        <hr/>
        </div>
  )
}

export default Person2
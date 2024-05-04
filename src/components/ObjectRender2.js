import React from 'react'
import Person from './Person'

function ObjectRender2() {
    const Students = [{
        id: 1,
        name: "John",
        age: 21,
        courseName: "MERN"
    },
    {
        id: 2,
        name: "Ron",
        age: 23,
        courseName: "MEAN"
    },
    {
        id: 2,
        name: "Bob",
        age: 21,
        courseName: "Full Stack"
    }
    ];
    const name1 =["Tia", "Meenu", "Chinu"];

     
    const studlist = Students.map(student=>
    <li key={student.id}>
        <p> <b>{student.name}</b> 
        <span>:  {student.courseName} </span></p>
    </li>)

    
    const nameList= name1.map((name, index)=>
                  <h2 key = {index}>{name}</h2> );

                         
                 
  return (
    <>
    <hr/>
    

    <ul style={{listStyleType:'none'}}>{studlist}</ul>
    <div>{nameList}</div>
    <div style={{color:"green"}}>{nameList[1]}</div>

    <p>This is from Person component</p>
    <Person />

    </>
    
  )
}

export default ObjectRender2
import React from 'react'

function ObjectRender2() {
    const person = [{
        id: 1,
        name: "John",
        age: 21,
        courseName: "MERN"
    },
    {
        id: 1,
        name: "Ron",
        age: 21,
        courseName: "MEAN"
    },
    {
        id: 1,
        name: "Bob",
        age: 21,
        courseName: "Full Stack"
    }
    ];
    const name1 =["Tia", "Meenu", "Chinu"];

    const personList= person.map(person=>(
        <ul style={{listStyleType:'none'}}>
            <li>Key : {person.id}</li>
            <li>name : {person.name}</li>
            <li>age : {person.age}</li>
            <li>Course name : {person.courseName}</li>
        </ul>
             
    ))
    const nameList= name1.map((name1)=>
                  <h2>Name = {name1}</h2>  );
  return (
    <>
    <hr/>
    <div>{personList}</div>
    <div>{nameList}</div>

    </>
    
  )
}

export default ObjectRender2
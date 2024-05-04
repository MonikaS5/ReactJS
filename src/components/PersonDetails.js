import React from 'react'
import Person2 from './Person2';

function PersonDetails() {

    const persondata = [{
        id: 1,
        name: "Ram",
        age: 21,
        courseName: "MERN"
    },
    {
        id: 2,
        name: "Sham",
        age: 23,
        courseName: "MEAN"
    },
    {
        id: 2,
        name : "Keshav",
        age: 21,
        courseName: "Full Stack"
    }
    ];

    const personlist = persondata.map(person=>
    <Person2 key={person.id} person={person}/>
        )    
  return (
    <div>{personlist}</div>

  )
}

export default PersonDetails
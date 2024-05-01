import React from 'react'

function Person() {

    const people = [{
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
        name: "Keshav",
        age: 21,
        courseName: "Full Stack"
    }
    ];

    const peoplelist = people.map(people=>
        <p key={people.id}>
            <p> <b>{people.name}</b> 
            <span>:  {people.courseName} </span></p>
        </p>)    
    
    // const peoplelist = people.map(person=><Person key={person.id} />)
  return (
    <div>Person list
        <p>{peoplelist}</p>
    </div>
  )
}

export default Person
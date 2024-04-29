import React from 'react'

function ObjectRender() {
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

    const personList = person.map(person => (
        <h3>My Name is <u style={{ color: 'green' }}>{person.name} </u>having id {person.id}.
            I am <u style={{ color: 'red' }}>{person.age}</u>.
            My course name is <u style={{ color: 'blue' }}>{person.courseName}. </u></h3>
    ))
    return (
        <> <hr />
            <div>{personList}</div>
        </>

    )
}

export default ObjectRender
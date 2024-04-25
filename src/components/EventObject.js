import React from 'react'

function EventObject() {

    const clickHandler=(a,b)=>{
        alert("This Event Name is : " + b.type)
    }
  return (
    <>
    <hr/>
    <div>
        <h2>Event Object = Name of Events</h2>
    </div>
    <button onClick={(Event)=>clickHandler("Hello", Event)}>Click Me</button>
    <button onMouseEnter={(Event)=>clickHandler("Hello", Event)}>Click Me</button>
    <button onMouseMove={(Event)=>clickHandler("Hello", Event)}>Click Me</button>
    <button onMouseUp={(Event)=>clickHandler("Hello", Event)}>Click Me</button>
    </>
    
  )
}

export default EventObject
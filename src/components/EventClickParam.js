import React from 'react'

function EventClickParam() {

    const clickHandler=(a)=>{
        alert(a);
    }
  return (
   <>
    <div>
        <h2>Passing an argument in Event</h2>

    </div>
    <button onClick={()=>clickHandler("Hello there!")}> Click Me 2</button>
   </>

  )
}

export default EventClickParam
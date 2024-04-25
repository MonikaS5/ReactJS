import React from 'react'

function EventClick() {

    function clickHandler(){
        console.log("User Clicked on the Button");
    }
  return (
    <>
        <div>
            <h2>Event onClick using functional Component</h2>
        </div>

        <button onClick={clickHandler}> Click Me</button>
</>
  )
}

export default EventClick
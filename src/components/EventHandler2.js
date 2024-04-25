import React from 'react'

function EventHandler2() {
    const shoot = (a) => {
        
        setTimeout(() => {
            alert(a);
        }, 3000);
      }
  return (
    <div>Event Handling
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    </div>
  )
}

export default EventHandler2
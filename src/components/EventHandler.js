import React from 'react'

function EventHandler() {
    const shoot = (a) => {
        alert(a);
      }
  return (
    <div>Event Handling
        <button onClick={() => shoot("Goal!")}>Take the shot!</button>
    </div>
  )
}

export default EventHandler
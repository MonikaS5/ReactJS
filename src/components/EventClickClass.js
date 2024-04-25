import React, { Component } from 'react'

 class EventClickClass extends Component {
     clickHandler(){
        console.log("User Clicked on the Button");
    }
  render() {
    return (
      <>
        <div>
            <h2>Event onClick using Class Component</h2>
        </div>
        <button onClick={this.clickHandler}>Click Me 1</button>
      </>
    )
  }
}

export default EventClickClass
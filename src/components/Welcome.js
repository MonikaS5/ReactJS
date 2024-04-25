import React, { Component } from 'react'

class Welcome extends Component {
  render() {
    return (
      <div>
        <h3>**** Hello this is {this.props.name} from {this.props.city}
        </h3>
        {this.props.children}
      </div>
    )
  }
}

export default Welcome
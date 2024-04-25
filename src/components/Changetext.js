import React, { Component } from 'react'

export class Changetext extends Component {
    constructor(props){
        super(props)
        this.state={
            msg: "Welcome To ReactJS"
        }
        this.click =this.click.bind(this)
    }
    click(){
        this.setState({
            msg:"Welcome to MERN"
        })
    }
  render() {
    return (
      <>
        <h1>{this.state.msg}</h1>
        <button onClick={this.click}>Change Text</button>

      </>
    )
  }
}

export default Changetext
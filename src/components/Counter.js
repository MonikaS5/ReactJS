import React, { Component } from 'react'

export class Counter extends Component {

    constructor(props){
        super(props)
        this.state={
            count: 0
        }
    }

    counterup(){
        this.setState({
            
            count: this.state.count+1
        })
        console.log(this.state.count+1);
    }

    counterdown(){
        this.setState({
            count: this.state.count-1
        })
        console.log(this.state.count-1);
    }

  render() {
    return (
      <>
      <h3>Counter : {this.state.count}</h3>
      <button onClick={()=>this.counterup()}> Increment</button>
      <button onClick={()=>this.counterdown()}> Decrement</button>
      </>
    )
  }
}

export default Counter
import React, { Component } from 'react'

class EventBinding extends Component {
    constructor(props) {
        super(props)

        this.state = {
            msg: "Hello"
        }

    }
    clickHandler() {
        this.setState({
            msg: "It's Me after Click"
        })

    }
    clickHandler2 = () => {
        this.setState({
            msg: "It's Me after Click 2"
        })

    }
    render() {
        return (
            <>
                <hr />
                <div>
                    <h1>Event Binding </h1>
                </div>
                <div>
                    <h3>{this.state.msg}</h3>
                </div>
                <button onClick={() => this.clickHandler()}>Click Me</button>

                <button onClick={this.clickHandler2}>Click Me 2</button>
            </>

        )
    }
}

export default EventBinding
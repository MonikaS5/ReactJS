import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {

        }
    }
    render() {
        return (
            <>
            <hr/>
                <div>ParentComponent</div>
                <div>
                    <h3>This is Child component</h3>
                    <ChildComponent />
                </div>
                
            </>

        )
    }
}

export default ParentComponent
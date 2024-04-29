import React, { Component } from 'react'
import ChildComponent from './ChildComponent'


export class ParentComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            parentName: "John"
        }
        this.parentOne=this.parentOne.bind(this)
    }

    parentOne(childData){
        alert(`Hello ${this.state.parentName}`);
        alert(`Hello ${this.state.parentName} from  ${childData}`);
    }
    render() {
        return (
            <>
            <hr/>
                <div>ParentComponent</div>
                <div>
                    <h3>This is Child component</h3>
                    <ChildComponent parenthandler={this.parentOne}/>

                </div>
                
            </>

        )
    }
}

export default ParentComponent
import React from 'react'

function ChildComponent(props) {
    return (
        <>
            <div>ChildComponent</div>
            <h2>Hello</h2>

            {/* <button onClick={props.parenthandler('Child')}>Click Me</button> */}
            <button onClick={props.parenthandler}>Click Me2</button>
        </>
    )
}

export default ChildComponent
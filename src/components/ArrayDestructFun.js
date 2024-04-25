import React from 'react'

function ArrayDestructFun() {

    const colors = ['red', 'green', 'blue'];
    const [firstColor, secondColor, thirdColor] = colors;
    return (
        <>
            <div>
                <h1>Array Destructuring using Functional component</h1>
            </div>
            <div>
                <h2>First Color is : {firstColor}</h2>
                <h2>Second Color is : {secondColor}</h2>
                <h2>third Color is : {thirdColor}</h2>
            </div>
        </>

    )
}

export default ArrayDestructFun
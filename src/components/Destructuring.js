import React from 'react'

const Destructuring = props => {
    // Destructuring 
    const { active, activeStatus } = props;
    return (
        <div>
            <hr />
            <div className="XYZ" style={{ color: "blue" }}>
                <h3> {active} </h3>
            </div>

            <div className="PQR" style={{ color: "greenyellow" }}>
                <h1>{activeStatus}</h1>
            </div>
            <hr />
        </div>
    )
}

export default Destructuring
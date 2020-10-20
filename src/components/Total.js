import React from 'react'

const Total = (props) => (
    <div>
        <h1>Total: ${Math.round((props.total + Number.EPSILON) * 100) / 100}</h1>
    </div>
)

export default Total
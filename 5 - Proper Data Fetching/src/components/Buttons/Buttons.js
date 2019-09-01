import React from 'react'
import func from 'prop-types'

const Buttons = ({ onDecrement, onIncrement }) => {
    return (
        <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
        </div>
    )
}

Buttons.propTypes = {
    onDecrement: func.isRequired,
    onIncrement: func.isRequired
}

export default Buttons

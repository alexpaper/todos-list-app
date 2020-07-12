import React from 'react'

export default function Add() {

    // Define Actions
    const ACTIONS = {
        INCREMENT: 'increment',
        DECREMENT: 'decrement',
        RESET: 'reset',
        PLUS_FIVE: 'plusfive'
    }

    // Reducer
    function reducer(count, action){
        switch(action.type){
           // Increment
            case ACTIONS.INCREMENT:
                return count + 1
            // Decrement
            case ACTIONS.DECREMENT:
            return count - 1
            // Reset
            case ACTIONS.RESET:
                return 0
            // +5
            case ACTIONS.PLUS_FIVE:
            return count + action.paylod.amount

            // Default
            default:
                return count
        }
    }

    // Use Reducer
    const [count, dispatch] = React.useReducer(reducer, 0)

    return (
        <div>
            <h1>Add</h1>
            <div>
            <div>{count}</div>
            <button
            onClick={()=> dispatch({type: ACTIONS.INCREMENT})}
            >+</button>
            <button
            onClick={()=> dispatch({type: ACTIONS.DECREMENT})}
            >-</button>
            <button
            onClick={()=> dispatch({type: ACTIONS.RESET})}
            >Reset</button>
            <button
            onClick={()=> dispatch({type: ACTIONS.PLUS_FIVE, paylod: {amount:5}})}
            >+5</button>
            </div>
        </div>
    )
}

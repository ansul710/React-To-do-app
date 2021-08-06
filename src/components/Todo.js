import React from 'react'

function Todo(props) {
    return (
        <div>
        <li >{props.todo}</li> 
        <button onClick={() => props.deleteHandler(props.index)}>X</button>
        </div>
    )
}

export default Todo

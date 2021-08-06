import React from 'react'
import Todo from './Todo'

function TodoList(props) {

    return (
        <div>
            {props.todos.map(
                (todo, index) => {
                  return <Todo todo={todo} index={index} deleteHandler={props.deleteHandler}/>
                }
            )}
        </div>
    )
}

export default TodoList

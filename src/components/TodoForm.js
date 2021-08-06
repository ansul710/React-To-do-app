import React, {useState} from 'react'


function TodoForm(props) {
    const [input, setInput] = useState('')


    const inputHandler = (e) => {
        let tempInput = input
        tempInput = e.target.value
        setInput(tempInput) 
    }


    return (
        <form onSubmit={(event) => {props.handle(event, input); setInput('')}}>
            <input type='text' placeholder="Add a Todo" onChange={inputHandler} value={input} autoFocus />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default TodoForm


import styles from './TodoForm.module.css'
import { useRef } from 'react'


const TodoForm = (props) => {
    const todoInputRef = useRef();


    const submitForm = (event) => {
        event.preventDefault();
        let newTodo = {
            todo: todoInputRef.current.value,
            id: Math.random()
        }
        props.onNewTodo(newTodo);
        todoInputRef.current.value = '';
    }

    return (
        <form className={styles.formStyle} onSubmit={submitForm}>
            <input type="text" ref={todoInputRef}></input>
            <button type="submit">Add</button>
        </form>
    )
}

export default TodoForm;
import styles from './TodoItem.module.css'



const TodoItem = (props) => {

    const onDeleteTodoHandler = () => {
        props.onDeleteTodo(props.id);
    }

    return (
        <li className={styles.todoItemStyle}>
            <p>{props.todo}</p>
            <div>
                <button>Change</button>
                <button onClick={onDeleteTodoHandler}>Delete</button>
            </div>
        </li>
    )
}

export default TodoItem;
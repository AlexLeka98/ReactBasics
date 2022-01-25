import styles from './TodoList.module.css'
import TodoItem from './TodoItem';


const TodoList = (props) => {
    return (
        <div className={styles.todoListContainer}>
            <ul className={styles.ulTodoListStyle}>
                {props.todos.map(todo => <TodoItem
                    key={todo.id}
                    todo={todo.todo}
                    id={todo.id}
                    onDeleteTodo={props.onDeleteTodo}
                />)}
            </ul>
        </div>
    )
}

export default TodoList;
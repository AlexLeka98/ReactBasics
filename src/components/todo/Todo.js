import styles from './Todo.module.css'
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { useState } from 'react';

const TODO = [
    {
        todo: 'Clean the plates',
        id: Math.random()
    },
    {
        todo: 'Make your bed',
        id: Math.random()
    },
    {
        todo: 'Brush your teeth',
        id: Math.random()
    }
]

const Todo = () => {

    const [todo, setTodo] = useState(TODO);

    const addNewTodoHandler = (newTodo) => {
        setTodo(oldTodo => [newTodo, ...oldTodo]);
    }

    const deleteTodoHanlder = (id) => {
        setTodo(oldTodo => {
            let newTodos = oldTodo;
            return newTodos.filter(todo => todo.id !== id);
        });
    }


    return (
        <div className={styles.todoContainer}>
            <TodoForm onNewTodo={addNewTodoHandler} />
            <TodoList todos={todo} onDeleteTodo={deleteTodoHanlder} />
        </div>
    )
}

export default Todo;
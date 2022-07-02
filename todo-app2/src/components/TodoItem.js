// import { useEffect } from 'react';
// import styles from './TodoItem.module.css';
import  './TodoItem.css';

function TodoItem({
    // id,
    // text,
    todo,
    onDelete,
    onClick,
}) {
    // console.log('Item rendered!');
    // const removeTaskHandler = () => console.log('Task removed!');

    // useEffect(() => {
    //     console.log(`TodoItem <${id}> Mounted/DA-Change`);

    //     // cleanUp function, containing cleanUp logic
    //     return () => {
    //         console.log(`TodoItem <${id}> Unmounted/CleanUp`)
    //     };
    // }, [id]);
    // when value passed to Dependency array, useEffect will only be triggered when changes occur to given value

    return (
        // <li onClick={() => onClick(todo.id)} className={styles['todo-item']}>
        // <li onClick={() => onClick(todo.id)} className={styles.todoItem}>
        <li onClick={() => onClick(todo.id)} className={todo.isDone ? 'todo-item-done' : ''}>
            Task - {todo.text}
            <button onClick={() => onDelete(todo.id)}>Task Completed</button>
            {/* <button onClick={onDelete}>Task Completed</button> */}
        </li>
        // <li>Task - {todo.text}</li>
    );
}

export default TodoItem;
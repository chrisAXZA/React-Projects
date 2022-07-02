// import { useEffect } from 'react';

import './TodoItem.css';
// import styles from './TodoItem.module.css';

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

    let listItemClasses = ['todo-item'];

    if (todo.isDone) {
        listItemClasses.push('todo-item-done');
    }

    return (
        // <li onClick={() => onClick(todo.id)} className={styles['todo-item']}>

        // <li onClick={() => onClick(todo.id)} className={styles.todoItem}>
        // <li onClick={() => onClick(todo.id)} className={todo.isDone ? 'todo-item-done' : 'todo-item'}>
        <li onClick={() => onClick(todo.id)} className={listItemClasses.join(' ')}>
            Task - {todo.text}
            <button onClick={(event) => onDelete(event, todo.id)}>Task Completed</button>
            {/* <button onClick={onDelete}>Task Completed</button> */}
        </li>
        // <li>Task - {todo.text}</li>
    );
}

export default TodoItem;
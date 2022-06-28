function TodoItem({
    id,
    text,
    onDelete,
}) {
    // console.log(text);

    // const removeTaskHandler = () => console.log('Task removed!');

    return (
        // <li>Task - {todo.text}</li>
        <li>
            Task - {text}
            <button onClick={() => onDelete(id)}>Task Completed</button>
            {/* <button onClick={onDelete}>Task Completed</button> */}
        </li>
    );
}

export default TodoItem;
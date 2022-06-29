import { useEffect } from 'react';

function TodoItem({
    id,
    text,
    onDelete,
}) {
    // console.log(text);
    // const removeTaskHandler = () => console.log('Task removed!');

    useEffect(() => {
        console.log(`TodoItem <${id}> Mounted`);

        // cleanUp function, containing cleanUp logic
        return () => {
            console.log(`TodoItem <${id}> Unmounted/CleanUp`)
        };
    }, []);

    return (
        <li>
            Task - {text}
            <button onClick={() => onDelete(id)}>Task Completed</button>
            {/* <button onClick={onDelete}>Task Completed</button> */}
        </li>
        // <li>Task - {todo.text}</li>
    );
}

export default TodoItem;
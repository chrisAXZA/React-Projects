import TodoItem from "./TodoItem.js";

function TodoList() {
    const todos = [
        { id: 1, text: 'Clean up the apartement' },
        { id: 2, text: 'Fix the heating' },
        { id: 3, text: 'Buy groceries' },
    ];

    // will render todoList item 
    return (
        <ul>
            {/* {todos.map(({ id, text }) => <li key={id}>{text}</li>)} */}
            {/* {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)} */}
            {todos.map((todo) => <TodoItem key={todo.id} text={todo.text} />)}
        </ul>
    );
}

export default TodoList;
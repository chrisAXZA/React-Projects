import { useState } from 'react';

import uniqid from 'uniqid';

import TodoItem from "./TodoItem.js";

function TodoList() {
    const todoList = [
        { id: 'kvsfmrop', text: 'Clean up the apartement', isDone: false },
        { id: 'kvsfm02j', text: 'Fix the heating', isDone: false },
        { id: 'kvsfm88p', text: 'Buy groceries', isDone: false },
    ];

    const [todos, setTodos] = useState(todoList);

    // console.log('render');

    // takes up function as first parameter and dependency-array as second parameter
    // Function will be executed depending on the conditions specified inside of the array
    // when empty function will be executed only once when given component is being mounted
    // useEffect(() => {
    //     console.log('>>> TodoList Mounted');
    // }, []);

    const todoAddBlurHandler = (event) => {
        if (!event.target.value) {
            return;
        }

        let todo = {
            id: uniqid(),
            // id: todos.length + 1,
            text: event.target.value,
            isDone: false,
        };

        // Setter not only takes up value, but also function
        // first variant in updating state
        // setTodos([
        //     ...todos,
        //     todo,
        // ]);

        // second variant with state which indicate that current state is being modified,
        // meaning current collection of todos that is being modified instead of taking collection
        // in useState declaration (which might not be up to date)
        setTodos((state) =>
            // reference to state is not changed, component will not be re-rendered       
            // {
            //     state.push(todo);
            //     console.log(state);
            //     return state;
            // }

            [
                ...state,
                todo,
            ]
        );

        event.target.value = '';
    };

    const deleteTodoItemHandler = (id) => {
        // console.log('Remove task with id >>> ', id);
        // setTodos((state) => [...state].filter((x) => x.id !== id));

        setTodos((state) => state.filter((x) => x.id !== id));
    };

    const toggleTodoItemClickHandler = (id) => {
        setTodos((oldState) => {
            let selectedTodo = oldState.find((t) => t.id === id);
            let toggledTodo = { ...selectedTodo, isDone: !selectedTodo.isDone };
            let restTodos = oldState.filter((t) => t.id !== id);

            return [...restTodos, toggledTodo];
        });
    };

    const toggleTodoItemClickHandler2 = (id) => {
        // console.log('OldTodos 1 >>> ', todos);

        let currentTodo;
        let currentIndex;

        for (let i = 0; i < todos.length; i++) {
            if (todos[i].id === id) {
                currentTodo = todos[i];
                currentIndex = i;
                break;
            }
        }

        let toggledTodo = { ...currentTodo, isDone: !currentTodo.isDone, };

        // splice() mutates the array, React states have to be immutable
        // setTodos((oldState) => [...oldState.splice(currentIndex, 1, toggledTodo)]);

        setTodos((oldState) => [
            ...oldState.slice(0, currentIndex),
            toggledTodo,
            ...oldState.slice(currentIndex + 1),
        ]);


        setTodos((oldState) => {
            // console.log(currentIndex);
            // console.log(toggledTodo);

            oldState.splice(currentIndex, 1, toggledTodo);

            // console.log('OldTodos 2 >>> ', oldState);

            const newState = [
                // ...oldState

                // oldState.slice(0, currentIndex),
                // toggledTodo,
                // oldState.slice(currentIndex + 1),
            ];

            // oldState.splice(currentIndex, 1, toggledTodo);

            // console.log('NewTodos >>> ', newState);
            return newState;
            // return oldState = newState;
        });
    };

    // will render todoList item => Race Condition Problem
    return (
        <>
            <label htmlFor="todo-name">Add Todo</label>
            <input id="todo-name" type="text" onBlur={todoAddBlurHandler} name="todo" />
            {/* <button onClick={todoAddClickHandler}>Add Todo</button> */}
            <ul>
                {todos.map((todo) =>
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        // id={todo.id}
                        // text={todo.text}
                        // isDone={todo.isDone}
                        onDelete={deleteTodoItemHandler}
                        onClick={toggleTodoItemClickHandler}
                    />
                )}

                {/* {todos.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={() => deleteTodoItemHandler(todo.id)} />)} */}
                {/* {todos.map((todo) => <TodoItem key={todo.id} id={todo.id} text={todo.text} onDelete={deleteTodoItemHandler.bind(null, todo.id)} />)} */}

                {/* <TodoItem key={1} text={'Pesho is back'} /> */}
                {/* {todos.map(({ id, text }) => <li key={id}>{text}</li>)} */}
                {/* {todos.map((todo) => <TodoItem key={todo.id} todo={todo} />)} */}
            </ul>
        </>
    );
}

export default TodoList;
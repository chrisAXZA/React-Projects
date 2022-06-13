import React, { useState } from 'react';

import TodoListItem from "./TodoListItem.js";

function TodoList() {
    let todoState = React.useState([
        'Initial Todo',
    ]);

    // todo = getter, setTodo = setter
    // let [todo, setTodo] = useState('Intial Todo');
    let [count, setCount] = useState(0);

    // let [todo, setTodo] = React.useState('Intial Todo');
    // let [todo, setTodo] = todoState;

    // let todoState = React.useState([
    //     'Clean room',
    //     'Go to the shopping mall',
    //     'Upgrade coding skills',
    //     'Cook a meal',
    // ]);

    // let todos = todoState[0];
    // let setTodos = todoState[1];

    // let firstTask = 'Clean room';
    // let firstColor = 'green';
    // let person = {
    //     name: 'Pesho',
    //     age: 32,
    // };

    console.log('render');

    return (
        <>
            <h2>Counter</h2>

            <ul>
                <TodoListItem>{count}</TodoListItem>

                {/* {todos.map(todo => <TodoListItem>{todo}</TodoListItem>)} */}

                {/* <TodoListItem>Clean room</TodoListItem> */}
                {/* <TodoListItem>Go to the shopping mall</TodoListItem> */}
                {/* <TodoListItem>Upgrade coding skills</TodoListItem> */}
                {/* <TodoListItem>Cook a meal</TodoListItem> */}

                {/* <TodoListItem color={'light' + firstColor}>{firstTask}</TodoListItem> */}
                {/* <TodoListItem color="red">Go to the shopping mall</TodoListItem> */}
                {/* <TodoListItem color="blue" person={person}>Upgrade coding skills</TodoListItem> */}
                {/* <TodoListItem color="black">Cook a meal</TodoListItem> */}

                {/* <TodoListItem><p>Clean room</p><p>Clean room2</p></TodoListItem> */}
                {/* <TodoListItem text="Clean room" > */}
                {/* <TodoListItem text="Go to the shopping mall" > */}
                {/* <TodoListItem text="Upgrade coding skills" > */}
                {/* <TodoListItem text="Cook a meal" > */}

                {/* React.createElement(TodoListItem, {text:"Cook a meal"}) */}
                {/* <li>Clean room</li>
                <li>Go to the shopping mall</li>
                <li>Upgrade coding skills</li>
                <li>Cook a meal</li> */}
            </ul>

            <button onClick={() => setCount(count += 1)}>Increase</button>
            <button onClick={() => setCount(count - 1)}>Decrease</button>
        </>
    );

    // React Fragment Demo
    // import {Fragment} from 'react';
    // return (
    //     <React.Fragment>
    //     <Fragment>
    //     <h2>Tasks</h2>
    //     <ul>
    //         <li>Clean room</li>
    //         <li>Go to the shopping mall</li>
    //         <li>Upgrade coding skills</li>
    //         <li>Cook a meal</li>
    //     </ul>
    //     <Fragment/>
    // );
}

export default TodoList;


// Class demo
// import React from 'react';

// class TodoList extends React.Component {
//     render() {
//         return (
//             <ul>
//                 <li>Clean room</li>
//                 <li>Go to the shopping mall</li>
//                 <li>Upgrade coding skills</li>
//                 <li>Cook a meal</li>
//             </ul>
//         );
//     }
// }

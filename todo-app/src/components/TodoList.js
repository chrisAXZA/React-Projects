import TodoListItem from "./TodoListItem.js";

function TodoList() {
    let firstTask = 'Clean room';

    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem color="green">{firstTask}</TodoListItem>
                <TodoListItem color="red">Go to the shopping mall</TodoListItem>
                <TodoListItem color="blue">Upgrade coding skills</TodoListItem>
                <TodoListItem color="black">Cook a meal</TodoListItem>

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

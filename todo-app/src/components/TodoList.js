import TodoListItem from "./TodoListItem.js";

function TodoList() {
    return (
        <>
            <h2>Tasks</h2>

            <ul>
                <TodoListItem text="Clean room"/>
                <TodoListItem text="Go to the shopping mall"/>
                <TodoListItem text="Upgrade coding skills"/>
                <TodoListItem text="Cook a meal"/>
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

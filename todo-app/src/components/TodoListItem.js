const TodoListItem = (props) => {
    // console.log(props);
    // return <li>{props.text}</li>;

    // if (props.person) {
    //     console.log(props.person);
    // }

    // return <li style={{ color: props.color }}>{props.children} - {props.person?.name}</li>;

    // props.children => count


    // Conditional rendering if-else operators
    let color = 'red';

    if (props.children > 0) {
        color = 'green';
        // return <li style={{ color: 'green' }}>{props.children}</li>;
    } else if (props.children === 0) {
        color = 'black';
    }
    // else {
    //     return <li style={{ color: 'red' }}>{props.children}</li>;
    // }

    return <li style={{ color }}>{props.children}</li>;
    // return <li>{props.children}</li>;
}

export default TodoListItem;
const TodoListItem = (props) => {
    // console.log(props);
    // return <li>{props.text}</li>;

    // if (props.person) {
    //     console.log(props.person);
    // }

    // return <li style={{ color: props.color }}>{props.children} - {props.person?.name}</li>;

    return <li>{props.children}</li>;
}

export default TodoListItem;
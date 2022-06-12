const TodoListItem = (props) => {
    // console.log(props);
    // return <li>{props.text}</li>;
    return <li style={{ color: props.color }}>{props.children}</li>;
}

export default TodoListItem;
const TodoListItem = (props) => {
    // console.log(props);
    // return <li>{props.text}</li>;
    return <li>{props.children}</li>;
}

export default TodoListItem;
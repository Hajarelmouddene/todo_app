export default function Todo(props) {
    return (
        <li className="todo-container"> 
            <div className="todo-outer-circle" onClick={() => props.toggleTodoCompleted(props.id)}>
                <div className={props.completed ? "todo-circle-completed" : "todo-inner-circle"}>
                </div>
            </div>
            <div className={props.completed ? "todo-text-completed" : "todo-text"}>
                {props.name}
            </div>
            <button type="button" className="todo-delete" onClick={() => props.deleteTodo(props.id)}>   
            </button>
        </li>
    );
}
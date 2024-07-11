const TodoItem = ({id, completed, title, key, toggleTodo, deleteTodo}) => {
    return (
        <li className='tasks' key={key}>
            <input type="checkbox" checked={completed} 
                onChange={e => toggleTodo(id, e.target.checked)}
            />
            <label>
                {title}
            </label>
            <button className='deleteButton' onClick={() => deleteTodo(id)}>Delete</button>
        </li>
    );
}

export default TodoItem;
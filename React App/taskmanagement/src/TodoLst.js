import TodoTask from './TodoTask'
function TodoList(props)
{
    return(
        <div>
            {
                props.todoList.map(todo => {
                    return <TodoTask todo = {todo} handleToggle = {props.handleToggle} / >
                })
            }
            
        </div>
    )
}

export default TodoList;
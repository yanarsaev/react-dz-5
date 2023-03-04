import remove from '../images/remove.png'

function ToDo({todo, removeTask, handlerToggle}){
    return(
        <div key={todo.id} className="item-todo">
            <div className={todo.complete ? "item=txt strike" : "item-text"}
                onClick={() => handlerToggle(todo.id)}
            >
                {todo.task}
            </div>
            <div onClick={() => removeTask(todo.id)}>
                <img src={remove} alt="" />
            </div>
        </div>
    )
}

export default ToDo;